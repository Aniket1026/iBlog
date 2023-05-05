import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Skeleton } from "@mui/material";

import { API } from "../../../service/api.js";
import Post from "./Post.jsx";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        setPosts(response.data);
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Grid container padding='10px' >
          {posts.map((post) => (
            <Grid item lg={3} sm={4} xs={12} key={post.title}>
              <Skeleton
                variant="rounded"
                width={200}
                height={350}
                animation="pulse"
              />
            </Grid>
          ))}
        </Grid> // show the Skeleton components while data is being fetched
      ) : (
        <Grid container>
          {posts.map((post) => (
            <Grid item lg={3} sm={4} xs={12} key={post.title}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
