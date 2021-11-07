import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: 1,
      name: "foo",
      email: "null",
      password: "null",
      isLoggedIn: false,
      isAdmin: false,
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.user.isLoggedIn = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.user.isAdmin = action.payload;
    },
    setIsLoading: (state, action) => {
      state.user.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.user.error = action.payload;
    },
  },
});

export const { setUser, setIsLoggedIn, setIsAdmin, setIsLoading, setError } =
  userSlice.actions;

export default userSlice.reducer;
