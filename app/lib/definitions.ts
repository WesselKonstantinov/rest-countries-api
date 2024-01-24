export type Country = {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

export type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};
