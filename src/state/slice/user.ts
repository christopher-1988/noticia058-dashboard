import { createSlice } from "@reduxjs/toolkit";
import { UserSession } from "@src/models";
import {
  clearLocalStorage,
  persistLocalStorage,
  getLocalStorage,
} from "@src/helpers/helpers";

export const USER_KEY = "user-crm";

export const initial: UserSession = {
  id: 0,
  name: "",
  email: "",
  token: "",
  active: false,
  role: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: getLocalStorage(USER_KEY) ? getLocalStorage(USER_KEY) : initial,
  reducers: {
    createUser: (state, action) => {
      if (action.payload.token) {
        localStorage.setItem(USER_KEY, JSON.stringify(action.payload.token));
      }

      persistLocalStorage<UserSession>(USER_KEY, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserSession>(USER_KEY, result);
      return result;
    },
    reset: () => {
      clearLocalStorage(USER_KEY);
      return initial;
    },
  },
});

export const { createUser, updateUser, reset } = userSlice.actions;
export default userSlice.reducer;
