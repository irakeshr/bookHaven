import React, { useState, useEffect } from 'react';
// import { userLogin } from '../../server/allAPI'; // Uncomment if needed

const AdminSettings = () => {
    // 1. Get User Details
    const UserInfo = JSON.parse(localStorage.getItem("UserDetails")) || {};

    // 2. Local State for Form Handling
    const [username, setUsername] = useState(UserInfo.name || "");
    const [profileImage, setProfileImage] = useState(UserInfo.profile || "https://via.placeholder.com/150");
    const [selectedFile, setSelectedFile] = useState(null);
    
    // Password States
    const [passwords, setPasswords] = useState({
        current: "",
        newPass: "",
        confirmPass: ""
    });

    // Handle Image Selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setProfileImage(URL.createObjectURL(file)); // Create local preview
        }
    };

    // Handle Password Inputs
    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        setPasswords({ ...passwords, [id]: value });
    };

    // Handle Form Submit
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Updating Profile:", {
            username,
            selectedFile,
            passwords
        });
        // Call your API here to update the user profile
    };

    return (
        <div className="flex-1 flex flex-col font-sans">
            <main className="flex-grow p-6 md:p-10">
                <div className="text-left mb-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5F5]">
                        Admin Settings
                    </h1>
                    <p className="mt-2 text-lg text-[#888888]">
                        Configure your account details and security settings.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* LEFT SIDE: VIEW ONLY Profile Section */}
                    <div className="lg:col-span-5 bg-[#242424] rounded-xl p-8 flex flex-col items-center text-center border border-[#333333] h-fit sticky top-10">
                        <div className="relative group">
                            <img
                                alt="Admin profile"
                                className="h-40 w-40 rounded-full object-cover border-4 border-[#D4A056]/20 shadow-xl"
                                src={profileImage} 
                            />
                            {/* Camera Icon Removed - Left side is View Only */}
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold font-serif text-[#F5F5F5]">
                                {username} {/* Live updates as you type on the right */}
                            </h2>
                            <p className="text-[#888888] mt-1">Super Administrator</p>
                        </div>
                        <div className="mt-8 w-full space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-[#333333]">
                                <span className="text-[#888888] text-sm">Email Address</span>
                                <span className="text-[#F5F5F5] font-medium">
                                    {UserInfo.email}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-[#333333]">
                                <span className="text-[#888888] text-sm">Role</span>
                                <span className="text-[#D4A056] font-medium">{UserInfo.role || "Admin"}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-[#888888] text-sm">Member Since</span>
                                <span className="text-[#F5F5F5] font-medium">Jan 12, 2024</span>
                            </div>
                        </div>
                        {/* "Update Details" Button Removed - Left side is View Only */}
                    </div>

                    {/* RIGHT SIDE: Edit Profile & Security Form */}
                    <div className="lg:col-span-7 bg-[#242424] rounded-xl p-8 border border-[#333333]">
                        <form onSubmit={handleUpdate} className="space-y-8">
                            
                            {/* Section 1: Personal Details */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-[#D4A056]">
                                        manage_accounts
                                    </span>
                                    <h2 className="text-2xl font-bold font-serif text-[#D4A056]">
                                        Profile Details
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    {/* Username Input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-[#888888]">
                                            Username
                                        </label>
                                        <input
                                            className="w-full bg-[#1A1A1A] border-none rounded-lg text-[#F5F5F5] placeholder:text-[#444] focus:ring-[#D4A056] focus:ring-1 py-3 px-4"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Enter your username"
                                        />
                                    </div>
                                    
                                    {/* Profile Picture Input */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-[#888888]">
                                            Update Profile Picture
                                        </label>
                                        <div className="flex items-center gap-4">
                                            <label className="cursor-pointer bg-[#1A1A1A] text-[#888888] hover:text-[#F5F5F5] hover:bg-[#333] transition-colors py-3 px-4 rounded-lg border border-dashed border-[#444] w-full text-center">
                                                <span className="text-sm">Click to upload new image</span>
                                                <input 
                                                    type="file" 
                                                    className="hidden" 
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-[#333333]"></div>

                            {/* Section 2: Security */}
                            <div>
                                <div className="flex items-center gap-3 mb-6 mt-2">
                                    <span className="material-symbols-outlined text-[#D4A056]">
                                        lock
                                    </span>
                                    <h2 className="text-2xl font-bold font-serif text-[#D4A056]">
                                        Change Password
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-[#888888]" htmlFor="current">
                                            Current Password
                                        </label>
                                        <input
                                            className="w-full bg-[#1A1A1A] border-none rounded-lg text-[#F5F5F5] placeholder:text-[#444] focus:ring-[#D4A056] focus:ring-1 py-3 px-4"
                                            id="current"
                                            type="password"
                                            placeholder="••••••••"
                                            value={passwords.current}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-[#888888]" htmlFor="newPass">
                                                New Password
                                            </label>
                                            <input
                                                className="w-full bg-[#1A1A1A] border-none rounded-lg text-[#F5F5F5] placeholder:text-[#444] focus:ring-[#D4A056] focus:ring-1 py-3 px-4"
                                                id="newPass"
                                                type="password"
                                                placeholder="••••••••"
                                                value={passwords.newPass}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-[#888888]" htmlFor="confirmPass">
                                                Confirm New Password
                                            </label>
                                            <input
                                                className="w-full bg-[#1A1A1A] border-none rounded-lg text-[#F5F5F5] placeholder:text-[#444] focus:ring-[#D4A056] focus:ring-1 py-3 px-4"
                                                id="confirmPass"
                                                type="password"
                                                placeholder="••••••••"
                                                value={passwords.confirmPass}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Password Requirements Box */}
                                    <div className="p-4 bg-[#1A1A1A]/50 rounded-lg border border-[#333333]">
                                        <h4 className="text-xs font-bold text-[#888888] uppercase tracking-wider mb-2">
                                            Requirements
                                        </h4>
                                        <ul className="text-xs text-[#888888] space-y-1">
                                            <li className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[12px] text-[#22C55E]">check_circle</span>
                                                Min 8 characters
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[12px] text-[#22C55E]">check_circle</span>
                                                One special character
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-[#333333]">
                                <button
                                    className="px-6 py-3 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors"
                                    type="button"
                                    onClick={() => window.location.reload()} // Simple reset
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-[#D4A056] hover:bg-[#C08F45] text-[#1A1A1A] font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
                                    type="submit"
                                >
                                    Save All Changes
                                </button>
                            </div>
                        </form>
                    </div>
 
                
                </div>
            </main>
        </div>
    );
}

export default AdminSettings;