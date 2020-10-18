import React, { Component, useEffect, useState, useRef } from "react";

const useScroll = () => {
  const onScroll = () => {
    console.log(window.scrollY);
    setState({
        y: window.scrollY
    })
  };
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

export default App;
