import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/api";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    const res = Api.loginOrRegister("login", { email, password });

    return res;
  }
);

const initialState = {
  fullName: "",
  profileImg: "",
  coins: null,
  xp: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.fullName = "";
      state.profileImg = "";
      state.coins = null;
      state.xp = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        // on login success
        if (!action.payload.message) {
          state.fullName = action.payload.fullName;
          state.profileImg = action.payload.profileImg;
          state.coins = action.payload.coins;
          state.xp = action.payload.xp;
          state.isLoggedIn = true;
          state.loading = false;
          state.error = null;
          return;
        }

        // on login fail
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload.message;
      })
      .addCase(signIn.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
