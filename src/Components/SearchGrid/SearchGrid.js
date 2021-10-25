import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";
import { UserContext } from "../../Contexts/UserContext";
import Toasts from "../Toast/Toast";

export default function SearchGrid() {
  const { searchResults } = useContext(UserContext);
  const { team, addHero, notif } = useContext(TeamContext);
  console.log("DATOS DE LA BUSQUEDA", searchResults);

  console.log(team);
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
        {notif && <Toasts header={notif.header} body={notif.body} />}
        <Button as={Link} to="/">
          HOME
        </Button>
      </div>
    </>
  );
}
