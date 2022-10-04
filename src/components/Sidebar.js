import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";

import {Link} from "react-router-dom"

import {MdSpaceDashboard} from 'react-icons/md'
import {IoClose, IoSettingsSharp} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TbLogout} from 'react-icons/tb'
import {BsPeopleFill} from 'react-icons/bs'
import { useAuth } from '../contexts/AuthContext';

import appLogo from "./../images/logo_white.png"


function Sidebar(props) {
  const {logout} = useAuth();

  return (
    <div className='Sidebar bg-app-dark h-full text-white'>
         <Helmet>
            <script src="./../Scripts/sideBarScript.js" type="text/javascript" />
        </Helmet>
      <span
      className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
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
      className="sidebar flex flex-col fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-app-dark"
    >
      <div className="p-2 flex justify-between">
        <div className="flex items-center ">
          <div className='flex flex-col items-start justify-center'>
            <img alt='logo' src={appLogo} className="w-14"/>
          </div>
          <div className='flex flex-col font-bold items-start justify-center ml-1'>
          <h1 className="text-gray-200 text-lg leading-none mt-1">Monitor</h1>
          <h1 className="text-gray-200 text-lg leading-tight">Lizard</h1>
          </div>
        </div>
        <div className='lg:hidden'>
            <IoClose color="#fff" size="1.5em" onClick={()=>document.querySelector(".sidebar").classList.toggle("hidden")} />
        </div>
      </div>

    <div className='flex-1 mt-8'>
        {/* Dashboard */}
    <Link to='/'>
      <div className={`${props.active === "dashboard" && "bg-app-white bg-opacity-5"} p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white`}>
        <MdSpaceDashboard color='#ffffff' size="1.5em" />
        <span className="text-[15px] ml-3 text-white ">Dashboard</span>
      </div>
    </Link>   

      {/* Employees */}
      <Link to='/employees'>
      <div className={`${props.active === "employees" && "bg-app-white bg-opacity-5"} p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white`}> 
        <BsPeopleFill color='#ffffff' size="1.5em"/>
        <span className="text-[15px] ml-3 text-white">Employees</span>
      </div>
      </Link>

    {/* Settings */}
    <Link to="/settings">
        <div className={`${props.active === "settings" && "bg-app-white bg-opacity-5"} p-3 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white`}>
        <IoSettingsSharp color="#fff" size="1.5em" />
        <span className="text-[15px] ml-3 text-white">Settings</span>
       
        </div>
    </Link>

    </div>


      <button onClick={()=>logout()}>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-app-green text-white">
          <TbLogout size="1.5em" color='#fff' />
          <span className="text-[15px] ml-3 text-gray-200">Logout</span>
        </div>
      </button>
    </div>
    </div>
  )
}

export default Sidebar
