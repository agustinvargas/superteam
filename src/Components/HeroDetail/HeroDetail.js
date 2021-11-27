import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Loader from "../Loaders/Spinner/Loader";
import { Card, Col, Container, Row } from "react-bootstrap";
import { baseUrl } from "../../Utils/APIs/superHero";
import useNotify from "../../Hooks/useNotify";

export default function HeroDetail() {
  const { heroId } = useParams();
  const [hero, setHero] = useState(null);
  const [loader, setLoader] = useState(false);
  const notification = useNotify();
  const history = useHistory();

  useEffect(() => {
    async function getCharacter() {
      try {
        setLoader(true);
        console.log("SE ACTIVO");
        const query = baseUrl(heroId);
        const res = await query.get();
        const data = res["data"];
        if (data.response === "success") {
          setHero(data);
        } else {
          console.log("AAA");
          notification.add("Batiproblemas", "No se encontró personaje");
          history.push("/");
        }
      } catch (err) {
        notification.add("API problemas", `${err}`);
        history.push("/");
      } finally {
        setLoader(false);
      }
    }
    getCharacter();
  }, [heroId, history, notification]);

  return loader ? (
    <Loader />
  ) : (
    hero?.id === heroId && (
      <Container key={hero.id}>
        <Row className="shadow-lg my-5 p-3 row-bg m-2">
          <Col className="p-4" md={3}>
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
    )
  );
}
