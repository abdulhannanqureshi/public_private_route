import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import InstagramLogin from 'react-instagram-login';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

const SocialLinkesIcons = () => {
    useEffect(() => {
        responseGoogle();
    }, [])
    const history = useHistory()
    const responseGoogle = response => {
        if (response && response.tokenObj) {
            const token = JSON.stringify(response.tokenObj.access_token)
            localStorage.setItem("token", token);
            const { givenName, familyName, email, imageUrl } = response.profileObj
            const userValues = [
                {
                    "first_name": givenName,
                    "last_name": familyName,
                    "email": email,
                    "password": "N.A",
                    "confirm_password": "N.A",
                    "imageUrl": imageUrl
                }
            ]
            localStorage.setItem("registeredUsers", JSON.stringify(userValues))
            history.push('/dashboard')
        }
    };

    const responseFacebook = (response) => {
        // console.log("Login Result",response);
        if (response) {
            const token = JSON.stringify(response.accessToken)
            localStorage.setItem("token", token);
            const { first_name, last_name, email } = response
            const userValues = [
                {
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": email,
                    "password": "N.A",
                    "confirm_password": "N.A",
                    "imageUrl": response.picture.data.url
                }
            ]
            localStorage.setItem("registeredUsers", JSON.stringify(userValues))
            history.push('/dashboard')
        }
    }
    const componentClicked = (data) => {
        console.log(data);
        
    }

    const responseInstagram = (response) => {
        console.log("insta login",response);
    }

    return (
        <>
            <div className='text-center mb-4 mt-6'>
                <h6 className='font-medium or relative'><span className='relative'>OR</span></h6>
            </div>
            {/* <InstagramLogin
                clientId=""
                buttonText="Login"
                onSuccess={responseInstagram}
                onFailure={responseInstagram}
            /> */}
            <div className='login-social flex justify-center'>
                <GoogleLogin
                    clientId="206617876485-q5hv177ma6825brfe6acjaea2plpo6vp.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                    className='signup_btn google'
                />
                <FacebookLogin
                appId="473658004253289"
                autoLoad={false}
                fields="first_name,last_name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                cssClass="signup_btn fb"
                icon="fa-facebook" />
                
                {/* <a href="#!" className="text-gray-600 icon fb">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                        className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                        </path>
                    </svg>
                </a> */}
                {/* <a href="#!" className="text-gray-600 icon linkedin">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                        className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                    </svg>
                </a> */}
            </div>
        </>
    )
}
export default SocialLinkesIcons