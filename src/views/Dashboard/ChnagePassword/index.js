import React, { useEffect, useState } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { ChangePasswordSchema } from "../../../validators";
import InputForms from '../../../common/inputForm';

const ChangePassword = () => {

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    const handleError = ()=>
    {
        const errors = validate(formState.values, ChangePasswordSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }

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
        }))
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        handleError();
        if (formState.isValid) {
            const { password } = formState.values;
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            if (registeredUsers) {
                let tempArray = registeredUsers;
                localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
                Toaster({
                    type: "Success",
                    text: "You have successfully change your password."
                })
            }

        }

        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    }

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        };
    
    const [newPasswordShown, setNewPasswordShown] = useState(false);
    const toggleNewPassword = () => {
        setNewPasswordShown(!newPasswordShown);
        }; 

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
        }; 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='change-password col-span-4'>
                        <div className='mb-3'>
                                <InputForms
                                    labelText="Current Password"
                                    labelRequired="*"
                                    labelclassName="block font-medium mb-2 text-gray-700"
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    value={formState.values.password || ""}
                                    iconClassName={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}
                                    onClick={togglePassword}
                                    errorMessage={hasError("password") ?
                                        formState.errors.password[0] : null}
                                    onChange={handleChange}
                                    onBlur={handleError}
                                    placeholder="Current Password"
                                />
                        </div>
                        <div className='mb-3'>
                                <InputForms
                                    labelText="New Password"
                                    labelRequired="*"
                                    labelclassName="block font-medium mb-2 text-gray-700"
                                    className="block text-sm font-medium"
                                    type={newPasswordShown ? "text" : "password"}
                                    name="new_password"
                                    value={formState.values.new_password || ""}
                                    iconClassName={newPasswordShown ? "fas fa-eye" : "fas fa-eye-slash"}
                                    onClick={toggleNewPassword}
                                    errorMessage={hasError("new_password") ?
                                        formState.errors.new_password[0] : null}
                                    onChange={handleChange}
                                    onBlur={handleError}
                                    placeholder="New Password"
                                />
                        </div>
                        <div className='mb-3'>
                                <InputForms
                                    labelText="Confirm New Password"
                                    labelRequired="*"
                                    labelclassName="block font-medium mb-2 text-gray-700"
                                    className="block text-sm font-medium"
                                    type={confirmPasswordShown ? "text" : "password"}
                                    name="confirm_new_password"
                                    value={formState.values.confirm_new_password || ""}
                                    iconClassName={confirmPasswordShown ? "fas fa-eye" : "fas fa-eye-slash"}
                                    onClick={toggleConfirmPassword}
                                    errorMessage={hasError("confirm_new_password") ?
                                        formState.errors.confirm_new_password[0] : null}
                                    onChange={handleChange}
                                    onBlur={handleError}
                                    placeholder="New Password"
                                />
                        </div>
                        <button type='submit' className="bg-theme-color hover:bg-blue-700 text-white font-semibold my-4 py-2 px-8 rounded">
                    Change Password</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default ChangePassword
