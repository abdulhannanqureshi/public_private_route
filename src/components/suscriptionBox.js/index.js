import React, { useEffect } from "react";
import { Toaster } from '../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { SuscriptionSchema } from "../../validators";
import 'react-toastify/dist/ReactToastify.css';

const SuscriptionBox = () => {
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

  const handleError = ()=>
  {
      
      const errors = validate(formState.values, SuscriptionSchema);
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
            let registeredEmails = JSON.parse(localStorage.getItem("registeredEmails"));
            if (registeredEmails) {
                let checkingPresence = registeredEmails.includes(email);
                if (checkingPresence) {
                    Toaster({
                        type: "error",
                        text: "You have already subscribed our Newsletter."
                    }
                    )
                }
                else {
                    let tempArray = JSON.parse(localStorage.getItem("registeredEmails"));
                    tempArray.push(email);
                    let test = localStorage.setItem("registeredEmails",
                        JSON.stringify(tempArray));
                    Toaster({ type: "success", text: "susbcribed succesfully" })
                    setFormState((formState) =>
                    ({
                        isValid: false,
                        values: {},
                        touched: {},
                        errors: {}
                    })
                    )
                }
            }
            else {
                let tempArray = [];
                tempArray.push(email);
                let test = localStorage.setItem("registeredEmails",
                    JSON.stringify(tempArray));
                Toaster({ type: "success", text: "susbcribed succesfully" })
                setFormState((formState) =>
                ({
                    isValid: false,
                    values: {},
                    touched: {},
                    errors: {}
                })
                )
            }   
        }
        
        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors
            },
        }));
    
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;
    return (
        <>
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="text-black">
                    <div className="flex justify-center">
                        <input type="email"
                            className="px-4 py-2 w-full focus:shadow focus:outline-none"
                            placeholder="Email Address"
                            name='email'
                            value={formState.values.email || ""}
                            onBlur={handleError}
                            onChange={handleChange} />

                        <button className="text-white bg-theme-color px-6 py-3 font-medium uppercase text-sm btn"
                            type="submit">
                            Subscribe
                        </button>
                    </div>
                    <div className="text-red-600 text-sm font-medium text-left  pt-1 ">
                        {
                            hasError("email") ?
                                <span className="errorText ">
                                    {formState.errors.email[0]}
                                </span>
                                :
                                null
                        }
                       
                    </div>
                </div>
            </form>
           
            {/* Same as */}
        </>
    )
}
export default SuscriptionBox