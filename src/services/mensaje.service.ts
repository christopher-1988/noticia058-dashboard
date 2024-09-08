import {
  service,
  buildUrl,
  templateData,
  endpoint,
} from "@src/config/service.config";

export const getMessage = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.mensajes, "mensajes", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? templateData;
  } else {
    throw new Error(`Error al obtener mensaje: ${response.statusText}`);
  }
};

export const getMessageByIdDiffusion = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.mensajes, "mensajes", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? templateData;
  } else {
    throw new Error(`Error al obtener mensaje: ${response.statusText}`);
  }
};

export const getMessageById = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.mensajes, "mensaje", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? {};
  } else {
    throw new Error(`Error al obtener mensaje: ${response.statusText}`);
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postMessage = (form: any) =>
  service.post(endpoint.mensajes, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deletDateTimeMessage = (id: number | string) =>
  service.delete(endpoint.mensajes, {
    params: { id },
  });
