import { format } from "date-fns";
import { es } from "date-fns/locale";
//Model
import { ResponseData } from "@models/response.model";
//Response
import { templateData } from "@src/helpers/data";

type DateOrString = string | Date | null | undefined;

export const adapterDateTime = (date: DateOrString, formt: string) => {
  try {
    let result = "";

    if (date === null || date === undefined || date === "0000-00-00 00:00:00") {
      return "";
    }

    if (typeof date === "string") {
      // Asigna el tipo de dato a 'auxFecha'
      const fechaArray: string[] = date.split(" ");
      // Asigna el tipo de dato a 'dateTime'
      const dateTime: Date = new Date(
        fechaArray.length > 1 || date.includes("T00:00:00")
          ? `${date}`
          : `${date}T00:00:00`
      );

      result = format(dateTime, formt, { locale: es });
    } else {
      result = format(date, formt, { locale: es });
    }

    return result;
  } catch (e) {
    console.error(e);
  }
};

export const adapterResponseData = (response: ResponseData): ResponseData => {
  if (!response || !response.data) {
    return templateData;
  }
  return response;
};

export const adapterResponseItem = (response: ResponseData) => {
  if (!response || !response.data) {
    return {};
  }
  return response.data;
};
/*
export const adapterResponseItem = <T>(
  response: ResponseData,
  defaultValue: T
): T | null => {
  if (!response || !response.data) {
    return defaultValue;
  }
  return response.data as T;
};*/
