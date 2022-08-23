import { createLogic } from "redux-logic";
import { push } from "react-router-redux";
import { SignUpActionTypes, SignUPFailed, SignUpRequest, SignUpSuccess } from "../actions/authAction";
import Axios from 'axios'
import { Toaster } from "../../helper/react-toast";
import { redirectTo } from "../actions";

const SignUpLogic = createLogic({
    type: SignUpActionTypes.SIGN_UP_REQUEST,
    async process(data, dispatch, done) {
        const { action } = data;
        let apiResponse = await Axios.post('http://localhost:8080/auth/register',
            action.payload)
            .then((response) => {
                dispatch(redirectTo({path:"/login"}));
                dispatch(SignUpSuccess());
                Toaster(
                    {
                        type: "success",
                        text: response.data.message
                    }
                )
                done();
            }
            ).catch((error) => {
                dispatch(SignUPFailed);
                Toaster(
                    {
                        type: "error",
                        text: error.response.data.message
                    }
                )
            }
            )
    },
});


export const SignUpLogics = [SignUpLogic];