import React, { useState } from 'react';

const SimpleComponent = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Olá, {name}!</h1>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
};

export default SimpleComponent;