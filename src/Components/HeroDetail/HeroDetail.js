import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function HeroDetail() {
  const { heroId } = useParams();
  const [hero, setHero] = useState([]);

  useEffect(() => {
    async function gettingAPI() {
      const baseUrl = "https://www.superheroapi.com/api/10228035059441005";
      const res = await axios.get(`${baseUrl}/${heroId}`);
      // agregar try and catch
      console.log(res.data);
      return setHero(res.data);
    }
    gettingAPI();
  }, [heroId]);

  return hero && hero.id === heroId ? (
    <ul key={hero.id}>
      <li>PESO: {hero.appearance.weight[1]}</li>
      <li>ALTURA: {hero.appearance.height[1]}</li>
      <li>NOMBRE: {hero.name}</li>
      <li>ALIAS: {hero.biography.aliases.join(", ")}</li>
      <li>COLOR DE OJOS: {hero.appearance["eye-color"]}</li>
      <li>COLOR DE CABELLO: {hero.appearance["hair-color"]}</li>
      <li>LUGAR DE TRABAJO: {hero.work.base}</li>
    </ul>
  ) : (
    <p>NO HAY NADA</p>
  );
}
