import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { SignupSchema } from "../../../validators";
import { Toaster } from '../../../helper/react-toast';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import InputForms from '../../../common/inputForm'
import SocialLinkesIcons from '../../../components/socialLinkes.js/socialIcons';
import { SignUpRequest } from '../../../redux/actions';
const Signup = () => {

    ///for histoty push
    const history = useHistory();
    const dispatch = useDispatch();
    const path = history.location.pathname
    useEffect(() => {
        return history.listen((location) => { 
           console.log(`You changed the page to: ${location.pathname}`) 
        }) 
     },[path])
    
    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });
   
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
            errors:
            {
                ...formState.errors,
                [event.target.name]:false
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    ////handling error on blur 
    const handleError = ()=>
    {
        
        const errors = validate(formState.values, SignupSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }

    ///Submiting values to api.

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleError();
        if (formState.isValid) {
            const { email } = formState.values;
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            if (registeredUsers) {
                // dispatch(SignUpRequest(formState.values));    Api is made and integration is done.
                const result = registeredUsers.map(e => e.email);
                const foundEmail = result.includes(email)

                if (foundEmail) {
                    Toaster({
                        type: "error",
                        text: "You have already Registerd."
                    })
                }
                else {
                    Toaster({
                        type: "success",
                        text: "You have successfully registered."
                    })
                    localStorage.removeItem("registeredUsers");
                    let tempArray = [];
                    tempArray.push(formState.values);
                    localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
                    history.push('/login')
                }
            } else {
                
                let tempArray = [];

                tempArray.push(formState.values);
                localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
               
                {
                    Toaster({
                        type: "success",
                        text: "You have successfully registered."
                    })
                }

                history.push('/login')
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


    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        };

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
        };

    return (
        <>
            <main className='bg-gray-100'>
                <div className='auth-banner relative flex items-center'>
                    <div className='container mx-auto px-4 pt-8 relative'>
                        <div className='login-box shadow-lg'>
                            <div className='grid grid-cols-3 items-center my-10'>
                                <div className='text-center left text-white p-6'>
                                    <h1 className='font-bold text-3xl mb-6'>Welcome Back!</h1>
                                    <p className='text-white'>To keep connected with us please login with your personal info</p>
                                    <Link to='login' className="block py-2 px-6 rounded-full signin-btn m-auto mt-6 font-medium">Login</Link>
                                </div>
                                <div className='col-span-2 right bg-white p-6'>
                                    <div className='login-signup-box'>
                                        <h1 className='font-bold text-3xl mb-6 text-center'>Create Account</h1>
                                        <form onSubmit={handleSubmit}>
                                            <div className='grid grid-cols-2 gap-4'>
                                                <div className='mb-3'>
                                                    <InputForms
                                                        type='text'
                                                        name="first_name"
                                                        value={formState.values.first_name || ""}
                                                        iconClassName={"fas fa-user"}
                                                        errorMessage={hasError("first_name") ?
                                                            formState.errors.first_name[0] : null}
                                                        onChange={handleChange}
                                                        onBlur={handleError}
                                                        placeholder="First Name"
                                                    />
                                                </div>

                                                <div className='mb-3'>
                                                    <InputForms
                                                        type='text'
                                                        name="last_name"
                                                        value={formState.values.last_name || ""}
                                                        iconClassName={"fas fa-user"}
                                                        errorMessage={hasError("last_name") ?
                                                            formState.errors.last_name[0] : null}
                                                        onChange={handleChange}
                                                        onBlur={handleError}
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className='mb-3'>
                                                <InputForms
                                                    type='email'
                                                    name="email"
                                                    value={formState.values.email || ""}
                                                    iconClassName={"fas fa-envelope"}
                                                    errorMessage={hasError("email") ?
                                                        formState.errors.email[0] : null}
                                                    onChange={handleChange}
                                                    onBlur={handleError}
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className='mb-3'>
                                                <InputForms
                                                    type={passwordShown ? "text" : "password"}
                                                    name="password"
                                                    value={formState.values.password || ""}
                                                    iconClassName={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}
                                                    onClick={togglePassword}
                                                    errorMessage={hasError("password") ?
                                                        formState.errors.password[0] : null}
                                                    onChange={handleChange}
                                                    onBlur={handleError}
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className='mb-3'>
                                                <InputForms
                                                    type={confirmPasswordShown ? "text" : "password"}
                                                    name="confirm_password"
                                                    value={formState.values.confirm_password || ""}
                                                    iconClassName={confirmPasswordShown ? "fas fa-eye" : "fas fa-eye-slash"}
                                                    onClick={toggleConfirmPassword}
                                                    errorMessage={hasError("confirm_password") ?
                                                        formState.errors.confirm_password[0] : null}
                                                    onChange={handleChange}
                                                    onBlur={handleError}
                                                    placeholder="Confirm Password"
                                                />
                                            </div>
                                            <div className='text-center'>
                                                <button type='submit' className="bg-theme-color hover:bg-blue-700 text-white font-semibold mt-4 py-2 px-8 rounded-full">Sign Up</button>
                                            </div>
                                        </form>
                                        <SocialLinkesIcons />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Signup;