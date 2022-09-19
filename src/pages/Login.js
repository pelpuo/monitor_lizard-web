import React from 'react'

import {Link} from "react-router-dom"

function Login() {
  return (
    <div className='Login-outer flex flex-col justify-center w-full p-2'>
        <div className='flex row items-center'>
            <div className='text-xl font-bold text-app-green pr-2'>
                <h1>LO</h1>
                <h1>GO</h1>
            </div>
            <div className='text-md text-app-dark'>
                <h1>Monitor</h1>
                <h1>Lizard</h1>
            </div>
        </div>
        <div className='Login flex items-center justify-center flex-1'>
            <div className='login-div flex flex-col items-center'>
            <h3 className='font-bold text-2xl mb-4'>Log in</h3>
            <input type="text" className='mb-3 p-2 w-72 rounded-sm' placeholder='email'/>
            <input type="text" className='mb-3 p-2 w-72 rounded-sm' placeholder='password'/>
            <Link to="/"><button className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange mb-3'>Sign in</button></Link>
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