import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Store from "./pages/Store.js"
//import Product from "./pages/product"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Store /></Route>
        {/* <Route path="/store"><Product /></Route> */}
      </Switch>
    </Router>
  );
}

export default App;