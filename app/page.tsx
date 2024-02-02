import SearchBar from "./ui/search-bar";
import RegionFilter from "./ui/region-filter";
import { Suspense } from "react";
import CountryList from "./ui/country-list";
import { SearchParams } from "./lib/definitions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where in the world? - Homepage",
};

export default function Home({ searchParams }: SearchParams) {
  return (
    <>
      <h1 className="sr-only">Where in the world? - Homepage</h1>
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
