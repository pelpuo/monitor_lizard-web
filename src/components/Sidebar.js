import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";

import {Link} from "react-router-dom"

import {MdSpaceDashboard} from 'react-icons/md'
import {IoClose, IoSettingsSharp} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TbLogout} from 'react-icons/tb'
import {BsPeopleFill} from 'react-icons/bs'



function Sidebar(props) {

  return (
    <div className='Sidebar bg-app-dark h-full text-white'>
         <Helmet>
            <script src="./../Scripts/sideBarScript.js" type="text/javascript" />
        </Helmet>
      <span
      class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
      onclick="openSidebar()"
    >
      <div className='p-2 bg-app-dark rounded-md'>
      <GiHamburgerMenu color='#fff' size="0.5em" onClick={()=>{
        document.querySelector(".sidebar").classList.toggle("hidden");
        document.querySelector(".Content").classList.toggle("ml-250");

      }} />
      </div>
    </span>

    <div
      class="sidebar flex flex-col fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-app-dark"
    >
      <div class="p-2 flex justify-between">
        <div class="flex items-center ">
          <div className='flex flex-col items-start'>
          <h1 class="font-bold text-gray-200 text-xl">LO</h1>
          <h1 class="font-bold text-gray-200 text-xl">GO</h1>
          </div>
          <div className='flex flex-col items-start ml-1'>
          <h1 class="text-gray-200 text-md">Monitor</h1>
          <h1 class="text-gray-200 text-md">Lizard</h1>
          </div>
        </div>
        <div className='lg:hidden'>
            <IoClose color="#fff" size="1.5em" onClick={()=>document.querySelector(".sidebar").classList.toggle("hidden")} />
        </div>
      </div>

    <div className='flex-1 mt-8'>
        {/* Dashboard */}
    <Link to='/'>
      <div class={`${props.active === "dashboard" && "bg-app-white bg-opacity-5"} p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white`}>
        <MdSpaceDashboard color='#ffffff' size="1.5em" />
        <span class="text-[15px] ml-3 text-white ">Dashboard</span>
      </div>
    </Link>   

      {/* Employees */}
      <Link to='/employees'>
      <div class={`${props.active === "employees" && "bg-app-white bg-opacity-5"} p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white`}> 
        <BsPeopleFill color='#ffffff' size="1.5em"/>
        <span class="text-[15px] ml-3 text-white">Employees</span>
      </div>
      </Link>

    {/* Settings */}
    <Link to="/settings">
        <div class={`${props.active === "settings" && "bg-app-white bg-opacity-5"} p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white`}>
        <IoSettingsSharp color="#fff" size="1.5em" />
        <span class="text-[15px] ml-3 text-white">Settings</span>
       
        </div>
    </Link>

    </div>


      <Link to="/login">
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white">
          <TbLogout size="1.5em" color='#fff' />
          <span class="text-[15px] ml-3 text-gray-200">Logout</span>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default Sidebar