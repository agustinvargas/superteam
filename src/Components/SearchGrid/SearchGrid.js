import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";
import { UserContext } from "../../Contexts/UserContext";
import Toasts from "../Toast/Toast";

export default function SearchGrid() {
  const { searchResults } = useContext(UserContext);
  const { team, addHero, err } = useContext(TeamContext);
  console.log("DATOS DE LA BUSQUEDA", searchResults);

  console.log(team);
  console.log("que es err", err);
  return (
    <>
      <div>
        {searchResults
          ? searchResults.map((el) => (
              <ul key={el.id}>
                <li>NOMBRE: {el.name}</li>
                <li>
                  <img src={el.image.url} alt={el.name} />
                </li>
                <Button onClick={() => addHero(el)}>AGREGAR</Button>
              </ul>
            ))
          : null}
        {err ? (
          <div>
            <Toasts header={err.header} body={err.body} />{" "}
          </div>
        ) : null}
        <Button as={Link} to="/">
          HOME
        </Button>
      </div>
    </>
  );
}
