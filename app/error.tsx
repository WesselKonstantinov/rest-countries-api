"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <h1 className="sr-only">Error</h1>
      <p className="text-lg font-bold">Something went wrong!</p>
      <button
        className="mt-4 px-6 py-2.5 bg-light-secondary dark:bg-dark-secondary rounded-md shadow-[0_0_0.4375rem_0_rgba(0,0,0,0.29)] text-base transition-colors hover:text-hover-light dark:hover:text-hover-dark focus-visible"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
