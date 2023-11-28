"use client";

import clsx from "clsx";
import { useState } from "react";

import FullNav from "./full-nav";

export default function Hamburger() {
  const [active, setActive] = useState(false);
  return (
    <>
      <FullNav visible={active} />

      <button
        className="relative z-50 block h-4 w-6 md:w-8 [&>span]:absolute [&>span]:h-0.5 [&>span]:w-full [&>span]:bg-gray-600 [&>span]:transition-all"
        onClick={() => setActive(!active)}
      >
        <span className={clsx("top-0 block", active && "hidden")}></span>
        <span
          className={clsx(
            "top-1/2 block -translate-y-1/2",
            active && "-rotate-45",
          )}
        ></span>
        <span
          className={clsx(
            "top-1/2 block -translate-y-1/2 opacity-0",
            active && "rotate-45 opacity-100",
          )}
        ></span>
        <span className={clsx("bottom-0 block", active && "hidden")}></span>
      </button>
    </>
  );
}
