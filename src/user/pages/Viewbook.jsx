import React from 'react';
import SellBooks from './SellBooks';

const Viewbook = () => {
    return (
       <>
       <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
  <div className="relative flex min-h-screen w-full flex-col">
    <div className="flex-grow">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-1 lg:col-span-1 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col items-center">
            <img
              alt="Book Cover of The Midnight Library"
              className="rounded-[0.5rem] shadow-2xl w-full max-w-[300px] mb-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeUA3gai5F9XP3Lv0IGdj6jROsvh1iiCBr5yW0dwWAZrjfjmFlQuep5Umd6CGZi2Qj-Xe-F5uOhY8jTqZXWoYp-Rv_2u20gbh54zjVe992nQJpPGm_WK2aJ0uzlyOaI_sR0gNClzJnIj1qmkIT02vvnYxjcua9PxS44lofFBFhriATvg7S-jkfF1kxbBwoVnTmetvLhWpdFAR0NELcQoA_Q4CQhP4k9B3jBauCUpBcHgbGPHuNxSqlYUdCfsTZvXmsWSuPJGl5lT8"
            />
            <div className="text-center w-full">
              <p className="text-3xl font-bold font-['Playfair_Display',_serif] text-[#F5F5F5]">
                $18.50
              </p>
              <p className="text-sm text-success font-medium mt-1">
                Condition: Like New
              </p>
              <button className="w-full mt-4 flex items-center justify-center rounded-[0.5rem] h-12 px-6 bg-[#D4A056] text-[#1A1A1A] text-base font-bold transition-all hover:scale-105">
                <span className="material-symbols-outlined mr-2">
                  add_shopping_cart
                </span>
                <span>Add to Cart</span>
              </button>
              <button className="w-full mt-2 flex items-center justify-center rounded-[0.5rem] h-12 px-6 bg-[#333] text-[#F5F5F5] text-base font-bold transition-colors hover:bg-[#444]">
                <span>Buy Now</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#F5F5F5]">
              The Midnight Library
            </h1>
            <p className="mt-2 text-lg text-[#888888]">by Matt Haig</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-[#D4A056]/20 text-[#D4A056] text-xs font-semibold px-3 py-1 rounded-full">
                Fantasy Fiction
              </span>
              <span className="bg-[#D4A056]/20 text-[#D4A056] text-xs font-semibold px-3 py-1 rounded-full">
                Philosophical Fiction
              </span>
              <span className="bg-[#D4A056]/20 text-[#D4A056] text-xs font-semibold px-3 py-1 rounded-full">
                Contemporary
              </span>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] text-[#D4A056]">
                Summary
              </h2>
              <p className="mt-4 text-[#CCCCCC] leading-relaxed">
                Somewhere out beyond the edge of the universe there is a library
                that contains an infinite number of books, each one the story of
                another reality. One tells the story of your life as it is,
                along with another book for the other life you could have lived
                if you had made a different choice at any point in your life.
                While we all wonder how our lives might have been, what if you
                had the chance to go to the library and see for yourself? Would
                any of these other lives truly be better?
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#333333] pt-6">
              <div>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">
                  Author Information
                </h3>
                <p className="mt-2 text-[#CCCCCC]">
                  Matt Haig is an English author and journalist. He has written
                  both fiction and non-fiction for children and adults, often
                  in the speculative fiction genre.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">
                  Publication Details
                </h3>
                <ul className="mt-2 space-y-1 text-[#CCCCCC]">
                  <li>
                    <strong>Publisher:</strong> Viking Press
                  </li>
                  <li>
                    <strong>Published:</strong> 2020
                  </li>
                  <li>
                    <strong>ISBN:</strong> 978-0525559474
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 lg:col-span-4 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Reviews & Ratings
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6">
              <div className="flex flex-col items-center justify-center bg-[#1A1A1A] p-4 rounded-[0.5rem]">
                <p className="text-5xl font-bold text-[#D4A056]">4.8</p>
                <div className="flex text-[#D4A056] mt-1">
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star_half
                  </span>
                </div>
                <p className="text-sm text-[#888888] mt-1">
                  Based on 124 reviews
                </p>
              </div>
              <div className="flex-grow space-y-2">


                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#888888]">5 star</span>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
                    <div
                      className="bg-[#D4A056] h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#888888]">85%</span>
                </div>


                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#888888]">4 star</span>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
                    <div
                      className="bg-[#D4A056] h-2.5 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#888888]">10%</span>
                </div>

                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#888888]">3 star</span>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
                    <div
                      className="bg-[#D4A056] h-2.5 rounded-full"
                      style={{ width: "3%" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#888888]">3%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#888888]">2 star</span>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
                    <div
                      className="bg-[#D4A056] h-2.5 rounded-full"
                      style={{ width: "1" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#888888]">1%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#888888]">1 star</span>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
                    <div
                      className="bg-[#D4A056] h-2.5 rounded-full"
                      style={{ width: "1" }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#888888]">1%</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 border-t border-[#333333] pt-6">
              <div className="flex gap-4">
                <img
                  alt="Reviewer profile picture"
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG6lWTiSj4Q7K-lEyGO_YWohU2k-u4FoqRAWdV_-PNG_liLYkhxedc2OTy9-9PIF8O2n5NORAfwMuTv_VRop720mKCgMGPrPo07EyDg_ydGTN2No5a9EmxHgPRl7LYGsU9I-HG2Yeajs8aGR9E3TTVj9sX_U6pyYUNpu1rKb5TBeWA8sFuKQYH4LHwcfSAsLpbKuewlpYfa0aSRbzM7EANwr_7mgFjF01pu55gSC7LgL0tHwAMBCmfj6w233LlOBMDUCs1tz5dWHs"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#F5F5F5]">Jane Doe</p>
                    <p className="text-xs text-[#888888]">· 2 days ago</p>
                  </div>
                  <div className="flex text-[#D4A056] mt-1">
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                  </div>
                  <p className="mt-2 text-[#CCCCCC]">
                    An absolutely captivating read. The concept is brilliant
                    and executed beautifully. Couldn't put it down!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  alt="Reviewer profile picture"
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeUA3gai5F9XP3Lv0IGdj6jROsvh1iiCBr5yW0dwWAZrjfjmFlQuep5Umd6CGZi2Qj-Xe-F5uOhY8jTqZXWoYp-Rv_2u20gbh54zjVe992nQJpPGm_WK2aJ0uzlyOaI_sR0gNClzJnIj1qmkIT02vvnYxjcua9PxS44lofFBFhriATvg7S-jkfF1kxbBwoVnTmetvLhWpdFAR0NELcQoA_Q4CQhP4k9B3jBauCUpBcHgbGPHuNxSqlYUdCfsTZvXmsWSuPJGl5lT8"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#F5F5F5]">John Smith</p>
                    <p className="text-xs text-[#888888]">· 1 week ago</p>
                  </div>
                  <div className="flex text-[#D4A056] mt-1">
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-base text-gray-600">
                      star
                    </span>
                  </div>
                  <p className="mt-2 text-[#CCCCCC]">
                    A thought-provoking book that will stay with me for a long
                    time. Highly recommend it to anyone feeling a bit lost in
                    life.
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
       </>
    );
}

export default Viewbook;
