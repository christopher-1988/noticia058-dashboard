import { useState } from "react";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button } from "react-bootstrap";

interface Params {
  state: string;
  search: string;
}

const initial = { state: "", search: "" };

const Notifiaciones = () => {
  //Hook
  const [params, setParams] = useState<Params>(initial);

  return (
    <>
      <h2 className="my-2">Notifiaciones</h2>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex">
              <Button>Crear notificacion</Button>
            </Card.Header>
            <Card.Body>cuerpo</Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Notifiaciones;
