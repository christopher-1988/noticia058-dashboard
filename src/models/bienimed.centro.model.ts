export interface DataRowCentro {
  id: string | number;
  idCliente: string | number;
  name: string;
  address: string;
  phone: string;
  cell: string;
  email: string;
  state: number;
  logo: string;
  startTime: string;
  endTime: string;
  appointmentDuration: number;
  coordinate: string;
  specialties: string;
  procedimientos: string;
}

export interface FormValues {
  name: string;
  address: string;
  phone: string;
  startTime: string;
  endTime: string;
  appointmentDuration: number;
  state: string;
}
