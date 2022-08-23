import { createAction } from 'redux-actions';

export const HomeActionTypes = {
  HOME_REQUEST: 'Request for home done',
  HOME_SUCCESS: 'Home fetched Succesfully',
  HOME_FAILED: 'Home fetched Failed',
};

export const homeRequest = createAction(HomeActionTypes.HOME_REQUEST);
export const homeSuccess = createAction(HomeActionTypes.HOME_SUCCESS);
export const homeFailed = createAction(HomeActionTypes.HOME_FAILED);


