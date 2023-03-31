import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [Data, setData] = useState({
        isLoading: true,
        user: null,
        error: null,
    });
    // const [isError, setIsError] = useState(null);
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users/1');
            setData({
                isLoading: false,
                user: response.data,
            });
        } catch (error) {
            setData({
                isLoading: false,
                user: null,
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
