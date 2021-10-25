import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../Loader/Loader";

export default function HeroDetail() {
  const initialState = null;
  const { heroId } = useParams();
  const [hero, setHero] = useState(initialState);

  useEffect(() => {
    async function gettingAPI() {
      try {
        const baseUrl = "https://www.superheroapi.com/api/10228035059441005";
        const res = await axios.get(`${baseUrl}/${heroId}`);
        console.log(res.data);
        return setHero(res.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    gettingAPI();
  }, [heroId]);

  return hero === initialState ? (
    <Loader />
  ) : hero && hero.id === heroId ? (
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
