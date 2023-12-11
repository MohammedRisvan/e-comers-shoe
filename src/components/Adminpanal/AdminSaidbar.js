
import React from 'react';
import "./Admin.css";
import { NavLink, Outlet } from 'react-router-dom';
import { FaUsers,FaHome } from 'react-icons/fa';
import { GiConverseShoe } from "react-icons/gi";

const AdminSidebar = () => {
  return (
    <>
       <div className='sidebar'>
        <div className='h1'><h1>MOHAMMED RISVAN</h1></div>
        
        <div className='li'>
          <NavLink to={"userpanal"}>
            <li>
             < button className='sb'><FaUsers /> USERS</button> 
            </li>
          </NavLink>
          <NavLink to={"Adminproduct"}>
            <li>
             < button className='sb'><GiConverseShoe /> PRODUCTS</button> 
            </li>
          </NavLink>
          <NavLink to={"/"}>
            <li>
             < button className='sb'><FaHome />HOME</button> 
            </li>
          </NavLink>
        </div>
      </div>
        <Outlet/>
        
    </>
  );
}

export default AdminSidebar;
