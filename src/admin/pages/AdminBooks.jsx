import React from 'react';
import { useState } from 'react';
import { Modal,ModalBody,ModalHeader,ModalFooter } from 'flowbite-react';
const AdminBooks = () => {

     const [openModal, setOpenModal] = useState(false);
     const [openModal_1, setOpenModal_1] = useState(false);
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="The Midnight Library book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc6fh9sumOjrfRCpoCNOIkEVfsEHxHXLnYWQ8sLhEq7T4dgGLyzsOyEPKDEBRG1QrtcGI10SlpHk73bbQUqsf-aZKqVxIyDqG1Hodd4_H1IUtk4Ij5aloF9kS5V1KBv2zQRkHD4GpkobVBPfRR2MDXwE5LnYOe56dVsgfPI2XUfpeTMy3RVMIN9Me0Tzkj4Y8tMCa9XSWEZX-hUzbUbW_izD2MghVoQ-6Cq-ci7LaQHGpA2Xg2PF1roMbcU6ATSXcWZVUQSQA1FDw"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      The Midnight Library
                    </td>
                    <td className="p-3 text-[#888888]">Matt Haig</td>
                    <td className="p-3 text-[#F5F5F5]">$15.00</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Active
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="Project Hail Mary book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcICbkKkRshhDE3IJ6Mb9zl9Ul65UNdfKJNdGZ-tv8egq8qXo5ykvYJtX0ZvlOHJe4dKFMlpi26K1CUffZyu274P8-hSGWKMr8LMqyWnwf4v8iMt95fYtWG0hN-Jr4rQetKkLgp_qs-4lX6W3iKcILYoWovDAfi-XcbmLFE4sVOCdLZAuCxY2Qb0CVdZ3op53Ka1m-Tt3GtEBxIEyFpObp_D02Vgcc9bhFpZey-8DWILFnRIvKCpC-nuQAZXgNrr6EPUMbLiSjhys"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Project Hail Mary
                    </td>
                    <td className="p-3 text-[#888888]">Andy Weir</td>
                    <td className="p-3 text-[#F5F5F5]">$18.50</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-yellow-400 bg-yellow-900/50 px-3 py-1 rounded-full">
                        Pending
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="Dune book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUz7tYfxsMm6Y7E8D1Oi7kOH_liH7D6VgKjbodJ05Gg1_KyPoAMlJJ_fIyB4enUC3LgK3oEUo6uknPXkJADgA6cTKxIu69u9eaj2QES2z4O5Gm8NEu3OgUSlZ4UPjeH77Sc1fYIddih3AuQu8BTqmwleC-HImzM9nSqKEQufSHBThpn41kcKjxthDaUoVS-QhW-cvTMsyaMk4tfA5lw6vzrL1VcIOSkxWHd-2RFTLGzRqRn1M5dH8sGbV7X_aCabsDs45rWv_Tk5I"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">Dune</td>
                    <td className="p-3 text-[#888888]">Frank Herbert</td>
                    <td className="p-3 text-[#F5F5F5]">$12.00</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                        Sold
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="Klara and the Sun book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYga3YZOJqgYd41_BOPoWxH8uwxHIsnv_u3jkvo75o93qQB3BogYtrqTIlSZOmmbCwaAsJ4PLr7HAGol7270s5H1edg76QdQ-eSbrkV-E45LXEvoJd2koAIACtFPCL2BpeO3lnmjbTctXxfbtYl7TTFjbwGDSLtr89bMs4RpccoCJ-WWMIHAKyvYjKzDH-KxoVCBFzRzvHRJUoPl5Gl1CKTSMPEgwMCP2Da-Obw4SANjN9CkrDFLM8L9866J1xO6Z_Z1mwDsyr8w"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Klara and the Sun
                    </td>
                    <td className="p-3 text-[#888888]">Kazuo Ishiguro</td>
                    <td className="p-3 text-[#F5F5F5]">$22.00</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Active
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          alt="User profile picture"
                          className="h-10 w-10 rounded-[9999px] object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1KkJn2HuWWpey2kOtNgijH2U554U4MX8wAWrXk7qd6MIPLWmaMDSdo4sKa6CF36SYK6yXZOJhTHFxNOAwaUu1t_1HIlcSFF1hXKEmbvdZBvgETU3J-vc6TOg3wMVD5hc0ibDxxJXzOiSmgazVjvTZzXi9igOnakkXqTtX2B4xzzgZ27UleN-v9feylPEgLyz1nW2C4IKa7o-JVeAg4pxO1eREGjv6BQrvglS19fg177VXxxqKE9ICjZeBVrdm9mo1SCIflyXb9OE"
                        />
                        <span className="font-medium text-[#F5F5F5]">
                          Alice Johnson
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-[#888888]">#BH12345</td>
                    <td className="p-4 text-[#888888]">
                      alice.j@email.com
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          alt="User profile picture"
                          className="h-10 w-10 rounded-[9999px] object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnWZUwht-zsuIZxVZSp3a8kZF7CR1vKRDwLeO9ZviM1DCMlDGeBKqolJ7qpilbXm4mhZf8dCf8u_luvHsbeFapjbm_YKSnFKJLOQrXPcN0Iksqgkr2orldAwnrFjZvNDI6Udb4zlC4hAY35URQUJ6OSFhG4rusKC4tbgNlVXuMC2Z9f5Pa3nvVF5_FYkYPCNXdHKbSk8-_AE0HMEbwH4vx-uZY4RBskYHsNL1aSdWTH-7nw5hp7GFHqKkpDIRMnC3oPRYp1G1Xp-I"
                        />
                        <span className="font-medium text-[#F5F5F5]">
                          Bob Williams
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-[#888888]">#BH67890</td>
                    <td className="p-4 text-[#888888]">
                      bob.williams@email.com
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="The Midnight Library book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc6fh9sumOjrfRCpoCNOIkEVfsEHxHXLnYWQ8sLhEq7T4dgGLyzsOyEPKDEBRG1QrtcGI10SlpHk73bbQUqsf-aZKqVxIyDqG1Hodd4_H1IUtk4Ij5aloF9kS5V1KBv2zQRkHD4GpkobVBPfRR2MDXwE5LnYOe56dVsgfPI2XUfpeTMy3RVMIN9Me0Tzkj4Y8tMCa9XSWEZX-hUzbUbW_izD2MghVoQ-6Cq-ci7LaQHGpA2Xg2PF1roMbcU6ATSXcWZVUQSQA1FDw"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      The Midnight Library
                    </td>
                    <td className="p-3 text-[#888888]">Matt Haig</td>
                    <td className="p-3 text-[#F5F5F5]">$15.00</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Active
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="Project Hail Mary book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcICbkKkRshhDE3IJ6Mb9zl9Ul65UNdfKJNdGZ-tv8egq8qXo5ykvYJtX0ZvlOHJe4dKFMlpi26K1CUffZyu274P8-hSGWKMr8LMqyWnwf4v8iMt95fYtWG0hN-Jr4rQetKkLgp_qs-4lX6W3iKcILYoWovDAfi-XcbmLFE4sVOCdLZAuCxY2Qb0CVdZ3op53Ka1m-Tt3GtEBxIEyFpObp_D02Vgcc9bhFpZey-8DWILFnRIvKCpC-nuQAZXgNrr6EPUMbLiSjhys"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Project Hail Mary
                    </td>
                    <td className="p-3 text-[#888888]">Andy Weir</td>
                    <td className="p-3 text-[#F5F5F5]">$18.50</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-yellow-400 bg-yellow-900/50 px-3 py-1 rounded-full">
                        Pending
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="Dune book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUz7tYfxsMm6Y7E8D1Oi7kOH_liH7D6VgKjbodJ05Gg1_KyPoAMlJJ_fIyB4enUC3LgK3oEUo6uknPXkJADgA6cTKxIu69u9eaj2QES2z4O5Gm8NEu3OgUSlZ4UPjeH77Sc1fYIddih3AuQu8BTqmwleC-HImzM9nSqKEQufSHBThpn41kcKjxthDaUoVS-QhW-cvTMsyaMk4tfA5lw6vzrL1VcIOSkxWHd-2RFTLGzRqRn1M5dH8sGbV7X_aCabsDs45rWv_Tk5I"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">Dune</td>
                    <td className="p-3 text-[#888888]">Frank Herbert</td>
                    <td className="p-3 text-[#F5F5F5]">$12.00</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                        Sold
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
                  <tr className="border-b border-[#333333] hover:bg-[#1A1A1A]">
                    <td className="p-3">
                      <img
                        alt="Klara and the Sun book cover"
                        className="h-16 w-12 object-cover rounded-[0.25rem]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYga3YZOJqgYd41_BOPoWxH8uwxHIsnv_u3jkvo75o93qQB3BogYtrqTIlSZOmmbCwaAsJ4PLr7HAGol7270s5H1edg76QdQ-eSbrkV-E45LXEvoJd2koAIACtFPCL2BpeO3lnmjbTctXxfbtYl7TTFjbwGDSLtr89bMs4RpccoCJ-WWMIHAKyvYjKzDH-KxoVCBFzRzvHRJUoPl5Gl1CKTSMPEgwMCP2Da-Obw4SANjN9CkrDFLM8L9866J1xO6Z_Z1mwDsyr8w"
                      />
                    </td>
                    <td className="p-3 text-[#F5F5F5] font-medium">
                      Klara and the Sun
                    </td>
                    <td className="p-3 text-[#888888]">Kazuo Ishiguro</td>
                    <td className="p-3 text-[#F5F5F5]">$22.00</td>
                    <td className="p-3">
                      <span className="text-sm font-medium text-green-400 bg-green-900/50 px-3 py-1 rounded-full">
                        Active
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
