import React, { useState, createContext } from "react";
export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCount] = useState(0);
  const value = { counter, setCount };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
