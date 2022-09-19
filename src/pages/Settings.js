import React from 'react'
import Sidebar from '../components/Sidebar'

function Settings() {
  return (
    <div className='flex w-full'>
    <Sidebar active="settings"/>
    <div className='Content flex-1 sm:ml-[250px] p-6 mt-8 sm:mt-0'>
      {/* Header */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <div className='flex items-center'>
          <div className='flex flex-col items-end'>
            <h3 className='text-lg font-bold'>Jane Doe</h3>
            <h5 className='text-md text-app-green'>jdoe@example.com</h5>
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
          <input type="text" className='mb-3 p-2 rounded-sm' value="Jane" />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Last Name</h6>
          <input type="text" className='mb-3 p-2 rounded-sm'value="Doe"/>
        </div>
        <div className='col-span-1 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Email</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' value="jdoe@example.com"/>
        </div>
      </div>

      <h3 className='mt-8 mb-2 text-app-pink text-sm'>Careful! Only edit your password if you feel your account has been compromised</h3>
      <div className='details-row grid grid-cols-3'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Password</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Confirm Password</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' />
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
          <input type="text" className='mb-3 p-2 rounded-sm' value="PandaCo" />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Industry</h6>
          <input type="text" className='mb-3 p-2 rounded-sm'value="Food and Nutrition"/>
        </div>
        <div className='col-span-1 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Country</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' value="Ghana"/>
        </div>
      </div>


      <div className='details-row grid grid-cols-3 mt-6'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Starting Time</h6>
          <input type="time" className='mb-3 p-2 rounded-sm' value="08:30" />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Closing Time</h6>
          <input type="time" className='mb-3 p-2 rounded-sm'value="17:30"/>
        </div>
      </div>

      <h3 className='mt-10 text-md'>GPS Coordinates</h3>
      <div className='details-row grid grid-cols-3 mt-3'>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Latitude</h6>
          <input type="text" className='mb-3 p-2 rounded-sm' value="-1.8321312312" />
        </div>
        <div className='col-span-1 mr-6 flex flex-col'>
          <h6 className='text-app-gray mb-1 text-sm'>Longitude</h6>
          <input type="text" className='mb-3 p-2 rounded-sm'value="0.0512312312"/>
        </div>
      </div>

      <hr className='my-6'/>

      <div className='mb-24 flex items-center justify-between'>
        <div className='flex items-center'>
        <h2 className='text-md text-app-dark mr-2'>Employee Code:</h2>
        <h2 className='text-xl font-bold text-app-dark'>Xc23Q</h2>
        </div>
        <button className='border text-sm border-app-gray text-app-gray py-2 px-8 hover:border-app-green hover:text-app-green rounded transition ease-in-out'>Save Changes</button>
      </div>

    </div>
    </div>
  )
}

export default Settings
