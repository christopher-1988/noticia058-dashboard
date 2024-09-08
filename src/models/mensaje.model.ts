export interface MessageResponseDataRow {
  id?: number | string;
  idSection?: number | string;
  idState?: number | string;
  title: string;
  message: string;
  //state: "activo" | "inactivo";
  date: string;
  section: string;
  state: boolean;
  created: string;
}

export interface FormValues {
  title: string;
  state: string;
  date: string;
  time: string;
  method: string;
  section?: string;
  message: string;
  email?: string;
  subject?: string;
  attachment?: string;
}

export interface itemTodo {
  key: string | number;
  id: string | number;
  uuid: string | number;
  time: string;
  date: string;
  dateTime: string;
  sent?: string;
  editable?: string;
}

export interface FormEditValues {
  id: string | number;
  title: string;
  date: string;
  time: string;
  message: string;
  state: string | number;
  section: string | number;
  created?: string;
  updated?: string;
  list: itemTodo[];
}

export interface Params {
  state: string;
  search: string;
  method?: string;
  section: string;
  date: Date[] | string;
  from: string | undefined;
  to: string | undefined;
}
