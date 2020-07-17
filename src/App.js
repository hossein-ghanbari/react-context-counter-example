import React from "react";
import ContextProvider from "./Context";

import Switcher from "./SetCounter";
import ShowCounter from "./ShowCounter";

const App = () => {
  return (
    <ContextProvider>
      <div style={{ margin: "40px 0", textAlign: "center" }}>
        <Switcher />
        <hr />
        <ShowCounter />
      </div>
    </ContextProvider>
  );
};

export default App;
