import React, { Component, useEffect, useState, useRef } from "react";

const useNetwork = onChange => {
    
    const [status, setStatus] = useState(window.navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function"){
            onChange(window.navigator.onLine);
        }
        setStatus(window.navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;
}

const App = () => {
    const onLine = useNetwork();
    return (
        <div>
            <h1>{onLine ? "online" : "offline"}</h1>
    
        </div>
    );
};

export default App;

