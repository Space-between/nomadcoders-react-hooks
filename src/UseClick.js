import React, { useEffect, useState, useRef } from "react";

const useClick = (onClick) => {
  
    const element = useRef(); //여기서 useRef는 h1엘리먼트를 의미한다.
    useEffect(() => {
        console.log(element.current);
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () => { //componentWillUnmount일때
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        };
    }, []);
    return element;
}

const App = () => {
  const sayHello = () => console.log("say Hello"); 
  const title = useClick(sayHello); //title로 상수를 정의만 해놓아도 함수가 자동실행된다. 
  return (
    <div>
      <h1 ref={title}>ddd</h1>
    </div>
  );
};

export default App;
