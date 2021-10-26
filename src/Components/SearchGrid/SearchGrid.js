import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { TeamContext } from "../../Contexts/TeamContext";
import { UserContext } from "../../Contexts/UserContext";
import Toasts from "../Toast/Toast";

export default function SearchGrid() {
  const { search } = useContext(UserContext);
  const { team, addHero, notif } = useContext(TeamContext);
  console.log("DATOS DE LA BUSQUEDA", search);

  console.log(team);
  return (
    <>
      <Container className="m-auto">
        <h1 className="text-center my-5">
          Resultados para <strong>{search.value}</strong>:{" "}
          {search.results.length}
        </h1>
        <Row>
          {search.results
            ? search.results.map((el) => (
                <Col className="p-4" md={4} key={el.id}>
                  <Card className="shadow">
                    <Card.Img variant="top" src={el.image.url} alt={el.name} />
                    <Card.Body className="d-flex align-items-center justify-content-between">
                      <Card.Title>{el.name}</Card.Title>
                      <Button onClick={() => addHero(el)} variant="primary">
                        Agregar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : //   <ul key={el.id}>
              //     <li>NOMBRE: {el.name}</li>
              //     <li>
              //       <img src={el.image.url} alt={el.name} />
              //     </li>
              //     <Button onClick={() => addHero(el)}>AGREGAR</Button>
              //   </ul>
              // ))
              null}
          {notif && <Toasts header={notif.header} body={notif.body} />}
        </Row>
      </Container>
    </>
  );
}
