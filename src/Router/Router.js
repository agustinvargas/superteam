import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import SearchBar from "../Components/SearchBar/SearchBar";
import SearchGrid from "../Components/SearchGrid/SearchGrid";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchBar} />
        <Route path="/data" component={SearchGrid} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
