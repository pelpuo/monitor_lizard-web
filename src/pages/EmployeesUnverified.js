import React from 'react'
import Sidebar from '../components/Sidebar'

import {Link} from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import { useAttendance } from '../contexts/AttendanceContext';

function EmployeesUnverified() {
    const {currentUser} = useAuth();
    const {organizationData, allEmployeesData, verifyEmployee, deleteEmployee} = useAttendance();

  return (
    <div className='flex w-full'>
    <Sidebar active="employees"/>
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

      <div className='mt-24 flex justify-between items-end'>
        <div className='flex'>
            <Link to="/employees">
            <button className='px-6 py-2 border-app-green text-app-gray font-semibold hover:bg-app-light-gray'>Verified</button>
            </Link>
            <Link to="/employees/unverified">
            <button className='px-6 py-2 border-b-2 border-app-green text-app-green font-semibold hover:bg-app-light-gray'>Not Verified</button>
            </Link>
        </div>
        <div className='flex items-end px-6 py-2'>
          <h5 className='text-lg text-app-gray mr-2'>Code:</h5>
          <h3 className='text-2xl font-bold'>Xc23Q</h3>
        </div>
        
      </div>
      <hr className='' />

      <div className='mt-6'>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-md text-gray-700">
            <tr>
                <th scope="col" class="py-3 px-6">#</th>
                <th scope="col" class="py-3 px-6">Employee Name</th>
                <th scope="col" class="py-3 px-6">Email</th>
                <th scope="col" class="py-3 px-6"></th>
            </tr>
        </thead>
        <tbody>
        {
            Array.from(allEmployeesData).filter(employee => !employee[1].isVerified).map((employeeArr, index) => {
              const employee = employeeArr[1]

              return(
                <tr class={`text-app-dark ${index %2 === 1 && "bg-app-light-gray"}`} key={index}>
                    <td class="py-4 px-6">{index + 1}</td>
                    <td class="py-4 px-6">{employee.firstName} {employee.lastName}</td>
                    <td class="py-4 px-6">{employee.email}</td>
                    <td class="py-4 px-6 font-semibold text-app-green">
                        <div className='flex'>
                            <button onClick={() => verifyEmployee(employee.uid)} className='bg-app-green text-white text-md py-2 px-10 mr-2 rounded'>Verify</button>
                            <button onClick={() => deleteEmployee(employee.uid)} className='border border-app-pink text-app-pink text-md py-2 px-10 rounded'>Delete</button>
                        </div>
                    </td>
                </tr>
              )
            })
          }  

        </tbody>
    </table>
      </div>
    </div>
    </div>
  )
}

export default EmployeesUnverified
