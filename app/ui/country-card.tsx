import Image from "next/image";
import { Country } from "../lib/definitions";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const countryStats = {
    population: country.population,
    region: country.region,
    capital: country.capital[0],
  };

  return (
    <div className="max-w-[264px] bg-light-secondary dark:bg-dark-secondary rounded overflow-hidden shadow-[0_0_0.4375rem_0.125rem_rgba(0,0,0,0.03)]">
      <div className="relative h-[160px]">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-extrabold">{country.name.common}</h2>
        <dl className="mt-4 text-sm">
          {Object.entries(countryStats).map(([key, value]) => (
            <div key={key} className="mt-2 flex gap-1">
              <dt className="capitalize font-semibold after:content-[':']">
                {key}
              </dt>
              <dd className="font-light">
                {typeof value === "number"
                  ? new Intl.NumberFormat("en-US").format(value)
                  : value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
