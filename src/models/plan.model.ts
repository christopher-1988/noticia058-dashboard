export interface DataRowPlanes {
  id: string | number;
  icons: string;
  name: string;
  description: string;
  limitPatients: string | number;
  limitUser: string | number;
  limitCenters: string | number;
  limitCorporateClient: string | number;
  totalModules: string | number;
  customers: string | number;
  state: string;
  created: string;
}

export interface FormAddValues {
  id: string | number;
  icons: string;
  name: string;
  description: string;
  limitPatients: string | number;
  limitUser: string | number;
  limitCenters: string | number;
  limitCorporateClient: string | number;
  module: string | number;
  customers: string | number;
  state: string;
}

export interface itemModule {
  id: string | number;
  icon: string;
  title: string;
  idRelation: string | number;
  idState: string | number;
  stateRelation: string;
  childrenId: string[];
}

export interface DataRowPlanesModule {
  id: string | number;
  icon: string;
  title: string;
  idRelation: string | number;
  idState: string | number;
  stateRelation: string;
  childrenId: string[];
  children: itemModule[];
}
