import React from 'react'
import Sidebar from '../components/Sidebar'
import mapImage from "./../images/map.jpg"

function Dashboard() {
  return (

    <div className='flex w-full'>
    <Sidebar active="dashboard"/>
    <div className='flex-1 Content sm:ml-[250px] p-6 mt-8 sm:mt-0 w-96'>
      {/* Header */}
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <div className='flex items-center'>
          <div className='flex flex-col items-end'>
            <h3 className='text-lg font-bold'>Jane Doe</h3>
            <h5 className='text-md text-app-green'>jdoe@example.com</h5>
          </div>
          <div className='ml-2 rounded-lg w-12 h-12 bg-app-green'></div>
        </div>
      </div>
      {/* Stats */}
      <div className='flex flex-col md:flex-row mt-12 justify-between flex-wrap'>
          <div className='flex flex-col items-start flex-1'>
            <h3 className='text-2xl font-bold'>PandaCo</h3>
            <h5 className='text-lg text-app-green font-semibold'>Food and Nutrition</h5>
          </div>
          {/* Stats cards */}
          <div className='Stats-cards flex px-12 flex-wrap'>
            <div className='flex flex-col items-center'> 
            <h5 className='text-lg text-center font-semibold text-app-green'>Total<br/>Employees</h5>
            <h3 className='text-3xl text-app-dark font-bold'>185</h3>
            </div>
          </div>
          <div className='Stats-cards flex px-12 border-x border-gray-300'>
            <div className='flex flex-col items-center'> 
            <h5 className='text-lg text-center font-semibold text-app-green'>In<br/>Office</h5>
            <h3 className='text-3xl text-app-dark font-bold'>185</h3>
            </div>
          </div>
          <div className='Stats-cards flex px-12'>
            <div className='flex flex-col items-center'> 
            <h5 className='text-lg text-center font-semibold text-app-pink'>Out<br/>of Office</h5>
            <h3 className='text-3xl text-app-dark font-bold'>185</h3>
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
      {/* Dashboard Table */}

    {/* <div className=''>
      <table class="table-fixed border-spacing-2 ">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Work Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>31/08/2022</td>
            <td>Malcolm Lockyer</td>
            <td>08:51 GMT</td>
            <td>16:52 GMT</td>
            <td>12:00 Hrs</td>
            <td>In Office</td>
          </tr>
          <tr>
            <td>31/08/2022</td>
            <td>Malcolm Lockyer</td>
            <td>08:51 GMT</td>
            <td>16:52 GMT</td>
            <td>12:00 Hrs</td>
            <td>In Office</td>
          </tr>
          <tr>
            <td>31/08/2022</td>
            <td>Malcolm Lockyer</td>
            <td>08:51 GMT</td>
            <td>16:52 GMT</td>
            <td>12:00 Hrs</td>
            <td>In Office</td>
          </tr>
        </tbody>
      </table>
    </div> */}

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
            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-pink">Out of Office</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-pink">Out of Office</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-pink">Out of Office</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-pink">Out of Office</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-pink">Out of Office</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">Malcolm Lockyer</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
                <td class="py-4 px-6 font-bold text-app-green">In Office</td>
            </tr>

        </tbody>
    </table>
</div>
      
    </div>
    </div>

  );
}

export default Dashboard
