import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import { useLocation } from 'react-router-dom';


const UserHeader = () => {
  const location =useLocation();
  const [userData,setUseData]=useState({})
  const [token,setToken]= useState(localStorage.getItem("Token"))
  useEffect(()=>{
  setUseData( JSON.parse(localStorage.getItem("UserDetails"))) ;
 
  console.log(location.pathname)
  },[])
  console.log(userData);    
    return (
        <div>

<header className="flex items-center justify-between whitespace-nowrap px-4 py-3 z-3 sticky top-0 bg-[#1A1A1A]">
  <div className="flex items-center gap-4">
    <div className="size-8 text-[#D4A056]">  
      <img src={Logo} alt="Logo" />
    </div>
    <h2 className="text-xl font-bold font-['Playfair_Display',_serif] leading-tight text-white"> {/* <-- Hardcoded font */}
      BookHaven
    </h2>
  </div>
  <div className="hidden md:flex flex-1 justify-end gap-8">
    <div className="flex items-center gap-9">
      <Link
        className="text-[#F5F5F5] hover:text-[#D4A056] text-sm font-medium leading-normal transition-colors"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="text-[#F5F5F5] hover:text-[#D4A056] text-sm font-medium leading-normal transition-colors"
         to={"/all-Books"}
      >
        Books
      </Link>
      <Link
        className="text-[#F5F5F5] hover:text-[#D4A056] text-sm font-medium leading-normal transition-colors"
        to={"/careers"}
      >
        Careers
      </Link>
      <Link
        className="text-[#F5F5F5] hover:text-[#D4A056] text-sm font-medium leading-normal transition-colors"
         to={"/contact"}
      >
    Contact
      </Link>
    </div>
   <div className="flex gap-2 items-center relative">
  {/* Sign Up Button */}
 
  { !localStorage.getItem("Token") && location.pathname=="/login" &&
   <Link to={"/register"}>
   <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
    <span className="truncate">Sign Up</span>
  </button> 
  </Link>
  }
 



  {/* Login Button */}
 {!localStorage.getItem("Token") && location.pathname=="/register" &&
 <Link to={"/login"}>
   <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
    <span className="truncate">Login</span>
  </button> 
 </Link>
 
  }

  {/* Profile Image with Dropdown */}
  <div className="relative group">
  <Link to={"/profile"}>
   <img
      src={userData?.profile}
      alt="profile"
      className="w-10 h-10 rounded-full cursor-pointer border border-gray-400"
    />
  </Link>
   

    {/* Dropdown */}
    <div className="hidden group-hover:flex flex-col absolute right-0 mt-2 font-bold text-white w-48 bg-[#1A1A1A] shadow-xl rounded-md text-sm overflow-hidden">
      <div className="px-4 py-2 border-b">
        <p className="font-bold">{userData?.name}</p>
        <p className="text-xs text-gray-600">{userData?.email}</p>
      </div>
      <Link to={"/profile"} className="px-4 py-2 hover:text-[#D4A056] cursor-pointer">Dashboard</Link>
      <Link to={"/profile"} className="px-4 py-2 hover:text-[#D4A056] cursor-pointer">Settings</Link>
      <Link to={"/profile"} className="px-4 py-2 hover:text-[#D4A056] cursor-pointer">Earnings</Link>
      <div className="border-t mt-5">
        <a className="px-4 py-2 hover:font-bold cursor-pointer text-red-500 font-semibold">
          Sign Out
        </a>
      </div>
    </div>
  </div>
</div>

  </div>
</header>
            
        </div>
    );
}

export default UserHeader;
