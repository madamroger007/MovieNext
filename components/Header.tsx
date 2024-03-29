import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./theme/ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

export default function Header() {
  return (
    <header
      className="fixed w-full  top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900"
      style={{ zIndex: "58" }}
    >
      <Link href={"/"} className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert-0 dark:invert"}
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}
