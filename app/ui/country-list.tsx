import Link from "next/link";
import { Country, SearchParams } from "../lib/definitions";
import { getCountries } from "../lib/data";
import CountryCard from "./country-card";

export default async function CountryList({ searchParams }: SearchParams) {
  const countries: Country[] = await getCountries();
  const countriesFilteredBySearchAndRegion: Country[] = countries.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .includes(searchParams?.query?.toLowerCase() || "") &&
      country.region
        .toLowerCase()
        .includes(searchParams?.region?.toLowerCase() || "")
  );

  if (!countriesFilteredBySearchAndRegion.length) {
    return <p className="mt-8 md:mt-12">No countries found.</p>;
  }

  return (
    <ul className="mt-8 md:mt-12 grid grid-cols-fluid justify-center auto-rows-[minmax(21rem,_1fr)] gap-10 lg:gap-18">
      {countriesFilteredBySearchAndRegion.map((country) => (
        <li key={country.name.common}>
          <Link href={`/country/${country.cca3}`}>
            <CountryCard country={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
