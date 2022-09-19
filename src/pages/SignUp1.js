import React from 'react'
import { Link } from 'react-router-dom'

function SignUp1() {
  return (
    <div className='SignUp1-outer flex flex-col justify-center w-full p-2'>
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
        <div className='SignUp1 flex items-center justify-center flex-1'>
            <div className='SignUp1-div flex flex-col items-center'>
            <h3 className='font-bold text-2xl'>Sign Up</h3>
            <h3 className='text-md text-app-gray mb-2'>User Credentials</h3>
            <input type="text" required className='mb-3 p-2 w-72 rounded-sm' placeholder='First Name'/>
            <input type="text" required className='mb-3 p-2 w-72 rounded-sm' placeholder='Last Name'/>
            <input type="email" required className='mb-3 p-2 w-72 rounded-sm' placeholder='Email'/>
            <input type="password" required className='mb-3 p-2 w-72 rounded-sm' placeholder='Password'/>
            <input type="password" required className='mb-3 p-2 w-72 rounded-sm' placeholder='Confirm Password'/>
            <Link to="/register/organization">
            <button className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange mb-3'>Next</button>
            </Link>
            <div className='sign Up prompt flex items-center justify-center'>
                <h5 className='text-sm mr-1 text-app-text-gray'>Already have an account?</h5>
                <Link to="/login"><button className='text-app-green text-sm hover:text-app-orange font-bold'>Sign In</button></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp1
