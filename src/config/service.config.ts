import axio from "axios";

const service = axio.create({
  baseURL: "http://localhost/noticia058backend/",
  //baseURL: "https://www.noticia058tv.com/noticia058backend/",
});

// Interceptor de solicitudes
service.interceptors.request.use(
  (request) => {
    // Agregar un parámetro a la URL de la solicitud
    request.params = {
      ...request.params,
      // Cambia esto por el nombre y valor de tu parámetro
      imestamp: new Date().getTime(),
    };
    return request;
  },
  (error) => {
    // Manejo de errores en la solicitud
    return Promise.reject(error);
  }
);

const buildUrl = (url: string, op: string, parameters = {}) => {
  const queryString = new URLSearchParams(parameters).toString();
  return `${url}?op=${op}&${queryString}`;
};

const DEFAULT_RECORD_RESPONSE = {
  data: [],
  recordsTotals: 0,
  recordsFiltered: 0,
  current_page: 0,
};

const HTTP_STATUS = {
  // 2XX Success
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  // 3XX Redirection
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  // 4XX Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  // 5XX Server Errors
  INTERNAL_SERVER: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};

const ENPOINT = {
  notification: "/src/controllers/notification/index..php",
  user: "/src/controllers/user/index.php",
  version: "/src/version",
};

export { service, buildUrl, HTTP_STATUS, DEFAULT_RECORD_RESPONSE, ENPOINT };
