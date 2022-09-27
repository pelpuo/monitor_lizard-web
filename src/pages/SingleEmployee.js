import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useAttendance } from '../contexts/AttendanceContext';
import { useAuth } from '../contexts/AuthContext';

function SingleEmployee() {
  const {currentUser} = useAuth();
  const {allEmployeesData, singleEmployeeData, getEmployeeDataFromId, organizationData, getEmployeeFromId, singleEmployee} = useAttendance();
  const {id} = useParams();
  
  useEffect(()=>{
    getEmployeeFromId(id);
    getEmployeeDataFromId(id);
  },[])

  return (
    <div className='flex w-full'>
    <Sidebar active=""/>
    <div className='flex-1 Content sm:ml-[250px] p-6 mt-8 sm:mt-0'>
    {/* Header */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Employees</h1>
        <div className='flex items-center'>
          <div className='flex flex-col items-end'>
          <h3 className='text-lg font-bold'>{organizationData?.adminName}</h3>
            <h5 className='text-md text-app-green'>{currentUser?.email}</h5>
          </div>
          <div className='ml-2 rounded-lg w-12 h-12 bg-app-green'></div>
        </div>
      </div>

      <div className='my-12 flex justify-between items-end'>
        <div className='flex items-center'>
          <div className='w-12 h-12 bg-app-green rounded-md mr-2'></div>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold text-app-dark'>{singleEmployee?.firstName} {singleEmployee?.lastName}</h3>
            <h5 className='text-app-green '>{singleEmployee?.email}</h5>
          </div>
        </div>
        <div className='flex items-end px-6 py-2'>
        <button className='border border-app-pink text-app-pink py-1 px-10 rounded hover:bg-app-pink hover:text-white transition ease-in-out'>Delete</button>
        </div>
        
      </div>
      <hr className='' />

      <div class="overflow-x-auto sm:rounded-lg mt-6">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-md text-gray-700">
            <tr>
                <th scope="col" class="py-3 px-6">Date</th>
                <th scope="col" class="py-3 px-6">Start Time</th>
                <th scope="col" class="py-3 px-6">End Time</th>
                <th scope="col" class="py-3 px-6">Work Time</th>
            </tr>
        </thead>
        <tbody>
          {singleEmployeeData.map((employeeLogData, index) => {
            const log = employeeLogData[1]
            const date = log.date.toDate()
            const startTime = log.startTime.toDate()
            const endTime = log.endTime.toDate()

            const workSeconds = parseInt((endTime.getTime() - startTime.getTime()) / 1000); 
            const workHour = parseInt(workSeconds/3600)
            const workMin = parseInt((workSeconds % 3600)/60)

            return (
              <tr class={`text-app-dark ${index %2 === 1 && "bg-app-light-gray"}`} key={index}>
                <td class="py-4 px-6">{date.getDate() < 10 && "0"}{date.getDate()}/{date.getMonth() < 10 && "0"}{date.getMonth() + 1}/{date.getFullYear()}</td>
                <td class="py-4 px-6">{startTime.getHours()}:{startTime.getMinutes()} GMT</td>
                <td class="py-4 px-6">{endTime.getHours()}:{endTime.getMinutes()} GMT</td>
                <td class="py-4 px-6">{workHour < 10 && "0"}{workHour}:{workMin < 10 && "0"}{workMin} Hrs</td>
            </tr>
            )

          })}


            

        </tbody>
    </table>
</div>
    </div>
    </div>
  )
}

export default SingleEmployee
