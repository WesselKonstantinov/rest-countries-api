"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0];

export default function Providers({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
