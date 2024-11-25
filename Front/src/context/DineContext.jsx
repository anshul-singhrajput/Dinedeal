import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// Create the DineContext
export const DineContext = createContext();

// Create the DineProvider component
export const DineContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [role, setRole] = useState('');
    const [bookedDeals, setBookedDeals] = useState([]);
    const navigate = useNavigate();

    const login = (authToken, userRole) => {
        localStorage.setItem('token', authToken);
        localStorage.setItem('role', userRole);

        setToken(authToken);
        setRole(userRole);
        setIsLoggedIn(true);

        // Optional: Redirect based on role
        if (userRole === "admin") {
            navigate("/admin-dashboard");
        } else if (userRole === "hotel") {
            navigate("/hotel-dashboard");
        } else {
            navigate("/");
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        setToken('');
        setRole('');
        setIsLoggedIn(false);

        navigate("/login");
    };

    const addDeal = (deal) => {
        setBookedDeals((prevDeals) => {
          const updatedDeals = [...prevDeals, deal];
          localStorage.setItem("bookedDeals", JSON.stringify(updatedDeals));
          return updatedDeals;
        });
      };

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedRole = localStorage.getItem('role');
        const savedDeals = JSON.parse(localStorage.getItem("bookedDeals")) || [];

        if (savedToken) {
            setToken(savedToken);
            setRole(savedRole || '');
            setIsLoggedIn(true);
            setBookedDeals(savedDeals);
        }
    }, []);

    const value = {
        isLoggedIn, login, logout, navigate, token, role, bookedDeals, addDeal
    };



    return (
        <DineContext.Provider value={value}>
            {props.children}
        </DineContext.Provider>
    )
}