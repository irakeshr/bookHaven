import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
  <header className="flex h-16 items-center bg-[#1A1A1A] fixed top-0 z-50 justify-between border-b border-[#333333] px-6 md:justify-end w-full md:w-[82%]">

      <button className="md:hidden">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-white hover:text-[#D4A056] cursor-pointer">
          notifications
        </span>
        <span className="material-symbols-outlined text-white hover:text-[#D4A056] cursor-pointer">
          logout
        </span>
      </div>
    </header>
  );
};

export default AdminHeader;
