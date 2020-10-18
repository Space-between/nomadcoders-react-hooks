import React, { Component, useEffect, useState } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  useEffect(sayHello,); 
  return (
    <div>
      <div>ddd</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default App;
