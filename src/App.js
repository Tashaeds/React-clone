import React from "react";
import './App.css'
import ClonedObjects from './Clone/ClonedObjects';
import {useState} from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const increment = () => {
    if (counter >= 3){
      setCounter(0);
     }
     else {
      setCounter(counter + 1)
     }
   };
    const decrement = () => {
        setCounter(0);
    };

    const randomNumber = ()=> { setCounter (Math.floor (Math.random () * (max - min + 4)))
    };
  
    return(
      <div>
      <h1>Our Reviews</h1>
      <ClonedObjects/>
      <button onClick={() => increment()}>Suprise Me</button>
      </div>
  
      
    );
  };
  

export default App;
  