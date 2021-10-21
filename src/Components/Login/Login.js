import React, { useContext } from "react";
// import { Form, Button } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

export default function Login() {
  const { setLogin } = useContext(UserContext);

  async function posttingAPI() {
    const baseUrl = "http://challenge-react.alkemy.org/";
    await axios
      .post(baseUrl, {
        // Only valid credentials
        email: "challenge@alkemy.org",
        password: "react",
      })
      .then((res) => {
        // Save user token in local storage
        const userToken = res.data.token;
        console.log(userToken);
        localStorage.setItem("userToken", userToken);
        setLogin(true);
      })
      .catch((err) => console.error(err));
  }

  return (
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
        posttingAPI();
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
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={values.email}
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
            />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    // <Formik
    //   initialValues={{
    //     email: "",
    //     password: "",
    //   }}
    //   validate={(val) => {
    //     let formErr = {};

    //     // Validate email
    //     if (!val.email) {
    //       formErr.email = "Por favor, ingresá un correo";
    //     } else if (
    //       !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)
    //     ) {
    //       formErr.email = "Por favor, ingresá un correo válido";
    //     }

    //     // Validate password
    //     if (!val.password) {
    //       formErr.password = "Por favor, ingresá una clave";
    //     } else if (
    //       !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(val.password)
    //     ) {
    //       formErr.password =
    //         "La clave debe tener un mínimo de seis caracteres e incluir al menos una letra y un número";
    //     }

    //     return formErr;
    //   }}
    //   onSubmit={(val, { resetForm }) => {
    //     console.log(val);
    //     posttingAPI();
    //     resetForm();
    //   }}
    // >
    //   {({ errors }) => (
    //     <Form>
    //       <div>
    //         <label htmlFor="email">Correo electrónico</label>
    //         <Field type="email" id="email" name="email" />
    //         <ErrorMessage
    //           name="email"
    //           component={() => <div>{errors.email}</div>}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="password">Contraseña</label>
    //         <Field type="password" id="password" name="password" />
    //         <ErrorMessage
    //           name="password"
    //           component={() => <div>{errors.password}</div>}
    //         />
    //       </div>
    //       <Button variant="primary" type="submit">
    //         Registrarme
    //       </Button>
    //     </Form>
    //   )}
    // </Formik>
  );
}
