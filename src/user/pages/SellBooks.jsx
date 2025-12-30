import React, { useState } from "react";
// Import the Modal and Button components from your UI library
// This example assumes you are using 'flowbite-react'
import { Modal, Button } from "flowbite-react"; 

export default function SellBooks() {
  // State to control the modal's visibility
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* This is the button that triggers the modal */}
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-[#D4A056] text-[#1A1A1A] hover:bg-[#D4A056]/90 focus:ring-4 focus:ring-[#D4A056]/50"
      >
        Sell Your Book
      </Button>

      {/* The Modal component */}
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="5xl">
        <Modal.Header className="bg-[#242424] border-b border-[#333]">
          <span className="text-[#F5F5F5]">Sell Your Book</span>
        </Modal.Header>
        
        <Modal.Body className="bg-[#242424]">
          {/* Form content starts here */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="book-title"
                  >
                    Book Title
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="book-title"
                    placeholder="e.g., The Great Gatsby"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="author"
                  >
                    Author
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="author"
                    placeholder="e.g., F. Scott Fitzgerald"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="genre"
                  >
                    Genre
                  </label>
                  <select
                    className="form-select w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] focus:ring-[#D4A056] focus:ring-1"
                    id="genre"
                  >
                    <option>Select Genre</option>
                    <option>Fiction</option>
                    <option>Non-Fiction</option>
                    <option>Science Fiction</option>
                    <option>Fantasy</option>
                    <option>Mystery</option>
                    <option>Biography</option>
                  </select>
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="publication-year"
                  >
                    Publication Year
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="publication-year"
                    placeholder="e.g., 1925"
                    type="number"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="condition"
                  >
                    Condition
                  </label>
                  <select
                    className="form-select w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] focus:ring-[#D4A056] focus:ring-1"
                    id="condition"
                  >
                    <option>Select Condition</option>
                    <option>New</option>
                    <option>Like New</option>
                    <option>Very Good</option>
                    <option>Good</option>
                    <option>Acceptable</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="price"
                  >
                    Price ($)
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="price"
                    placeholder="e.g., 15.99"
                    step="0.01"
                    type="number"
                  />
                </div>
              </form>
            </div>
            <div className="lg:col-span-1 lg:row-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col">
              <h2 className="text-xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
                Book Cover Images
              </h2>
              <div className="flex-grow flex flex-col items-center justify-center text-center border-2 border-dashed border-[#444444] rounded-[0.75rem] p-6">
                <span className="material-symbols-outlined text-6xl text-[#888888]">
                  cloud_upload
                </span>
                <p className="text-[#F5F5F5] mt-4 mb-2">
                  Drag & drop your images here
                </p>
                <p className="text-[#888888] text-sm mb-4">or</p>
                <button className="w-full md:w-auto flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#333] text-[#F5F5F5] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#444] transition-colors">
                  <span className="truncate">Browse Files</span>
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-[#888888]">
                  Supported formats: JPG, PNG. Max file size: 5MB.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <button className="w-full md:w-auto flex-1 flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-11 px-6 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                  <span className="truncate">Submit Listing</span>
                </button>
                <button className="w-full md:w-auto flex-1 flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-11 px-6 bg-[#333] text-[#F5F5F5] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#444] transition-colors">
                  <span className="truncate">Clear Form</span>
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
