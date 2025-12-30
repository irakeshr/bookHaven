import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
  <div className="relative flex min-h-screen w-full flex-col">
    <div className="flex-grow">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#F5F5F5]">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-[#888888]">
            Have a question or need assistance? We're here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Send us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="form-input w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-[#F5F5F5] mb-2 block"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="form-textarea w-full bg-[#1A1A1A] border-none rounded-[0.5rem] text-[#F5F5F5] placeholder:text-[#888888] focus:ring-[#D4A056] focus:ring-1"
                  id="message"
                  placeholder="How can we help?"
                  rows="6"
                ></textarea>
              </div>
              <div className="mt-2">
                <button className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-12 px-4 bg-[#D4A056] text-[#1A1A1A] text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Send Message</span>
                </button>
              </div>
            </form>
          </div>
          <div className="md:col-span-2 lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-6 text-[#D4A056]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#F5F5F5]">
                  How do I sell my books?
                </h3>
                <p className="text-[#888888] mt-1 text-sm">
                  You can list your books by navigating to the 'Sell a Book'
                  page and filling out the details. It's a simple process that
                  takes only a few minutes.
                </p>
              </div>
              <div className="border-t border-[#333] pt-4">
                <h3 className="font-semibold text-[#F5F5F5]">
                  What are the shipping options?
                </h3>
                <p className="text-[#888888] mt-1 text-sm">
                  Sellers are responsible for shipping their books. They can
                  specify their preferred shipping methods and costs in their
                  listings.
                </p>
              </div>
              <div className="border-t border-[#333] pt-4">
                <h3 className="font-semibold text-[#F5F5F5]">
                  What is your return policy?
                </h3>
                <p className="text-[#888888] mt-1 text-sm">
                  Return policies are set by individual sellers. Please check
                  the specific listing for the seller's return policy before
                  making a purchase.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
              Customer Service
            </h2>
            <div className="space-y-4 text-[#F5F5F5]">
              <a
                className="flex items-center gap-3 group"
                href="mailto:support@bookhaven.com"
              >
                <span className="material-symbols-outlined text-[#D4A056] group-hover:scale-110 transition-transform">
                  email
                </span>
                <span>support@bookhaven.com</span>
              </a>
              <a
                className="flex items-center gap-3 group"
                href="tel:+1234567890"
              >
                <span className="material-symbols-outlined text-[#D4A056] group-hover:scale-110 transition-transform">
                  call
                </span>
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>
          <div className="rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
              Our Address
            </h2>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#D4A056] mt-1">
                location_on
              </span>
              <div className="text-[#F5F5F5]">
                <p>Arimbassery Road, ARA-16, </p>
                <p> Kakkanad - NGO Quarters Rd</p>
                <p> Kerala 682021</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 rounded-[0.75rem] bg-[#242424] p-6 lg:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-['Playfair_Display',_serif] mb-4 text-[#D4A056]">
              Business Hours
            </h2>
            <div className="text-[#F5F5F5]">
              <p>
                <span className="font-semibold">24/7 Online Support</span>
              </p>
              <p className="mt-1 text-sm text-[#888888]">
                Our team is available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
     
  </div>
</div>
    );
}

export default Contact;
