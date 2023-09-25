import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    type:null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.Email;
      state.type=action.payload.type;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserType = (state) => state.user.type;
export default userSlice.reducer;