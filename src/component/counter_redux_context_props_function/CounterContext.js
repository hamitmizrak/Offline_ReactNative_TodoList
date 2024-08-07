import React, { createContext, useContext } from 'react';

// Context oluşturma
const CounterContext = createContext();

// Context Provider bileşeni
export const CounterProvider = ({ children }) => {
  const value = {
    info: 'Bu sayaç uygulaması, Redux ve Context API kullanmaktadır.',
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook
export const useCounterContext = () => {
  return useContext(CounterContext);
};
