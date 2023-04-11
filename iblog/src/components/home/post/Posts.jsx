import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";

import { API } from "../../../service/api.js";
import Post from "./Post.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchdata = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchdata();
  }, [category]);

  return (
    <>
      {posts && posts.length > 0 ? (
        <Grid container>
          {posts.map((post) => (
            <Grid item lg={3} sm={4} xs={12} key={post.title}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>No data available to display</div>
      )}
    </>
  );
};

export default Posts;
