import { service, ENPOINT } from "@src/config/service.config";

export const postUser = (form: any) =>
  service.post(ENPOINT.user, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
