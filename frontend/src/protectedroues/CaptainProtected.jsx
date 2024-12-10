import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtected = ({ children }) => {

            const [isLoading, setIsLoading] = useState(true)

            const navigate = useNavigate();

            const token = localStorage.getItem("token");

            const { captain, setCaptain } = useContext(CaptainDataContext);


            useEffect(() => {
                        if (!token) {
                                    return navigate("/captain-login");
                        }
            }, [token]);

            useEffect(() => {
                        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                                    headers: {
                                                Authorization: `Bearer ${token}`,
                                    },

                        }).then(res => {
                                    if (res.status === 200) {
                                                setCaptain(res.data.captain)
                                                setIsLoading(false)
                                    }
                        }).catch(err => {
                                    console.log(err)
                                    localStorage.removeItem("token")
                                    navigate("/captain-login")
                        })
            }, [])

            if (isLoading) {
                        return <div>Loading.....</div>
            }
            return (
                        <>
                                    {children}
                        </>
            )
}

export default CaptainProtected