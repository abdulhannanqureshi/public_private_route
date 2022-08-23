import { handleActions } from 'redux-actions';
import { HomeState } from '../states';
import {HomeActionTypes} from '../actions'

export const homeRed = handleActions(
  {
    [HomeActionTypes.HOME_REQUEST]: (state, { payload }) => ({
    ...state,
    isLoading: true,
  }),
},
  HomeState
);