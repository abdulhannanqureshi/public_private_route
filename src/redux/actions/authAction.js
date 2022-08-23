import { createAction } from 'redux-actions';

export const SignUpActionTypes = {
  SIGN_UP_REQUEST: "Request for sign up done",
  SIGN_UP_SUCCESS: "Sign up done succesfully",
  SIGN_UP_FAILED: "Sign up process failed",
};

export const SignUpRequest = createAction(SignUpActionTypes.SIGN_UP_REQUEST);
export const SignUpSuccess = createAction(SignUpActionTypes.SIGN_UP_SUCCESS);
export const SignUPFailed = createAction(SignUpActionTypes.SIGN_UP_FAILED);


