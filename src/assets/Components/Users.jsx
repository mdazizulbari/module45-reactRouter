import React from "react";
import { useLoaderData } from "react-router";
import User from "./User"

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="text-3xl">
      <h4>This is users page</h4>
      <div className="text-lg">
        {users.map((user, id) => (
          <User key={id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
