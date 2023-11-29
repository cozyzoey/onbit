import Image from "next/image";

import PageHeading from "@/components/page-heading";
import { PROFILE } from "@/constants/fixtures";
import { cloudinaryImgUrl, imageSizes } from "@/lib/utils";

export default function StaffPage() {
  return (
    <div className="content-wrapper">
      <PageHeading text="의료진 소개" />
      <article className="ml-auto mt-10 flex w-full max-w-md flex-col justify-between gap-16 md:max-w-2xl md:flex-row xl:max-w-screen-md">
        <Image
          src={cloudinaryImgUrl("roy_qdggdw.webp")}
          alt="원장님 사진"
          width={4032}
          height={3024}
          className="aspect-square max-w-xs object-cover"
          sizes={imageSizes("100vw", "768px")}
          draggable={false}
        />
        <section>
          <h3 className="mb-4 text-lg font-semibold">박노연 대표원장</h3>
          <ul>
            {PROFILE.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
