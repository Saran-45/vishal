import React, { useMemo, useState } from 'react';

export const Context = React.createContext();

const GlobeData = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(() => {
        const data = localStorage.getItem("LogIn");
        return data ? JSON.parse(data) : false;
    });

    const [userData, setUserData] = useState(() => {
        const data = localStorage.getItem("userData");
        return data ? JSON.parse(data) : null;
    });

    const [isAdmin, setIsAdmin] = useState(() => {
        const data = localStorage.getItem("isAdmin");
        console.log(data)
        return data ? JSON.parse(data) : false;
    });

    const [quantities, setQuantities] = useState(() => {
        const data = localStorage.getItem("quantities");
        return data ? JSON.parse(data) : {};
    });

    const Contexts = useMemo(() => {
        return {
            loggedIn,
            userData,
            isAdmin,
            quantities,
            LogIn: (user) => {
                console.log(user)
                setLoggedIn(true);
                setUserData(user);
                setIsAdmin(user.role === 'ADMIN');
                localStorage.setItem("LogIn", JSON.stringify(true));
                localStorage.setItem("userData", JSON.stringify(user));
                localStorage.setItem("isAdmin", JSON.stringify(user.role === 'ADMIN'));
            },
            LogOut: () => {
                setLoggedIn(false);
                setUserData(null);
                setIsAdmin(false);
                localStorage.setItem("LogIn", JSON.stringify(false));
                localStorage.setItem("userData", JSON.stringify(null));
                localStorage.setItem("isAdmin", JSON.stringify(false));
            },
            updateQuantities: (newQuantities) => {
                setQuantities(newQuantities);
                localStorage.setItem("quantities", JSON.stringify(newQuantities));
            }
        };
    }, [loggedIn, userData, isAdmin, quantities]);

    return (
        <Context.Provider value={Contexts}>
            {children}
        </Context.Provider>
    );
}

export default GlobeData;

