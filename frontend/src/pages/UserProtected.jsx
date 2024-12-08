import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/Usercontext'
import { useNavigate } from 'react-router-dom'



const UserProtected = ({ children }) => {

            const navigate = useNavigate();

            const token = localStorage.getItem("token");


            useEffect(() => {
                        if (!token) {
                                    return navigate("/login");
                        }
            }, [token, navigate]);
            return (
                        <>
                                    {children}
                        </>
            )
}

export default UserProtected