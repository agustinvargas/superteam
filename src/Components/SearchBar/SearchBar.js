import React, { useContext, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Col, Form, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../Contexts/UserContext";
import { TeamContext } from "../../Contexts/TeamContext";
import Toasts from "../Toast/Toast";
import LoaderBtn from "../Loader/LoaderBtn";

export default function SearchBar() {
  const [loader, setLoader] = useState(false);
  const { setSearchResults } = useContext(UserContext);
  const { err, setErr } = useContext(TeamContext);
  const history = useHistory();

  // Get Superhero API by user search
  async function gettingAPI(userSearch) {
    try {
      setLoader(true);
      const baseUrl =
        "https://www.superheroapi.com/api/10228035059441005/search";
      const res = await axios.get(`${baseUrl}/${userSearch}`);
      const data = res.data.results;
      if (data) {
        setSearchResults(data);
        history.push("/data");
      } else {
        setErr({
          header: "Batiproblemas",
          body: "No se encontraron resultados. Intentá buscando otro personaje",
        });
      }
    } catch (error) {
      setErr({
        header: "API problemas",
        body: `${error}`,
      });
      console.error("GETTING API ERROR", error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      validate={(val) => {
        const err = {};

        // Validate search
        if (!val.search) {
          err.search = "Por favor, ingresá el nombre de un personaje";
        } else if (!/^[a-zA-Z ]+((['][a-zA-Z ]))*$/.test(val.search)) {
          err.search = "Por favor, ingresá el nombre de un personaje válido";
        }

        return err;
      }}
      onSubmit={(val, { resetForm }) => {
        console.log(val);
        console.log(val.search);
        gettingAPI(val.search);
        resetForm();
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col sm={10} className="my-1">
              <Form.Label htmlFor="searchForm" visuallyHidden>
                Búsqueda
              </Form.Label>
              <Form.Control
                id="searchForm"
                placeholder="Buscá tu superhéroe"
                name="search"
                value={values.search}
                onChange={handleChange}
                onBlur={handleBlur}
                type="search"
              />
            </Col>
            <Col xs="auto" className="my-1">
              {loader ? <LoaderBtn /> : <Button type="submit">Buscar</Button>}
            </Col>
          </Row>
          {touched.search && errors.search && <small>{errors.search}</small>}
          {err && <Toasts header={err.header} body={err.body} />}
        </Form>
      )}
    </Formik>
  );
}
