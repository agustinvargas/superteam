import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import HeroDetail from "../Components/HeroDetail/HeroDetail";
import HeroesTeam from "../Components/HeroesTeam/HeroesTeam";
import Login from "../Components/Login/Login";
import NavBar from "../Components/Navbar/Navbar";
import SearchContainer from "../Components/SearchContainer/SearchContainer";
import SearchGrid from "../Components/SearchGrid/SearchGrid";
import { UserContext } from "../Contexts/UserContext";

function Router() {
  const { login } = useContext(UserContext);

  return (
    <BrowserRouter>
      {/* Validate that the user is loggedin or already has an access token so he/she can access whole site*/}
      {login || localStorage.getItem("userToken") ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/heroe/:heroId" component={HeroDetail} />
            <Route path="/resultados" component={SearchGrid} />
            <Route path="/buscador" component={SearchContainer} />
            <Route path="/equipo" component={HeroesTeam} />
            <Route exact path="/" component={HeroesTeam} />
          </Switch>
          <Footer />
        </>
      ) : (
        <Route path="*" component={Login} />
      )}
    </BrowserRouter>
  );
}

export default Router;
