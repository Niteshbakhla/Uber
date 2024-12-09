import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtected = ({ children }) => {


            const navigate = useNavigate();

            const token = localStorage.getItem("token");

            const { captain, setCaptain } = useContext(CaptainDataContext);

            useEffect(() => {
                        if (!token) {
                                    return navigate("/captain-login");
                        }
            }, [token, navigate]);
            return (
                        <>
                                    {children}
                        </>
            )
}

export default CaptainProtected