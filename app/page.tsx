import SearchBar from "./ui/search-bar";
import RegionFilter from "./ui/region-filter";
import { Suspense } from "react";
import CountryList from "./ui/country-list";
import { SearchParams } from "./lib/definitions";

export default function Home({ searchParams }: SearchParams) {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-x-2 gap-y-10">
        <SearchBar placeholder="Search for a country..." />
        <RegionFilter />
      </div>
      <Suspense fallback={<p>Loading countries...</p>}>
        <CountryList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
