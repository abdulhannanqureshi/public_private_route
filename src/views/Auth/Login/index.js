import React, { useEffect, useState } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { LoginSchema } from "../../../validators";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import SocialLinkesIcons from '../../../components/socialLinkes.js/socialIcons';
import InputForms from '../../../common/inputForm';
import { LoginRequest } from '../../../redux/actions';
import { useSelector, useDispatch } from "react-redux";

const Login = () => {

    ///for histoty push
    const history = useHistory();
    const dispatch = useDispatch()
    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    const handleError = ()=>
    {
        const errors = validate(formState.values, LoginSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }

    ///Handle change for storing input values to state.
    const handleChange = (event) => {
      event.persist();
      setFormState((formState) => ({
        ...formState,
        values: {
          ...formState.values,
          [event.target.name]:
            event.target.type === "checkbox"
              ? event.target.checked
              : event.target.value,
        },
        errors: {
          ...formState.errors,
          [event.target.name]: false,
        },
        touched: {
          ...formState.touched,
          [event.target.name]: true,
        },
      }));
    };

    ///Submiting values to api.

    const handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = formState.values;
      handleError();
      if (formState.isValid) {
        const login = JSON.parse(localStorage.getItem("registeredUsers"));
        let filterLogin = false;
        if (login) {
          filterLogin = login.map((e) => {
            if (e.email === email && e.password === password) {
              return true;
            } else {
              return false;
            }
          });
        }
        if (filterLogin) {
          let token = Math.random().toString(36).substr(2);
          localStorage.setItem("token", JSON.stringify(token));
          Toaster({
            type: "success",
            text: "You have Login successfully.",
          });
          dispatch(LoginRequest());
          history.push("/dashboard");
        } else {
          Toaster({
            type: "error",
            text: "invalid Email or Password.",
          });
        }
      }
      setFormState((formState) => ({
        ...formState,
        touched: {
          ...formState.touched,
          ...formState.errors,
        },
      }));
    };

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

    const hasError = (field) =>
      formState.touched[field] && formState.errors[field] ? true : false;

    return (
      <>
        <main className='bg-gray-100'>
          <div className='auth-banner relative flex items-center'>
            <div className='container mx-auto px-4 pt-8 relative'>
              <div className='login-box shadow-lg'>
                <div className='grid grid-cols-3 items-center my-10'>
                  <div className='text-center left text-white p-6 '>
                    <h1 className='font-bold text-3xl mb-6'>Hello, Friend!</h1>
                    <p className='text-white'>
                      Enter your personal details and start journey with us
                    </p>
                    <Link
                      to='sign-up'
                      className='block py-2 px-6 rounded-full signin-btn m-auto mt-6 font-medium'
                    >
                      Sign Up
                    </Link>
                  </div>
                  <div className='col-span-2 right bg-white p-8'>
                    <div className='login-signup-box'>
                      <h1 className='font-bold text-3xl mb-6 text-center'>
                        Sign in to Xero Point
                      </h1>
                      <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                          <InputForms
                            type='email'
                            name='email'
                            value={formState.values.email || ""}
                            iconClassName={"fas fa-envelope"}
                            errorMessage={
                              hasError("email")
                                ? formState.errors.email[0]
                                : null
                            }
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder='Email'
                          />
                        </div>
                        <div className='mb-3'>
                          <InputForms
                            type={passwordShown ? "text" : "password"}
                            name='password'
                            value={formState.values.password || ""}
                            iconClassName={
                              passwordShown ? "fas fa-eye" : "fas fa-eye-slash"
                            }
                            onClick={togglePassword}
                            errorMessage={
                              hasError("password")
                                ? formState.errors.password[0]
                                : null
                            }
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder='Password'
                          />
                        </div>
                        <div className='flex items-center justify-between mt-6'>
                          <div className='text-center'>
                            <button
                              type='submit'
                              className='bg-theme-color hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full'
                            >
                              Login
                            </button>
                          </div>
                          <div className='text-center'>
                            <Link
                              to='forgot-password'
                              className='forgot-password-link font-medium'
                            >
                              Forgot your Password?
                            </Link>
                          </div>
                        </div>
                      </form>
                      <SocialLinkesIcons />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position='right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
        </main>
      </>
    );
}

export default Login;