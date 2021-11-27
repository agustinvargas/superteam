import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import LoaderBtn from "../../Loaders/Button/LoaderBtn";
import { baseUrl } from "../../../Utils/APIs/superHero";
import useNotify from "../../../Hooks/useNotify";
import { SearchContext } from "../../../Contexts/SearchProvider";

export default function SearchBar() {
  const [loader, setLoader] = useState(false);
  const { setKeyword } = useContext(SearchContext);
  const { add } = useNotify();
  const history = useHistory();

  console.log("-");

  async function gettingAPI(searchKeyword) {
    try {
      setLoader(true);
      console.log("--");
      const query = baseUrl(`search/${searchKeyword}`);
      const res = await query.get();
      const characters = res.data.results;
      if (characters) {
        setKeyword({
          value: searchKeyword,
          results: characters,
        });
        history.push(`/buscar/${searchKeyword}`);
      } else {
        add(
          "Batiproblemas",
          "No se encontraron resultados. Intentá buscando otro personaje"
        );
        // setNotify([
        //   {
        //     header: "Batiproblemas",
        //     body: "No se encontraron resultados. Intentá buscando otro personaje",
        //   },
        // ]);
      }
    } catch (err) {
      // setNotify([
      //   {
      //     header: "API problemas",
      //     body: `${err}`,
      //   },
      // ]);
    } finally {
      setLoader(false);
    }
  }

  // Get Superhero API by user search
  // async function gettingAPI(userSearch) {
  //   try {
  //     setLoader(true)(
  //       // const baseUrl =
  //       "https://www.superheroapi.com/api.php/10228035059441005/search"
  //     );
  //     const res = await axios.get(`${baseUrl}/${userSearch}`);
  //     const data = res.data.results;
  //     if (data) {
  //       setSearch({
  //         value: userSearch,
  //         results: data,
  //       });
  //       history.push(`/buscar/${userSearch}`);
  //     } else {
  //       setNotif({
  //         header: "Batiproblemas",
  //         body: "No se encontraron resultados. Intentá buscando otro personaje",
  //       });
  //     }
  //   } catch (error) {
  //     setNotif({
  //       header: "API problemas",
  //       body: `${error}`,
  //     });
  //   } finally {
  //     setLoader(false);
  //   }
  // }

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
        </Form>
      )}
    </Formik>
  );
}
