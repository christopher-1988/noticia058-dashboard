import { useState } from "react";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button } from "react-bootstrap";
//Hook
import { useToggle } from "@src/hooks";
//Component
import FormNotificacion from "./component/FormNotificacion";
//Component
import TableNoticicacion from "./component/TableNotificacion";

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
              <Button onClick={toggle}>Crear notificación</Button>
            </Card.Header>
            <Card.Body>
              {" "}
              <TableNoticicacion params={params} setSelection={() => {}} />
            </Card.Body>
          </Card>
        </Col>
        <FormNotificacion state={state} handleToggle={toggle} />
      </Row>
    </>
  );
};

export default Notifiaciones;
