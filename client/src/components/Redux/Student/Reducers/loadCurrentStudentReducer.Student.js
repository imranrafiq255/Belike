import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  isLoading: false,
  currentStudentData: null,
  error: null,
};

const loadCurrentStudentReducer = createReducer(intialState, (builder) => {
  builder.addCase("LoadStudentRequest", (state) => {
    state.isLoading = true;
  });
  builder.addCase("LoadStudentRequestSuccess", (state, action) => {
    state.isLoading = false;
    state.currentStudentData = action.payload;
  });
  builder.addCase("LoadStudentRequestFailure", (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
});

export default loadCurrentStudentReducer;
