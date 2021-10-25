import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Chart from "../../Components/Chart/Chart";
import { TeamContext } from "../../Contexts/TeamContext";

export default function Home() {
  const { team, calcAppearanceAverage, sumPowerstat, calcMax } =
    useContext(TeamContext);
  return (
    <div>
      {team.length > 0 ? (
        <>
          <div style={{ width: "400px", height: "300px", margin: "auto" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <Chart
                combat={sumPowerstat("combat")}
                durability={sumPowerstat("durability")}
                intelligence={sumPowerstat("intelligence")}
                power={sumPowerstat("power")}
                speed={sumPowerstat("power")}
                strength={sumPowerstat("strength")}
              />
            </div>
          </div>
          {/* <ul>POWERSTATS</ul>
          <li>Total combate: {sumPowerstat("combat")}</li>
          <li>Total resistencia: {sumPowerstat("durability")}</li>
          <li>Total inteligencia: {sumPowerstat("intelligence")}</li>
          <li>Total poder: {sumPowerstat("power")}</li>
          <li>Total velocidad: {sumPowerstat("speed")}</li>
          <li>Total fuerza: {sumPowerstat("strength")}</li> */}
          <li>Peso promedio: {calcAppearanceAverage("weight")} kg</li>
          <li>Altura promedio: {calcAppearanceAverage("height")} cm</li>
          <li>Powerstat más alto: {calcMax()}</li>
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
