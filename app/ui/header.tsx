import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-light-secondary dark:bg-dark-secondary p-4 shadow-[0_0.125rem_0.25rem_0_rgba(0,0,0,0.06)]">
      <div className="flex justify-between items-center max-w-[80rem] mx-auto">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Where in the world? - Home"
            width={230}
            height={19}
            className="w-[8.4375rem] md:w-[14.375rem] h-[1.25rem] md:h-[2.0625rem] dark:invert"
          />
        </Link>
        <p>Button</p>
      </div>
    </header>
  );
}
