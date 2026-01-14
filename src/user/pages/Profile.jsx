import React, { useEffect } from 'react';
 import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { postBooks } from '../../server/allAPI';
 
 
  

const Profile = () => {
const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    publisher: "",
    language: "",
    pages: "",
    isbn: "",
    imageUrl: "",
    category: "",
    price: "",
    noofpages:"",
    discountPrice: "",
    abstract: "",
    uploadedImages:[],
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prev) => ({ ...prev, [name]: value }));
    console.log(bookDetails);
  };

  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([]);
  // Removed unused previewImages state
 
  // When user selects using Browse button
  const handleFileUpload = (e) => {
    if(bookDetails.uploadedImages.length<=3){
       const files = Array.from(e.target.files); // Convert FileList to Array
 if (files.length > 0) {
 // Filter out files that would exceed the 3-image limit
 const filesToAdd = files.slice(0, 3 - bookDetails.uploadedImages.length);
 

 setBookDetails((prev) => ({ ...prev, uploadedImages: [...prev.uploadedImages, ...filesToAdd] }));

 // Create URLs for the files that were actually added
 const newImages = filesToAdd.map((file) => URL.createObjectURL(file));

 // Append new images to the existing list (don't overwrite)
 setImages((prev) => [...prev, ...newImages]);
 console.log(bookDetails);
 }
    }else{
      alert("max 3 img")
    }
  };
  
 

  // Drag & Drop
  const handleDrop = async (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setBookDetails((prev) => ({ ...prev, uploadedImages: [...prev.uploadedImages, ...files] }));
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
    
  };

  const handleDragOver = (e) => e.preventDefault();

  // handle Delete
  const handleDelete = (i) => {
    setImages((prev) => prev.filter((_, index) => index !== i));
    setBookDetails((prev)=>({...prev,uploadedImages:prev.uploadedImages.filter((_,index)=>{index!==i})}))
  };

  // Api Call 
  const handleBookAdd=async()=>{
    try {
      const{title,
    author,
    publisher,
    language,
    pages,
    isbn,
    imageUrl,
    category,
    price,
    discountPrice,
    abstract,
    uploadedImages}=bookDetails;

console.log(bookDetails.uploadedImages)
    const reqBody= new FormData();
     
 
    for (let key in bookDetails) {
      if (key !== "uploadedImages") { // Exclude uploadedImages from direct append
        reqBody.append(key, bookDetails[key]);
      } else {
        // Append each file in uploadedImages array
        bookDetails.uploadedImages.forEach((item) => {reqBody.append("uploadedImages", item)
          console.log(item)
        });

      }
    }
    for (let [key, value] of reqBody.entries()) {
  console.log(key, value);
}

console.log(reqBody)
    const res = await postBooks(reqBody);
 if(res.status===201){
 alert("Book added successfully")
 setOpenModal(false)
 }else{
  alert(res.response.data.message)
 }
    } catch (error) {
      console.log("err"+error)
    }
  }


   

  return (
    <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
      {/* start modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <ModalHeader className="bg-[#1A1A1A] border-b border-[#333] text-white">
          Sell Your Book
        </ModalHeader>
        <ModalBody className="bg-[#1A1A1A] overflow-auto scrollbar-hide overflow-y-auto">
       
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="book-title"
                  >
                    Title
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:border-[#D4A056] focus:ring-1"
                    id="book-title"
                    placeholder="e.g., The Great Gatsby"
                    type="text"
                    name="title"
                    value={bookDetails.title}
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="publisher"
                  >
                    Publisher
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:border-[#D4A056] focus:ring-1"
                    id="publisher"
                    placeholder="e.g., Penguin Books"
                    type="text"
                    name="publisher"
                    value={bookDetails.publisher}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Row 2: Author & Language */}
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="author"
                  >
                    Author
                  </label>
                  <input
                    className="form-input w-full h-[35px] bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="author"
                    placeholder="e.g., F. Scott Fitzgerald"
                    type="text"
                    name="author"
                    value={bookDetails.author}
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="language"
                  >
                    Language
                  </label>
                  <input
                    className="form-input w-full h-[35px] bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="language"
                    placeholder="e.g., English"
                    type="text"
                    name="language"
                    value={bookDetails.language}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Row 3: No of Pages & ISBN */}
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="pages"
                  >
                    No of Pages
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="pages"
                    placeholder="e.g., 200"
                    type="number"
                    name="pages"
                    value={bookDetails.pages}
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="isbn"
                  >
                    ISBN
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="isbn"
                    placeholder="e.g., 978-3-16-148410-0"
                    type="text"
                    name="isbn"
                    value={bookDetails.isbn}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Row 4: Image URL & Category */}
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="image-url"
                  >
                    Image URL
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="image-url"
                    placeholder="https://..."
                    type="text"
                    name="imageUrl"
                    value={bookDetails.imageUrl}
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="form-select w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] focus:ring-[#D4A056] focus:ring-1"
                    id="category"
                    name="category"
                    value={bookDetails.category}
                    onChange={handleFormChange}
                  >
                    <option>All Genres</option>
                        <option>Classic Literature</option>
                        <option>Mystery</option>
                        <option>Fantasy</option>
                        <option>History</option>
                        <option>Romance</option>
                        <option>Politics</option>
                        <option>Thriller</option>
                        <option>Literary Fiction</option>
                        <option>Self-Help</option>
                        <option>Auto/Biography</option>
                        <option>Philosophy</option>
                        <option>Science Fiction</option>
                        <option>Biography</option>
                        <option>Memoir</option>
                  </select>
                </div>

                {/* Row 5: Price & Discount Price */}
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="price"
                  >
                    Price ($)
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="price"
                    placeholder="e.g., 15.99"
                    step="0.01"
                    name="price"
                    value={bookDetails.price}
                    onChange={handleFormChange}
                    type="number"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="discount-price"
                  >
                    Discount Price ($)
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] h-[35px] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="discount-price"
                    placeholder="e.g., 10.99"
                    step="0.01"
                    name="discountPrice"
                    value={bookDetails.discountPrice}
                    onChange={handleFormChange}
                    type="number"
                  />
                </div>

                {/* Row 6: Abstract (Full Width) */}
                <div className="md:col-span-2">
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="abstract"
                  >
                    Abstract
                  </label>
                  <textarea
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1 resize-none"
                    id="abstract"
                    rows={4}
                    name="abstract"
                    value={bookDetails.abstract}
                    onChange={handleFormChange}
                    placeholder="Enter a brief description of the book..."
                  />
                </div>
              </form>
            </div>

            {/* Right Column: Image Uploader */}
            <div className="lg:col-span-1 lg:row-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col">
              <h2 className="text-xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
                Book Cover Images
              </h2>

              {images.length === 0 && (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className="flex-grow flex flex-col items-center justify-center text-center border-2 border-dashed border-[#444444] rounded-[0.75rem] p-6"
                >
                  <span className="material-symbols-outlined text-6xl text-[#888888]">
                    cloud_upload
                  </span>
                  <p className="text-[#F5F5F5] mt-4 mb-2">
                    Drag & drop your images here
                  </p>
                  <p className="text-[#888888] text-sm mb-4">or</p>
                  <label>
                    <input
                      type="file"
                      // multiple
                      accept="image/*"
                      className="hidden"
                      id="file-upload"
                      onChange={handleFileUpload}
                    />
                    <button
                      onClick={() =>
                        document.getElementById("file-upload").click()
                      }
                      className="cursor-pointer rounded-[0.5rem] h-10 px-4 bg-[#333] text-[#F5F5F5] text-sm font-bold hover:bg-[#444]"
                    >
                      Browse Files
                    </button>
                  </label>
                </div>
              )}

              {images.length > 0 && ( // if image show the image and show the button for upload images
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {images.map((img, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={img}
                        className="w-full h-28 object-cover rounded"
                        alt="preview"
                      />
                      <button
                        onClick={() => handleDelete(i)}
                        className="absolute top-1 right-1 bg-[#00000080] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {/* + Add More Button */}
                  <label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="file-upload-more"
                      onChange={handleFileUpload}
                    />
                    <div
                      onClick={() =>
                        document.getElementById("file-upload-more").click()
                      }
                      className="border border-dashed border-[#444] w-full h-28 rounded flex items-center justify-center cursor-pointer hover:bg-[#333]"
                    >
                      <span className="material-symbols-outlined text-4xl text-[#888]">
                        add
                      </span>
                    </div>
                  </label>
                </div>
              )}

              <div className="mt-4 space-y-2">
                <p className="text-xs text-[#888888]">
                  Supported formats: JPG, PNG. Max file size: 5MB.
                </p>
              </div>
            </div>

            {/* Bottom Buttons (Submit/Clear) */}
            <div className="lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <button onClick={handleBookAdd} className="w-full md:w-auto flex-1 flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-11 px-6 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                  <span className="truncate">Submit</span>
                </button>
                <button className="w-full md:w-auto flex-1 flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-11 px-6 bg-[#333] text-[#F5F5F5] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#444] transition-colors">
                  <span className="truncate">Clear Form</span>
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>

















{/* end modal */}





  <div className="relative flex min-h-screen w-full flex-col">
    <div className="flex-grow">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#F5F5F5]">
            My Dashboard
          </h1>
          <p className="mt-4 text-lg text-[#888888]">
            Manage your profile, listings, and purchases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 md:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                alt="User profile picture"
                className="h-32 w-32 rounded-full object-cover ring-2 ring-[#D4A056]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeUA3gai5F9XP3Lv0IGdj6jROsvh1iiCBr5yW0dwWAZrjfjmFlQuep5Umd6CGZi2Qj-Xe-F5uOhY8jTqZXWoYp-Rv_2u20gbh54zjVe992nQJpPGm_WK2aJ0uzlyOaI_sR0gNClzJnIj1qmkIT02vvnYxjcua9PxS44lofFBFhriATvg7S-jkfF1kxbBwoVnTmetvLhWpdFAR0NELcQoA_Q4CQhP4k9B3jBauCUpBcHgbGPHuNxSqlYUdCfsTZvXmsWSuPJGl5lT8"
              />
              <input type="text"  className='hidden '/>
              <button className="absolute bottom-1 right-1 bg-[#D4A056] text-[#1A1A1A] p-2 rounded-full hover:bg-opacity-80 transition-colors">
                <span className="material-symbols-outlined text-base">
                  edit
                </span>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-[#F5F5F5]">
              Eleanor Vance
            </h2>
            <p className="text-[#888888] text-sm">
              eleanor.vance@example.com
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/20 px-3 py-1 text-sm font-medium text-success">
              <span className="material-symbols-outlined text-base">
                verified
              </span>
              <span>Premium Member</span>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Personal Information
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  defaultValue="Eleanor Vance"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  defaultValue="eleanor.vance@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                  htmlFor="bio"
                >
                  Bio
                </label>
                <textarea
                  className="form-textarea w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                  id="bio"
                  placeholder="Tell us a little about yourself"
                  rows="3"
                  defaultValue="Avid reader and collector of rare first editions. Always on the lookout for hidden gems."
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <button className="w-full md:w-auto flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-11 px-6 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Save Changes</span>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 md:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Sell a Book
            </h2>
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-6xl text-[#D4A056] mb-4">
                add_circle
              </span>
              <p className="text-[#F5F5F5] mb-4">
                Have a book to sell? List it now and reach thousands of fellow
                book lovers.
              </p>
              <button  onClick={() => setOpenModal(true)} className="w-full md:w-auto flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-11 px-6 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">List a New Book</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Book Status
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-[0.5rem]">
                <div>
                  <p className="font-semibold text-[#F5F5F5]">
                    The Midnight Library
                  </p>
                  <p className="text-xs text-[#888888]">
                    Listed on 12 Aug 2024
                  </p>
                </div>
                <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-[0.5rem]">
                <div>
                  <p className="font-semibold text-[#F5F5F5]">
                    Project Hail Mary
                  </p>
                  <p className="text-xs text-[#888888]">
                    Listed on 05 Aug 2024
                  </p>
                </div>
                <span className="text-sm font-medium text-yellow-400 bg-yellow-900/50 px-3 py-1 rounded-full">
                  Pending Sale
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-[0.5rem]">
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Dune</p>
                  <p className="text-xs text-[#888888]">
                    Listed on 20 Jul 2024
                  </p>
                </div>
                <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                  Sold
                </span>
              </div>
              <a
                className="text-[#D4A056] hover:underline text-sm font-medium mt-2 inline-block"
                href="#"
              >
                View all listings...
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Purchase History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-3 text-sm font-semibold text-[#888888]">
                      Book Title
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888]">
                      Order ID
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888]">
                      Date
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888]">
                      Price
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333333]">
                    <td className="p-3 text-[#F5F5F5]">
                      Klara and the Sun
                    </td>
                    <td className="p-3 text-[#888888]">#BHN1024</td>
                    <td className="p-3 text-[#888888]">15 Aug 2024</td>
                    <td className="p-3 text-[#F5F5F5]">$12.50</td>
                    <td className="p-3 text-right">
                      <div className="inline-flex items-center gap-2 text-green-400">
                        <span className="material-symbols-outlined text-base">
                          local_shipping
                        </span>
                        <span>Shipped</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#F5F5F5]">
                      The Vanishing Half
                    </td>
                    <td className="p-3 text-[#888888]">#BHN0987</td>
                    <td className="p-3 text-[#888888]">02 Aug 2024</td>
                    <td className="p-3 text-[#F5F5F5]">$9.99</td>
                    <td className="p-3 text-right">
                      <div className="inline-flex items-center gap-2 text-success">
                        <span className="material-symbols-outlined text-base">
                          check_circle
                        </span>
                        <span>Delivered</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#F5F5F5]">Circe</td>
                    <td className="p-3 text-[#888888]">#BHN0955</td>
                    <td className="p-3 text-[#888888]">19 Jul 2024</td>
                    <td className="p-3 text-[#F5F5F5]">$14.00</td>
                    <td className="p-3 text-right">
                      <div className="inline-flex items-center gap-2 text-success">
                        <span className="material-symbols-outlined text-base">
                          check_circle
                        </span>
                        <span>Delivered</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              className="text-[#D4A056] hover:underline text-sm font-medium mt-4 inline-block"
              href="#"
            >
              View all purchases...
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
    );
}

export default Profile;
