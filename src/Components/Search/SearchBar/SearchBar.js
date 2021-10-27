import React, { useContext, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../../../Contexts/UserContext";
import { TeamContext } from "../../../Contexts/TeamContext";
import Toasts from "../../Toast/Toast";
import LoaderBtn from "../../Loader/LoaderBtn";

export default function SearchBar() {
  const [loader, setLoader] = useState(false);
  const { setSearch } = useContext(UserContext);
  const { notif, setNotif } = useContext(TeamContext);
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
        setSearch({
          value: userSearch,
          results: data,
        });
        history.push("/resultados");
      } else {
        setNotif({
          header: "Batiproblemas",
          body: "No se encontraron resultados. Intentá buscando otro personaje",
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
          <Form.Label htmlFor="searchForm" visuallyHidden>
            Buscá un personaje
          </Form.Label>
          <Form.Control
            id="searchForm"
            placeholder="Buscar personaje"
            name="search"
            className="mb-2 mt-5"
            value={values.search}
            onChange={handleChange}
            onBlur={handleBlur}
            type="search"
          />

          {loader ? (
            <LoaderBtn text="Buscando" />
          ) : (
            <Button className="w-100 my-2" type="submit">
              Buscar
            </Button>
          )}

          {touched.search && errors.search && <small>{errors.search}</small>}
          {notif && <Toasts header={notif.header} body={notif.body} />}
        </Form>
      )}
    </Formik>
  );
}
