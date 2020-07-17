import React, { useContext } from "react";
import { CounterContext } from "./Context";

const Switcher = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <div>counter : {counter}</div>
    </>
  );
};

export default Switcher;
