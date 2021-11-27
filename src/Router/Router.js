import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";
import ToastList from "../Components/Toast/ToastList/ToastList";
import HeroPage from "../Screens/HeroPage/HeroPage";
import HomePage from "../Screens/HomePage/HomePage";
import LoginPage from "../Screens/LoginPage/LoginPage";
import NotFoundPage from "../Screens/NotFoundPage/NotFoundPage";
import SearchPage from "../Screens/SearchPage/SearchPage";
import SearchResultsPage from "../Screens/SearchResultsPage/SearchResultsPage";
import TeamPage from "../Screens/TeamPage/TeamPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* Public routes */}
        <PublicRoute exact path="/login" component={LoginPage} />
        {/* Private routes */}
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/equipo" component={TeamPage} />
        <PrivateRoute exact path="/buscar" component={SearchPage} />
        <PrivateRoute
          exact
          path="/buscar/:keywordSearch"
          component={SearchResultsPage}
        />
        <PrivateRoute path="/heroe/:heroId" component={HeroPage} />
        {/* 404 Error */}
        <Route exact path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>{" "}
      </Switch>
      <ToastList />
    </BrowserRouter>
  );
}

export default Router;
