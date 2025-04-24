import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData()

  console.log(post)
  const navigate = useNavigate;

  return (
    <div className="w-2xs space-y-5">
      <h2 className="text-2xl">{post.title}</h2>
      <h2 className="text-xl">Description👇</h2>
      <p className="">{post.body}</p>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
