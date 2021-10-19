import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import SearchBar from "../Components/SearchBar/SearchBar";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchBar} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
