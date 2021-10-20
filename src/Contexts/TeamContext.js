import React, { useState } from "react";
import { createContext } from "react";

export const TeamContext = createContext([]);

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  // Validates functions
  // Validate that a character is already added
  const isAdded = (id) => team.some((el) => el.id === id);
  // Validate the alignment hero (in the team, there must be three good heroes and three bad heroes)
  const alignmentCounts = (alignmentType) => {
    return team.filter((el) => el.biography.alignment === alignmentType).length;
  };
  const alignmentCheck = (hero) => {
    const alignment = hero.biography.alignment;
    const limit = 3;

    if (alignment === "good") {
      const goodHeroesCounts = alignmentCounts("good");
      if (goodHeroesCounts === limit) return "good limit";
    }

    if (alignment === "bad") {
      const badHeroesCounts = alignmentCounts("bad");
      if (badHeroesCounts === limit) return "bad limit";
    }

    return false;
  };
  // Limit of team members
  const teamLimit = 6;

  console.log("TEAM", team);

  const addHero = (hero) => {
    switch (true) {
      case team.length === 0:
        setTeam([hero]);
        break;
      case team.length === teamLimit:
        alert("Equipo completo");
        break;
      case isAdded(hero.id):
        alert(
          `${hero.name} ya está agregado en tu equipo. Por favor, seleccioná otro personaje`
        );
        break;
      case alignmentCheck(hero) === "good limit":
        alert(
          "Ya tenés tres héroes en tu equipo. Es momento de agregar un villano"
        );
        break;
      case alignmentCheck(hero) === "bad limit":
        alert(
          "Ya tenés tres villanos en tu equipo. Es momento de agregar un héroe"
        );
        break;
      default:
        setTeam([...team, hero]);
        break;
    }
  };

  // Remove a hero from the team
  const removeHero = (id) => {
    setTeam(team.filter((el) => el.id !== id));
  };

  return (
    <TeamContext.Provider
      value={{
        team,
        setTeam,
        addHero,
        removeHero,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
