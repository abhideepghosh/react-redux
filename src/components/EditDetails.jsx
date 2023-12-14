import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName as setFullName } from "../features/userSlice/userSlice";

const EditDetails = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const submitDetails = () => {
    dispatch(setFullName(name));
  };

  return (
    <div>
      <h1>Edit Details</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="text"
        placeholder="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={submitDetails}>Submit Details</button>
    </div>
  );
};

export default EditDetails;
