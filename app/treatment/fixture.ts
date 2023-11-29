import { ImageProps } from "next/image";

import { cloudinaryImgUrl } from "@/lib/utils";

export const TREATMENTS: {
  imgProps: ImageProps;
  title: string;
  desc: string;
}[] = [
  {
    imgProps: {
      src: cloudinaryImgUrl("treatment1_nzac5m.jpg"),
      alt: "표정을 갖고 있는 레고 블럭들",
      width: 640,
      height: 394,
    },
    title: "부정적 감정들과 대인관계 어려움",
    desc: "내가 원하는 바가 좌절될 때 우울, 불안, 분노의 감정을 느끼게 됩니다. 이런 불편한 감정들이 통제되지 않으면 대인관계에도 영향을 끼치게 마련이죠. 더 가까워지고 누군가 다가오기를 바라는데 오히려 떠나가는 경험이 반복됩니다.",
  },
  {
    imgProps: {
      src: cloudinaryImgUrl("treatment2_xvamhb.jpg"),
      alt: "침대에서 자고 있는 사람",
      width: 640,
      height: 427,
    },
    title: "조절되지 않는 수면과 식이",
    desc: "수면과 식이는 감정과 밀접한 관련이 있습니다. 감정에 영향을 받기도 하고 감정에 영향을 주기도 하죠. 수면과 식이가 조절되지 않으면서 내 삶은 내가 원하지 않는 방향으로 흘러가기 시작합니다.",
  },
  {
    imgProps: {
      src: cloudinaryImgUrl("treatment3_kolsqi.jpg"),
      alt: "나선형 계단",
      width: 640,
      height: 853,
    },
    title: "감정을 다루기 위한 부적응적 방식들",
    desc: "불편한 감정의 원인을 찾고 해결하는 것보다 빠르게 감정을 좋아지게 만들고 싶을 때 완벽주의적 성격으로 불안을 통제하기도 하고, 기분을 일시적으로나마 좋아지게 하는 술/마약이나 성관계/도박/게임 등에 중독되기도 합니다.",
  },
  {
    imgProps: {
      src: cloudinaryImgUrl("treatment4_tr2vjn.jpg"),
      alt: "눈을 비비고 있는 사람",
      width: 640,
      height: 427,
    },
    title: "여러가지 신체증상",
    desc: "불편한 감정들을 억누르는 방식으로 적응한 경우 감정을 느끼지 못하기도 합니다. 하지만 억눌린 불편한 감정들은 나를 불편하게 해서라도 관심을 갖도록 유도하게 마련입니다. 두통, 복통, 근육통, 피로감 등으로요.",
  },
];
