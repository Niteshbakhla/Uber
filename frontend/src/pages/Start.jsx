import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
            return (
                        <div
                                    className="h-screen  bg-cover bg-center flex flex-col justify-between items-center"
                                    style={{
                                                backgroundImage: "url('https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-16901.jpg?t=st=1733502376~exp=1733505976~hmac=af16b58504effcce9910dcf79886e93331b5004d065966975f40e79e682d024a&w=996')", // Replace with your image URL
                                    }}
                        >
                                    {/* Logo */}
                                    <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                                                alt="Uber Logo"
                                                className="w-40 mb-6 self-start m-8"
                                    />

                                    {/* Heading */}
                                    <div className="bg-black w-full h-[200px] flex flex-col items-center p-6">
                                                <h2 className="text-white text-4xl md:text-4xl font-bold mb-4 text-center">
                                                            Get started With Uber
                                                </h2>

                                                {/* Button */}
                                                <Link to="/login" className="bg-white w-full lg:w-[400px] text-center  text-black px-16 font-bold py-3 rounded   text-3xl lg:hover:bg-gray-800 active:bg-orange-400 active:text-white transition">
                                                            Continue
                                                </Link>
                                    </div>
                        </div>
            );
};

export default Start;
