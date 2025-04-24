import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts)

  return (
    <div>
      <h4 className="text-3xl">This are posts: {posts.length}</h4>
      <div className="">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
        </div>
    </div>
  );
};

export default Posts;
