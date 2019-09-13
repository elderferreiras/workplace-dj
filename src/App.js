import React from 'react';
import './App.css';
import Home from "./components/theme/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const routingTypes = {
    SIGN_UP: 'SIGN_UP',
    SIGN_IN: 'SIGN_IN',
    RESET_PASSWORD: 'RESET_PASSWORD',
    NEW_PASSWORD: 'NEW_PASSWORD'
};

function App() {
  return (
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={() => <Home action={routingTypes.SIGN_UP}/>} />
          <Route path="/sign-in" exact component={() => <Home action={routingTypes.SIGN_IN}/>} />
          <Route path="/reset-password" exact component={() => <Home action={routingTypes.RESET_PASSWORD}/>} />
          <Route path="/new-password" exact component={() => <Home action={routingTypes.NEW_PASSWORD}/>} />
      </Router>
  );
}

export default App;
