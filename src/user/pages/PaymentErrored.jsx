import React from 'react'
 
import { Link } from 'react-router-dom'
function PaymentErrored() {
  return (
       
<>
      {/* Optional: Add a shake animation style for the error icon */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>

      <div className="bg-[#f8f7f2] font-['Poppins',_sans-serif] antialiased text-[#312e2c]">
        <main className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8 max-w-lg mx-auto">
            
            {/* Error Icon */}
            <div className="mb-6">
              <span className="material-symbols-outlined text-[120px] md:text-[160px] text-[#ef4444] opacity-30 select-none scale-[3.5] animate-shake">
                error
              </span>
            </div>

            <h1 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl font-bold text-[#312e2c] mb-4">
              Payment Failed
            </h1>

            <p className="text-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
              Something went wrong with your transaction. Please check your details and try again.
            </p>

            {/* Try Again Button */}
            <div className="mt-12">
              <a 
                className="inline-block px-12 py-4 bg-[#c7924d] text-white font-semibold rounded-md shadow-sm hover:brightness-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c7924d] focus:ring-offset-[#f8f7f2] uppercase tracking-wider text-sm" 
                href="#"
              >
                Try Again
              </a>
            </div>

            {/* Return Link */}
            <div className="mt-6">
              <a 
                className="text-gray-400 hover:text-[#312e2c] text-sm underline underline-offset-4 transition-colors"
                as={Link} to={"/all-Books"}
              >
                Return to Bag
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default PaymentErrored;
