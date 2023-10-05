import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/api";

export const signUp = createAsyncThunk(
  "register/signUp",
  async ({ fullName, email, password }) => {
    const res = await Api.loginOrRegister("register", {
      fullName,
      email,
      password,
    });

    return res;
  }
);

const initialState = {
  success: false,
  isLoading: false,
  error: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    finishRegister: (state, action) => {
      state.success = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        if (action.payload === "user registered succesfully!") {
          state.isLoading = false;
          state.success = true;
          state.error = null;
          return;
        }

        state.error = action.payload.message;
        state.isLoading = false;
        state.success = false;
      })
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { finishRegister } = registerSlice.actions;
export default registerSlice.reducer;
