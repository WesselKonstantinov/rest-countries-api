import Link from "next/link";
import { Country } from "./lib/definitions";
import { getCountries } from "./lib/data";
import CountryCard from "./ui/country-card";
import SearchBar from "./ui/search-bar";
import RegionFilter from "./ui/region-filter";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string; region?: string };
}) {
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
    <>
      <div className="flex flex-wrap justify-between gap-x-2 gap-y-10">
        <SearchBar placeholder="Search for a country..." />
        <RegionFilter />
      </div>
      {countriesFilteredBySearchAndRegion.length > 0 ? (
        <ul className="mt-8 md:mt-12 grid grid-cols-fluid justify-center auto-rows-[minmax(21rem,_1fr)] gap-10 lg:gap-18">
          {countriesFilteredBySearchAndRegion.map((country) => (
            <li key={country.name.common}>
              <Link href={`/country/${country.cca3}`}>
                <CountryCard country={country} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 md:mt-12">No countries found.</p>
      )}
    </>
  );
}
