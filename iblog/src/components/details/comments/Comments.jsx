import React, { useState, useContext, useEffect } from "react";
import { Box, TextareaAutosize, Button, styled } from "@mui/material";

import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api.js";
import Comment from "./Comment";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px !important;
  width: 100%;
  margin: 0 20px;
`;

const Switch = styled(Button)`
  height: 45px;
`;

const InitialValues = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

const Comments = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";
  const [comment, setComment] = useState(InitialValues);
  const [comments, setComments] = useState([]);
  const { account } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getComment(post._id);
      if (response.isSuccess) {
        setComments(response.data);
      }
    };
    fetchData();
  }, [post._id]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment = async () => {
    let response = await API.newComment(comment);
    if (response.isSuccess) {
      setComment(InitialValues);
    }
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="user" />
        <StyledTextArea
          minRows={5}
          placeholder="Comment your views..."
          value={comment.comments}
          onChange={handleChange}
        />
        <Switch variant="contained" onClick={addComment}>
          Comment
        </Switch>
      </Container>
      <Box>
        {comments?.length > 0 &&
          comments.map((comment) => <Comment key={comment.comments} comment={comment} />)}
      </Box>
    </Box>
  );
};

export default Comments;
