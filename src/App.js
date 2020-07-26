import React from "react";
import JobForm from "./Components/Form/Form";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={JobForm} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
