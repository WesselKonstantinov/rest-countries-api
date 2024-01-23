import { Country } from "./lib/definitions";
import { getCountries } from "./lib/get-countries";
import CountryCard from "./ui/country-card";

export default async function Home() {
  const countries: Country[] = await getCountries();

  return (
    <ul className="mx-10 md:mx-0 grid grid-cols-fluid auto-rows-[minmax(21rem,_1fr)] gap-10 lg:gap-18">
      {countries.map((country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
}
