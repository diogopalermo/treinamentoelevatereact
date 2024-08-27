import React, { useState } from 'react';

const BuggyCounter = () => {
    const [counter, setCounter] = useState(0);
  
    const handleClick = () => {
      setCounter(prevCounter => {
        if (prevCounter === 5) {
          throw new Error('Erro simulado!');
        }
        return prevCounter + 1;
      });
    };
  
    return <button onClick={handleClick}>{counter}</button>;
  };
  export default BuggyCounter;