import { useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
//Models
import { ResponseNotificacion } from "@src/models/response.model";

interface ResponseNotificacionExt extends ResponseNotificacion {
  rsp: string | number;
  msg: string;
}

interface FileState {
  name: string;
  uid: string;
  progress: number;
  estado: "espera" | "aprobado" | "cancelado";
  msg?: string;
}

interface UseMultipleFileUploadParams {
  service: ServiceFunction;
  path: string;
  formulario: FormData;
  onSuccess?: (uid: string) => void;
}

interface UseMultipleFileUploadReturn {
  handleFileSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
  files: Record<string, FileState>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFiles: any;
  handleRemoveFile: (params: string) => void;
}

interface ServiceFunction {
  post: (
    path: string,
    data: FormData,
    config?: AxiosRequestConfig
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<AxiosResponse<any>>;
}

export const useMultipleFileUpload = ({
  service,
  path,
  formulario,
  onSuccess,
}: UseMultipleFileUploadParams): UseMultipleFileUploadReturn => {
  const [files, setFiles] = useState<Record<string, FileState>>({});

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    Array.from(e.target.files).forEach(processFileUpload);
  };

  const handleRemoveFile = (key: string) => {
    // Creamos una copia del objeto files
    const updatedFiles = { ...files };
    // Eliminamos la clave del objeto copiado
    delete updatedFiles[key];
    // Actualizamos el estado con el nuevo objeto
    setFiles(updatedFiles);
  };

  const processFileUpload = async (file: File) => {
    //Uuid
    const uid = new Date().getTime().toString();

    const updateFileState = (state: FileState) => {
      setFiles((prevFiles) => ({ ...prevFiles, [uid]: state }));
    };

    const getFileState = (
      progress: number,
      estado: FileState["estado"],
      msg?: string
    ): FileState => ({
      name: file.name,
      uid,
      progress,
      estado,
      msg,
    });

    updateFileState(getFileState(0, "espera"));

    try {
      formulario.append("file", file);
      formulario.append("uuid", uid);
      const resp = await service.post(path, formulario, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onUploadProgress: (event: any) => {
          const progress = Math.round((event.loaded * 100) / event.total);
          updateFileState(getFileState(progress - 1, "espera"));
        },
      });

      if (resp.data) {
        const { responseCode, rsp, message }: ResponseNotificacionExt =
          resp.data;
        if (responseCode === 1 || rsp === 1) {
          updateFileState(getFileState(100, "aprobado"));
          onSuccess?.(uid); // Llamar a onSuccess con el uid
        } else if (responseCode === 2) {
          updateFileState(getFileState(25, "cancelado", message));
        }
      }
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
      updateFileState(
        getFileState(25, "cancelado", "Error al procesar la solicitud")
      );
    }
  };

  return { handleFileSelection, handleRemoveFile, files, setFiles };
};
