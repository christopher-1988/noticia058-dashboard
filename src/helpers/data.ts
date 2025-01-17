export const obtenerColor = (value: string) => {
  const map: { [key: string]: string } = {
    espera: "primary",
    aprobado: "success",
    cancelado: "danger",
  };

  return map[value] ?? "warning";
};

export const catTipodocumentos = [
  { value: "1", label: "Cédula" },
  { value: "2", label: "Pasaporte" },
];

export const catGeneros = [
  { value: "1", label: "Masculino" },
  { value: "2", label: "Femenino" },
];
