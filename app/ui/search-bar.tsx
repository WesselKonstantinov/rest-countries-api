"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full max-w-[30rem] relative">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        className="w-full pl-[4.625rem] py-[0.875rem] md:py-[1.125rem] bg-light-secondary dark:bg-dark-secondary rounded-[0.3125rem] shadow-[0_0.125rem_0.5625rem_0_rgba(0,0,0,0.05)] placeholder:text-light-secondary dark:placeholder:text-dark text-xs md:text-sm font-normal"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <MagnifyingGlassIcon className="size-4 md:size-[1.125rem] absolute top-1/2 -translate-y-1/2 left-8" />
    </div>
  );
}
