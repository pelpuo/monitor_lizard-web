import React, { useRef, useState } from 'react'

import {Link, useNavigate} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"

import appLogo from "./../images/logo.png"

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();

    const [authErrors, setAuthErrors] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credential = await login(emailRef.current.value, passwordRef.current.value);

        if(credential){
            navigate("/")
        }else{
            setAuthErrors("Invalid credentials provided")
        }
    }

    return (
        <div className='Login-outer flex flex-col justify-center w-full p-2'>
                <div className="flex items-center ">
                    <div className='flex flex-col items-start justify-center'>
                        <img alt='logo' src={appLogo} className="w-14"/>
                    </div>
                    <div className='flex flex-col font-bold items-start justify-center ml-1'>
                    <h1 className="text-app-dark text-lg leading-none mt-2">Monitor</h1>
                    <h1 className="text-app-dark text-lg leading-tight">Lizard</h1>
                    </div>
                </div>
            <div className='Login flex items-center justify-center flex-1'>
                <div className='login-div flex flex-col items-center'>
                {authErrors !== "" && (<h4 className='text-md mb-6 text-app-pink'>{authErrors}</h4>)}
                <h3 className='font-bold text-2xl mb-4'>Log in</h3>
                <input type="text" className='mb-3 p-2 w-72 rounded-sm' ref={emailRef} placeholder='email'/>
                <input type="password" className='mb-3 p-2 w-72 rounded-sm' ref={passwordRef} placeholder='password'/>
                <button className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange mb-3' onClick={(e)=> handleSubmit(e)}>Sign in</button>
                <button className='text-app-text-dark text-sm hover:text-app-orange mb-1 font-bold'>Forgot Password?</button>
                <div className='sign Up prompt flex items-center justify-center'>
                    <h5 className='text-sm mr-1 text-app-text-gray'>Don't have an account?</h5>
                    <Link to="/register/credentials"><button className='text-app-green text-sm hover:text-app-orange font-bold'>Sign Up</button></Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login