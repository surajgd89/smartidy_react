import React, { createContext, useContext, useState, useEffect } from 'react';

import axios from 'axios';
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const keyValues = window.location.search;
    const urlParams = new URLSearchParams(keyValues);
    const userID = urlParams.get('id');

    const [Data, setData] = useState({
        isLoading: true,
        user: null,
        error: null,
        userID: userID,
    });

    const getData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/users/${userID}`
            );
            setTimeout(() => {
                setData({
                    isLoading: false,
                    user: response.data,
                    userID: userID,
                });
            }, 1000);
        } catch (error) {
            setData({
                isLoading: false,
                user: null,
                error: error.message,
                userID: null,
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
