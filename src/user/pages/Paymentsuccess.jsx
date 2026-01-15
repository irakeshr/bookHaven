import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
 
 
function PaymentSuccess() {
 const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    // Trigger animation after a tiny delay
    setShowIcon(true);
  }, []);

  return (
   
  <div className="bg-[#f8f7f2] font-['Poppins',_sans-serif] antialiased min-h-screen flex items-center justify-center">
      <main className="text-center p-8 max-w-lg mx-auto">
        <div className="mb-6 flex justify-center">
 <span
      className={`material-symbols-outlined text-[#c7924d] transform transition-all duration-1000 cubic-bezier(0.175, 0.885, 0.32, 1.275) 
      ${showIcon ? "scale-[3.5] opacity-100" : "scale-0 opacity-0 rotate-[-180deg]"}`}
    >
      check_circle
    </span>

        </div>
        
        <h1 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-bold text-gray-900">
          Payment Successful
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Your order has been placed and your next adventure is on its way.
        </p>
        
        <div className="mt-12 hidden"> {/* Hidden for now as there's no order details page */}
          <a 
            className="inline-block px-12 py-4 bg-[#c7924d] text-white font-medium rounded-lg shadow-sm hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c7924d] focus:ring-offset-[#f8f7f2] uppercase tracking-wider text-sm" 
            href="#"
          >
            View Order Details
          </a>
        </div>
        
        <div className="mt-8">
          <Link
            className="text-gray-500 hover:text-[#c7924d] transition-colors text-sm font-medium" 
            to={"/all-Books"}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  )
}

export default PaymentSuccess
