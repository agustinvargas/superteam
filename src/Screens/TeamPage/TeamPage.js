import React from "react";
import HeroesTeam from "../../Components/HeroesTeam/HeroesTeam";
import useTeam from "../../Hooks/useTeam";
import useNotify from "../../Hooks/useNotify";
import { Redirect } from "react-router";
import TotalTeamStats from "../../Components/TotalTeamStats/TotalTeamStats";

export default function TeamPage() {
  const { team } = useTeam();
  const notify = useNotify();

  if (!team.length) {
    notify.add(
      "No tenés miembros en tu equipo",
      "Es hora de buscar personajes"
    );
  }

  return team.length ? (
    <>
      <TotalTeamStats />
      <HeroesTeam />
    </>
  ) : (
    <Redirect to={"/buscar"} />
  );
}
