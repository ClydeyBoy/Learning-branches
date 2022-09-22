import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(100);

  function updateCount() {
    console.log("clicked")
    setCount(count + 1);
  }

  function updateCount2() {
    console.log("clicked")
    setCount2(count2 - 1);
  }

  //this code will run and render (every update) of the component
  useEffect(function () {
    console.log("component rerendered")
  });

  //This useEffect is tiggered every time the count state vairiable is updated
  useEffect(function () {
    console.log("counter state variable was updated")
  },[count]);

  
  //This useEffect is tiggered when the component mounts
  useEffect(function () {
    console.log("component rendered for the FIRST TIME ONLY")
  },[]);


  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add one!</button>
      <br></br>
      <div>Count: {count2}</div>
      <button onClick={updateCount2}>Subract one!</button>
    </div>
  );
}

export default App;
