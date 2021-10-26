import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import HeroesTeam from "../../Components/HeroesTeam/HeroesTeam";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TotalTeamStats from "../../Components/TotalTeamStats/TotalTeamStats";
import { TeamContext } from "../../Contexts/TeamContext";

export default function HomePage() {
  const { team } = useContext(TeamContext);
  return team.length > 0 ? (
    <>
      <TotalTeamStats /> <HeroesTeam />
    </>
  ) : (
    <Container>
      <h1 className="text-center my-5">Armá tu equipo</h1>
      <p className="text-center">Podés agregar tres héroes y tres villanos</p>
      <SearchBar />
    </Container>
  );
}
