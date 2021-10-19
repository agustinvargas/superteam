import React, { useContext } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Col, Form, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../Contexts/UserContext";

export default function SearchBar() {
  const { setSearchResults } = useContext(UserContext);
  const history = useHistory();
  async function gettingAPI(userSearch) {
    const baseUrl = "https://www.superheroapi.com/api/10228035059441005/search";
    const res = await axios.get(`${baseUrl}/${userSearch}`);
    setSearchResults(res.data.results);
    history.push("/data");
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
              <Button type="submit">Buscar</Button>
            </Col>
          </Row>
          {touched.search && errors.search && <div>{errors.search}</div>}
        </Form>
      )}
    </Formik>
  );
}
