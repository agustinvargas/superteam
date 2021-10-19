import React, { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export default function SearchGrid() {
  const { searchResults } = useContext(UserContext);
  console.log("ESTA ES LA DATA QUE SE RECIBE PARA EL GRID", searchResults);

  return (
    <div>
      {searchResults.map((el) => (
        <ul key={el.id}>
          <li>NOMBRE: {el.name}</li>
          <li>COLOR DE OJOS: {el.appearance["eye-color"]}</li>
        </ul>
      ))}
    </div>
  );
}
