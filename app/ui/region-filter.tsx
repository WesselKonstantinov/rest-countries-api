"use client";

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
    <div>
      <label htmlFor="region-select" className="sr-only">
        Filter by region:
      </label>
      <select
        id="region-select"
        defaultValue={searchParams.get("region")?.toString()}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
