import { useState, useEffect } from 'react';

export function useErrorHandler(givenError) {
  const [error, setError] = useState(null);
  
  if (givenError) throw givenError;
  
  const errorHandler = (e) => setError(e);
  
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  
  return errorHandler;
}