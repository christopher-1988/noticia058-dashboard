import {
  service,
  buildUrl,
  templateData,
  endpoint,
} from "@src/config/service.config";

export const getUser = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.bienimedUsuario, "usuario", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? templateData;
  } else {
    throw new Error(`Error al obtener usuarios: ${response.statusText}`);
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postUser = (form: any) =>
  service.post(endpoint.bienimedUsuario, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
