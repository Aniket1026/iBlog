import React from 'react'

import {Box,Typography} from '@mui/material'

const Post = ({Posts}) => {
  return (
      <Box>
      <img src={Posts.picture} alt ='blog'/>
      <Typography>{Posts.categories}</Typography>
      <Typography>{Posts.title}</Typography>
      <Typography>{Posts.username}</Typography>
      <Typography>{Posts.description}</Typography>
    </Box>
  );
}

export default Post