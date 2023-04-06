import React, { useState, useContext } from "react";
import { Box, TextareaAutosize, Button, styled } from "@mui/material";

import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api.js";

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
  const { account } = useContext(DataContext);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment =async () => {
    let response = await API.newComment(comment);
    if (response.isSuccess) {
      setComment(InitialValues);
    }
  }

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
        <Switch variant="contained" onClick={addComment}>Comment</Switch>
      </Container>
      <Box>
      </Box>
    </Box>
  );
};

export default Comments;
