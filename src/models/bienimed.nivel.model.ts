export interface DataRowLevel {
  id: string | number;
  name: string;
  state: string | number;
  create: string;
  updated: string;
}

export interface FormValues {
  id?: string | number;
  name: string;
  state: string | number;
}
