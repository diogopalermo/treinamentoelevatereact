import React from 'react';

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Algo deu errado:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback;