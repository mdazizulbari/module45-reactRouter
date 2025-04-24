import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { website } = user;

  const { userId } = useParams();
  console.log(userId);
  // const params=useParams()
  //   console.log(params.userId)

  return (
    <div className="">
      <h4 className="text-3xl mb-5">User Detailes</h4>
      <h5>Name: {user.name}</h5>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
