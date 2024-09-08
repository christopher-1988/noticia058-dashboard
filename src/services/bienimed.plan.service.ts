import {
  service,
  buildUrl,
  templateData,
  endpoint,
} from "@src/config/service.config";

export const getPlanes = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.plan, "planes", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? templateData;
  } else {
    throw new Error(`Error al obtener planes: ${response.statusText}`);
  }
};

export const getPlanById = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.plan, "plan", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? {};
  } else {
    throw new Error(`Error al obtener plan: ${response.statusText}`);
  }
};

export const getAllCatNavigationPlanById = async ({ ...parameters }) => {
  const apiUrl = buildUrl(endpoint.plan, "plan-cat-navigation", parameters);
  const response = await service.get(apiUrl, { responseType: "json" });
  if (response.status >= 200 && response.status < 300) {
    return response?.data ?? templateData;
  } else {
    throw new Error(`Error al obtener plan modules: ${response.statusText}`);
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postPlan = (form: any) =>
  service.post(endpoint.plan, form, {
    responseType: "json",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
