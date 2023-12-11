import { NavLink, Outlet,Link, useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Mycontext } from "../App";
import Footer from "./pages/Footer";


const Navebar = () => {
  const navigate = useNavigate()
  const { setLogo,logo, setUsername,setSearch,cart,admin } = useContext(Mycontext)
  const handelchange = () => {
   
    setLogo("");
    setUsername("");

  }
  
  
  return (<>
    <div className="Navebar">
      <start className="start">
        <NavLink className="navtitle fiest" to="/"><h1> P L A S H O E </h1></NavLink>
        <NavLink className="navtitle fiest" to="/men">MEN</NavLink>
        <NavLink className="navtitle fiest" to="/women">WOMEN</NavLink>
        <NavLink className="navtitle fiest" to="/collection">COLLECTION</NavLink>
        <NavLink className="navtitle fiest" to="/lookbook">LOOKBOOK</NavLink>
        <NavLink className="navtitle fiest" to="/sale">SALE</NavLink>
      <NavLink className="navtitle fiest"
       to="/AdminSaidbar"id={admin?"show":"hide"}>ADMINPAGE</NavLink>

        <input type="search"
        onClick={() =>navigate("/collection")}
        onChange={(e)=>setSearch(e.target.value)}
         placeholder="🔍" />
      </start>
      <end className="end">
        <NavLink className="navtitle last" to="/ourstory">OURSTORY</NavLink>
        <NavLink className="navtitle last" to="/contact">CONTACT</NavLink>
        <NavLink className="navtitle last" to="/cart" ><FaShoppingCart/>{cart.length}</NavLink>
        <Link className="navtitle last"onClick={handelchange} to="/login">{logo.username}<FiLogIn /></Link>
      </end>
    </div>
    <Outlet />
    <div>
      <Footer/>
    </div>
  </>
  )
}

export default Navebar
