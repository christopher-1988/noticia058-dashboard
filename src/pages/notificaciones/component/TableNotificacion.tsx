import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
//Model
import { UserDataRow } from "@src/models/user.model";
//Component
import { WrapperDataTable } from "@src/component/wrapper";
//Service
import { getUsuarios } from "@services/usuario.service";
//Model
import { RowNotificacion } from "@src/models/notificacion";
//Data
import { simulateApiCall } from "../helpers/data";
//RowNotificacion
interface Params {
  state: string;
  search: string;
}

interface Props {
  params: Params;
  setSelection: (params: RowNotificacion | null) => void;
}

const TableNoticicacion: React.FC<Props> = ({ params, setSelection }) => {
  const [page, setPage] = useState<number>(1);
  const [countPerPage, setCountPerPage] = useState<number>(10);
  //Solicitud
  const { data, isError, isLoading } = useQuery({
    queryKey: ["usuarios", page, params],
    queryFn: () => simulateApiCall({ page, ...params }),
    placeholderData: keepPreviousData,
  });
  //Column
  const columns: TableColumn<RowNotificacion>[] = [
    {
      name: "Título",
      selector: (row) => row.title,
    },
    {
      name: "Descripción",
      selector: (row) => row.description,
    },
    {
      name: "Estado",
      selector: (row) => row.state,
      cell: (row) => (
        <div>
          {row.state === true ? (
            <span className="active-badge">Envida</span>
          ) : (
            <span className="inactive-badge">Error enviada</span>
          )}
        </div>
      ),
    },
    {
      name: "Acción",
      cell: (row) => (
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="light"
            onClick={() => {
              setSelection(row);
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button variant="light">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  return (
    <WrapperDataTable
      title=""
      columns={columns}
      isLoading={isLoading}
      isError={isError}
      data={data?.data ?? []}
      recordsTotals={data?.recordsTotals ?? 0}
      countPerPage={countPerPage}
      setCountPerPage={setCountPerPage}
      page={page}
      setPage={setPage}
      handleClick={() => {}}
      handleDoubleClick={() => {}}
      isExpandable={false}
    />
  );
};

export default TableNoticicacion;
