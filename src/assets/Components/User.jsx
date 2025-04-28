import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetailsOnPage from "./UserDetailsOnPage";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  const [showInfo, setShowInfo] = useState(false);
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());

  return (
    <div className="p-5 mt-4 rounded-2xl border-green-600 border">
      <h4>{name}</h4>
      <p>Email:{email}</p>
      <p className="mb-2">Phone: {phone}</p>
      <Link className="px-3 py-1 rounded-full bg-green-200" to={`/users/${id}`}>
        Show Details
      </Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetailsOnPage userPromise={userPromise}></UserDetailsOnPage>
        </Suspense>
      )}
    </div>
  );
};

export default User;
