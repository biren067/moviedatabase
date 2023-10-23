import { createContext, useContext, useState } from 'react';

const IdContext = createContext();

export const IdProvider = ({ children }) => {
  const [id, setId] = useState(null);

  return <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>;
};

export const fetchId = () => {
  const context = useContext(IdContext);
  if (!context) {
    throw new Error('useId must be used within an IdProvider');
  }
  return context;
};
