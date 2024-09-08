export interface Select {
  value: string | number;
  label: string;
}

export interface AdapterSelect {
  ageRange: Select[];
}

export interface DifusionResponseData {
  id: string;
  title: string;
  description?: string;
  ageRange?: string[];
  patientNumber?: number;
  isActive?: boolean;
}

export interface DifusionFormValuesAdd {
  id?: string | number;
  title: string;
  description: string;
  state: string;
  gender: string;
  ageRange: Select[];
}

export interface DifusionFormValuesEdit {
  id?: string | number;
  title: string;
  state: string;
}
