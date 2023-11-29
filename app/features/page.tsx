import Image from "next/image";

import PageHeading from "@/components/page-heading";
import { FEATURES } from "@/constants/fixtures";
import { cloudinaryImgUrl } from "@/lib/utils";

export default function FeaturesPage() {
  return (
    <>
      <Image
        src={cloudinaryImgUrl("sunlight_flower_vlnpor.jpg")}
        alt="햇빛이 비치는 꽃밭"
        width={2400}
        height={1600}
        sizes="100vw"
        className="h-64 object-cover md:h-80 xl:h-96"
      />
      <article className="content-wrapper">
        <PageHeading text="온빛의 특징" />
        <section className="ml-auto mt-8 flex max-w-screen-md flex-col gap-x-8 gap-y-4 md:flex-row">
          <p>
            정신과적 문제는 크게 두 부분으로 나누어 생각할 수 있습니다.&nbsp;
            <strong>겉으로 보이는 증상</strong>은 병원을 찾게 만든 나를 괴롭히는
            내용들일 것이고, 정신과적 <strong>약물치료만</strong>
            으로도 이러한 증상의 많은 부분은 조절이 가능합니다.
          </p>
          <p>
            하지만 증상 이면에 이러한 증상들이 나타날 수밖에 없도록 만든 마음의
            문제들이 남아 있어 계속해서 문제를 만들어냅니다. 이러한{" "}
            <strong>내면의 문제</strong>를 치료하는 과정을&nbsp;
            <strong>정신치료 또는 면담치료</strong>라고 합니다.
          </p>
        </section>
        <hr className="my-16 xl:my-20" />
        <ul className="space-y-20">
          {FEATURES.map(({ title, desc, imgProps }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-10 md:flex-row md:gap-20"
            >
              <div>
                <h3 className="mb-10 text-xl font-semibold text-primary-900 md:mb-12">
                  {title}
                </h3>
                <p className="break-keep">{desc}</p>
              </div>
              <Image
                {...imgProps}
                alt={imgProps.alt}
                sizes="640px"
                className="aspect-square w-80 object-cover shadow-lg"
              />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
