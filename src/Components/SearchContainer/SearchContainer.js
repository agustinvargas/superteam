import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { TeamContext } from "../../Contexts/TeamContext";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchContainer.css";

export default function SearchContainer() {
  const { team } = useContext(TeamContext);
  return (
    <div className="search-bg">
      <Container className="text-white">
        <h1 className="text-center my-5">Armá tu equipo de superhéroes</h1>
        <p className="text-center">
          {team.length === 0 && "No tenés miembros en tu equipo. "}
          <strong>Podés agregar hasta tres héroes y tres villanos</strong>
        </p>
        <div className="search-bar-container m-auto">
          <SearchBar />
        </div>
      </Container>
    </div>
  );
}
