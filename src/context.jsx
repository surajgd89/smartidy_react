import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();

const AppProvider = ({ children }) => {
    // const keyValues = window.location.search;
    // const urlParams = new URLSearchParams(keyValues);
    // const userID = urlParams.get('id');

    const [Data, setData] = useState({
        isLoading: true,
        userData: null,
        error: null,
    });

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users/1`);
            setTimeout(() => {
                setData({
                    isLoading: false,
                    userData: response.data,
                });
            }, 1000);
        } catch (error) {
            setData({
                isLoading: false,
                userData: null,
                error: error.message,
            });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <AppContext.Provider value={{ Data }}>{children}</AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
