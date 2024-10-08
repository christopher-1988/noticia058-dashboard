import { useState } from "react";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button } from "react-bootstrap";
//Hook
import { useToggle, useDebounce } from "@src/hooks";
//Helpers
import { evaluateSuggestionFilter } from "@src/helpers/helpers";
//Model
import { UserDataRow } from "@src/models/user.model";
//Component
import ExportButton from "@src/component/buttons/ExportButton";
import AddButton from "@src/component/buttons/AddButton";
import UsuarioFormulario from "./components/UsuarioFormulario";
import UsuariosTable from "./components/UsuarioTable";
//Style
import "./Usuarios.scss";

interface Params {
  state: string;
  search: string;
}

const initial = { state: "", search: "" };

const Usuarios = () => {
  //Hook
  const [params, setParams] = useState<Params>(initial);
  const [selection, setSelection] = useState<UserDataRow | null>(null);

  const query = useDebounce(params, 2000);

  const { state, toggle } = useToggle(false);

  //Handle
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setParams((prev: Params) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClear = () => {
    setParams(initial);
  };
  //Helpers
  const isFiltros = evaluateSuggestionFilter(query);

  return (
    <>
      <h2 className="my-2">Usuarios</h2>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex">
              <h3>Filtro</h3>
              {isFiltros > 0 ? (
                <Button variant="link" onClick={handleClear}>
                  Limpiar filtros <FontAwesomeIcon icon={faFilter} />
                </Button>
              ) : null}
            </Card.Header>
            <div className="card-header-inputs ">
              <div className="w-100 row mt-2 mb-2 ps-1 pe-1">
                {/* search col  */}
                <div className="col-12 col-lg-4 ">
                  {/* search input  */}
                  <div className="input-group">
                    <input
                      type="text"
                      name="search"
                      className="form-control"
                      placeholder="Buscar usuario..."
                      value={params.search || ""}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      disabled
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
                {/* state select col  */}
                <div className="col-12 col-lg-3 mt-2 mt-lg-0">
                  {/* state select input  */}
                  <select
                    name="state"
                    className="form-select"
                    onChange={handleChange}
                    value={params.state || ""}
                  >
                    <option value="" disabled selected hidden>
                      Seleccionar
                    </option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
                {/* export and add button col  */}
                <div className="col-12 col-lg-5 d-flex gap-2 justify-content-between mt-2 mt-lg-0">
                  <ExportButton />
                  <AddButton title="Agregar usuario" handleClick={toggle} />
                </div>
              </div>
            </div>
            <UsuariosTable
              params={query}
              setSelection={setSelection}
              handleToggle={toggle}
            />
          </Card>
        </Col>
      </Row>
      <UsuarioFormulario
        state={state}
        handleToggle={toggle}
        selection={selection}
        setSelection={setSelection}
      />
    </>
  );
};

export default Usuarios;
