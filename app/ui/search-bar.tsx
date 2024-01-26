import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        className="pl-[4.625rem] py-[0.875rem] md:py-[1.125rem] bg-light-secondary dark:bg-dark-secondary rounded-[0.3125rem] shadow-[0_0.125rem_0.5625rem_0_rgba(0,0,0,0.05)] placeholder:text-light-secondary dark:placeholder:text-dark text-xs md:text-sm font-normal"
      />
      <MagnifyingGlassIcon className="size-4 md:size-[1.125rem] absolute top-1/2 -translate-y-1/2 left-8" />
    </div>
  );
}
