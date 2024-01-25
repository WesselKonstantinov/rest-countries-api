import Image from "next/image";
import { Country } from "../lib/definitions";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="h-full flex flex-col bg-light-secondary dark:bg-dark-secondary rounded overflow-hidden shadow-[0_0_0.4375rem_0.125rem_rgba(0,0,0,0.03)]">
      <div className="p-6 order-1">
        <h2 className="text-lg leading-tight font-extrabold">
          {country.name.common}
        </h2>
        <dl className="mt-4 flex flex-col gap-2 text-sm">
          <div className="flex gap-1">
            <dt className="font-semibold after:content-[':']">Population</dt>
            <dd className="font-light">
              {new Intl.NumberFormat("en-US").format(country.population)}
            </dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold after:content-[':']">Region</dt>
            <dd className="font-light">{country.region}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="font-semibold after:content-[':']">Capital</dt>
            <dd className="font-light">{country.capital.join(", ")}</dd>
          </div>
        </dl>
      </div>
      <div className="relative h-[160px]">
        <Image
          src={country.flags.svg}
          alt={`${country.flags.alt}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
