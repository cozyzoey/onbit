import Image from "next/image";

import PageHeading from "@/components/page-heading";
import { cloudinaryImgUrl } from "@/lib/utils";

export default function PersonalTherapyPage() {
  return (
    <article className="content-wrapper">
      <PageHeading text="개인 정신 치료" className="mb-10" />

      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20 md:pl-10 xl:pl-14">
        <section className="space-y-4">
          <p>치료자와 1:1로 회기당 45분, 주 1-3회씩 면담치료가 이루어집니다.</p>
          <p>
            면담 시간 중의 대화를 통하여 치료자와 환자가 함께 환자의 어린
            시절부터 무의식 중에 형성된 행동이나 생각의 방식/패턴을 이해해 가고,
            본인에 대한 이해를 토대로 삶의 방식/패턴을 교정해가게 됩니다.
          </p>
          <p>
            환자 홀로 치료자의 집중을 받아 진행된다는 장점이 있으며 다른 사람에
            대한 경계심이 많거나 어울리기 어려운 환자들도 진행 가능합니다.
          </p>
        </section>
        <Image
          src={cloudinaryImgUrl("personal-therapy_ntpbi1.jpg")}
          alt="테이블과 빈 의자"
          width={640}
          height={853}
          className="h-96 w-72 shrink-0 object-cover shadow-lg"
          sizes="600px"
        />
      </div>
    </article>
  );
}
