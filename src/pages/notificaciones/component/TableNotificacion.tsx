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
//Hook
import { useFechingNotification } from "../hook/useNotification";
//Model
import { RowNotificacion } from "../models/notification.model";
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
  const { data, isError, isLoading } = useFechingNotification();

  //Column
  const columns: TableColumn<RowNotificacion>[] = [
    {
      name: "Título",
      selector: (row) => row.titulo,
    },
    {
      name: "Descripción",
      selector: (row) => row.descripcion,
    },
    {
      name: "Creado",
      cell: (row) => (
        <div>
          <span className="active-badge">{row.create_at}</span>
        </div>
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
