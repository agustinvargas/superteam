import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { TeamContext } from "../../Contexts/TeamContext";
import { UserContext } from "../../Contexts/UserContext";

export default function SearchGrid() {
  const { searchResults } = useContext(UserContext);
  const { team, addHero } = useContext(TeamContext);
  console.log("DATOS DE LA BUSQUEDA", searchResults);

  console.log(team);
  return (
    <div>
      {searchResults.map((el) => (
        <ul key={el.id}>
          <li>NOMBRE: {el.name}</li>
          <li>
            <img src={el.image.url} alt={el.name} />
          </li>
          <Button onClick={() => addHero(el)}>AGREGAR</Button>
        </ul>
      ))}
    </div>
  );
}
