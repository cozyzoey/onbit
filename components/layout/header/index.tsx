import Image from "next/image";
import Link from "next/link";

import Dropdown from "./dropdown";
import Hamburger from "./hamburger";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="flex h-16 items-center justify-between bg-stone-50 bg-opacity-60 px-4 text-base xl:h-20 xl:px-10 xl:text-lg">
        <h1>
          <Link
            href="/"
            className="z-50 flex items-center gap-x-2 font-medium text-primary-900"
          >
            <Image
              src="/onbit.svg"
              alt="온빛 로고"
              className="w-8 xl:w-10"
              width={40}
              height={40}
              priority
              title="온빛"
            />
            정신건강의학과
          </Link>
        </h1>

        <div className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 transform md:block">
          <Dropdown />
        </div>

        <Hamburger />
      </nav>
    </header>
  );
}
