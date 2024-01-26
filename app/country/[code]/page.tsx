import { getCountryByCode, getCountries } from "@/app/lib/data";
import { Country } from "@/app/lib/definitions";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default async function DetailPage({
  params,
}: {
  params: { code: string };
}) {
  const countries: Country[] = await getCountries();
  const country: Country = await getCountryByCode(params.code);

  const getBorderCountryLinks = (
    currentCountry: Country,
    countries: Country[]
  ): JSX.Element[] => {
    return countries
      .filter((country) => currentCountry.borders?.includes(country.cca3))
      .map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
      }))
      .map((country) => (
        <li role="listitem" key={country.name}>
          <Link
            href={`/country/${country.cca3}`}
            className="block p-[0.375rem] rounded-sm bg-light-secondary dark:bg-dark-secondary shadow-[0_0_0.25rem_0.0625rem_rgba(0,0,0,0.1)] text-xs md:text-sm font-light text-center"
          >
            {country.name}
          </Link>
        </li>
      ));
  };

  const nativeName = Object.values(country.name.nativeName)[0]?.common;
  const currencies =
    country.currencies && Object.values(country.currencies)[0]?.name;
  const languages =
    country.languages && Object.values(country.languages).join(", ");

  return (
    <div className="mx-3 md:mx-0 mt-10 md:mt-20">
      <Link
        href="/"
        className="w-fit px-6 py-[0.375rem] md:px-9 md:py-2 flex items-center gap-2 md:gap-[0.625rem] rounded-sm md:rounded-md bg-light-secondary dark:bg-dark-secondary shadow-[0_0_0.4375rem_0_rgba(0,0,0,0.29)] text-sm md:text-base font-light"
      >
        <ArrowLeftIcon className="size-[1.125rem] md:size-5" />
        <span>Back</span>
        <span className="sr-only">to home</span>
      </Link>
      <div className="mt-16 md:mt-20 grid gap-y-11">
        <div className="relative flex justify-center items-center aspect-[16/11.5] rounded-md md:rounded-[0.625rem] overflow-hidden">
          <Image
            src={country.flags.svg}
            alt={`${country.flags.alt}`}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-[1.375rem] md:text-[2rem] leading-tight font-extrabold">
            {country.name.common}
          </h1>
          <div className="mt-4 md:mt-6 flex flex-col gap-8">
            <dl className="flex flex-col gap-2 text-sm md:text-base">
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">
                  Native Name
                </dt>
                <dd className="font-light">{nativeName}</dd>
              </div>
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">
                  Population
                </dt>
                <dd className="font-light">
                  {new Intl.NumberFormat("en-US").format(country.population)}
                </dd>
              </div>
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">Region</dt>
                <dd className="font-light">{country.region}</dd>
              </div>
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">
                  Sub Region
                </dt>
                <dd className="font-light">{country.subregion}</dd>
              </div>
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">Capital</dt>
                <dd className="font-light">{country.capital.join(", ")}</dd>
              </div>
            </dl>
            <dl className="flex flex-col gap-2 text-sm md:text-base">
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">
                  Top Level Domain
                </dt>
                <dd className="font-light">{country.tld?.join(", ")}</dd>
              </div>
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">
                  Currencies
                </dt>
                <dd className="font-light">{currencies}</dd>
              </div>
              <div className="flex flex-wrap gap-1">
                <dt className="font-semibold after:content-[':']">Languages</dt>
                <dd className="font-light">{languages}</dd>
              </div>
            </dl>
          </div>
          {country.borders && country.borders.length > 0 && (
            <dl className="mt-[2.125rem] md:mt-[4.375rem] flex flex-col gap-4">
              <dt className="text-base font-semibold after:content-[':']">
                Border Countries
              </dt>
              <dd>
                <ul
                  role="list"
                  className="grid grid-cols-fluid-links gap-[0.625rem]"
                >
                  {getBorderCountryLinks(country, countries)}
                </ul>
              </dd>
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}
