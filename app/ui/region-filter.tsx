"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function RegionFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-[12.5rem] relative bg-light-secondary dark:bg-dark-secondary rounded-[0.3125rem] shadow-[0_0.125rem_0.5625rem_0_rgba(0,0,0,0.05)] cursor-pointer">
      <label htmlFor="region-select" className="sr-only">
        Filter by region:
      </label>
      <select
        id="region-select"
        defaultValue={searchParams.get("region")?.toString()}
        onChange={(e) => handleSelect(e.target.value)}
        className="size-full px-6 py-3.5 md:py-[1.125rem] appearance-none bg-transparent border-none text-xs md:text-sm focus-visible"
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <ChevronDownIcon className="size-3 md:size-3.5 absolute top-1/2 -translate-y-1/2 right-[1.125rem]" />
    </div>
  );
}
