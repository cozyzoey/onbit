import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type COLORS = "blue" | "stone" | "sky" | "orange";

const COLOR_VARIANTS: Record<COLORS, string> = {
  blue: "bg-blue-600 hover:enabled:bg-blue-700",
  stone: "bg-stone-500 hover:enabled:bg-stone-600",
  sky: "bg-sky-900 hover:enabled:bg-sky-700",
  orange: "bg-amber-400 hover:enabled:bg-amber-500",
};

export default function button({
  children,
  color,
  className,
  ...rest
}: ComponentPropsWithoutRef<"button"> & { color: COLORS }) {
  return (
    <button
      className={clsx(
        "rounded-full px-4 py-2 text-white transition-all disabled:cursor-not-allowed disabled:opacity-50",
        COLOR_VARIANTS[color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
