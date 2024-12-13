import React from 'react';

const LocationSearch = ({ setPanel }) => {
            // Array of locations
            const locations = [
                        '24B, Near Kapoor\'s cafe, Sheriyans Coding School, Bhopal',
                        '12A, Near City Mall, XYZ Software Solutions, Bhopal',
                        '56B, Opposite Central Park, ABC Technologies, Bhopal',
                        '78C, Near Rajmahal Theatre, MNO Corporation, Bhopal'
            ];

            return (
                        <div>
                                    {locations.map((location, index) => (
                                                <div onClick={() => setPanel(true)} key={index} className="p-4 flex items-center my-2 justify-center gap-2 pt-10">
                                                            <h2 className='text-2xl w-10 h-10 bg-[#eee] rounded-full p-4 flex justify-center items-center'>
                                                                        <i className="ri-map-pin-fill"></i>
                                                            </h2>
                                                            <h4 className='text-4xl font-semibold'>{location}</h4>
                                                </div>
                                    ))}
                        </div>
            );
};

export default LocationSearch;
