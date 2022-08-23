import { createAction } from 'redux-actions';

export const LoginActionTypes = {
  LOGIN_REQUEST: 'Request for login done',
  LOGIN_SUCCESS: 'Login done succesfully',
  LOGIN_FAILED: 'Login process failed',
};

export const LoginRequest = createAction(LoginActionTypes.LOGIN_REQUEST);
export const LoginSuccess = createAction(LoginActionTypes.LOGIN_SUCCESS);
export const LoginFailed = createAction(LoginActionTypes.LOGIN_FAILED);


