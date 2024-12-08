import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();



const Usercontext = ({ children }) => {

            const [user, setUser] = useState({
                        email: "",
                        fullName: {
                                    firstName: "",
                                    lastName: ""
                        }
            });

            console.log(user)
            return (
                        <UserDataContext.Provider value={{ user, setUser }}>
                                    {children}
                        </UserDataContext.Provider>
            )
}

export default Usercontext