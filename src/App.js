import React from "react";
import "./App.css";
import Weather from "./Components/weather/Weather";
import { store } from "./Assert/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Weather />
      </React.Fragment>
    </Provider>
  );
};

export default App;
