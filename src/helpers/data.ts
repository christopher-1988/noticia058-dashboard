export const obtenerColor = (value: string) => {
  const map: { [key: string]: string } = {
    espera: "primary",
    aprobado: "success",
    cancelado: "danger",
  };

  return map[value] ?? "warning";
};

export const templateData = {
  data: [],
  recordsTotals: 0,
  recordsFiltered: 0,
  currentPage: 0,
};

export const catTipodocumentos = [
  { value: "1", label: "Cédula" },
  { value: "2", label: "Pasaporte" },
];

export const catGeneros = [
  { value: "1", label: "Masculino" },
  { value: "2", label: "Femenino" },
];

export const catIntervalosCitas = [
  { value: "05", label: "05 min", option: "" },
  { value: "10", label: "10 min", option: "" },
  { value: "15", label: "15 min", option: "" },
  { value: "20", label: "20 min", option: "" },
  { value: "30", label: "30 min", option: "" },
  { value: "45", label: "45 min", option: "" },
  { value: "60", label: "60 min", option: "" },
];

const template = [
  { label: "", value: "03:00", math: "03" },
  { label: "", value: "04:00", math: "04" },
  { label: "", value: "05:00", math: "05" },
  { label: "", value: "06:00", math: "06" },
  { label: "", value: "07:00", math: "07" },
  { label: "", value: "08:00", math: "08" },
  { label: "", value: "09:00", math: "09" },
  { label: "", value: "10:00", math: "10" },
  { label: "", value: "11:00", math: "11" },
  { label: "", value: "12:00", math: "12" },
  { label: "", value: "13:00", math: "13" },
  { label: "", value: "14:00", math: "14" },
  { label: "", value: "15:00", math: "15" },
  { label: "", value: "16:00", math: "16" },
  { label: "", value: "17:00", math: "17" },
  { label: "", value: "18:00", math: "18" },
  { label: "", value: "19:00", math: "19" },
  { label: "", value: "20:00", math: "20" },
  { label: "", value: "21:00", math: "21" },
  { label: "", value: "22:00", math: "22" },
  { label: "", value: "23:00", math: "23" },
];

export const formato12 = (hora24: string) => {
  // Crear un objeto Date utilizando una fecha fija (puede ser cualquier fecha)
  const fecha = new Date("2000-01-01 " + hora24);
  // Obtener la hora en formato de 12 horas utilizando el método toLocaleString()
  const hora12 = fecha.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return hora12;
};

export const catHoras12 = () => {
  const acum = template.map((item) => {
    return { ...item, label: formato12(item.value) };
  });
  return acum;
};
