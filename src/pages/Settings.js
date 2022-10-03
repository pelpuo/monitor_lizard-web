import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useAttendance } from '../contexts/AttendanceContext'
import { useAuth } from '../contexts/AuthContext';

function Settings() {
  const {currentUser} = useAuth();
  const {organizationData} = useAttendance();

  // User Details
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Organization Detail
  const orgNameRef = useRef();
  const industryRef = useRef();
  const countryRef = useRef();
  const startingTimeRef = useRef();
  const closingTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();

  // UseState vars

  // User Details
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [orgName, setOrgName] = useState("")
  const [industry, setIndustry] = useState("")
  const [country, setCountry] = useState("")
  const [startingTime, setStartingTime] = useState("")
  const [closingTime, setClosingTime] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const [uniqueCode, setUniqueCode] = useState("")

  useEffect(()=>{
    setFirstName(organizationData?.adminName.split(" ")[0])
    setLastName(organizationData?.adminName.split(" ")[1])
    setEmail(currentUser?.email)
    
    setOrgName(organizationData?.name)
    setIndustry(organizationData?.industry)
    setCountry(organizationData?.country)

    const _startingTime = organizationData.startingTime.toDate();
    const _closingTime = organizationData.closingTime.toDate();

    setStartingTime(`${_startingTime.getHours() < 10 ? "0" : ""}${_startingTime.getHours()}:${_startingTime.getMinutes()}`)
    setClosingTime(`${_closingTime.getHours() < 10 ? "0" : ""}${_closingTime.getHours()}:${_closingTime.getMinutes()}`)
    setLatitude(organizationData?.location._lat)
    setLongitude(organizationData?.location._long)

    setUniqueCode(organizationData?.uniqueCode)

  }, [organizationData])

  return (
    <div className='flex w-full'>
    <Sidebar active="settings"/>
    <div className='Content flex-1 sm:ml-[250px] p-6 mt-8 sm:mt-0'>
      {/* Header */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <div className='flex items-center'>
          <div className='flex flex-col items-end'>
          <h3 className='text-lg font-bold'>{organizationData?.adminName}</h3>
            <h5 className='text-md text-app-green'>{currentUser?.email}</h5>
          </div>
          <div className='ml-2 rounded-lg w-12 h-12 bg-app-green'></div>
        </div>
      </div>
    
      {/* User Details */}
      <div className='mt-8 mb-4 flex justify-between'>
        <h2 className='text-lg font-bold text-app-dark'>User Details</h2>
        <button className='text-sm border border-app-gray text-app-gray py-2 px-8 hover:border-app-green hover:text-app-green rounded transition ease-in-out'>Save Changes</button>
      </div>

      <div className='details-row grid grid-cols-3'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>First Name</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={firstName} ref={firstNameRef}/>
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Last Name</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={lastName} ref={lastNameRef}/>
        </div>
        <div className='col-span-1 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Email</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={email} ref={emailRef}/>
        </div>
      </div>

      <h3 className='mt-8 mb-2 text-app-pink text-sm'>Careful! Only edit your password if you feel your account has been compromised</h3>
      <div className='details-row grid grid-cols-3'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Password</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={password} ref={passwordRef}/>
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Confirm Password</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={confirmPassword} ref={confirmPasswordRef}/>
        </div>
      </div>

      <hr className='my-6'/>

      {/* Organization Details */}
      <div className='mt-8 mb-4 flex justify-between'>
        <h2 className='text-lg font-bold text-app-dark'>Organization Details</h2>
        <button className='text-sm border border-app-gray text-app-gray py-2 px-8 hover:border-app-green hover:text-app-green rounded transition ease-in-out'>Save Changes</button>
      </div>

      <div className='details-row grid grid-cols-3'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Name</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={orgName} ref={orgNameRef}/>
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Industry</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={industry} ref={industryRef}/>
        </div>
        <div className='col-span-1 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Country</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={country} ref={countryRef}/>
        </div>
      </div>


      <div className='details-row grid grid-cols-3 mt-6'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Starting Time</h6>
          <input type="time" className='mb-3 p-2 rounded-sm' defaultValue={startingTime} ref={startingTimeRef} />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Closing Time</h6>
          <input type="time" className='mb-3 p-2 rounded-sm' defaultValue={closingTime} ref={closingTimeRef} />
        </div>
      </div>

      <h3 className='mt-10 text-md'>GPS Coordinates</h3>
      <div className='details-row grid grid-cols-3 mt-3'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Latitude</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={latitude} ref={latitudeRef} />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Longitude</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' defaultValue={longitude} ref={longitudeRef} />
        </div>
      </div>

      <hr className='my-6'/>

      <div className='mb-24 flex items-center justify-between'>
        <div className='flex items-center'>
        <h2 className='text-md text-app-dark mr-2'>Employee Code:</h2>
        <h2 className='text-xl font-bold text-app-dark'>{uniqueCode}</h2>
        </div>
        <button className='border text-sm border-app-gray text-app-gray py-2 px-8 hover:border-app-green hover:text-app-green rounded transition ease-in-out'>Randomize</button>
      </div>

    </div>
    </div>
  )
}

export default Settings
