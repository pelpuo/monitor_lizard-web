import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import { useAttendance } from '../contexts/AttendanceContext';
import { useAuth } from '../contexts/AuthContext';
import mapImage from "./../images/map.jpg"
import SingleEmployee from './SingleEmployee';

function Dashboard() {
  const {currentUser} = useAuth();
  const {organizationData, allEmployeesData, allAttendanceData, inOffice} = useAttendance();


  return (

    <div className='flex w-full'>
    <Sidebar active="dashboard"/>
    <div className='flex-1 Content sm:ml-[250px] p-6 mt-8 sm:mt-0 w-96'>
      {/* Header */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <div className='flex items-center'>
          <div className='flex flex-col items-end'>
            <h3 className='text-lg font-bold'>{organizationData?.adminName}</h3>
            <h5 className='text-md text-app-green'>{currentUser?.email}</h5>
          </div>
          <div className='ml-2 rounded-lg w-12 h-12 bg-app-green'></div>
        </div>
      </div>
      {/* Stats */}
      <div className='flex flex-col md:flex-row mt-12 justify-between flex-wrap'>
          <div className='flex flex-col items-start flex-1'>
            <h3 className='text-2xl font-bold'>{organizationData?.name}</h3>
            <h5 className='text-lg text-app-green font-semibold'>{organizationData?.industry}</h5>
          </div>
          {/* Stats cards */}
          <div className='Stats-cards flex px-12 flex-wrap'>
            <div className='flex flex-col items-center'> 
            <h5 className='text-lg text-center font-semibold text-app-green'>Total<br/>Employees</h5>
            <h3 className='text-3xl text-app-dark font-bold'>{allEmployeesData.size}</h3>
            </div>
          </div>
          <div className='Stats-cards flex px-12 border-x border-gray-300'>
            <div className='flex flex-col items-center'> 
            <h5 className='text-lg text-center font-semibold text-app-green'>In<br/>Office</h5>
            <h3 className='text-3xl text-app-dark font-bold'>{inOffice}</h3>
            </div>
          </div>
          <div className='Stats-cards flex px-12'>
            <div className='flex flex-col items-center'> 
            <h5 className='text-lg text-center font-semibold text-app-pink'>Out<br/>of Office</h5>
            <h3 className='text-3xl text-app-dark font-bold'>{allEmployeesData.size - inOffice}</h3>
            </div>
          </div>
          <div className='flex-1 flex justify-center sm:justify-end'>
            <div className='w-64 h-24 bg-app-green rounded-md'
            style={{
              backgroundImage: `url(${mapImage})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
          </div>
      </div>

      <hr className='mt-12'/>

<div class="overflow-x-auto sm:rounded-lg mt-6">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-md text-gray-700">
            <tr>
                <th scope="col" class="py-3 px-6">Date</th>
                <th scope="col" class="py-3 px-6">Employee Name</th>
                <th scope="col" class="py-3 px-6">Start Time</th>
                <th scope="col" class="py-3 px-6">End Time</th>
                <th scope="col" class="py-3 px-6">Total Work Time</th>
                <th scope="col" class="py-3 px-6">Status</th>
            </tr>
        </thead>
        <tbody>
            {
              Array.from(allAttendanceData).reverse().map((attendanceArr, index) => {
              const attendance = attendanceArr[1]
              const employee = allEmployeesData.get(attendance?.employeeId)
              const date = attendance.date.toDate()
              const startTime = attendance.startTime.toDate()
              const endTime = attendance.endTime.toDate()

              const workSeconds = parseInt((endTime.getTime() - startTime.getTime()) / 1000); 
              const workHour = parseInt(workSeconds/3600)
              const workMin = parseInt((workSeconds % 3600)/60)

              return (
                <tr class={`text-app-dark ${index %2 === 1 && "bg-app-light-gray"}`} key={attendanceArr[0]} >
                  <td class="py-4 px-6">{date.getDate() < 10 && "0"}{date.getDate()}/{date.getMonth() < 10 && "0"}{date.getMonth() + 1}/{date.getFullYear()}</td>
                  <td class="py-4 px-6"><Link to={`/employees/${employee?.uid}`}>{employee?.firstName} {employee?.lastName}</Link></td>
                  <td class="py-4 px-6">{startTime.getHours()}:{startTime.getMinutes()} GMT</td>
                  <td class="py-4 px-6">{endTime.getHours()}:{endTime.getMinutes()} GMT</td>
                  <td class="py-4 px-6">{workHour < 10 && "0"}{workHour}:{workMin < 10 && "0"}{workMin} Hrs</td>
                  <td class={`py-4 px-6 font-bold ${attendance.status === "In Office"? "text-app-green" : "text-app-pink"}`}>{attendance.status}</td>
                </tr>
              );
            })}


        </tbody>
    </table>
</div>
      
    </div>
    </div>

  );
}

export default Dashboard
