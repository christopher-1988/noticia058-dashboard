import {
  service,
  buildUrl,
  templateData,
  endpoint,
} from "@src/config/service.config";

export const getLevel = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.bienimedNivel, "niveles", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? templateData;
  } else {
    throw new Error(`Error al obtener planes: ${response.statusText}`);
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postLevel = (form: any) =>
  service.post(endpoint.bienimedNivel, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
