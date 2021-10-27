import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../Loader/Loader";
import { TeamContext } from "../../Contexts/TeamContext";
import Toasts from "../Toast/Toast";
import { Card, Col, Container, Row } from "react-bootstrap";

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
      } finally {
        setLoader(false);
      }
    }
    gettingAPI();
  }, [heroId, setNotif]);

  return loader ? (
    <Loader />
  ) : hero && hero.id === heroId ? (
    <Container key={hero.id}>
      <Row className="shadow-lg my-5 p-3 row-bg m-2">
        <Col className="p-4" md={3} key={hero.id}>
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={hero.image.url} alt={hero.name} />
            <Card.Body>
              <Card.Title>{hero.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-2 p-lg-5" md={9}>
          <ul>
            <li>Peso: {hero.appearance.weight[1]}</li>
            <li>Altura: {hero.appearance.height[1]}</li>
            <li>Alias: {hero.biography.aliases.join(", ")}</li>
            <li>Color de ojos: {hero.appearance["eye-color"]}</li>
            <li>Color de cabello: {hero.appearance["hair-color"]}</li>
            <li>Lugar de trabajo: {hero.work.base}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  ) : (
    <Toasts header={notif.header} body={notif.body} />
  );
}
