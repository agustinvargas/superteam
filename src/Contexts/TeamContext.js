import React, { useState } from "react";
import { createContext } from "react";

export const TeamContext = createContext([]);

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  console.log("TEAM", team);

  // Limit of team members
  const teamLimit = 6;

  // Validates functions
  // Validate that a character is already added
  const isAdded = (id) => team.some((el) => el.id === id);
  // Validate the alignment hero (in the team, there must be three good character and three bad character)
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
  // Calculate total powerstats
  const sumPowerstat = (powerstat) => {
    console.log("Argumento sumPowerstat:", powerstat);
    const reduce = team.reduce((acc, cur) => {
      return acc + parseInt(cur.powerstats[powerstat]);
    }, 0);
    return reduce;
  };

  // Calculate the average height and weight of the team
  const calcAppearanceAverage = (checkAppearance) => {
    console.log("Argumento calcAppearanceAverage:", checkAppearance);
    const reduce = team.reduce((acc, cur) => {
      return acc + parseInt(cur.appearance[checkAppearance][1]);
    }, 0);
    return (reduce / team.length).toFixed(1);
  };

  // Getting max powerstat
  const calcMax = () => {
    const arr = [
      { powerstat: "combate", value: sumPowerstat("combat") },
      { powerstat: "resistencia", value: sumPowerstat("durability") },
      { powerstat: "inteligencia", value: sumPowerstat("intelligence") },
      { powerstat: "poder", value: sumPowerstat("power") },
      { powerstat: "velocidad", value: sumPowerstat("speed") },
      { powerstat: "fuerza", value: sumPowerstat("strength") },
    ];
    console.log("calcMax arr", arr);
    const sort = arr.sort((a, b) => {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      return 0;
    });
    console.log("calcMax sor", sort);
    return sort[0].powerstat;
  };

  return (
    <TeamContext.Provider
      value={{
        team,
        setTeam,
        addHero,
        removeHero,
        sumPowerstat,
        calcAppearanceAverage,
        calcMax,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
