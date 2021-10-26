import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroDetail from "../Components/HeroDetail/HeroDetail";
import HeroesTeam from "../Components/HeroesTeam/HeroesTeam";
import Login from "../Components/Login/Login";
import NavBar from "../Components/Navbar/Navbar";
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
        <>
          <NavBar />
          <Switch>
            <Route path="/search/results" component={SearchGrid} />
            <Route path="/search" component={SearchBar} />
            <Route path="/team" component={HeroesTeam} />
            <Route path="/hero/:heroId" component={HeroDetail} />
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      ) : (
        <Route path="*" component={Login} />
      )}
    </BrowserRouter>
  );
}

export default Router;
