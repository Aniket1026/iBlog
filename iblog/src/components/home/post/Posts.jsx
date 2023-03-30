import React, { useState, useEffect } from 'react'

import { API } from '../../../service/api.js'
import Post from './Post.jsx'


const Posts = () => {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        const fetchdata =async () => {
            let response = await API.getAllPosts
            if (response.isSuccess) {
                setPosts(response.data)
            }
        }
        fetchdata()
    }, [])
    

  return (
    <>
      {Posts && Posts.length > 0 ? Posts.map(post => (
        <Post Posts={Posts} />   
      )): <div>No data available to display</div>}      
    </>
  )
}

export default Posts