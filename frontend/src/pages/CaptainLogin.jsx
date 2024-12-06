import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CaptainLoginPage = () => {
            const navigate = useNavigate();
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");

            const handleSubmit = (e) => {
                        e.preventDefault();
                        console.log("Email:", email);
                        console.log("Password:", password);
            };

            return (
                        <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 sm:px-6 lg:px-8">
                                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md">
                                                {/* Logo */}
                                                <div className="flex justify-center mb-8">
                                                            <img
                                                                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                                                                        alt="Captain Logo"
                                                                        className="w-28 sm:w-32"
                                                            />
                                                </div>
                                                {/* Heading */}
                                                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                                                            Captain Login
                                                </h2>
                                                {/* Form */}
                                                <form onSubmit={handleSubmit} className="space-y-6">
                                                            {/* Email Field */}
                                                            <div>
                                                                        <label
                                                                                    htmlFor="email"
                                                                                    className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                                    Email Address
                                                                        </label>
                                                                        <input
                                                                                    type="email"
                                                                                    id="email"
                                                                                    value={email}
                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                    required
                                                                                    placeholder="Enter your captain email"
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>
                                                            {/* Password Field */}
                                                            <div>
                                                                        <label
                                                                                    htmlFor="password"
                                                                                    className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                                    Password
                                                                        </label>
                                                                        <input
                                                                                    type="password"
                                                                                    id="password"
                                                                                    value={password}
                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                    required
                                                                                    placeholder="Enter your password"
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>
                                                            {/* Log In Button */}
                                                            <div>
                                                                        <button
                                                                                    type="submit"
                                                                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-sm sm:text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                                        >
                                                                                    Log In
                                                                        </button>
                                                            </div>
                                                </form>
                                                {/* Sign In Button */}
                                                <div className="mt-4">
                                                            <button
                                                                        onClick={() => navigate("/login")}
                                                                        className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-md text-sm sm:text-base hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                                            >
                                                                        Sign In as User
                                                            </button>
                                                </div>
                                                {/* Footer */}
                                                <p className="mt-4 text-center text-sm text-gray-600">
                                                            Don't have an account?{" "}
                                                            <Link to="/captain-signup" className="text-blue-600 hover:underline">
                                                                        Sign up
                                                            </Link>
                                                </p>
                                    </div>
                        </div>
            );
};

export default CaptainLoginPage;
