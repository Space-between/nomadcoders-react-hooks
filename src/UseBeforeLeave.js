import React, { Component, useEffect, useState } from "react";

const useBeforeLeave = (onBefore) => {
    
    const handle = (event) => {
        const { clientY } = event;
        if(clientY <= 0){
            onBefore();
        }
        
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle)
    }, [])
}

const App = () => {
    const begForLife = () => console.log('ddgsgsdg');
    useBeforeLeave(begForLife);
    return (
        <div>
        <button>Delete the world</button>
        </div>
    );
};

export default App;

