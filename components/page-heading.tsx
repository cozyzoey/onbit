import clsx from "clsx";

export default function PageHeading({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-x-3 overflow-hidden">
      <span
        className={clsx(
          "inline-block h-px w-8 bg-primary-900 xl:w-10",
          "animate-[toright_1s]",
        )}
      ></span>
      <h2 className="text:lg -z-10 w-max font-semibold xl:text-xl">
        {text.split("").map((char, idx) => (
          <span
            key={idx}
            className={clsx(
              "inline-block min-w-[0.5ch] px-px",
              "animate-[flip_1.3s_0.6s_ease-out_both]",
            )}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
}
