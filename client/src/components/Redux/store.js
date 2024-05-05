import { configureStore } from "@reduxjs/toolkit";
import loadCurrentAdminReducer from "./Admin/Reducers/loadCurrentAdminReducer.Admin";

const store = configureStore({
  reducer: {
    currentAdminData: loadCurrentAdminReducer,
  },
});

export default store;
