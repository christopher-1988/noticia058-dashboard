import { useState } from "react";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button } from "react-bootstrap";
//Hook
import { useToggle } from "@src/hooks";
//Component
import FormNotificacion from "./component/FormNotificacion";

interface Params {
  state: string;
  search: string;
}

const initial = { state: "", search: "" };

const Notifiaciones = () => {
  //Hook
  const [params, setParams] = useState<Params>(initial);
  const { state, toggle } = useToggle(false);

  return (
    <>
      <h2 className="my-2">Notifiaciones</h2>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex">
              <Button onClick={toggle}>Crear notificacion</Button>
            </Card.Header>
            <Card.Body>cuerpo</Card.Body>
          </Card>
        </Col>
        <FormNotificacion state={state} handleToggle={toggle} />
      </Row>
    </>
  );
};

export default Notifiaciones;
