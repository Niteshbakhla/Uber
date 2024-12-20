import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import ConfirmRidePop from '../Components/ConfirmRidePop'

const CaptainHome = () => {

  const [RidePopOpen, setRideOpenPop] = useState(false)
  const [confirmRidePopOpen, setConfirmRidePopOpen] = useState(true)

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div className={`fixed w-full z-10 bottom-0 ${RidePopOpen ? " translate-y-0" : " translate-y-full"}  transition-all duration-900 bg-white px-3 py-10 pt-12`}>
        <RidePopUp setRideOpenPop={setRideOpenPop} setConfirmRidePopOpen={setConfirmRidePopOpen} />
      </div>
      <div className={`fixed w-full h-screen z-10 bottom-0 ${confirmRidePopOpen ? "translate-y-0" : "translate-y-full"}  transition-all duration-700 bg-white px-3 py-10 pt-12`}>
        <ConfirmRidePop setConfirmRidePopOpen={setConfirmRidePopOpen} />
      </div>
    </div>
  )
}

export default CaptainHome