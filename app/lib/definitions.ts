export type Country = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};

export type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

export type NativeName = {
  cat: Cat;
};

export type Cat = {
  official: string;
  common: string;
};

export type Currencies = {
  EUR: Eur;
};

export type Eur = {
  name: string;
  symbol: string;
};

export type Idd = {
  root: string;
  suffixes: string[];
};

export type Languages = {
  cat: string;
};

export type Translations = {
  ara: Ara;
  bre: Bre;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra;
  hrv: Hrv;
  hun: Hun;
  ita: Ita;
  jpn: Jpn;
  kor: Kor;
  nld: Nld;
  per: Per;
  pol: Pol;
  por: Por;
  rus: Rus;
  slk: Slk;
  spa: Spa;
  srp: Srp;
  swe: Swe;
  tur: Tur;
  urd: Urd;
  zho: Zho;
};

export type Ara = {
  official: string;
  common: string;
};

export type Bre = {
  official: string;
  common: string;
};

export type Ces = {
  official: string;
  common: string;
};

export type Cym = {
  official: string;
  common: string;
};

export type Deu = {
  official: string;
  common: string;
};

export type Est = {
  official: string;
  common: string;
};

export type Fin = {
  official: string;
  common: string;
};

export type Fra = {
  official: string;
  common: string;
};

export type Hrv = {
  official: string;
  common: string;
};

export type Hun = {
  official: string;
  common: string;
};

export type Ita = {
  official: string;
  common: string;
};

export type Jpn = {
  official: string;
  common: string;
};

export type Kor = {
  official: string;
  common: string;
};

export type Nld = {
  official: string;
  common: string;
};

export type Per = {
  official: string;
  common: string;
};

export type Pol = {
  official: string;
  common: string;
};

export type Por = {
  official: string;
  common: string;
};

export type Rus = {
  official: string;
  common: string;
};

export type Slk = {
  official: string;
  common: string;
};

export type Spa = {
  official: string;
  common: string;
};

export type Srp = {
  official: string;
  common: string;
};

export type Swe = {
  official: string;
  common: string;
};

export type Tur = {
  official: string;
  common: string;
};

export type Urd = {
  official: string;
  common: string;
};

export type Zho = {
  official: string;
  common: string;
};

export type Demonyms = {
  eng: Eng;
  fra: Fra2;
};

export type Eng = {
  f: string;
  m: string;
};

export type Fra2 = {
  f: string;
  m: string;
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type Car = {
  signs: string[];
  side: string;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type CoatOfArms = {
  png: string;
  svg: string;
};

export type CapitalInfo = {
  latlng: number[];
};

export type PostalCode = {
  format: string;
  regex: string;
};
