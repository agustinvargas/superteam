import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";
import Chart from "../Chart/Chart";

export default function HeroesTeam() {
  const { team, removeHero } = useContext(TeamContext);
  return team.map((el) => (
    <>
      <img src={el.image.url} alt={el.name} />
      <div style={{ width: "300px", height: "600px" }}>
        <Chart
          key={el.id}
          combat={el.powerstats.combat}
          durability={el.powerstats.durability}
          intelligence={el.powerstats.intelligence}
          power={el.powerstats.power}
          speed={el.powerstats.speed}
          strength={el.powerstats.strength}
        />
      </div>
      {/* <ul key={el.id}>
        <li>{el.name}</li>
        <li>
        <img src={el.image.url} alt={el.name} />
        </li>
        <h5>POWERSTATS</h5>
        <li>combate: {el.powerstats.combat}</li>
        <li>resistencia: {el.powerstats.durability}</li>
        <li>inteligencia: {el.powerstats.intelligence}</li>
        <li>poder: {el.powerstats.power}</li>
        <li>velocidad: {el.powerstats.speed}</li>
        <li>fuerza: {el.powerstats.strength}</li>
      </ul> */}
      <Button as={Link} to={`/hero/${el.id}`}>
        Ver detalles
      </Button>
      <Button onClick={() => removeHero(el.id)}>Remover</Button>
    </>
  ));
}
