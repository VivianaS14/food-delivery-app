import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

// se establece el estado inicial
const initialState = [];

//crear el estado de los usuarios y sus funciones
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: async (state, action) => {
      state.push(action.payload);
      const data = await addDoc(collection(db, "usuarios"), action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
