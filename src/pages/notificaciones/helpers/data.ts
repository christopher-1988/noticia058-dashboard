import { RowNotificacion } from "@src/models/notificacion";
interface Params {
  page: number;
  limit?: number;
  search?: string;
}

export const simulateApiCall = (
  params: Params
): Promise<{
  data: RowNotificacion[];
  totalPages: number;
  recordsTotals: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula una base de datos
      const db: RowNotificacion[] = [
        {
          id: 1,
          title: "notificacion uno",
          description: "descripcion uno",
          time: "",
          state: false,
        },
        {
          id: 2,
          title: "notificacion dos",
          description: "descripcion dos",
          time: "",
          state: false,
        },
        {
          id: 3,
          title: "notificacion tres",
          description: "descripcion tres",
          time: "",
          state: true,
        },
      ];

      const { page, limit = 10, search = "" } = params;

      // Filtra los usuarios si hay un término de búsqueda
      let filteredUsers = db.filter(
        (user) =>
          user.title.toLowerCase().includes(search.toLowerCase()) ||
          user.description.toLowerCase().includes(search.toLowerCase())
      );

      // Calcula el total de páginas
      const totalPages = Math.ceil(filteredUsers.length / limit);
      // Pagina los resultados
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
      const recordsTotals = db.length;

      resolve({
        data: paginatedUsers,
        totalPages: totalPages,
        recordsTotals: recordsTotals,
      });
    }, 1000); // Simula un retraso de 1 segundo
  });
};
