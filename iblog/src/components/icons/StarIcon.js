import React from 'react'
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { styled } from '@mui/material';

const Star = styled('div')`
 display:flex;
 flex-direction: row;
 justify-content:flex-end;
 min-width:90%;
`
 
 const StarIcon = () => {
   return (
     <Star>
       <StarOutlineIcon />
     </Star>
   )
 }
 
 export default StarIcon