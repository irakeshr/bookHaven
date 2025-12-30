import React from 'react';
 
import AdminSideBar from '../components/AdminSideBar';
const AdminHome = () => {
    return (
        <div>
            
            

            <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5] mt-3">
  <div className="flex min-h-screen">
                                  
    <div className="flex-1 flex flex-col">
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-['Playfair_Display',_serif] font-bold text-white">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-lg text-[#888888]">
            Welcome back,Rakesh ! Here's what's happening.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-[0.75rem] bg-[#242424] p-6 flex items-center gap-6">
            <div className="bg-[#D4A056]/20 p-4 rounded-[0.5rem] text-[#D4A056]">
              <span className="material-symbols-outlined text-4xl">group</span>
            </div>
            <div>
              <p className="text-sm text-[#888888] font-medium">Total Users</p>
              <p className="text-3xl font-bold text-white">100+</p>
            </div>
          </div>
          <div className="rounded-[0.75rem] bg-[#242424] p-6 flex items-center gap-6">
            <div className="bg-[#D4A056]/20 p-4 rounded-[0.5rem] text-[#D4A056]">
              <span className="material-symbols-outlined text-4xl">
                auto_stories
              </span>
            </div>
            <div>
              <p className="text-sm text-[#888888] font-medium">Total Books</p>
              <p className="text-3xl font-bold text-white">100+</p>
            </div>
          </div>
          <div className="rounded-[0.75rem] bg-[#242424] p-6 flex items-center gap-6">
            <div className="bg-[#D4A056]/20 p-4 rounded-[0.5rem] text-[#D4A056]">
              <span className="material-symbols-outlined text-4xl">badge</span>
            </div>
            <div>
              <p className="text-sm text-[#888888] font-medium">
                Total Employees
              </p>
              <p className="text-3xl font-bold text-white">20+</p>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col min-h-[300px] md:min-h-[400px]">
            <h2 className="text-xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
              Sales Overview
            </h2>
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center text-[#888888]">
                 
                <p className="mt-2">Sales chart will be displayed here.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col min-h-[300px] md:min-h-[400px]">
            <h2 className="text-xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
              User Growth
            </h2>
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center text-[#888888]">
                 
                <p className="mt-2">User growth graph will be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
        </div>
    );
}

export default AdminHome;
