import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useTeam from "../../../Hooks/useTeam";
import { SearchContext } from "../../../Contexts/SearchProvider";
import useNotify from "../../../Hooks/useNotify";
import { baseUrl } from "../../../Utils/APIs/superHero";
import Loader from "../../Loaders/Spinner/Loader";

export default function SearchGrid() {
  const [loader, setLoader] = useState(false);
  const { keyword, setKeyword } = useContext(SearchContext);
  const { keywordSearch } = useParams();
  const { addHero } = useTeam();
  const { setNotify, add } = useNotify();
  const history = useHistory();
  const notifyWasShowed = useRef(false);
  const [n, setN] = useState(false);

  console.log("---");

  useEffect(() => {
    async function gettingAPI() {
      try {
        setLoader(true);
        console.log("----");
        console.log("PARAM S", keywordSearch);
        const query = baseUrl(`search/${keywordSearch}`);
        const res = await query.get();
        const characters = res.data.results;
        console.log(notifyWasShowed);
        if (characters) {
          setKeyword({
            value: keywordSearch,
            results: characters,
          });
        } else if (n === false) {
          add(
            "Batiproblemas",
            "No se encontraron resultados. Intentá buscando otro personaje"
          );
          setN(true);
          // notifyWasShowed.current = true;

          // setNotify([
          //   ...notify,
          //   {
          //     header: "Batiproblemas",
          //     body: "No se encontraron resultados. Intentá buscando otro personaje",
          //   },
          // ]);
          history.push("/buscar");
        }
      } catch (err) {
        add("API problemas", `${err}`);
        // setNotify([
        //   ...notify,
        //   {
        //     header: "API problemas",
        //     body: `${err}`,
        //   },
        // ]);
        history.push("/buscar");
      } finally {
        setLoader(false);
      }
    }
    gettingAPI();
  }, [history, keywordSearch, setKeyword, setNotify, add, n]);

  return loader ? (
    <Loader />
  ) : (
    keyword && (
      <Container className="m-auto">
        <h3 className="text-center my-5">
          Resultados para <strong>{keyword.value}</strong>:{" "}
          {keyword.results.length}
        </h3>
        <Row>
          {keyword.results.map((el) => (
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
          ))}
        </Row>
      </Container>
    )
  );
}
