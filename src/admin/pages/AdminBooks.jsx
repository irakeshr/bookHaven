import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal,ModalBody,ModalHeader,ModalFooter, Table } from 'flowbite-react';
import { getAllBooks, getAllUsers, getForAdminAllBooks, getLatestBookForAdmin } from '../../server/allAPI';
const AdminBooks = () => {
  const [allUser, setAllUser] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);

  // fetch all users

  useEffect(()=>{
    const FetchAllUsers=async()=>{
     try {
      const response = await getAllUsers();
      setAllUser(response.data.users)
     } catch (error) {
      console.error("Error fetching users:", error);
     }

    }
    FetchAllUsers();
  },[])

  // end Fetch All users

     const [openModal, setOpenModal] = useState(false);
     const [openModal_1, setOpenModal_1] = useState(false);

     // fetch all books
     useEffect(()=>{
      const FetchAllBooks=async()=>{
       try {
        const response = await  getForAdminAllBooks();
        console.table(response.data.books)
        
        setAllBooks(response.data.books)
       } catch (error) {
        console.error("Error fetching books:", error);
       }
  
      }
      FetchAllBooks();
    },[])

    // FetchLatesBooks here

    useEffect(()=>{
      const FetchLatestBooks=async()=>{
       try {
        const response = await  getLatestBookForAdmin();
        console.table(response.data.books)
        
        setLatestBooks(response.data.books)
       } catch (error) {
        console.error("Error fetching books:", error);
       }
  
      }
      FetchLatestBooks();
    },[])


    return (
        <div>

{/* start modal for View All books*/}
<Modal show={openModal_1} onClose={() => setOpenModal_1(false)} size="7xl"  >
  <ModalHeader className="bg-[#1A1A1A] ">
 <div className="text-left mb-2">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#D4A056]">
            All Books
          </h1>
          <p className="mt-2 text-lg text-[#888888]">
            Manage all book listings in the marketplace.
          </p>
        </div>
  </ModalHeader>
  <ModalBody className="bg-[#1A1A1A] overflow-auto  scrollbar-hide overflow-y-auto">
     <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Cover
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      <button className="flex items-center gap-1">
                        Title{" "}
                        <span className="material-symbols-outlined text-base">
                          swap_vert
                        </span>
                      </button>
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Author
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      <button className="flex items-center gap-1">
                        Price{" "}
                        <span className="material-symbols-outlined text-base">
                          swap_vert
                        </span>
                      </button>
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
                  {allBooks.map((book, index) => (
                    <tr key={index} className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt={`${book.title} book cover`}
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
 src={book.imageUrl}                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      {book.title}
                    </td>
                    <td className="p-3 text-[#888888]">{book.author}</td>
                    <td className="p-3 text-[#F5F5F5]">₹{book.price}</td>
                    <td className="p-3">
                      <span className={`text-sm font-medium   px-3 py-1 rounded-full" ${book.status=="pending" ? "bg-red-900/50 text-red-400 rounded-full":"bg-green-900/50 text-green-400 rounded-full"}`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-green-500">
                          <span className="material-symbols-outlined text-xl">
                            thumb_up
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            thumb_down
                          </span>
                        </button>
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
                  ))}
                   
                </tbody>
              </table>
            </div>
 
  </ModalBody>
</Modal>



{/* modal end here */}


{/* start modal for manage users */}
<Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl"  >
  <ModalHeader className="bg-[#1A1A1A]">  <div className="text-left mb-2">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold  text-[#D4A056]">
            Manage Users
          </h1>
          <p className="mt-2 text-lg text-[#888888]">
            Manage all registered users in the marketplace.
          </p>
        </div></ModalHeader>
  <ModalBody className="bg-[#1A1A1A] overflow-auto  scrollbar-hide overflow-y-auto">
    
 <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
  <div className="relative flex min-h-screen w-full">
    <div className="flex-1 flex flex-col">
      <main className="flex-grow p-6 md:p-10">
       
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
                Registered Users
              </h2>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]">
                    search
                  </span>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1 pl-10"
                    id="search"
                    placeholder="Search by name..."
                    type="text"
                  />
                </div>
                <button className="flex items-center justify-center h-11 px-4 bg-[#1A1A1A] rounded-[0.5rem] hover:bg-opacity-80 transition-colors">
                  <span className="material-symbols-outlined text-[#F5F5F5]">
                    filter_list
                  </span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-4 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      <button className="flex items-center gap-1">
                        User
                        <span className="material-symbols-outlined text-base">
                          swap_vert
                        </span>
                      </button>
                    </th>
                    <th className="p-4 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      User ID
                    </th>
                    <th className="p-4 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Email
                    </th>
                    <th className="p-4 text-sm font-semibold text-[#888888] whitespace-nowrap text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allUser.map((users,index)=>{
                      return(
                        <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          alt="User profile picture"
                          className="h-10 w-10 rounded-[9999px] object-cover"
 src={users.profile}                        />
                        <span className="font-medium text-[#F5F5F5]">
                          {users.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-[#888888]">{users._id}</td>
                    <td className="p-4 text-[#888888]">
                      {users.email}
                    </td>
                    <td className="p-4 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-[#D4A056]">
                          <span className="material-symbols-outlined text-xl">
                            edit
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                      )

                    })
                  }
                  
                  
                   
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
  </ModalBody>
</Modal>

{/* modal end */}

            <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
  <div className="relative flex min-h-screen w-full">
    <div className="flex-1 flex flex-col">
      <main className="flex-grow p-6 md:p-10">
        <div className="text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#F5F5F5]">
            All Books
          </h1>
          <p className="mt-2 text-lg text-[#888888]">
            Manage all book listings in the marketplace.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
                Book Listings
              </h2>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]">
                    search
                  </span>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1 pl-10"
                    id="search"
                    placeholder="Search by title..."
                    type="text"
                  />
                </div>
                <button className="flex items-center justify-center h-11 px-4 bg-[#1A1A1A] rounded-[0.5rem] hover:bg-opacity-80 transition-colors">
                  <span className="material-symbols-outlined text-[#F5F5F5]">
                    filter_list
                  </span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#333333]">
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Cover
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      <button className="flex items-center gap-1">
                        Title{" "}
                        <span className="material-symbols-outlined text-base">
                          swap_vert
                        </span>
                      </button>
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      Author
                    </th>
                    <th className="p-3 text-sm font-semibold text-[#888888] whitespace-nowrap">
                      <button className="flex items-center gap-1">
                        Price{" "}
                        <span className="material-symbols-outlined text-base">
                          swap_vert
                        </span>
                      </button>
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
                  {
                    latestBooks.map((book,index)=>{
                      return(
 <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="The Midnight Library book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
 src={book.imageUrl}                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      {book.title}
                    </td>
                    <td className="p-3 text-[#888888]">{ book.author}</td>
                    <td className="p-3 text-[#F5F5F5]">₹{book.price}</td>
                    <td className="p-3">
                      <span className={`text-sm font-medium   px-3 py-1 rounded-full" ${book.status=="pending" ? "bg-red-900/50 text-red-400 rounded-full":"bg-green-900/50 text-green-400 rounded-full"}`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <div className="inline-flex gap-2">
                        <button className="p-1 text-[#888888] hover:text-green-500">
                          <span className="material-symbols-outlined text-xl">
                            thumb_up
                          </span>
                        </button>
                        <button className="p-1 text-[#888888] hover:text-red-500">
                          <span className="material-symbols-outlined text-xl">
                            thumb_down
                          </span>
                        </button>
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
                      )
                    })
                  }
                 
                 
                </tbody>
                <tfoot>
  <tr>
    <td colSpan="6" className="text-center p-4">
      <button  onClick={()=>setOpenModal_1(true)} className="text-[#D4A056] hover:text-[#F5F5F5] text-sm font-medium flex items-center justify-center gap-1 mx-auto transition">
        See more
      </button>
    </td>
  </tr>
</tfoot>
              </table>
            </div>
          </div>
          <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056] mb-2">
                User Management
              </h2>
              <p className="text-[#888888] mb-4">
                View, edit, and manage all user accounts on the platform.
              </p>
            </div>
             <button onClick={()=>setOpenModal(true)} className="w-full md:w-auto flex items-center justify-center min-w-[120px] h-11 px-6 bg-[#1A1A1A] border border-[#D4A056] text-[#D4A056] text-sm font-bold leading-normal tracking-[0.015em] rounded-[0.5rem] hover:bg-[#D4A056] hover:text-[#1A1A1A] transition-colors">
              <span className="material-symbols-outlined mr-2">group</span>
              <span className="truncate">Manage Users</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
            
        </div>
    );
}

export default AdminBooks;
