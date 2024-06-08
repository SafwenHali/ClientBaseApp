import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  role: "GUEST",
  user: null,
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.user.role;
    },
    logout: (state) => {
      state.user = {};
      state.role = "GUEST";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
