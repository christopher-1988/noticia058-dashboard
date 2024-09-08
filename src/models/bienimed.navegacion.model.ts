export interface ItemNavigation {
  id: string | number;
  idModule?: string | number;
  state: string | number;
  title: string;
  icon: string;
  link: string;
  linkType: string;
  linkAmbit: string;
  description: string;
  order: string | number;
  create: string;
  updated: string;
}

export interface DataRowNavigation extends ItemNavigation {
  subNavegation: ItemNavigation[];
}

export interface SelectNavegation {
  id: string | number;
  idModule: string | number;
  title: string;
  linkAmbit: string;
}
export interface FormValues {
  id: string | number;
  idModule?: string | number;
  state: string | number;
  title: string;
  icon: string;
  link: string;
  linkType: string;
  linkAmbit: string;
  description: string;
  order: string | number;
  create: string;
  updated: string;
  subNavegation: ItemNavigation[];
}
