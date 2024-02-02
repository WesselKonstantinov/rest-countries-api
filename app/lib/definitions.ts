export type Country = {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  subregion?: string;
  population: number;
  cca3: string;
  tld?: string[];
  currencies?: Currencies;
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
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

export type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type SearchParams = {
  searchParams?: {
    query?: string;
    region?: string;
  };
};

export type Params = {
  params: {
    code: string;
  };
};
