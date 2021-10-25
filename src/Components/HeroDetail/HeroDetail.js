import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../Loader/Loader";
import { TeamContext } from "../../Contexts/TeamContext";
import Toasts from "../Toast/Toast";

export default function HeroDetail() {
  const { heroId } = useParams();
  const { notif, setNotif } = useContext(TeamContext);
  const [hero, setHero] = useState(null);
  const [loader, setLoader] = useState(false);

  // Get Superhero API by character ID
  useEffect(() => {
    async function gettingAPI() {
      try {
        setLoader(true);
        const baseUrl = "https://www.superheroapi.com/api/10228035059441005";
        const res = await axios.get(`${baseUrl}/${heroId}`);
        console.log("ESO ES RES.DATA", res.data);
        if (res.data.response === "success") {
          setHero(res.data);
        } else {
          setNotif({
            header: "Batiproblemas",
            body: "No se encontró ningún héroe",
          });
        }
      } catch (error) {
        setNotif({
          header: "API problemas",
          body: `${error}`,
        });
        console.log(error.response);
      } finally {
        setLoader(false);
      }
    }
    gettingAPI();
  }, [heroId, setNotif]);

  return loader ? (
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
    <Toasts header={notif.header} body={notif.body} />
  );
}
