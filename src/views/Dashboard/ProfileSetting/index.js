import React, { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { ProfileSettingSchema } from "../../../validators";
import InputForms from '../.././../common/inputForm'

const ProfileSetting = () => {

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    const handleError = ()=>
    {
        const errors = validate(formState.values, ProfileSettingSchema);
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
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
                let tempArray = [...registeredUsers, formState.values];
                localStorage.setItem("registeredUsers", JSON.stringify(tempArray));
                Toaster({
                    type: "Success",
                    text: "You have successfully update your profile."
                })
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

        useEffect(() => {
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            if(registeredUsers) {
                setFormState((formState) => ({
                    ...formState,
                    values: {
                        ...formState.values,
                        first_name: registeredUsers[0].first_name,
                        last_name: registeredUsers[0].last_name,
                        email: registeredUsers[0].email,
                        password: registeredUsers[0].password,
                      },
                }));
            }

        }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className=''>
                        <InputForms
                            labelText="First Name"
                            labelRequired="*"
                            labelclassName="block font-medium mb-2 text-gray-700"
                            className="block font-medium"
                            type='text'
                            name="first_name"
                            value={formState.values.first_name || ""}
                          
                            errorMessage={hasError("first_name") ?
                                formState.errors.first_name[0] : null}
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder="First Name"
                        />
                    </div>
                    <div className=''>
                        <InputForms
                            labelText="Last Name"
                            labelRequired="*"
                            labelclassName="block font-medium mb-2 text-gray-700"
                            className="block font-medium"
                            type='text'
                            name="last_name"
                            value={formState.values.last_name || ""}
                           
                            errorMessage={hasError("last_name") ?
                                formState.errors.last_name[0] : null}
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className=''>
                        <InputForms
                            labelText="Email"
                            labelRequired="*"
                            labelclassName="block font-medium mb-2 text-gray-700"
                            className="block font-medium"
                            type='email'
                            name="email"
                            value={formState.values.email || ""}
                            errorMessage={hasError("email") ?
                                formState.errors.email[0] : null}
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder="your@email.com"
                        />

                    </div>
                    <div className=''>
                        <InputForms
                            labelText="Phone Number"
                            labelclassName="block font-medium mb-2 text-gray-700"
                            className="block font-medium"
                            type='text'
                            name="phone_number"
                            value={formState.values.phone_number || ""}
                           
                            errorMessage={null}
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder="321-112-1141"
                        />
                    </div>
                    <div className=''>
                        <InputForms
                            labelText="Address"
                            labelclassName="block font-medium mb-2 text-gray-700"
                            className="block font-medium"
                            type='text'
                            name="address"
                            value={formState.values.address || ""}
                
                            errorMessage={null}
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder="Address"
                        />
                    </div>
                    <div className=''>
                        <InputForms
                            labelText="City"
                            labelclassName="block font-medium mb-2 text-gray-700"
                            className="block font-medium"
                            type='text'
                            name="city"
                            value={formState.values.city || ""}
                           
                            errorMessage={null}
                            onChange={handleChange}
                            onBlur={handleError}
                            placeholder="City"
                        />
                    </div>
                </div>
                <button type='submit' className="blue-btn mt-6 py-2 px-8">
                Update</button>
            </form>
        </div>
    )
}

export default ProfileSetting
