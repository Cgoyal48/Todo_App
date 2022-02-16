import React from "react";
import List from "./components/List";
import Heading from "./components/Heading";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Heading userName={"CG"} />
      <div className="App_list">
        <List />
      </div>
    </div>
  );
};

export default App;
