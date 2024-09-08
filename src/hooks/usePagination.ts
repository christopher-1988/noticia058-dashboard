import { useMemo } from "react";
import { ResponseData } from "@models/response.model";

interface PaginationData {
  pagination: number[];
  previousPage: () => void;
  nextPage: () => void;
}

interface UsePaginationParams {
  recordsTotals: ResponseData;
  perPage: number;
  page: number;
  setPage: (params: number) => void;
}

export const usePagination = (params: UsePaginationParams): PaginationData => {
  const { recordsTotals, perPage, page, setPage } = params;
  //Metodos
  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    const total = Number(recordsTotals) ?? 0;
    if (page !== Math.ceil(total / perPage)) {
      setPage(page + 1);
    }
  };

  const pagination = useMemo(() => {
    const numbers: number[] = []; // Anotación de tipo explícita

    if (!recordsTotals) {
      return numbers;
    }

    const total = Number(recordsTotals) ?? 0;

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
      numbers.push(i);
    }
    return numbers;
  }, [recordsTotals, perPage]);

  return { pagination, previousPage, nextPage };
};
