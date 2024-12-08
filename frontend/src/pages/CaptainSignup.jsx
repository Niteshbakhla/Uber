import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const CaptainSignup = () => {
            const [firstname, setFirstname] = useState("");
            const [lastname, setLastname] = useState("");
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [confirmPassword, setConfirmPassword] = useState("");
            const [vehicleColor, setVehicleColor] = useState("");
            const [vehiclePlate, setVehiclePlate] = useState("");
            const [vehicleCapacity, setVehicleCapacity] = useState("");
            const [vehicleType, setVehicleType] = useState("car"); // default "car"
            const [locationLtd, setLocationLtd] = useState("");
            const [locationLng, setLocationLng] = useState("");
            const [status, setStatus] = useState("inactive"); // default "inactive"
            const navigate = useNavigate();

            const { captain, setCaptain } = React.useContext(CaptainDataContext);

            console.log(captain);

            const handleSubmit = async (e) => {
                        e.preventDefault();

                        const captainData = {
                                    fullname: {
                                                firstname,
                                                lastname
                                    },

                                    email,
                                    password,
                                    status,
                                    vehicle: {
                                                color: vehicleColor,
                                                plate: vehiclePlate,
                                                capacity: vehicleCapacity,
                                                vehicleType: vehicleType
                                    }
                        }

                        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)
                        console.log(res)

                        if (res.status === 201) {
                                    toast.success(res.data.message)
                                    setTimeout(() => {
                                                navigate("/captain-home")
                                    }, 1000)
                        }

                        console.log(res)
                        // Here, you would typically send this data to your backend for signup
            };

            return (
                        <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 sm:px-6 lg:px-8">
                                    <Toaster position="top-center" />
                                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-lg">
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
                                                            Captain Signup
                                                </h2>
                                                {/* Form */}
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                            {/* Full Name Fields */}
                                                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                                                        <div className="sm:w-1/2">
                                                                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                                                                                First Name
                                                                                    </label>
                                                                                    <input
                                                                                                type="text"
                                                                                                id="firstname"
                                                                                                value={firstname}
                                                                                                onChange={(e) => setFirstname(e.target.value)}
                                                                                                required
                                                                                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                                    />
                                                                        </div>
                                                                        <div className="sm:w-1/2">
                                                                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                                                                                Last Name
                                                                                    </label>
                                                                                    <input
                                                                                                type="text"
                                                                                                id="lastname"
                                                                                                value={lastname}
                                                                                                onChange={(e) => setLastname(e.target.value)}
                                                                                                required
                                                                                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                                    />
                                                                        </div>
                                                            </div>
                                                            {/* Email Field */}
                                                            <div>
                                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                                                    Email Address
                                                                        </label>
                                                                        <input
                                                                                    type="email"
                                                                                    id="email"
                                                                                    value={email}
                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                    required
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>
                                                            {/* Password Field */}
                                                            <div>
                                                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                                                    Password
                                                                        </label>
                                                                        <input
                                                                                    type="password"
                                                                                    id="password"
                                                                                    value={password}
                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                    required
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        />
                                                            </div>

                                                            {/* Vehicle Info */}
                                                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                                                        <div className="sm:w-1/2">
                                                                                    <label htmlFor="vehicleColor" className="block text-sm font-medium text-gray-700">
                                                                                                Vehicle Color
                                                                                    </label>
                                                                                    <input
                                                                                                type="text"
                                                                                                id="vehicleColor"
                                                                                                value={vehicleColor}
                                                                                                onChange={(e) => setVehicleColor(e.target.value)}
                                                                                                required
                                                                                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                                    />
                                                                        </div>
                                                                        <div className="sm:w-1/2">
                                                                                    <label htmlFor="vehiclePlate" className="block text-sm font-medium text-gray-700">
                                                                                                Vehicle Plate
                                                                                    </label>
                                                                                    <input
                                                                                                type="text"
                                                                                                id="vehiclePlate"
                                                                                                value={vehiclePlate}
                                                                                                onChange={(e) => setVehiclePlate(e.target.value)}
                                                                                                required
                                                                                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                                    />
                                                                        </div>
                                                            </div>
                                                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                                                        <div className="sm:w-1/2">
                                                                                    <label htmlFor="vehicleCapacity" className="block text-sm font-medium text-gray-700">
                                                                                                Vehicle Capacity
                                                                                    </label>
                                                                                    <input
                                                                                                type="number"
                                                                                                id="vehicleCapacity"
                                                                                                value={vehicleCapacity}
                                                                                                onChange={(e) => setVehicleCapacity(e.target.value)}
                                                                                                required
                                                                                                min="1"
                                                                                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                                    />
                                                                        </div>
                                                                        <div className="sm:w-1/2">
                                                                                    <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                                                                                                Vehicle Type
                                                                                    </label>
                                                                                    <select
                                                                                                id="vehicleType"
                                                                                                value={vehicleType}
                                                                                                onChange={(e) => setVehicleType(e.target.value)}
                                                                                                required
                                                                                                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                                    >
                                                                                                <option value="car">Car</option>
                                                                                                <option value="motorcycle">Motorcycle</option>
                                                                                                <option value="auto">Auto</option>
                                                                                    </select>
                                                                        </div>
                                                            </div>
                                                            {/* Location */}

                                                            {/* Status */}
                                                            <div>
                                                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                                                    Status
                                                                        </label>
                                                                        <select
                                                                                    id="status"
                                                                                    value={status}
                                                                                    onChange={(e) => setStatus(e.target.value)}
                                                                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                        >
                                                                                    <option value="active">Active</option>
                                                                                    <option value="inactive">Inactive</option>
                                                                        </select>
                                                            </div>
                                                            {/* Sign Up Button */}
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
                                                            <Link to={"/captain-login"} className="text-blue-600 hover:underline">
                                                                        Log in
                                                            </Link>
                                                </p>
                                    </div>
                        </div>
            );
};

export default CaptainSignup;
