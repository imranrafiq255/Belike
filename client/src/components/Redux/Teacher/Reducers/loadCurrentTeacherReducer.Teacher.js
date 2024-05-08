import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  isLoading: false,
  currentTeacherData: null,
  error: null,
};

const loadCurrentTeacherReducer = createReducer(intialState, (builder) => {
  builder.addCase("LoadTeacherRequest", (state) => {
    state.isLoading = true;
  });
  builder.addCase("LoadTeacherRequestSuccess", (state, action) => {
    state.isLoading = false;
    state.currentTeacherData = action.payload;
  });
  builder.addCase("LoadTeacherRequestFailure", (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
});

export default loadCurrentTeacherReducer;
