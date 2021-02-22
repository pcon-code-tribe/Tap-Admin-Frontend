import React from 'react';
import { Route, Switch } from "react-router-dom";
import Singin from "./Singin"
import Singup from "./Signup"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component= {Singin} />
        <Route exact path="/Singup" component= {Singup} />
      </Switch>
    </>
  );
}

export default App;
