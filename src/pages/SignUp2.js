import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function SignUp2() {
  const organizationNameRef = useRef();
  const industryRef = useRef();
  const countryRef = useRef();
  const startingTimeRef = useRef();
  const closingTimeRef = useRef();

  const {registeringUser, setRegisteringUser} = useAuth();
  const [authErrors, setAuthErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e =>{
    if(organizationNameRef.current.value === "" ||
      industryRef.current.value === "" ||
      countryRef.current.value === "" ||
      startingTimeRef.current.value == null ||
      closingTimeRef.current.value == null){
        setAuthErrors("All fields must be filled")
        return
      }
      const temp = {
        ...registeringUser, 
        "organization": organizationNameRef.current.value,
        "industry": industryRef.current.value,
        "country": countryRef.current.value,
        "startingTime": startingTimeRef.current.value,
        "closingTime": closingTimeRef.current.value
      }

      console.log(temp)
      setRegisteringUser(temp)
      navigate("/register/location")
  }

  return (
    <div className='SignUp2-outer flex flex-col justify-center w-full p-2'>
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
      <div className='SignUp2 flex items-center justify-center flex-1'>
          <div className='SignUp2-div flex flex-col items-center'>
          {authErrors !== "" && (<h4 className='text-md mb-6 text-app-pink'>{authErrors}</h4>)}
          <h3 className='font-bold text-2xl'>Sign Up</h3>
          <h3 className='text-md text-app-gray mb-2'>Organization Details</h3>
          <input type="text" required className='mb-3 p-2 w-72 rounded-sm' ref={organizationNameRef} placeholder='Name of Organization'/>
          <input type="text" required className='mb-3 p-2 w-72 rounded-sm' ref={industryRef} placeholder='Industry'/>
          <input type="text" required className='mb-3 p-2 w-72 rounded-sm' ref={countryRef} placeholder='Country'/>
          <input type="time" required className='mb-3 p-2 w-72 rounded-sm' ref={startingTimeRef} placeholder='Starting Time'/>
          <input type="time" required className='mb-3 p-2 w-72 rounded-sm' ref={closingTimeRef} placeholder='Closing Time'/>
          <button onClick={e => handleSubmit(e)} className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange mb-3'>Next</button>
          <div className='sign Up prompt flex items-center justify-center'>
              <h5 className='text-sm mr-1 text-app-text-gray'>Already have an account?</h5>
              <Link to="/login"><button className='text-app-green text-sm hover:text-app-orange font-bold'>Sign In</button></Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default SignUp2
