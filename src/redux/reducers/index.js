import { combineReducers } from "redux";
import {homeRed} from './homeRed'
import { SignUpRed } from "./SignUpRed";
export const RootReducer = combineReducers({
  homeRed,
  SignUpRed
  });