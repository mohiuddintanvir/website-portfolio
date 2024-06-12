import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineUserAdd,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillDribbbleCircle
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";

const Header = () => {


const [open,setOpen]=useState(false)

// mobile
const manuLinks = [
  {
    logo: "home-outline",
    link: "#/",
    tiptool: "Home",
  },
  {
    logo: "person-outline",
    link: "#about",
    tiptool: "ABOUT",
  },
  {
    logo: "construct-outline",
    link: "#Work",
    tiptool: "Projects",
  },
  {
    logo: "call-outline",
    link: "#contact",
    tiptool: "Contact",
  },

  
 
];




// Desktop
  const menulist1 = [
    <li className="hover:bg-[#EAB308] hover:rounded">
     
     <a href="#/">Home</a>   
   
    </li>,
    <li className="hover:bg-[#EAB308] hover:rounded">
   
      <a href="#about">About</a>  
      
    </li>,
  
    
    <li className="hover:bg-[#EAB308] hover:rounded">
   
       <a href="#Work">Work</a> 
     
    </li>,
    
    <li className="hover:bg-[#EAB308] hover:rounded ">
    
      <a href="#contact">Contact</a>  
   
    </li>,
  ];

  const [navber, setNavber] = useState(false);

  // scroll function
  useEffect(()=>{
    const changeBackgroundcolor = () => {
    if (window.scrollY >0) {
      setNavber(true);
    } else {
      setNavber(false);
    }

    
  };
window.addEventListener("scroll",changeBackgroundcolor);
return()=>{
  window.removeEventListener("scroll",changeBackgroundcolor)
}
  },[])

  // scrolling style set
  const navberclass=`navbar fixed  z-[999] ${navber ? 'lg:bg-[#EAB308]  md:bg-[#EAB308]  opacity-[90%]' : ''}`
  
  

  return (
    <div className={navberclass}>
      {/* navber  */}
      <div className="navbar  w-screen  ">
        {/* dropdown */}
        <div className="dropdown h-96 lg:hidden gap-20">
          <label
            tabIndex={0}
            onClick={() => setOpen(!open)}
            className="btn btn-ghost btn-circle duration-1000 mr-2 bg-white z-10"
          >
            {open ? (
              <AiOutlineClose className="text-lg" />
            ) : (
              <HiOutlineMenuAlt4 className="text-lg" />
            )}
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm  mt-3 z-[1] p-2 shadow  h-[30rem]    duration-1000 transform translate-transform ${
              open ? "translate-x-0" : "-translate-x-[150%]"
            } gap-[2.20rem]`}
          >


            {/* section logo */}
            {manuLinks.map((menu) => (
              <div  className="ml-3">
                <div className="text-[#F9BE08] text-xl   cursor-pointer tooltip" data-aos="zoom-out" data-tip={menu.tiptool}>
                  <a href={menu.link}>
                    <ion-icon name={menu.logo}> {menu.logo}</ion-icon>
                  </a>
                </div>
             
               
              </div>
            ))}

          
     
          </ul>
          
        </div>
{/* Large screen  */}
        <div className={`navbar-center font-bold text-2xl  ms-40 hidden lg:flex ${navber ? "text-white":"text-black "}`}>
        <h1 className="  font-PlayfairDisplaySC font-[700]">Mohiuddin<span className={`  ${navber ? "text-black" :"text-[#EAB308]"} `}>M.</span></h1>
        </div>
       
        <div className={`justify-end  lg:flex gap-3 font-PlayfairDisplaySC  font-[400]  hidden  ${navber ? "text-white": "text-black"}`}>
           <ul className="menu ms-40 menu-horizontal font-bold text-xl">{menulist1}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
