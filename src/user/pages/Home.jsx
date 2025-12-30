import React, { useEffect, useState } from "react";
import { getUser } from "../../server/allAPI";
import { ArrowRightIcon } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const HandleSearch = () => {
    console.log(searchQuery);
  };
  const [user, setUser] = useState();

 useEffect( ()=>{
  const fetchUser = async () => {
    const res = await getUser()
    console.log(res)
  }
  fetchUser()},[])

  return (
    <div>
      <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
        <div className="relative flex min-h-screen w-full flex-col">
          <div className="flex-grow">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {/* Hero Section */}
                <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 md:p-10 flex flex-col items-center justify-center text-center">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[#F5F5F5] text-4xl md:text-6xl font-black leading-tight font-['Playfair_Display',_serif]">
                      Give Old Books a New Chapter
                    </h1>
                    <h2 className="text-[#888888] text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
                      Discover timeless stories and find new homes for your
                      cherished reads. The premier online marketplace for buying
                      and selling used books.
                    </h2>
                  </div>
                  <label className="mt-8 flex flex-col min-w-40 h-14 w-full max-w-xl">
                    <div className="flex w-full flex-1 items-stretch rounded-[0.5rem] h-full">
                      <div className="text-[#888888] flex bg-[#1A1A1A] items-center justify-center pl-4 rounded-l-[0.5rem] border-r-0">
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-none text-[#F5F5F5] focus:outline-0 focus:ring-0 border-none bg-[#1A1A1A] h-full placeholder:text-[#888888] px-4 text-base font-normal leading-normal"
                        placeholder="Search by title, author, or ISBN..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={HandleSearch}
                        type="text"
                      />
                      <div className="flex items-center justify-center rounded-r-[0.5rem] border-l-0 border-none bg-[#1A1A1A] pr-2">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-5 bg-[#D4A056] text-[#1A1A1A] text-base font-bold leading-normal tracking-[0.015em]">
                          <span className="truncate">Search</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Buy Books Card */}
                <div className="lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] font-['Playfair_Display',_serif]">
                      Find Your Next Read
                    </h3>
                    <p className="text-[#888888] text-base font-normal leading-normal mt-2">
                      Explore a vast collection of pre-loved books from every
                      genre imaginable.
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-[0.5rem] mt-4"
                    data-alt="A cozy, well-lit library with shelves full of old books"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCov7XQDgVpVa3qRjEjh7VCZ7LSXtSwlxzJri73RRvMe3ScgGFnOs6HcKuRdIy6kagpMCeIguk3HdWyqwFIrNasPZqzu766v_D-FQR7GMTJGDYhFPasl1oRKo-EDTe4GfZnXHcaG_EC50gGCk8U391VCgLIPnW95prD03yNy4eN7hfPou3AbyBmJo-lpd3p1AS9c8MoviucxS5u-wBBIiMPXlaiJxx1xdwgZbZyHLg4VgGBPu5MGo2zbUIhbEJ0oDNquuLcoKpjFmM")',
                    }}
                  ></div>
               
                  <Link to={"/all-Books"} className="flex mt-6 w-full md:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal">
                    <span className="truncate">Start Browsing</span>
                  </Link>
                   
                 
                </div>

                {/* Sell Books Card */}
                <div className="lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] font-['Playfair_Display',_serif]">
                      Sell Your Cherished Books
                    </h3>
                    <p className="text-[#888888] text-base font-normal leading-normal mt-2">
                      It's simple and fast to list your books and connect with
                      fellow readers.
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-[0.5rem] mt-4"
                    data-alt="A person carefully placing a used book into a cardboard box for shipping"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQxUz_8t0J49T0Ow6rpD_NYWzKZkiwwN2w8d-c7iZ7XpRoXW5TlVYRSFjoEpTVe5K3Qh8RTjl6qjSB0MCbKbLsIgGgqZNkRJVeoudOXi3RDtYmWUV-twdHPo7aWxmzZJQamo-4Shxz3cEnEDYNLlAInDXb9Fwc51G_h392R2nQ7NPVfJKvT1q4l9b5q0JEF7dz-KQbMfqNsRMyJtdRJVVQnlg1A8_R4w1v26yvssR1LE66vQolHPR66hB3QtYpJ-IMkNyYzQFG8Os")',
                    }}
                  ></div>
                   
                  <Link to={"/Profile"} className="flex mt-6 w-full md:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal">
                    <span className="truncate">List Your Book</span>
                  </Link>
                   
                  
                </div>

                {/* Popular Titles Carousel */}
                <div className="lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] font-['Playfair_Display',_serif] mb-4">
                    Popular Titles
                  </h3>
                  <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-stretch gap-4">
                      {/* map i will use here now demo */}
                      <div className="flex h-full flex-1 flex-col gap-3 rounded-[0.5rem] min-w-48 cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-[0.5rem]"
                          data-alt="Book cover of To Kill a Mockingbird"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD_Mx1C5YQbVIvEgQ3Lrl3GBfu-psWRIVGcZFl94Xr7z_BvqgcSMNZMw8OKGdn8nIgPvzPGpJTt6nTACRyG3rFdHeVh13tQbceyoASm--YV7a4-djTao2dECXqvTDJEChuRbXRgSPs76fpiOxaQcgvK2hHZAWorlRC1iUWiUNWl6e4n4-8tY0d7axywx6A4ABy7UaxZ2BzdFUzeiPpL9pu-lT2oEfMrWjxOUm90MgTAKt4WHOblU9VMzHGUThR89A4wJUVJDoo47I")',
                          }}
                        ></div>
                        <div>
                          <p className="text-[#F5F5F5] text-base font-medium leading-normal">
                            To Kill a Mockingbird
                          </p>
                          <p className="text-[#888888] text-sm font-normal leading-normal">
                            Harper Lee
                          </p>
                        </div>
                      </div>

                      <div className="flex h-full flex-1 flex-col gap-3 rounded-[0.5rem] min-w-48 cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-[0.5rem]"
                          data-alt="Book cover of 1984"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6zzP-7oJhkZ2KLdDEM23RdyaLndGRTVOkiQERmfdGpM0SBa_A7T21woj74OL0Ghtd33ZWOhP6XtNmj87qOphFvDqfWJ05cid1jnmfIQ6S5kDiiOa2-7jtlqsBrNZLPstaDGtk1FtAnkXbasy3IXzK_sTjK45vbTfoSP9vvtosKaY11yjag3sSuLno02L9BTLTfsKrvJuqQA4Uzm-EsnOWL00pEFatGWd6LNruCdG91vw51vCzr51-Y7aK7ajtrsWIJj4eFIX03aU")',
                          }}
                        ></div>
                        <div>
                          <p className="text-[#F5F5F5] text-base font-medium leading-normal">
                            1984
                          </p>
                          <p className="text-[#888888] text-sm font-normal leading-normal">
                            George Orwell
                          </p>
                        </div>
                      </div>

                      <div className="flex h-full flex-1 flex-col gap-3 rounded-[0.5rem] min-w-48 cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-[0.5rem]"
                          data-alt="Book cover of The Great Gatsby"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDArydPlqKqhzrFnV8RXsQ7TVRnO_genGYvrvCANYXPrIWZJiR5IwfFpgV3ZVjH1s_PFsR7YuOjmnA92C5wxnl1xJSMPQPs7shFfxvbNGArBPTO9mNrEmi7hrS-oznBLdBaBzXEuw4CsGzv0EPKlGL_x2ceeG3OLQRdDigKkvOwkJ6i2I9U2nlDCITZBeItVxbIkjnZqa_9BRfN_zCScit9gldftL61FOhF6Svi8OpZxG-T-ckJlAifAtwlwS5U-oTYKrIDkUiXzEM")',
                          }}
                        ></div>
                        <div>
                          <p className="text-[#F5F5F5] text-base font-medium leading-normal">
                            The Great Gatsby
                          </p>
                          <p className="text-[#888888] text-sm font-normal leading-normal">
                            F. Scott Fitzgerald
                          </p>
                        </div>
                      </div>

                      <div className="flex h-full flex-1 flex-col gap-3 rounded-[0.5rem] min-w-48 cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-[0.5rem]"
                          data-alt="Book cover of Pride and Prejudice"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7LTKotKUjShP-hEOIWVsKi81uS45I35nH7o1YAd6tJT_oLszu5gSUCItmU3SUZjrQJbX0niJRlRRY-1StUJ7M_Fukd0cTNWngv_3f4DrepWNaJ_D8GlFisn4Dd4Ejp5PexXCMkiwuh8D7C5RHwq8SjpsAGQ2ZKa1PDXbbxFEA0rbiF36nlaA3wUXQVv9-EAC-PomD4J3iM-y6P6ExFgtNgw5NXtsU9vLLePIityoxuuUJf8kGEQ_2dvUuahMKRQSrta_OeP5Lyvg")',
                          }}
                        ></div>
                        <div>
                          <p className="text-[#F5F5F5] text-base font-medium leading-normal">
                            Pride and Prejudice
                          </p>
                          <p className="text-[#888888] text-sm font-normal leading-normal">
                            Jane Austen
                          </p>
                        </div>
                      </div>

                      <div className="flex h-full flex-1 flex-col gap-3 rounded-[0.5rem] min-w-48 cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-[0.5rem]"
                          data-alt="Book cover of The Hobbit"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB46mzbnKXiEpD4d3XEFvZVcz0lA-g6Rq1vvDhfxo7DzPdMvmHh7ywOpu0hpbrrRf8tUPLFsZmZGFfEMrEB5_S8YneBZ6mmJ9wgXKXh94UM-rli2aYVeRswMGbe-v09Srr6bDIIKAmrsYOpvlNPyiY6_8XcRuuCAFUkSX3elAESpYS1NcpOIxL-vwiG_BOxzl9g9tEGWLPleZ9j7b61_nC_IgamjWd1IGPj3jYXfNl-hyRYtS3YNL9aKr5nd8_c5QNSWEe6Jq_qzFQ")',
                          }}
                        ></div>
                        <div>
                          <p className="text-[#F5F5F5] text-base font-medium leading-normal">
                            The Hobbit
                          </p>
                          <p className="text-[#888888] text-sm font-normal leading-normal">
                            J.R.R. Tolkien
                          </p>
                        </div>
                      </div>

                      <Link  className="flex items-center justify-center min-w-32 cursor-pointer group" to={"/all-Books"}>
                        <span className="text-[#F5F5F5] text-sm font-medium group-hover:underline">
                          See all
                        </span>
                        <span className="ml-1 text-[#F5F5F5] group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Featured Categories Card */}
                <div className="lg:col-span-3 rounded-[0.75rem] bg-[#242424] p-6">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] font-['Playfair_Display',_serif] mb-4">
                    Featured Categories
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-[0.5rem] text-center cursor-pointer">
                      <span className="material-symbols-outlined text-[#D4A056] text-3xl">
                        neurology
                      </span>
                      <p className="mt-2 text-[#F5F5F5] font-medium text-sm">
                        Sci-Fi
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-[0.5rem] text-center cursor-pointer">
                      <span className="material-symbols-outlined text-[#D4A056] text-3xl">
                        auto_stories
                      </span>
                      <p className="mt-2 text-[#F5F5F5] font-medium text-sm">
                        Classic Literature
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-[0.5rem] text-center cursor-pointer">
                      <span className="material-symbols-outlined text-[#D4A056] text-3xl">
                        mystery
                      </span>
                      <p className="mt-2 text-[#F5F5F5] font-medium text-sm">
                        Mystery
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-[0.5rem] text-center cursor-pointer">
                      <span className="material-symbols-outlined text-[#D4A056] text-3xl">
                        castle
                      </span>
                      <p className="mt-2 text-[#F5F5F5] font-medium text-sm">
                        Fantasy
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-[0.5rem] text-center cursor-pointer">
                      <span className="material-symbols-outlined text-[#D4A056] text-3xl">
                        history_edu
                      </span>
                      <p className="mt-2 text-[#F5F5F5] font-medium text-sm">
                        History
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-[0.5rem] text-center cursor-pointer">
                      <span className="material-symbols-outlined text-[#D4A056] text-3xl">
                        local_florist
                      </span>
                      <p className="mt-2 text-[#F5F5F5] font-medium text-sm">
                        Romance
                      </p>
                    </div>
                  </div>
                </div>

                {/* How It Works Card */}
                <div className="lg:col-span-1 rounded-[0.75rem] bg-[#242424] p-6">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] font-['Playfair_Display',_serif] mb-4">
                    How It Works
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 size-8 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#D4A056] font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-[#F5F5F5]">
                          Search or List
                        </h4>
                        <p className="text-sm text-[#888888]">
                          Find the book you want, or list one you're ready to
                          part with.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 size-8 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#D4A056] font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-[#F5F5F5]">Connect</h4>
                        <p className="text-sm text-[#888888]">
                          Securely connect with buyers or sellers through our
                          platform.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 size-8 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#D4A056] font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-[#F5F5F5]">
                          Ship & Receive
                        </h4>
                        <p className="text-sm text-[#888888]">
                          Ship your book or get excited for your new read to
                          arrive.
                        </p>
                      </div>
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
};

export default Home;
