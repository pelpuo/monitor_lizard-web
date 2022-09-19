import React from 'react'
import Sidebar from '../components/Sidebar'

import {Link} from "react-router-dom"

function Employees() {
  return (
    <div className='flex w-full'>
    <Sidebar active="employees"/>
    <div className='flex-1 Content sm:ml-[250px] p-6 mt-8 sm:mt-0'>
    {/* Header */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Employees</h1>
        <div className='flex items-center'>
          <div className='flex flex-col items-end'>
            <h3 className='text-lg font-bold'>Jane Doe</h3>
            <h5 className='text-md text-app-green'>jdoe@example.com</h5>
          </div>
          <div className='ml-2 rounded-lg w-12 h-12 bg-app-green'></div>
        </div>
      </div>

      <div className='mt-24 flex justify-between items-end'>
        <div className='flex'>
            <Link to="/employees">
            <button className='px-6 py-2 border-b-2 border-app-green text-app-green font-semibold hover:bg-app-light-gray'>Verified</button>
            </Link>
            <Link to="/employees/unverified">
            <button className='px-6 py-2 border-app-green text-app-gray font-semibold hover:bg-app-light-gray'>Not Verified</button>
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
                <th scope="col" class="py-3 px-6">Current State</th>
                <th scope="col" class="py-3 px-6">Last 5 Days</th>
            </tr>
            
        </thead>
        <tbody>
            <tr class="text-app-dark">
                <td class="py-4 px-6">1</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td> 
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">2</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">3</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-pink">Out of Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td> 
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">4</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td>
            </tr>
            
            <tr class="text-app-dark">
                <td class="py-4 px-6">5</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td> 
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">6</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-pink">Out of Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">7</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-pink">Out of Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td> 
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">8</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">9</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td> 
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">10</td>
                <td class="py-4 px-6 hover:text-app-green"><Link to="/employees/id">Malcolm Lockyer</Link></td>
                <td class="py-4 px-6">mlockyer@example.com</td>
                <td class="py-4 px-6 font-semibold text-app-green">In Office</td>
                <td class="py-4 px-6">Component for last 5 days goes here</td>
            </tr>
            

            

        </tbody>
    </table>
      </div>
    </div>
    </div>
  )
}

export default Employees