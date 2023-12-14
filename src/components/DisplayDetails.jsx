import React from "react";
import { useSelector } from "react-redux";

const DisplayDetails = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <div>
      <h1>DisplayDetails</h1>
      <h2>{userName ? userName : "Username Not Found"}</h2>
      <br />
      <hr />
    </div>
  );
};

export default DisplayDetails;
