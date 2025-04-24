import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate(`/posts/${id}`)
  }

  return (
    <div className="border border-green-600 rounded-2xl mt-5 p-5 space-y-2">
      <h4 className="w-2xs">{title}</h4>
      <Link to={`/posts/${id}`}>
        <button className="px-4 py-1 bg-green-200 rounded-full">
          Show Details
        </button>
      </Link>
      <button onClick={handleNavigate}>Details of: {id}</button>
    </div>
  );
};

export default Post;
