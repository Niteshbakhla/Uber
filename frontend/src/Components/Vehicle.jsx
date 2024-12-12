import React from "react";

const Vehicle = () => {
            const rides = [
                        {
                                    type: "UberX",
                                    passengers: 3,
                                    time: "8:05am",
                                    description: "Affordable, everyday rides",
                                    price: "$85.95",
                        },
                        {
                                    type: "Comfort",
                                    passengers: 3,
                                    time: "7:53am",
                                    description: "Newer cars with extra legroom",
                                    price: "$94.69",
                        },
                        {
                                    type: "UberXL",
                                    passengers: 5,
                                    time: "8:03am",
                                    description: "Affordable rides for groups up to 5",
                                    price: "$98.17",
                        },
                        {
                                    type: "Uber Pet",
                                    passengers: 3,
                                    time: "7:53am",
                                    description: "Affordable rides for you and your pet",
                                    price: "$81.81",
                        },
            ];

            return (
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
                                    {rides.map((ride, index) => (
                                                <div
                                                            key={index}
                                                            className={`flex items-center justify-between border-b ${index === 0 ? "border-red-500" : "border-gray-200"
                                                                        } pb-4 mb-4 last:border-b-0 last:mb-0`}
                                                >
                                                            <div className="flex items-center space-x-4">
                                                                        <img
                                                                                    src="https://via.placeholder.com/50"
                                                                                    alt={`${ride.type}`}
                                                                                    className="w-12 h-12 object-cover"
                                                                        />
                                                                        <div>
                                                                                    <h3 className="text-lg font-bold">{ride.type}</h3>
                                                                                    <p className="text-gray-600 text-sm">
                                                                                                {ride.passengers} passengers • {ride.time}
                                                                                    </p>
                                                                                    <p className="text-gray-500 text-xs">{ride.description}</p>
                                                                        </div>
                                                            </div>
                                                            <div>
                                                                        <p className="text-xl font-semibold">{ride.price}</p>
                                                            </div>
                                                </div>
                                    ))}
                        </div>
            );
};

export default Vehicle;
