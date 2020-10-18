import React, { Component, useEffect, useState } from "react";

const useConfirm = (message = "", callback, rejection) => {
  if(typeof callback !== "function"){
      return;
  }; 
  const confirmAction = () => {
    if(window.confirm(message)){
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction; //useConfirm함수가 실행되면 return confirmAction에 의해서 confirmAction함수가 자동실행된다. 
}

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
