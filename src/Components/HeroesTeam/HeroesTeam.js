import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../Contexts/TeamContext";
import Chart from "../Chart/Chart";
import Footer from "../Footer/Footer";
import SearchContainer from "../Search/SearchContainer/SearchContainer";
import Toasts from "../Toast/Toast";
import TotalTeamStats from "../TotalTeamStats/TotalTeamStats";
import "./HeroesTeam.css";

export default function HeroesTeam() {
  const { notif, team, removeHero } = useContext(TeamContext);

  return team.length > 0 ? (
    <>
      <TotalTeamStats />
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
                      to={`/heroe/${el.id}`}
                      variant="primary"
                    >
                      Ver detalles
                    </Button>
                    <Button
                      className="mybtn"
                      onClick={() => removeHero(el)}
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
        {notif && <Toasts header={notif.header} body={notif.body} />}
        <Footer />
      </Container>
    </>
  ) : (
    <SearchContainer />
  );
}
