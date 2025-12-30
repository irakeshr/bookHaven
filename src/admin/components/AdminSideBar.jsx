import React, { use } from 'react';
import Logo from '../../assets/Logo.png'
import { Sidebar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const AdminSideBar = () => {

      
const location = useLocation();

  const active = (path) =>
    location.pathname === path
      ? "bg-[#D4A056] text-[#1A1A1A]"
      : "text-[#888888] hover:bg-[#333333] hover:text-white";
     
    return (
      

 
   <aside className="w-64 flex-shrink-0 bg-[#242424] p-6 hidden h-[100vh] md:flex flex-col">
      {/* LOGO */}
      <div className="flex items-center gap-3 mb-10">
        <div className="size-8 text-[#D4A056]">
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className="text-xl text-white font-bold font-['Playfair_Display',_serif]">
          BookHaven
        </h1>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">
        <Link
          to="/admin-home"
          className={`flex items-center gap-3 rounded-[0.5rem] px-4 py-3 font-semibold transition-colors ${active(
            "/admin-home"
          )}`}
        >
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </Link>

        <Link
          to="/admin-books"
          className={`flex items-center gap-3 rounded-[0.5rem] px-4 py-3 font-semibold transition-colors ${active(
            "/admin-books"
          )}`}
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span>All Books</span>
        </Link>

        <Link
          to="/admin-careers"
          className={`flex items-center gap-3 rounded-[0.5rem] px-4 py-3 font-semibold transition-colors ${active(
            "/admin-careers"
          )}`}
        >
          <span className="material-symbols-outlined">work</span>
          <span>Careers</span>
        </Link>

        <Link
          to="/admin-settings"
          className={`flex items-center gap-3 rounded-[0.5rem] px-4 py-3 font-semibold transition-colors ${active(
            "/admin-settings"
          )}`}
        >
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </Link>
      </nav>

      {/* FOOTER PROFILE */}
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          <img
            alt="Admin profile"
            className="h-10 w-10 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeUA3gai5F9XP3Lv0IGdj6jROsvh1iiCBr5yW0dwWAZrjfjmFlQuep5Umd6CGZi2Qj-Xe-F5uOhY8jTqZXWoYp-Rv_2u20gbh54zjVe992nQJpPGm_WK2aJ0uzlyOaI_sR0gNClzJnIj1qmkIT02vvnYxjcua9PxS44lofFBFhriATvg7S-jkfF1kxbBwoVnTmetvLhWpdFAR0NELcQoA_Q4CQhP4k9B3jBauCUpBcHgbGPHuNxSqlYUdCfsTZvXmsWSuPJGl5lT8"
          />
          <div>
            <p className="font-semibold text-white">Rakesh</p>
            <p className="text-xs text-[#888888]">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
    );
}

export default AdminSideBar;
