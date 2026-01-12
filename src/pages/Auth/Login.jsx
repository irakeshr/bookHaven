import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { CommonApi } from "../../server/CommonAPI";
import { userLogin, userRegister,userGoogleLogin } from "../../server/allAPI";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Profile from "../../user/pages/Profile";

const Login = () => {
  const [LoginDetails, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetail((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(LoginDetails);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = LoginDetails;
    if (email && password) {
      const Res = await userLogin(LoginDetails);
      console.log(Res);
      if (Res.status === 200) {
        alert("Login Successfull");
        setLoginDetail({
          email: "",
          Password: "",
        });
        localStorage.setItem("UserDetails",JSON.stringify(Res.data) )

        localStorage.setItem("Token", Res.data.Token);
        navigate("/");
      }
    } else {
      alert("Please fill all the fields");
    }

    console.log(LoginDetails);
  };

  const handleGoogleLogin = async (credentialRes) => {
    const credential = jwtDecode(credentialRes.credential);
    console.log(credential);

    try {
      const logDetails = {
        name: credential.name,
        email: credential.email,
        password: "googlePass",
        profile: credential.picture,
      };

      const res = await userGoogleLogin(logDetails);
      console.log(res);
      if (res.status === 200) {
        alert("Login Successfull");
        localStorage.setItem("UserDetails", JSON.stringify(res.data.user));
        localStorage.setItem("Token", res.data.Token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#1A1A1A] font-['Work_Sans',sans-serif] text-[#F5F5F5] min-h-screen w-full flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex-grow flex flex-col">
          {/* Main Content */}
          <main className="flex-grow   flex items-center justify-center p-4 pb-15">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[600px] mb-12">
              {/* Left Column (Image & Info) */}
              <div className="hidden md:flex md:col-span-7 bg-[#242424] rounded-3xl p-8 flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDArydPlqKqhzrFnV8RXsQ7TVRnO_genGYvrvCANYXPrIWZJiR5IwfFpgV3ZVjH1s_PFsR7YuOjmnA92C5wxnl1xJSMPQPs7shFfxvbNGArBPTO9mNrEmi7hrS-oznBLdBaBzXEuw4CsGzv0EPKlGL_x2ceeG3OLQRdDigKkvOwkJ6i2I9U2nlDCITZBeItVxbIkjnZqa_9BRfN_zCScit9gldftL61FOhF6Svi8OpZxG-T-ckJlAifAtwlwS5U-oTYKrIDkUiXzEM')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-white mb-4">
                      Welcome Back to BookHaven
                    </h1>
                    <p className="text-[#888888] text-lg max-w-md">
                      Continue your journey through thousands of rare finds and
                      literary treasures.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
                      <span className="material-symbols-outlined text-[#D4A056] mb-2 text-3xl">
                        menu_book
                      </span>
                      <h3 className="font-bold text-white">Rare Collection</h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Access exclusive first editions
                      </p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
                      <span className="material-symbols-outlined text-[#D4A056] mb-2 text-3xl">
                        local_shipping
                      </span>
                      <h3 className="font-bold text-white">Fast Delivery</h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Secure shipping worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Login Form) */}
              <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
                <div className="bg-[#242424] rounded-3xl p-8 flex-grow flex flex-col justify-center border border-white/5 shadow-2xl">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-['Playfair_Display',serif] text-white mb-2">
                      Log In
                    </h2>
                    <p className="text-[#888888] text-sm">
                      Enter your credentials to access your account.
                    </p>
                  </div>
                  <form className="space-y-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-[#F5F5F5] mb-1.5"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-[#888888] text-xl">
                            mail
                          </span>
                        </div>
                        <input
                          className="block w-full pl-10 pr-3 py-3 border-none rounded-lg bg-[#1A1A1A] text-[#F5F5F5] placeholder-[#666666] focus:ring-2 focus:ring-[#D4A056] focus:bg-[#202020] transition-all sm:text-sm"
                          id="email"
                          placeholder="you@example.com"
                          type="email"
                          name="email"
                          value={LoginDetails.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-[#F5F5F5] mb-1.5"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-[#888888] text-xl">
                            lock
                          </span>
                        </div>
                        <input
                          className="block w-full pl-10 pr-3 py-3 border-none rounded-lg bg-[#1A1A1A] text-[#F5F5F5] placeholder-[#666666] focus:ring-2 focus:ring-[#D4A056] focus:bg-[#202020] transition-all sm:text-sm"
                          id="password"
                          placeholder="••••••••"
                          type="password"
                          name="Password"
                          value={LoginDetails.Password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-[#333333] bg-[#1A1A1A] text-[#D4A056] focus:ring-[#D4A056] focus:ring-offset-0"
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                        <label
                          className="ml-2 block text-sm text-[#888888]"
                          htmlFor="remember-me"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a
                          className="font-medium text-[#D4A056] hover:text-[#e5b673] transition-colors"
                          href="#"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-[#1A1A1A] bg-[#D4A056] hover:bg-[#e5b673] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A056] focus:ring-offset-[#242424] transition-all transform hover:scale-[1.02]"
                        onClick={handleLogin}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div className="mt-8 relative">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center"
                    >
                      <div className="w-full border-t border-[#333333]"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#242424] text-[#888888]">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        handleGoogleLogin(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                </div>
                <div className="bg-[#242424] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5">
                  <div className="text-center sm:text-left">
                    <p className="text-[#F5F5F5] font-medium">
                      Don't have an account?
                    </p>
                    <p className="text-[#888888] text-sm">
                      Join our community of book lovers today.
                    </p>
                  </div>
                  <a
                    className="whitespace-nowrap rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#2a2a2a] border border-[#333333] transition-all"
                    href="#"
                  >
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
