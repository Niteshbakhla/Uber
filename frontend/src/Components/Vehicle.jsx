import React from "react";

const Vehicle = ({ setVehiclePanel, confirmRide }) => {
            const rides = [
                        {
                                    type: "UberX",
                                    passengers: 3,
                                    time: "8:05am",
                                    description: "Affordable, everyday rides",
                                    price: "$85.95",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRLFIF29Uz8PyU62_D_YkUwLVokqDxm8i-w&s"
                        },
                        {
                                    type: "Comfort",
                                    passengers: 3,
                                    time: "7:53am",
                                    description: "Newer cars with extra legroom",
                                    price: "$94.69",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrxrOF0Xju2erjNBOy2lswBzuAQ53Hnf4cA&s"
                        },
                        {
                                    type: "UberXL",
                                    passengers: 5,
                                    time: "8:03am",
                                    description: "Affordable rides for groups up to 5",
                                    price: "$98.17",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYA4B_Kyv7ROUJi_hMiG5DrcS0kh62Kvghw&s"
                        },
                        {
                                    type: "Uber Pet",
                                    passengers: 3,
                                    time: "7:53am",
                                    description: "Affordable rides for you and your pet",
                                    price: "$81.81",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCO46hm904ST0_GQMr4G_8YzSUxbr4de680g&s"
                        },
            ];

            return (
                        <div className="max-w-md mx-auto   bg-white rounded-lg shadow-lg p-4  ">
                                    <div className="flex justify-between items-center">
                                                <h1 className="text-4xl whitespace-nowrap mb-6 font-bold">Choose a Vehicle</h1>
                                                <i onClick={() => { setVehiclePanel(false) }} className="ri-arrow-down-wide-fill text-3xl bg-black rounded-full p-2 text-white"></i>
                                    </div>
                                    {
                                                rides.map((ride, index) => (
                                                            <div
                                                                        onClick={() => confirmRide(true)}
                                                                        key={index}
                                                                        className={`flex  items-center justify-between border-b active:bg-black/10 ${index === 0 ? "border-red-500" : "border-gray-800"
                                                                                    } pb-4 mb-4 last:border-b-0 last:mb-0`}
                                                            >
                                                                        <div className="flex items-center space-x-4">
                                                                                    <img
                                                                                                src={ride.img}
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
                                                ))
                                    }
                        </div >
            );
};

export default Vehicle;
