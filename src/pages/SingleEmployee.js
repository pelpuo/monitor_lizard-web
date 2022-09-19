import React from 'react'
import Sidebar from '../components/Sidebar'

function SingleEmployee() {
  return (
    <div className='flex w-full'>
    <Sidebar active=""/>
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

      <div className='my-12 flex justify-between items-end'>
        <div className='flex items-center'>
          <div className='w-12 h-12 bg-app-green rounded-md mr-2'></div>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold text-app-dark'>Abdul Basit</h3>
            <h5 className='text-app-green '>abasit@example.com</h5>
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
            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>

            <tr class="text-app-dark bg-app-light-gray">
                <td class="py-4 px-6">31/08/22</td>
                <td class="py-4 px-6">08:51 GMT</td>
                <td class="py-4 px-6">16:59 GMT</td>
                <td class="py-4 px-6">08:03 Hrs</td>
            </tr>


        </tbody>
    </table>
</div>
    </div>
    </div>
  )
}

export default SingleEmployee
