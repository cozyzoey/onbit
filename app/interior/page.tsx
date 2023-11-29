import Image from "next/image";

import PageHeading from "@/components/page-heading";

import { INTERIORS } from "./fixture";

export default function InteriorPage() {
  return (
    <div className="content-wrapper">
      <PageHeading text="공간 소개" className="mb-10" />
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
        {INTERIORS.map(({ desc, imgProps }, idx) => (
          <div key={idx} className="shadow-md">
            <Image
              {...imgProps}
              alt={imgProps.alt}
              width={800}
              height={450}
              className="w-full"
              sizes="730px"
            />
            <p className="whitespace-pre-wrap px-4 py-6 md:py-8">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
