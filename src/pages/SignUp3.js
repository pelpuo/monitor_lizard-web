import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

import mapImage from "./../images/map.jpg"
import appLogo from "./../images/logo.png"

function SignUp3() {
  const latitudeRef = useRef();
  const longidudeRef = useRef();

  const {registeringUser, setRegisteringUser, registerUser} = useAuth();
  const [authErrors, setAuthErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(latitudeRef.current.value === "" || longidudeRef.current.value === ""){
      setAuthErrors("All Fields must be filled")
      return
    }

    const temp = {
      ...registeringUser,
      "latitude": latitudeRef.current.value,
      "longitude": longidudeRef.current.value
    }

    setRegisteringUser(temp)

    console.log(temp)

    registerUser(temp);
    navigate("/login")
  }


  return (
    <div className='SignUp3-outer flex flex-col justify-center w-full p-2'>
    <div className="flex items-center ">
        <div className='flex flex-col items-start justify-center'>
            <img alt='logo' src={appLogo} className="w-14"/>
        </div>
        <div className='flex flex-col font-bold items-start justify-center ml-1'>
        <h1 className="text-app-dark text-lg leading-none mt-2">Monitor</h1>
        <h1 className="text-app-dark text-lg leading-tight">Lizard</h1>
        </div>
      </div>
    <div className='SignUp3 flex items-center justify-center flex-1'>
      <div className=''>
      {authErrors !== "" && (<h4 className='text-md text-center mb-6 text-app-pink'>{authErrors}</h4>)}
        <h2 className='font-bold text-2xl text-center mb-8'>Location</h2>
        <div className='flex'>
          <div className='bg-app-pink w-80 mr-4' 
            style={{
              backgroundImage: `url(${mapImage})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}>
            </div>
            <div className='SignUp2-div flex flex-col items-start'>
            
              <h3 className='font-semibold text-left w-full text-lg mb-4'>GPS Coordinates</h3>
              <input type="number" required className='mb-3 p-2 w-72 rounded-sm' ref={latitudeRef} placeholder='Latitude'/>
              <input type="number" required className='mb-3 p-2 w-72 rounded-sm' ref={longidudeRef} placeholder='Longitude'/>
              <button onClick={e => handleSubmit(e)} className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp3
