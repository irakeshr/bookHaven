import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "../../server/allAPI";


const AllBooks = () => {
  const [pageLock,setPageLock]=useState(false)
  const [allBooks,setAllBooks]=useState([])
  useEffect(()=>{
    const token= localStorage.getItem("Token")
    if (token){
      setPageLock(true)
    }
  console.log(token)
  },[])

    useEffect(()=>{
  const getBooks=async()=>{
   try {
          const res = await getAllBooks();
         
          
           if (res.data && res.data.books) {
              setAllBooks(res.data.books);
          }
          
          } catch (err) {
          console.log(err);
        }
    }
  
    getBooks();
    },[])

  return (
    <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex-grow">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="mt-6 flex flex-col gap-6">
              <div className="rounded-[0.75rem] bg-[#242424] p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-grow">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-[0.5rem] h-full">
                        <div className="text-[#888888] flex bg-[#1A1A1A] items-center justify-center pl-4 rounded-l-[0.5rem]">
                          <span className="material-symbols-outlined">
                            search
                          </span>
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-none text-[#F5F5F5] focus:outline-0 focus:ring-0 border-none bg-[#1A1A1A] h-full placeholder:text-[#888888] px-4 text-base font-normal leading-normal"
                          placeholder="Search for your next adventure..."
                          defaultValue=""
                        />
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="relative w-full sm:w-1/2 md:w-48">
                      <select className="form-select w-full appearance-none bg-[#1A1A1A] border-none text-[#F5F5F5] h-12 rounded-[0.5rem] pl-4 pr-10 focus:ring-[#D4A056] focus:ring-1">
                        <option>All Genres</option>
                        <option>Sci-Fi</option>
                        <option>Classic Literature</option>
                        <option>Mystery</option>
                        <option>Fantasy</option>
                        <option>History</option>
                        <option>Romance</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                    <div className="relative w-full sm:w-1/2 md:w-48">
                      <select className="form-select w-full appearance-none bg-[#1A1A1A] border-none text-[#F5F5F5] h-12 rounded-[0.5rem] pl-4 pr-10 focus:ring-[#D4A056] focus:ring-1">
                        <option>Sort By</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Listings</option>
                        <option>Publication Date</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {
                pageLock ?
                 (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {/* Note: In a real app, this grid of cards would be a .map() loop */}
{allBooks && allBooks.map((books,index)=>{
  return(
    <Link key={index}
                to={`/view-books/${books._id}`}>
                <div className="flex flex-col rounded-[0.75rem] bg-[#242424] p-4 group">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-[0.5rem] mb-4"
                    data-alt="Book cover of To Kill a Mockingbird"
                    style={{
                      backgroundImage:`url(${books.imageUrl})`}}
                  ></div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[#F5F5F5] text-base font-medium leading-normal">
                      {books.title}
                    </h3>
                    <p className="text-[#888888] text-sm font-normal leading-normal">
                      {books.author}
                    </p>
                    <div className="flex-grow mt-2"></div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-lg font-bold text-[#D4A056]">${books.price}</p>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-9 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="truncate">Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
  )
}) }
                
                

                

                
              </div>):<div className="flex flex-col items-center justify-center mt-20">
           

            <img
              src="https://i.pinimg.com/originals/23/27/58/232758911e209e24258fed0dcb095398.gif"
              alt="Login required"
              className="w-64 h-64 object-contain"
            />
             <h1 className="text-center font-bold text-2xl mb-6">
              Please login to view all books <Link to="/login" className="underline color-red text-red">Login</Link>
            </h1>
          </div>
              }
             
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
