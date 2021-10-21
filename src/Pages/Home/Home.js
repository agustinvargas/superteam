import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";

export default function Home() {
  const { team, sumPowerstat } = useContext(TeamContext);

  return (
    <div>
      {team.length > 0 ? (
        <>
          <ul>POWERSTATS</ul>
          <li>Total cambate: {sumPowerstat("combat")}</li>
          <li>Total resistencia: {sumPowerstat("durability")}</li>
          <li>Total inteligencia: {sumPowerstat("intelligence")}</li>
          <li>Total poder: {sumPowerstat("power")}</li>
          <li>Total velocidad: {sumPowerstat("speed")}</li>
          <li>Total fuerza: {sumPowerstat("strength")}</li>
        </>
      ) : (
        <p>No hay nada en team</p>
      )}
      <Button as={Link} to="/search">
        IR A SEARCH
      </Button>
    </div>
  );
}
