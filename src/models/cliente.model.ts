export interface DataRowClientes {
  id: string | number;
  name: string;
  idUser: string | number;
  user: string;
  email: string;
  idPlan: string | number;
  plan: string;
  state: string;
  created: string;
}

export interface FormAddValues {
  name: string;
  idUser: string | number;
  email: string;
  idPlan: string | number;
  state: string;
}
