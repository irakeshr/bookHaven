import React from 'react';
import { Modal,ModalBody,ModalFooter,ModalHeader } from 'flowbite-react';
import { useState } from "react";
 

const AdminCareers = () => {
  const [openModal, setOpenModal] = useState(false);
   
    return (
        <div>

{/* modal Start here */}
<Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl"  >
  <ModalHeader className="bg-[#1A1A1A] "> 

 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-4">
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
                View Applications
              </h2>
              
            </div>

  </ModalHeader>
  <ModalBody className="bg-[#1A1A1A] overflow-auto  scrollbar-hide overflow-y-auto">

      <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Applicant Name
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Applying For
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Date Applied
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Status
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Jane Doe
                    </td>
                    <td className="p-3 text-[#888888]">
                      Lead Software Engineer
                    </td>
                    <td className="p-3 text-[#888888]">2024-07-28</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                        In Review
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      John Smith
                    </td>
                    <td className="p-3 text-[#888888]">UX/UI Designer</td>
                    <td className="p-3 text-[#888888]">2024-07-27</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-yellow-400 bg-yellow-900/50 px-3 py-1 rounded-full">
                        Pending
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Emily White
                    </td>
                    <td className="p-3 text-[#888888]">
                      Lead Software Engineer
                    </td>
                    <td className="p-3 text-[#888888]">2024-07-26</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Interviewing
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    
  </ModalBody>
</Modal>


{/* modal End here*/}






            <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
  <div className="relative flex min-h-screen w-full">
    <div className="flex-1 flex flex-col">
      <main className="flex-grow p-6 md:p-10">
        <div className="text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#F5F5F5]">
            Careers
          </h1>
          <p className="mt-2 text-lg text-[#888888]">
            Manage career opportunities at BookHaven.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
                Job Postings
              </h2>
              <button
                className="w-full md:w-auto flex items-center justify-center min-w-[120px] h-11 px-6 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em] rounded-[0.5rem] hover:bg-opacity-90 transition-opacity"
                onClick={() =>
                  document.getElementById("addJobModal").showModal()
                }
              >
                <span className="material-symbols-outlined mr-2">add</span>
                <span className="truncate">Add New Job Posting</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Job Title
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Location
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Job Type
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Status
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Lead Software Engineer
                    </td>
                    <td className="p-3 text-[#888888]">Remote</td>
                    <td className="p-3 text-[#888888]">Full-time</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Open
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            edit
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      UX/UI Designer
                    </td>
                    <td className="p-3 text-[#888888]">Kakkanad</td>
                    <td className="p-3 text-[#888888]">Part-time</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Open
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            edit
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Marketing Specialist
                    </td>
                    <td className="p-3 text-[#888888]">
                      palakkad
                    </td>
                    <td className="p-3 text-[#888888]">Full-time</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-red-400 bg-red-900/50 px-3 py-1 rounded-full">
                        Closed
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            edit
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
                View Applications
              </h2>
              <span onClick={()=>setOpenModal(true)}
                className="text-sm font-medium text-[#D4A056] hover:underline"
                href="#"
              >
                View All
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Applicant Name
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Applying For
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Date Applied
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Status
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Jane Doe
                    </td>
                    <td className="p-3 text-[#888888]">
                      Lead Software Engineer
                    </td>
                    <td className="p-3 text-[#888888]">2024-07-28</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                        In Review
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      John Smith
                    </td>
                    <td className="p-3 text-[#888888]">UX/UI Designer</td>
                    <td className="p-3 text-[#888888]">2024-07-27</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-yellow-400 bg-yellow-900/50 px-3 py-1 rounded-full">
                        Pending
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#1A1A1A]">
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Emily White
                    </td>
                    <td className="p-3 text-[#888888]">
                      Lead Software Engineer
                    </td>
                    <td className="p-3 text-[#888888]">2024-07-26</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Interviewing
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>


  <dialog
    className="bg-transparent p-0 w-full max-w-4xl backdrop:bg-black/50 scrollbar-hide overflow-y-auto"
    id="addJobModal"
  >
    <div className="bg-[#242424] rounded-[0.75rem] shadow-lg">
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
            Add New Job Posting
          </h2>
          <button
            className="text-[#888888] hover:text-[#D4A056]"
            onClick={() => document.getElementById("addJobModal").close()}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form
          action="#"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          method="POST"
        >
          <div className="col-span-1">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="job-title"
            >
              Job Title
            </label>
            <input
              className="form-input w-full h-[35px] bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#555555] focus:ring-[#D4A056] focus:ring-1"
              id="job-title"
              name="job-title"
              placeholder="e.g. Senior Frontend Developer"
              type="text"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="form-input w-full h-[35px] bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#555555] focus:ring-[#D4A056] focus:ring-1"
              id="location"
              name="location"
              placeholder="e.g. Remote or City, State"
              type="text"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="job-type"
            >
              Job Type
            </label>
            <select
              className="form-select w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] focus:ring-[#D4A056] focus:ring-1"
              id="job-type"
              name="job-type"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="col-span-1">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="salary-range"
            >
              Salary Range
            </label>
            <input
              className="form-input w-full h-[35px]  bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#555555] focus:ring-[#D4A056] focus:ring-1"
              id="salary-range"
              name="salary-range"
              placeholder="e.g. $100,000 - $120,000"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="qualifications"
            >
              Qualifications
            </label>
            <textarea
              className="form-textarea w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#555555] focus:ring-[#D4A056] focus:ring-1"
              id="qualifications"
              name="qualifications"
              placeholder="List required qualifications, skills, and education."
              rows="3"
            ></textarea>
          </div>
          <div className="col-span-2">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="experience"
            >
              Experience Required
            </label>
            <input
              className="form-input w-full h-[35px]  bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#555555] focus:ring-[#D4A056] focus:ring-1"
              id="experience"
              name="experience"
              placeholder="e.g. 5+ years of experience in..."
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label
              className="block text-sm font-medium text-[#888888] mb-1"
              htmlFor="description"
            >
              Detailed Description
            </label>
            <textarea
              className="form-textarea w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#555555] focus:ring-[#D4A056] focus:ring-1"
              id="description"
              name="description"
              placeholder="Provide a detailed job description, responsibilities, and company information."
              rows="6"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              className="h-11 px-6 bg-[#1A1A1A] border border-[#333333] text-[#F5F5F5] text-sm font-bold rounded-[0.5rem] hover:bg-[#333333] transition-colors"
              onClick={() => document.getElementById("addJobModal").close()}
              type="button"
            >
              Cancel
            </button>
            <button
              className="h-11 px-6 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold rounded-[0.5rem] hover:bg-opacity-90 transition-opacity"
              type="submit"
            >
              Submit Posting
            </button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</div>
            
        </div>
    );
}

export default AdminCareers;
