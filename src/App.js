import React, { Component, useEffect, useState, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json" 
  }); 
  console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading? "Loading":"loading"}</h2>
      <button onClick={refetch}>ddd</button>
    </div>
  );
};

export default App;
