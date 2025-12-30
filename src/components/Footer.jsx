import React from 'react';

const Footer = () => {
    return (
        <div>
    <footer className="bg-[#242424]">  
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm text-[#888888]">
        © 2024 BookHaven. All Rights Reserved.
      </p>
      <div className="flex gap-4">
        <a
          className="text-[#888888] hover:text-[#D4A056] transition-colors" /* Was hover:text-primary */
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-[#888888] hover:text-[#D4A056] transition-colors" /* Was hover:text-primary */
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-[#888888] hover:text-[#D4A056] transition-colors" /* Was hover:text-primary */
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
}

export default Footer;
