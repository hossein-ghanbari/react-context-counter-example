import React, { useContext } from "react";
import { CounterContext } from "./Context";

const Switcher = () => {
  const { counter, setCount } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCount(counter + 1)}>+</button>
      <button onClick={() => setCount(counter - 1)}>-</button>
    </>
  );
};

export default Switcher;
