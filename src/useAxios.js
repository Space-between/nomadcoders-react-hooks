import React, { Component, useEffect, useState, useRef } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [trigger, setTrigger] = useState(0);
    useEffect(() => {
        axiosInstance(opts).then(data => { //성공
            setState({
                ...state,
                loading:false,
                data
            });
        }).catch(error => { //실패
            setState({
                ...state,
                loading:false,
                error
            });
        });
    }, [trigger]);
    const [state, setState] = useState({
        loading:true,
        error: null,
        data: null
    });
    
    if(!opts.url){
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    
    return {...state, refetch};
};

export default useAxios;