// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import AdminHeader from "../components/AdminHeader";


export default function AdminLayout() {
  return (
    <div className="flex w-full h-screen bg-[#1A1A1A]">
      {/* Left Sidebar stays in place forever */}
      <AdminSideBar />

      {/* Right dynamic page content */}
      <div className="flex-1  scrollbar-hide overflow-y-auto p-6 ">
        <AdminHeader/>
        <Outlet />
      </div>
    </div>
  );
}
