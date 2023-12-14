import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  age: "",
  gender: "",
  weight: "",
  height: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhoto(state, action) {
      state.photo = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setWeight(state, action) {
      state.weight = action.payload;
    },
    setHeight(state, action) {
      state.height = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhoto,
  setAge,
  setGender,
  setWeight,
  setHeight,
} = userSlice.actions;

export default userSlice.reducer;
