import React from 'react';

const CaptainHome = () => {
            return (
                        <div className="relative h-screen bg-gray-100">
                                    {/* Full Screen Image */}
                                    <img
                                                src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/07/CRM_180435-COR-D-US-BP1_HI1_2160x1080.jpg"
                                                alt="Uber Background"
                                                className="w-full h-full object-cover sm:object-center"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                                                {/* Content */}
                                                <div className="text-white text-center p-4 space-y-6 w-full sm:w-1/2 md:w-1/3 bg-opacity-80 bg-gray-900 rounded-lg">
                                                            {/* Logo */}
                                                            <img
                                                                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                                                                        alt="Uber Logo"
                                                                        className="mx-auto w-32 sm:w-40"
                                                            />

                                                            {/* Pickup and Destination Inputs */}
                                                            <div className="space-y-4">
                                                                        {/* Pickup Input */}
                                                                        <input
                                                                                    type="text"
                                                                                    placeholder="Enter Pickup Location"
                                                                                    className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                                                                        />
                                                                        {/* Destination Input */}
                                                                        <input
                                                                                    type="text"
                                                                                    placeholder="Enter Destination"
                                                                                    className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                                                                        />
                                                            </div>
                                                </div>
                                    </div>
                        </div>
            );
};

export default CaptainHome;
