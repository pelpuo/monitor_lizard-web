import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

import appLogo from "./../images/logo.png"

function SignUp1() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const {setRegisteringUser, checkEmailExists} = useAuth();

    const [authErrors, setAuthErrors] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        if(firstNameRef.current.value === "" ||
            lastNameRef.current.value === "" ||
            emailRef.current.value === "" ||
            passwordRef.current.value === "" ||
            confirmPasswordRef.current.value === ""){
                setAuthErrors("All fields must be filled")
                return;
            }
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            setAuthErrors("Passwords do not match")
            return
        }
        if(!String(emailRef.current.value).match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
            setAuthErrors("Invalid email used")
            return;
        }

        const emailExists = await checkEmailExists(emailRef.current.value);

        if(emailExists){
           setAuthErrors("Email addres already in use")
           return; 
        }

        const temp = {
            "firstName":firstNameRef.current.value,
            "lastName":lastNameRef.current.value,
            "email":emailRef.current.value,
            "password":passwordRef.current.value,

        }
        setRegisteringUser(temp)
        navigate("/register/organization")


    }

    return (
        <div className='SignUp1-outer flex flex-col justify-center w-full p-2'>
            <div className="flex items-center ">
            <div className='flex flex-col items-start justify-center'>
                <img alt='logo' src={appLogo} className="w-14"/>
            </div>
            <div className='flex flex-col font-bold items-start justify-center ml-1'>
            <h1 className="text-app-dark text-lg leading-none mt-2">Monitor</h1>
            <h1 className="text-app-dark text-lg leading-tight">Lizard</h1>
            </div>
            </div>
            <div className='SignUp1 flex items-center justify-center flex-1'>
                <div className='SignUp1-div flex flex-col items-center'>
                {authErrors !== "" && (<h4 className='text-md mb-6 text-app-pink'>{authErrors}</h4>)}
                <h3 className='font-bold text-2xl'>Sign Up</h3>
                <h3 className='text-md text-app-gray mb-2'>User Credentials</h3>
                <input type="text" required className='mb-3 p-2 w-72 rounded-sm' ref={firstNameRef} placeholder='First Name'/>
                <input type="text" required className='mb-3 p-2 w-72 rounded-sm' ref={lastNameRef} placeholder='Last Name'/>
                <input type="email" required className='mb-3 p-2 w-72 rounded-sm' ref={emailRef} placeholder='Email'/>
                <input type="password" required className='mb-3 p-2 w-72 rounded-sm' ref={passwordRef} placeholder='Password'/>
                <input type="password" required className='mb-3 p-2 w-72 rounded-sm' ref={confirmPasswordRef} placeholder='Confirm Password'/>
                
                <button onClick={(e) => handleSubmit(e)} className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange mb-3'>Next</button>
                <div className='sign Up prompt flex items-center justify-center'>
                    <h5 className='text-sm mr-1 text-app-text-gray'>Already have an account?</h5>
                    <Link to="/login">
                    <button  className='text-app-green text-sm hover:text-app-orange font-bold'>Sign In</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp1
