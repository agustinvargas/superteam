import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";
import Chart from "../Chart/Chart";
import "./HeroesTeam.css";

export default function HeroesTeam() {
  const { team, removeHero } = useContext(TeamContext);

  return (
    <Container>
      {team.map((el) => (
        <Row className="shadow-lg my-5 p-3 row-bg m-2">
          <Col className="p-4" md={5} key={el.id}>
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={el.image.url} alt={el.name} />
              <Card.Body className="card--body">
                <Card.Title>{el.name}</Card.Title>
                <div className="d-lg-flex align-items-center justify-content-between mt-3">
                  <Button
                    className="mybtn mybtn--detail"
                    as={Link}
                    to={`/hero/${el.id}`}
                    variant="primary"
                  >
                    Ver detalles
                  </Button>
                  <Button
                    className="mybtn"
                    onClick={() => removeHero(el.id)}
                    variant="danger"
                  >
                    Quitar del equipo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-2 p-lg-5" md={7}>
            <div className="chart-container">
              <Chart
                key={el.id}
                combat={el.powerstats.combat}
                durability={el.powerstats.durability}
                intelligence={el.powerstats.intelligence}
                power={el.powerstats.power}
                speed={el.powerstats.speed}
                strength={el.powerstats.strength}
              />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );

  // return team.map((el) => (
  //   <>
  //     <img src={el.image.url} alt={el.name} />
  // <div style={{ width: "300px", height: "600px" }}>
  //   <Chart
  //     key={el.id}
  //     combat={el.powerstats.combat}
  //     durability={el.powerstats.durability}
  //     intelligence={el.powerstats.intelligence}
  //     power={el.powerstats.power}
  //     speed={el.powerstats.speed}
  //     strength={el.powerstats.strength}
  //   />
  // </div>
  //     {/* <ul key={el.id}>
  //       <li>{el.name}</li>
  //       <li>
  //       <img src={el.image.url} alt={el.name} />
  //       </li>
  //       <h5>POWERSTATS</h5>
  //       <li>combate: {el.powerstats.combat}</li>
  //       <li>resistencia: {el.powerstats.durability}</li>
  //       <li>inteligencia: {el.powerstats.intelligence}</li>
  //       <li>poder: {el.powerstats.power}</li>
  //       <li>velocidad: {el.powerstats.speed}</li>
  //       <li>fuerza: {el.powerstats.strength}</li>
  //     </ul> */}
  //     <Button as={Link} to={`/hero/${el.id}`}>
  //       Ver detalles
  //     </Button>
  //     <Button onClick={() => removeHero(el.id)}>Remover</Button>
  //   </>
  // ));
}
