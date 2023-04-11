import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Star = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 90%;
  min-height: 15%;
`;

const StarIcon = ({ post }) => {
  return (
    <Star>
      <Link
        to={`/details/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button variant="contained">Read</Button>
      </Link>
      <StarOutlineIcon />
    </Star>
  );
};

export default StarIcon;
