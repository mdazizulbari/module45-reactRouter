import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { name, email, phone, id } = user;

  return (
    <div className="p-5 mt-4 rounded-2xl border-green-600 border">
      <h4>{name}</h4>
      <p>Email:{email}</p>
      <p className="mb-2">Phone: {phone}</p>
      <Link className="px-3 py-1 rounded-full bg-green-200" to={`/users/${id}`}>
        Show Details
      </Link>
    </div>
  );
};

export default User;
