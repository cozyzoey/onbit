import Image from "next/image";

import PageHeading from "@/components/page-heading";
import { cloudinaryImgUrl, imageSizes } from "@/lib/utils";

export default function GroupTherapyPage() {
  return (
    <article className="content-wrapper">
      <PageHeading text="그룹 정신 치료" className="mb-10" />

      <div className="flex flex-col items-center gap-12 md:flex-row md:items-end md:gap-12 md:pl-10 xl:pl-14">
        <section className="space-y-4">
          <p>
            10명 내외의 치료자를 포함한 그룹원들과 회기당 90분, 주 1회씩 면담
            치료가 이루어집니다.
          </p>
          <p>
            개인 치료와는 다르게 다른 사람들과의 상호작용을 통해 자신이나 타인의
            행동이나 생각의 방식/패턴을 이해하게 되고 다른 사람의 방식/패턴을
            보고 배울 수 있는 기회도 주어집니다. 가족과의 관계가 재연되기도 하고
            관계에서의 스트레스가 발생할 수 있으나 긍정적으로 풀어가는 경험을
            하게 되면서 관계에서의 자유로움과 편안함을 습득하게 됩니다.
          </p>
          <p>
            치료자와 단둘이 면담 치료를 진행하는 것에 비해 자극이 많고 치료
            효과가 빠르며 사회생활에의 적응을 보다 도울 수 있습니다.
          </p>
        </section>
        <Image
          src={cloudinaryImgUrl("group-therapy_aupnao.jpg")}
          alt="둘러앉은 사람들"
          width={1920}
          height={1280}
          className="w-full shrink-0 object-cover shadow-lg md:max-w-sm xl:max-w-md"
          sizes={imageSizes("100vw", "900px")}
        />
      </div>
    </article>
  );
}
