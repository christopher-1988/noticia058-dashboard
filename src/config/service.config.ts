import axio from "axios";
import { templateData } from "@src/helpers/data";
//Token
const TOKEN_KEY = process.env.BIENI_TOKEN_KEY;
//Url bieniweb
const BASE_URL_DEV = process.env.BIENI_URL_DEV;
const BASE_URL_PROD = process.env.BIENI_URL_PROD;
const BASE_URL_LOCAL = process.env.BIENI_URL_LOCAL;
//Url bieni
const BASE_URL_WALLET_DEV = process.env.BIENI_WALLET_DES;
const BASE_URL_WALLET_PROD = process.env.BIENI_WALLET_PROD;

const entornos = {
  local: BASE_URL_LOCAL,
  dev: BASE_URL_DEV,
  prod: BASE_URL_PROD,
};

const entornosBieni = {
  dev: BASE_URL_WALLET_DEV,
  prod: BASE_URL_WALLET_PROD,
};

const service = axio.create({
  baseURL: entornos["prod"],
});

const serviceBieni = axio.create({
  baseURL: "https://bieniwallet.com/bieniback/",
});
// interceptor;
service.interceptors.request.use(
  (config) => {
    if (config.url === endpoint.login) {
      return config;
    }

    const token = localStorage.getItem(TOKEN_KEY!) ?? "";

    if (token !== "") {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const buildUrl = (url: string, op: string, parameters = {}) => {
  const queryString = new URLSearchParams(parameters).toString();
  return `${url}?op=${op}&${queryString}`;
};

const endpoint = {
  paciente: "/src/pacientes.php",
  login: "src/login.php",
  usuario: "/src/usuario/",
  pacientes: "/src/paciente/",
  difusion: "src/difusion/",
  mensajes: "src/mensaje/",
  plan: "src/plan/",
  cliente: "src/bienimed-cliente/",
  bienimedNivel: "src/bienimed-nivel/",
  bienimedUsuario: "src/bienimed-usuario/",
  bienimedEspecialidad: "src/bienimed-especialidad/",
  bienimedNavegacion: "src/bienimed-navegacion/",
  bienimedCenter: "src/bienimed-centro/",
};

export { service, serviceBieni, buildUrl, templateData, endpoint };
