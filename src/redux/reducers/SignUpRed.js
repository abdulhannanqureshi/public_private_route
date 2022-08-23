import { handleActions } from 'redux-actions';
import { SignUpActionTypes ,SignUpSuccess , SignUPFailed} from '../actions';
import { SignUpState } from '../states';

export const SignUpRed = handleActions(
  {
    [SignUpActionTypes.SignUpSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
  }),
  [SignUpActionTypes.SignUPFailed]: (state, { payload }) => ({
    ...state,
    isLoading: false,
  }),
  
},
  SignUpState
);