"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="inline-flex gap-2 items-center py-4 md:py-3 font-semibold text-xs md:text-base"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="size-4 md:size-5" />
      ) : (
        <MoonIcon className="size-4 md:size-5" />
      )}
      <span className="capitalize">
        {theme === "dark" ? "light" : "dark"} mode
      </span>
    </button>
  );
}
