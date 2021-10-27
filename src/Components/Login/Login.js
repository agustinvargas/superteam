import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";
import { TeamContext } from "../../Contexts/TeamContext";
import Toasts from "../Toast/Toast";
import { useHistory } from "react-router-dom";
import LoaderBtn from "../Loader/LoaderBtn";
import "./Login.css";

export default function Login() {
  const [loader, setLoader] = useState(false);
  const { setLogin } = useContext(UserContext);
  const { notif, setNotif } = useContext(TeamContext);
  const history = useHistory();

  // Post to Alkemy Challenge API
  async function postingAPI() {
    try {
      setLoader(true);
      const baseUrl = "http://challenge-react.alkemy.org/";
      const res = await axios.post(baseUrl, {
        // Only valid credentials
        email: "challenge@alkemy.org",
        password: "react",
      });
      const userToken = res.data.token;
      console.log(userToken);
      localStorage.setItem("userToken", userToken);
      setLogin(true);
      history.push("/");
    } catch (error) {
      setNotif({
        header: "API problemas",
        body: `${error}`,
      });
      console.error("ALKEMY API ERROR", error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <Container fluid className="login-bg">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(val) => {
          const formErr = {};

          // Validate email
          if (!val.email) {
            formErr.email = "Por favor, ingresá un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)
          ) {
            formErr.email = "Por favor, ingresá un correo válido";
          }

          // Validate password
          if (!val.password) {
            formErr.password = "Por favor, ingresá una clave";
          } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(val.password)
          ) {
            formErr.password =
              "La clave debe tener un mínimo de seis caracteres e incluir al menos una letra y un número";
          }

          return formErr;
        }}
        onSubmit={(val, { resetForm }) => {
          console.log(val);
          postingAPI();
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
          <div className="login-container">
            <Form className="p-4" onSubmit={handleSubmit}>
              <h1 className="mb-4">Iniciá sesión</h1>
              <Form.Group className="mb-3">
                <Form.Label visuallyHidden={true}>
                  Correo electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  value={values.email}
                  placeholder="Correo electrónico"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                />
                {touched.email && errors.email && <small>{errors.email}</small>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label visuallyHidden={true}>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                />
                {touched.password && errors.password && (
                  <small>{errors.password}</small>
                )}
              </Form.Group>
              {loader ? (
                <LoaderBtn text="Enviando..." />
              ) : (
                <Button className="w-100" variant="primary" type="submit">
                  Enviar
                </Button>
              )}
            </Form>
          </div>
        )}
      </Formik>
      {notif && <Toasts header={notif.header} body={notif.body} />}
    </Container>
  );
}
