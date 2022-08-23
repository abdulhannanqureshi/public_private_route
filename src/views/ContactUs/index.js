import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputForms from "../../common/inputForm";
import InnerPageBanner from "../../components/InnerPageBanner";
import { ContactUsSchema } from "../../validators";
import validate from "validate.js";
import { Toaster } from "../../helper/react-toast";
import { ToastContainer } from "react-toastify";
import ContactInfo from "./DataFake/ContactInfo";
import SocialPageLink from "../../components/socialLinkes.js/SocialPageLink";

const ContactUs = () => {
  ///State for our form
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  ///For validating error everytime change in inputs

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

  const handleError = () => {
    const errors = validate(formState.values, ContactUsSchema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  };

  ///Submiting values to api.
  const handleSubmit = (event) => {
    event.preventDefault();
    handleError();
    if (formState.isValid) {
      let ContactMessage = JSON.parse(localStorage.getItem("ContactMessage"));
      let tempArray = ContactMessage;
      tempArray.push(formState.values);
      localStorage.setItem("ContactMessage", JSON.stringify(tempArray));
      {
        Toaster({
          type: "success",
          text: "You have successfully sent your message.",
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

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <>
      <InnerPageBanner title={"Contact Us"} />
      <section className='sec-padding'>
        <div className='container m-auto px-4'>
          <div className='grid md:grid-cols-12 gap-4'>
            <div className='col-span-7'>
              <h3 className='mb-1'>Get in Touch</h3>
              <p>
                Your email address will not be published. Required fields are
                marked<span className='required'>*</span>
              </p>
              <form className='mt-8' onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='mb-3'>
                    <div className=''>
                      <InputForms
                        labelText='Name'
                        labelRequired='*'
                        labelclassName='block font-medium mb-2 text-gray-700'
                        className='block font-medium'
                        type='text'
                        name='name'
                        value={formState.values.name || ""}
                        errorMessage={
                          hasError("name") ? formState.errors.name[0] : null
                        }
                        onChange={handleChange}
                        onBlur={handleError}
                        placeholder='Name'
                      />
                    </div>
                  </div>
                  <div className='mb-3'>
                    <InputForms
                      labelText='Email'
                      labelRequired='*'
                      labelclassName='block font-medium mb-2 text-gray-700'
                      className='block font-medium'
                      type='text'
                      name='email'
                      value={formState.values.email || ""}
                      errorMessage={
                        hasError("email") ? formState.errors.email[0] : null
                      }
                      onBlur={handleError}
                      onChange={handleChange}
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='mb-3'>
                  <InputForms
                    labelText='Subject'
                    labelRequired='*'
                    labelclassName='block font-medium mb-2 text-gray-700'
                    className='block font-medium'
                    type='text'
                    name='subject'
                    value={formState.values.subject || ""}
                    errorMessage={
                      hasError("subject") ? formState.errors.subject[0] : null
                    }
                    onChange={handleChange}
                    onBlur={handleError}
                    placeholder='Subject'
                  />
                </div>
                <div className='mb-3'>
                  <label className='block font-medium mb-2 text-gray-700'>
                    Message<span className='required'>*</span>
                  </label>
                  <textarea
                    className='
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none
                        '
                    id='exampleFormControlTextarea1'
                    rows='3'
                    name='message'
                    value={formState.values.message || ""}
                    onChange={handleChange}
                    onBlur={handleError}
                    placeholder='Your Message'
                  ></textarea>
                  <div>
                    <span className='error text-red-500 text-sm font-medium'>
                      {hasError("message") ? formState.errors.message[0] : null}
                    </span>
                  </div>
                </div>
                <button type='submit' className='blue-btn px-3 py-2 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
            <div className=''></div>
            <div className='col-span-4'>
              <div className='contact_info'>
                <div className='contact_info_item flex items-start'>
                  <div className='contact_info_icon pt-1'>
                    <i className='fas fa-map-marker-alt'></i>
                  </div>
                  <div className='contact_info_text'>
                    <h5 className='mb-0'>Our Address</h5>
                    <div>
                      <Link className='link' to='#'>
                        {ContactInfo.address}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='contact_info_item flex items-start'>
                  <div className='contact_info_icon pt-1'>
                    <i className='fas fa-envelope'></i>
                  </div>
                  <div className='contact_info_text'>
                    <h5 className='mb-0'>Email us directly</h5>
                    <div>
                      <Link className='link' to={ContactInfo.email1}>
                        {ContactInfo.email1}
                      </Link>
                    </div>
                    <div>
                      <Link className='link' to={ContactInfo.email2}>
                        {ContactInfo.email2}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='contact_info_item flex items-start'>
                  <div className='contact_info_icon pt-1'>
                    <i className='fas fa-phone'></i>
                  </div>
                  <div className='contact_info_text'>
                    <h5 className='mb-0'>Phone</h5>
                    <div>
                      <Link className='link' to={ContactInfo.phone1}>
                        {ContactInfo.phone1}
                      </Link>
                    </div>
                    <div>
                      <Link className='link' to={ContactInfo.phone2}>
                        {ContactInfo.phone2}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='contact_social mt-6'>
                  <h5 className='mb-0'>Follow Us</h5>
                  <div className='flex items-center mt-2'>
                    <Link
                      to={SocialPageLink.facebook}
                      className='social-link fb'
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fab'
                        data-icon='facebook-f'
                        className='w-2.5'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 320 512'
                      >
                        <path
                          fill='currentColor'
                          d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to={SocialPageLink.twitter}
                      className='social-link twitter'
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fab'
                        data-icon='twitter'
                        className='w-4'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to={SocialPageLink.instagram}
                      className='social-link insta'
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fab'
                        data-icon='instagram'
                        className='w-3.5'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                      >
                        <path
                          fill='currentColor'
                          d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to={SocialPageLink.linkedin}
                      className='social-link linkedin'
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fab'
                        data-icon='linkedin-in'
                        className='w-3.5'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                      >
                        <path
                          fill='currentColor'
                          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1272543.841352693!2d-2.590717!3d51.468489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871836681b3d861%3A0x8ee4b22e4b9ad71f!2sBristol!5e0!3m2!1sen!2suk!4v1646373312799!5m2!1sen!2suk'
          width='800'
          height='500'
          style={{ border: "0" }}
          allowfullscreen=''
          loading='lazy'
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
