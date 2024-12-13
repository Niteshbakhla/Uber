import React, { useState } from 'react';
import LocationSearch from './LocationSearch';
import Vehicle from '../Components/Vehicle';

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false)

  const [vehiclePanel, setVehiclePanel] = useState(false)


  return (
    <div className="relative h-screen  bg-gray-100">
      {/* Full Screen Image */}
      <img
        src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/07/CRM_180435-COR-D-US-BP1_HI1_2160x1080.jpg"
        alt="Uber Background"
        className="w-full h-full object-cover sm:object-center"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white  flex justify-end items-center flex-col">
        {/* Content */}
        <div className="text-white text-center p-4 space-y-6 w-full sm:w-1/2 md:w-1/3 bg-opacity-80  rounded-lg">
          {/* Logo */}
          <img onClick={() => { setPanel(false), setVehiclePanel(false) }}
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="mx-auto w-32 sm:w-40"
          />

          {/* Pickup and Destination Inputs */}
          <div>
            {/* Pickup Input */}
            <form action="" className='space-y-4'>
              <input
                onClick={() => setPanel(true)}
                onChange={(e) => setPickup(e.target.value)}
                type="text"
                placeholder="Enter Pickup Location"
                className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none"
              />
              {/* Destination Input */}
              <input
                onClick={() => setPanel(true)}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder="Enter Destination"
                className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none"
              />
            </form>
          </div>
        </div>

        <div className={`lg:w-[1000px] w-full bg-white  lg:h-[300px] transition-all duration-1000 ${panel ? "h-full" : "h-[0]"}`}>
          <LocationSearch setPanel={setVehiclePanel} />
        </div>

        <div className={`lg:w-[1000px] w-full absolute bottom-0 bg-white  lg:h-[300px] transition-all duration-1000 ${vehiclePanel ? "translate-y-[-70%]" : "translate-y-[100%]"} `}>
          <Vehicle />
        </div>


      </div>
    </div >
  );
};

export default Home;
