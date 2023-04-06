import React from 'react'
import { Typography, Box, styled } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { API } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
  margin-top: 30px;
  background: #f5f5f5;
  padding: 10px;
`;

const Container = styled(Box)`
  display: flex;
  margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
  font-size: 14px;
  color: #878787;
`;

const Comment = ({comment}) => {
  return (
    <Component>
      <Container>
        <Name>{comment.name}</Name>
      </Container>
      <Typography>{comment.comments}</Typography>
    </Component>
  );
}

export default Comment