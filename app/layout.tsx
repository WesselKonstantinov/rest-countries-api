import type { Metadata } from "next";
import { nunitoSans } from "./ui/fonts";
import "./ui/globals.css";
import Header from "./ui/header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-light-primary dark:bg-dark-primary text-light-primary dark:text-dark ${nunitoSans.className}`}
      >
        <Providers attribute="class">
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
