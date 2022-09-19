import React from 'react'
import { Link } from 'react-router-dom'

import mapImage from "./../images/map.jpg"

function SignUp3() {
  return (
    <div className='SignUp3-outer flex flex-col justify-center w-full p-2'>
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
    <div className='SignUp3 flex items-center justify-center flex-1'>
      <div className=''>
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
            <div className='SignUp2-div flex flex-col items-center'>
              <h3 className='font-semibold text-left w-full text-lg mb-4'>GPS Coordinates</h3>
              <input type="text" required className='mb-3 p-2 w-72 rounded-sm' placeholder='Latitude'/>
              <input type="text" required className='mb-3 p-2 w-72 rounded-sm' placeholder='Longitude'/>
              <Link to='/'><button className='bg-app-green p-2 w-72 text-app-white rounded text-md hover:bg-app-orange'>Submit</button></Link>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp3
