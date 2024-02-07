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

  return (
    <div className="mt-8 md:mt-12">
      <div aria-live="assertive">
        {countriesFilteredBySearchAndRegion.length === 0 && (
          <p>No countries found.</p>
        )}
      </div>
      {countriesFilteredBySearchAndRegion.length > 0 && (
        <ul className="grid grid-cols-fluid justify-center auto-rows-[minmax(21rem,_1fr)] gap-10 lg:gap-18">
          {countriesFilteredBySearchAndRegion.map((country) => (
            <li key={country.name.common} className="relative">
              <Link
                href={`/country/${country.cca3}`}
                className="block h-full focus-visible after:rounded after:absolute after:inset-0 after:overflow-hidden after:bg-dark-primary dark:after:bg-light-primary after:opacity-0 after:transition after:duration-300 after:ease-in-out hover:after:opacity-10"
              >
                <CountryCard country={country} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
