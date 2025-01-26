import {
  service,
  buildUrl,
  ENPOINT,
  DEFAULT_RECORD_RESPONSE,
  HTTP_STATUS,
} from "@src/config/service.config";

export const getNotifications = async ({ ...parameters }) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postNotification = (form: any) =>
  service.post(ENPOINT.notification, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
