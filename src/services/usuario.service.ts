import {
  service,
  ENPOINT,
  buildUrl,
  HTTP_STATUS,
  DEFAULT_RECORD_RESPONSE,
} from "@src/config/service.config";

export const getUsuarios = async ({ ...parameters }) => {
  const apiUrl = buildUrl(ENPOINT.notification, "notifications", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (
    response.status >= HTTP_STATUS.OK &&
    response.status < HTTP_STATUS.MULTIPLE_CHOICES
  ) {
    return response?.data ?? DEFAULT_RECORD_RESPONSE;
  } else {
    throw new Error(`Error al obtener mensaje: ${response.statusText}`);
  }
};

export const postUser = (form: any) =>
  service.post(ENPOINT.user, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
