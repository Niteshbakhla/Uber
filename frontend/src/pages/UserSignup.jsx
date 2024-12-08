import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import Usercontext, { UserDataContext } from "../context/Usercontext";

const UserSignup = () => {
            const navigate = useNavigate();
            const [name, setName] = useState("");
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [lastname, setLastname] = useState("");


            const { user, setUser } = React.useContext(UserDataContext)
            const handleSubmit = async (e) => {
                        e.preventDefault();

                        try {
                                    const userData = {
                                                fullName: {
                                                            firstname: name,
                                                            lastname: lastname
                                                },

                                                email: email,
                                                password: password
                                    }
                                    setUser(userData)

                                    setName("")
                                    setLastname("")
                                    setEmail("")
                                    setPassword("")

                                    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, userData)
                                    if (res.status === 201) {
                                                toast.success(res.data.message);
                                                localStorage.setItem("token", res.data.token)
                                                setTimeout(() => {
                                                            navigate("/home")
                                                }, 1000)
                                    }

                        } catch (error) {
                                    toast.error(error.response.data.message)
                                    return console.log(error.message)
                        }
            };



            return (
                        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
                                    <Toaster position="top-center" />

                                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md">
                                                {/* Logo */}
                                                <div className="flex justify-center mb-8">
                                                            <img
                                                                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                                                                        alt="User Logo"
                                                                        className="w-28 sm:w-32"
                                                            />
                                                </div>
                                                {/* Heading */}
                                                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                                                            User Signup
                                                </h2>
                                                {/* Form */}
                                                <form onSubmit={handleSubmit} className="space-y-6">
                                                            {/* Name Field */}
                                                            <div>
                                                                        <label
                                                                                    htmlFor="name"
                                                                                    className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                                    Full Name
                                                                        </label>
                                                                        <input
                                                                                    type="text"
                                                                                    id="name"
                                                                                    value={name}
                                                                                    onChange={(e) => setName(e.target.value)}
                                                                                    required
                                                                                    placeholder="Enter your full name"
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>

                                                            <div>
                                                                        <label
                                                                                    htmlFor="lastname"
                                                                                    className="block text-sm font-medium text-gray-700"
                                                                        >
                                                                                    Lastname
                                                                        </label>
                                                                        <input
                                                                                    type="text"
                                                                                    id="lastname"
                                                                                    value={lastname}
                                                                                    onChange={(e) => setLastname(e.target.value)}
                                                                                    required
                                                                                    placeholder="Enter your last name"
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>
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
                                                                                    placeholder="Enter your email"
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
                                                                                    placeholder="Create a password"
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>
                                                            {/* Confirm Password Field */}

                                                            {/* Signup Button */}
                                                            <div>
                                                                        <button
                                                                                    type="submit"
                                                                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-sm sm:text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                                        >
                                                                                    Sign Up
                                                                        </button>
                                                            </div>
                                                </form>
                                                {/* Footer */}
                                                <p className="mt-4 text-center text-sm text-gray-600">
                                                            Already have an account?{" "}
                                                            <Link to={"/login"} className="text-blue-600 hover:underline">
                                                                        Log in
                                                            </Link>
                                                </p>
                                    </div>
                        </div>
            );
};

export default UserSignup;
