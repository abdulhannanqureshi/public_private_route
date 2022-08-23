import { createLogic } from "redux-logic";
import { push } from "react-router-redux";
import { LoginActionTypes, LoginFailed, LOGIN_REQUEST, LoginSuccess } from "../actions";
import Axios from 'axios'
import { Toaster } from "../../helper/react-toast";

const LoginLogic = createLogic({
    type: LoginActionTypes.LOGIN_REQUEST,
    async process(data, dispatch, done) {
      // const { action } = data;
      // let apiResponse = await Axios.post('http://localhost:8080/auth/signin',
      //     action.payload)
      //     .then((response) => {
      //         dispatch(LoginSuccess());
      //         Toaster(
      //             {
      //                 type: "success",
      //                 text: response.data.message
      //             }
      //         )
      //         const token = response.data.token;
      //         localStorage.setItem("token",token)
      //         dispatch(push("/dashboard"));
      //         done();
      //     }
      //     ).catch((error) => {
      //         dispatch(LoginFailed());
      //         Toaster(
      //             {
      //                 type: "error",
      //                 text: error.response.data.message
      //             }
      //         )
      //     }
      //     )
    },
});


export const LoginLogics = [
    LoginLogic
];