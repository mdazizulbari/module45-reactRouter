import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetailsOnPage from "./UserDetailsOnPage";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);
  const location=useLocation()
  console.log(location)
  
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());

  if(visitHome){
    return <Navigate to="/"></Navigate>
  }

  return (
    <div className="p-5 mt-4 rounded-2xl border-green-600 border">
      <h4>{name}</h4>
      <p>Email:{email}</p>
      <p className="mb-2">Phone: {phone}</p>
      <Link className="px-3 py-1 rounded-full bg-green-200" to={`/users/${id}`}>
        Show Details
      </Link>
      <button className="btn btn-success rounded-full" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetailsOnPage userPromise={userPromise}></UserDetailsOnPage>
        </Suspense>
      )}
      <button className="btn btn-success rounded-full" onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
