import { ImageProps } from "next/image";

import { cloudinaryImgUrl } from "@/lib/utils";

export const INTERIORS: { imgProps: ImageProps; desc: string }[] = [
  {
    desc: "입구로 들어오면 만나게 되는 온빛의 내부 모습입니다.\n사진 왼편에 면담실이 자리하고 있습니다.",
    imgProps: {
      src: cloudinaryImgUrl("interior1_nv30nc.webp"),
      alt: "안내 데스크",
    },
  },
  {
    desc: "자유롭게 이용하실 수 있는 휴게 공간을 마련했습니다.\n편안하게 대기 및 휴식하실 수 있습니다.",
    imgProps: {
      src: cloudinaryImgUrl("interior2_aoqifp.webp"),
      alt: "휴게 공간",
    },
  },
  {
    desc: "안쪽에도 마찬가지로 휴게 공간이 있습니다.\n책장에 있는 도서는 대여하실 수 있습니다.",
    imgProps: { src: cloudinaryImgUrl("interior3_ywy3rx.webp"), alt: "책장" },
  },
  {
    desc: "면담을 하는 면담실입니다.",
    imgProps: { src: cloudinaryImgUrl("interior4_vqrmnx.webp"), alt: "면담실" },
  },
];
