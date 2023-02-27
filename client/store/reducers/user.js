import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,

  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,

  me: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //signup
    signUpRequest(state, action) {
      state.signUpLoading = true;
      state.signUpError = null;
      state.signUpDone = false;
    },
    signUpSuccess(state, action) {
      state.signUpLoading = false;
      state.signUpDone = true;
    },
    signUpFailure(state, action) {
      state.signUpLoading = false;
      state.signUpError = action.payload.error;
    },
    signUpReset(state, action) {
      state.signUpDone = false;
    },

    //login
    logInRequest(state, action) {
      state.logInLoading = true;
      state.logInError = null;
      state.logInDone = false;
    },
    logInSuccess(state, action) {
      state.logInLoading = false;
      state.me = action.payload.data;
      state.logInDone = true;
    },
    logInFailure(state, action) {
      state.logInLoading = false;
      state.logInError = action.payload.error;
    },
    logInReset(state, action) {
      state.logInDone = false;
      state.logInLoading = false;
      state.logInError = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
