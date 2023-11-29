import Image from "next/image";

import PageHeading from "@/components/page-heading";

import { TREATMENTS } from "./fixture";

export default function TreatmentPage() {
  return (
    <div className="content-wrapper">
      <PageHeading text="진료 과목" className="mb-10" />
      <section className="space-y-4">
        <p>
          해결이 어려운 마음의 문제들은 많은 경우에 해결되지 않은 채 잊혀집니다.
          무의식적으로 힘드니까 피해버리는 거죠. 하지만 그 문제들은 사라지지
          않고 남아 점점 거대해지고 어떤 방식으로든 영향을 끼치기 시작합니다.
        </p>
        <p>
          그래서 정신건강의학과는 무수히 다양한 증상들을 다룹니다. 드러난 빙산의
          일각을 넘어 숨겨진 거대한 문제들을 다루기 시작할 때 삶이 달라지기
          시작합니다. 아래와 같은 문제들로 인해 함께 문제를 해결해 보고
          싶으시다면 ‘온빛’을 찾아주세요.
        </p>
      </section>
      <hr className="my-16" />
      <ul className="space-y-20">
        {TREATMENTS.map(({ title, imgProps, desc }, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center gap-8 md:flex-row md:gap-20"
          >
            <div>
              <h3 className="mb-8 text-lg font-semibold text-primary-900 md:text-xl">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
            <Image
              {...imgProps}
              alt={imgProps.alt}
              className="h-64 w-96 max-w-full shrink-0 object-cover shadow-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
