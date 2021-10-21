import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroesTeam from "../Components/HeroesTeam/HeroesTeam";
import Login from "../Components/Login/Login";
import SearchBar from "../Components/SearchBar/SearchBar";
import SearchGrid from "../Components/SearchGrid/SearchGrid";
import { UserContext } from "../Contexts/UserContext";
import Home from "../Pages/Home/Home";

function Router() {
  const { login } = useContext(UserContext);

  return (
    <BrowserRouter>
      {/* Validate that the user is loggedin or already has an access token so he/she can access whole site*/}
      {login || localStorage.getItem("userToken") ? (
        <Switch>
          <Route path="/search" component={SearchBar} />
          <Route path="/data" component={SearchGrid} />
          <Route path="/team" component={HeroesTeam} />
          <Route exact path="/" component={Home} />
        </Switch>
      ) : (
        <Route path="*" component={Login} />
      )}
    </BrowserRouter>
  );
}

export default Router;
