import type { Metadata } from "next";
import { nunitoSans } from "./ui/fonts";
import "./ui/globals.css";
import Header from "./ui/header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    template: "Where in the world? - %s",
    default: "Where in the world?",
  },
  description: "Find information about each country in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-light-primary dark:bg-dark-primary text-light-primary dark:text-dark ${nunitoSans.className}`}
      >
        <Providers attribute="class">
          <Header />
          <main className="my-6 md:my-12 px-4">
            <div className="max-w-[80rem] mx-auto">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
