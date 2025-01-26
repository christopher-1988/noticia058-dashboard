export interface FormCreate {
  id: number;
  title: string;
  description: string;
}

export interface RowNotificacion {
  id: number;
  id_creador?: number;
  titulo: string;
  descripcion: string;
  create_at: string;
  update_at?: null;
  delete_at?: null;
}
