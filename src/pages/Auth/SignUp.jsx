import React from "react";
import { useState } from "react";
import { userRegister } from "../../server/allAPI";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [SignDetails, setSignDetail] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignDetail((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(SignDetails);
  };

  const handleSign = async (e) => {
    try {
      e.preventDefault();
      const { name, email, password } = SignDetails;
      if (name && email && password) {
        const res = await userRegister(SignDetails);
        if (res.status === 200) {
          alert("Registration Successfull");
          setSignDetail({ name: "", email: "", password: "" });
          navigate("/login");
        }
      } else {
        alert("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#1A1A1A] font-['Work_Sans',sans-serif] text-[#F5F5F5] min-h-screen w-full flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex-grow flex flex-col">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full flex-grow flex flex-col">
            {/* Content Grid */}
            <div className="flex flex-col items-center justify-center flex-grow">
              <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Side: Hero / Info */}
                <div className="hidden md:flex flex-col col-span-5 bg-[#242424] rounded-xl p-8 justify-between relative overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCD_Mx1C5YQbVIvEgQ3Lrl3GBfu-psWRIVGcZFl94Xr7z_BvqgcSMNZMw8OKGdn8nIgPvzPGpJTt6nTACRyG3rFdHeVh13tQbceyoASm--YV7a4-djTao2dECXqvTDJEChuRbXRgSPs76fpiOxaQcgvK2hHZAWorlRC1iUWiUNWl6e4n4-8tY0d7axywx6A4ABy7UaxZ2BzdFUzeiPpL9pu-lT2oEfMrWjxOUm90MgTAKt4WHOblU9VMzHGUThR89A4wJUVJDoo47I')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424] to-transparent"></div>
                  <div className="relative z-10">
                    <h1 className="text-4xl font-['Playfair_Display',serif] font-bold text-[#D4A056] mb-4 leading-tight">
                      Join the Community of Book Lovers
                    </h1>
                    <p className="text-[#888888] text-lg leading-relaxed">
                      Discover rare finds, sell your old favorites, and connect
                      with readers worldwide.
                    </p>
                  </div>
                  <div className="relative z-10 mt-12 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#D4A056]">
                        check_circle
                      </span>
                      <span className="text-[#F5F5F5]">
                        Curated collections
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#D4A056]">
                        check_circle
                      </span>
                      <span className="text-[#F5F5F5]">
                        Secure transactions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#D4A056]">
                        check_circle
                      </span>
                      <span className="text-[#F5F5F5]">
                        Passionate community
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="col-span-1 md:col-span-7 bg-[#242424] rounded-xl p-8 md:p-10 border border-[#333] shadow-xl">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2">
                      Create an Account
                    </h2>
                    <p className="text-[#888888]">
                      Enter your details below to get started
                    </p>
                  </div>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-[#F5F5F5]"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-[#888888] text-[20px]">
                              person
                            </span>
                          </div>
                          <input
                            className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg py-3 pl-10 pr-4 text-[#F5F5F5] placeholder-[#666] focus:outline-none focus:border-[#D4A056] focus:ring-1 focus:ring-[#D4A056] transition-colors"
                            id="name"
                            placeholder="your Name"
                            type="text"
                            name="name"
                            value={SignDetails.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-[#F5F5F5]"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-[#888888] text-[20px]">
                              mail
                            </span>
                          </div>
                          <input
                            className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg py-3 pl-10 pr-4 text-[#F5F5F5] placeholder-[#666] focus:outline-none focus:border-[#D4A056] focus:ring-1 focus:ring-[#D4A056] transition-colors"
                            id="email"
                            placeholder="john@example.com"
                            type="email"
                            name="email"
                            value={SignDetails.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-[#F5F5F5]"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-[#888888] text-[20px]">
                            lock
                          </span>
                        </div>
                        <input
                          className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg py-3 pl-10 pr-4 text-[#F5F5F5] placeholder-[#666] focus:outline-none focus:border-[#D4A056] focus:ring-1 focus:ring-[#D4A056] transition-colors"
                          id="password"
                          placeholder="••••••••"
                          type="password"
                          name="password"
                          value={SignDetails.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-[#F5F5F5]"
                        htmlFor="confirm-password"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-[#888888] text-[20px]">
                            lock_reset
                          </span>
                        </div>
                        <input
                          className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg py-3 pl-10 pr-4 text-[#F5F5F5] placeholder-[#666] focus:outline-none focus:border-[#D4A056] focus:ring-1 focus:ring-[#D4A056] transition-colors"
                          id="confirm-password"
                          placeholder="••••••••"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex items-start pt-2">
                      <div className="flex items-center h-5">
                        <input
                          className="w-4 h-4 bg-[#1A1A1A] border border-[#333] rounded focus:ring-[#D4A056] focus:ring-offset-0 text-[#D4A056]"
                          id="terms"
                          type="checkbox"
                        />
                      </div>
                      <label
                        className="ml-2 text-sm text-[#888888]"
                        htmlFor="terms"
                      >
                        I agree to the{" "}
                        <a className="text-[#D4A056] hover:underline" href="#">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a className="text-[#D4A056] hover:underline" href="#">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    <button
                      className="w-full bg-[#D4A056] hover:bg-[#c29048] text-[#1A1A1A] font-bold py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
                      onClick={handleSign}
                      type="button"
                    >
                      <span>Sign Up</span>
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </button>
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#333]"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-[#242424] text-[#888888]">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#333] rounded-lg hover:bg-[#333] transition-colors text-[#F5F5F5] text-sm font-medium">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          ></path>
                        </svg>
                        Google
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#333] rounded-lg hover:bg-[#333] transition-colors text-[#F5F5F5] text-sm font-medium">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                        Facebook
                      </button>
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-sm text-[#888888]">
                        Already have an account?{" "}
                        <a
                          className="text-[#D4A056] font-medium hover:underline"
                          href="#"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
