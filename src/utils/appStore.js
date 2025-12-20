import { ConfigureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = ConfigureStore({
  reducer: {
    user: userReducer,
  },
}); 

export default appStore;