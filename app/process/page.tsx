"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { cloudinaryImgUrl } from "@/lib/utils";

import { STEPS } from "./fixtures";

export default function ProcessPage() {
  const [curStep, setCurStep] = useState(0);

  return (
    <div className="relative -mt-16 h-screen xl:-mt-20">
      <Image
        src={cloudinaryImgUrl("forest_oditfl.jpg")}
        alt="숲속 나무들"
        sizes="100vw"
        width={1920}
        height={1280}
        className="absolute left-0 right-0 top-0 -z-10 h-72 w-full object-cover md:h-96"
      />
      <section className="relative mx-auto flex h-72 max-w-screen-md items-end justify-center px-4 pb-20 md:h-96">
        <div className="absolute bottom-24 flex w-full translate-y-1 px-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <hr
              key={idx}
              className={clsx(
                "w-1/4 transition-all",
                curStep > idx ? "border-primary-900" : "border-primary-700",
              )}
            />
          ))}
        </div>
        <ol className="flex w-full justify-between">
          {STEPS.map(({ title }, idx) => (
            <li key={title} className="relative">
              <button
                className={clsx(
                  "flex h-7 w-7 items-center justify-center rounded-full font-semibold text-white transition-all",
                  curStep >= idx ? "bg-primary-900" : "bg-primary-700",
                )}
                onClick={() => setCurStep(idx)}
              >
                {idx + 1}
              </button>
              <span className="absolute -bottom-10 left-1/2 w-max -translate-x-1/2 font-bold text-primary-800">
                {title}
              </span>
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-auto flex max-w-screen-md flex-col items-center px-4 py-10 md:py-20">
        <h2 className="mb-10 w-max border-b-2 border-primary-700 p-3 text-xl font-bold text-primary-900 md:text-2xl">
          {STEPS[curStep].title}
        </h2>
        <p className="md:text-lg">{STEPS[curStep].desc}</p>
      </section>
    </div>
  );
}
