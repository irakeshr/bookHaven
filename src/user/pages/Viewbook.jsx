import React, { useEffect, useState } from "react";
import SellBooks from "./SellBooks";
import { useParams } from "react-router-dom";
import { getOneBook, MakePayment } from "../../server/allAPI";
import { loadStripe } from "@stripe/stripe-js";
const Viewbook = () => {
  const [book, setBook] = useState({});
  const id = useParams();
  console.log(id.id);

  // view book Section
  useEffect(() => {
    const viewBook = async () => {
      try {
        const response = await getOneBook(id.id);
        if (response.status === 200) {
          setBook(response.data.book);
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    viewBook();
  }, []);

  // payment Section
  const makePayment = async () => {
    alert("button clicked");
    console.log(book);
    try {
      const reqBody={
        BookDetails: book
      }

      const respond = await MakePayment(reqBody);
      console.log(respond);
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );
 
      const url =respond.data.session.url


      window.location.href = url;
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                    src={book.imageUrl}
                  />
                  <div className="text-center w-full">
                    <p className="text-3xl font-bold font-['Playfair_Display',_serif] text-[#F5F5F5]">
                      ₹ {book.price}
                    </p>

                    <button className="w-full mt-4 flex items-center justify-center rounded-[0.5rem] h-12 px-6 bg-[#D4A056] text-[#1A1A1A] text-base font-bold transition-all hover:scale-105">
                      <span className="material-symbols-outlined mr-2">
                        add_shopping_cart
                      </span>
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={makePayment}
                      className="w-full mt-2 flex items-center justify-center rounded-[0.5rem] h-12 px-6 bg-[#333] text-[#F5F5F5] text-base font-bold transition-colors hover:bg-[#444]"
                    >
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-3 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
                  <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#F5F5F5]">
                    {book.title}
                  </h1>
                  <p className="mt-2 text-lg text-[#888888]">{book.author}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span
                      className={`text-white text-xs font-semibold px-3 py-1 rounded-full  ${
                        book.status == "pending"
                          ? "bg-[#008000]"
                          : "bg-[#FF0000]"
                      }`}
                    >
                      {book.status == "pending" ? "Available" : "Not Available"}
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
                      {book.abstract}
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#333333] pt-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#F5F5F5]">
                        Publication Details
                      </h3>
                      <ul className="mt-2 space-y-1 text-[#CCCCCC]">
                        <li>
                          <strong>Publisher:</strong> {book.publisher}
                        </li>
                        <li>
                          <strong>Publisher:</strong> {book.category}
                        </li>
                        <li>
                          <strong>Language:</strong> {book.language}
                        </li>
                        <li>
                          <strong>ISBN:</strong> {book.isbn}
                        </li>
                      </ul>
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
};

export default Viewbook;
