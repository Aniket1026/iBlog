import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography,styled } from '@mui/material'

import { API } from '../../service/api'

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
`;

const DetailsView = () => {
  const [post,setPost] = useState({});
  const { id } = useParams();
  // const url= ``
  useEffect(() => {
    const fetchData =async () => {
      let response = await API.getPostById(id)
      if (response.isSuccess) {
        setPost(response.data)
      }
    }
    fetchData()
  },[])
  return (
    <Container>
      <Image src={post.picture} alt='blog' />
      <Heading>{post.title}</Heading>
      <Box>
        <Typography>{post.username}</Typography>
        <Typography>{new Date(post.createdDate).toDateString()}</Typography>
      </Box>
    </Container>
  )
}

export default DetailsView