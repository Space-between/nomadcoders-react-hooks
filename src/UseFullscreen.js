import React, { Component, useEffect, useState, useRef } from "react";

const useFullscreen = () => {
  const element = useRef();

  useEffect(() => {
    console.log(element.current);
  });
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
      document.exitFullscreen();
  }
  return { element, triggerFull, exitFull };
};

const App = () => {
  const {element, triggerFull, exitFull} = useFullscreen();
  return (
    <div >
      <img
        ref={element}
        src="http://img.newspim.com/news/2019/04/17/20190417113019_w.jpg"
      />
      <button onClick={triggerFull}>Make fullscreen</button>
      <button onClick={exitFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
