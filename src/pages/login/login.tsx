import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, CardTitle, Form, Button, CardText } from "react-bootstrap";
import toast from "react-hot-toast";
//Hook
import { useForm } from "../../hooks";
import useAuth from "@src/@core/hooks/useAuth";
//Assets
import fondo from "@assets/images/pages/fondo.svg";
//Model
import { ResponseNotificacion } from "@src/models";
//Style
import "../../@core/scss/react/pages/page-authentication.scss";

type inputs = {
  email: string;
  password: string;
};

interface Response extends ResponseNotificacion {
  item: Record<string, unknown> | undefined;
}

const Login = () => {
  const history = useNavigate();
  const { saveUser } = useAuth();
  const [process, setProcess] = useState(false);

  const sesions = [
    { user: "chistopher", password: "W>nn_9u3/7*A" },
    { user: "noticia058@gmail.com", password: "123456" },
  ];

  // Y cambiar la condición a:
  const { value, handleSubmit, handleInput } = useForm({
    email: "chistopher",
    password: "W>nn_9u3/7*A",
  });

  const onSubmit = async (value: inputs) => {
    setProcess(true);

    if (value.email === "") {
      toast.error("Agregue el correo.");
      return;
    }
    if (value.password === "") {
      toast.error("Agregue la contraseña.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const condicion = sesions.some((sesion) => {
        let result = false;
        result =
          sesion.user === value.email && sesion.password === value.password;
        return result;
      });

      if (condicion) {
        const sesion = {
          id: 1,
          name: value.email,
          email: value.email,
          imagen: "",
          token: "",
          active: true,
        };
        saveUser(sesion);
        history("/notificaciones", { replace: true });
      } else {
        alert("error");
      }
    } catch (error) {
      console.error("Error:" + error);
    } finally {
      setProcess(false);
    }
  };

  return (
    <div
      className="auth-wrapper auth-cover"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Row className="auth-inner m-0 py-4">
        <Col
          className="d-none d-lg-flex align-items-center p-5"
          lg="4"
          sm="12"
        ></Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5 rounded shadow-sm"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <div className="fondo__img text-center">
              {/*<img width="50rem" height="50rem" src={bieni} alt="logo"></img>*/}
            </div>
            <CardTitle className="fw-bolder my-1 text-center" color="#5c586b">
              Bienvenido a Noticias058
            </CardTitle>
            <CardText className="mb-2  text-center">
              Todas tus notificaciones en un solo lugar.
            </CardText>
            <Form
              className="auth-login-form mt-2"
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={value?.email ?? ""}
                    placeholder="name@example.com"
                    onChange={handleInput}
                  />
                </Form.Group>
              </div>
              <div className="mb-1">
                <div className="mb-1">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      value={value.password || ""}
                      placeholder="******************"
                      onChange={handleInput}
                    />
                  </Form.Group>
                </div>
              </div>
              {/*<div className="center my-2">
                <div className="pt-1 text-center text-dark fw-bold">
                  <span
                    onClick={() => {
                      restorePassword();
                    }}
                    className="cursor-pointer"
                    style={{ color: "#887ef2" }}
                  >
                    Olvidé mi contraseña
                  </span>
                </div>
              </div>*/}
              {/*
                <div className="mb-2">
                  <input
                    type="checkbox"
                    id="recordar"
                    className="cursor-pointer"
                    style={{ marginRight: 5 }}
                    checked={rememberMe}
                    onChange={() => {
                      setRememberMe(!rememberMe);
                    }}
                  />
                  <label htmlFor="recordar" className="cursor-pointer">
                    Recordarme
                  </label>
                </div>
              */}
              <div className="d-flex justify-content-center">
                <Button size="lg" type="submit">
                  {process ? "Procesando" : "Iniciar Sesión"}
                </Button>
              </div>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
//git remote add origin https://github.com/christopher-1988/noticia058-dashboard.git
