export interface ResponseNotificacion {
  responseCode: number;
  message: string;
  id: string | number;
  //item: Record<string, unknown> | undefined;
}

export interface ResponseData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  recordsTotals: number | string;
  recordsFiltered: number | string;
  currentPage: number | string;
}
