import { ImageProps } from "next/image";

import { cloudinaryImgUrl } from "@/lib/utils";

type NavItem = { title: string; href: `/${string}` };

export const NAV_MENU: {
  title: string;
  submenus: NavItem[];
}[] = [
  {
    title: "온빛 소개",
    submenus: [
      { title: "온빛의 특징", href: "/features" },
      { title: "의료진 소개", href: "/staff" },
      { title: "공간 소개", href: "/interior" },
    ],
  },
  {
    title: "진료 안내",
    submenus: [
      { title: "진료 과목", href: "/treatment" },
      { title: "진료 과정", href: "/process" },
      { title: "개인 정신 치료", href: "/" },
      { title: "그룹 정신 치료", href: "/" },
    ],
  },
  {
    title: "예약 안내",
    submenus: [
      { title: "예약 문의", href: "/appointment" },
      { title: "공지 사항", href: "/" },
      { title: "오시는 길", href: "/" },
    ],
  },
];

export const HOME_MENU: NavItem[] = [
  { title: "온빛의 특징", href: "/features" },
  { title: "진료 과목", href: "/treatment" },
  { title: "예약 문의", href: "/appointment" },
];

export const HOME_WELCOME: { title: string; desc: string[] }[] = [
  {
    title: "빛",
    desc: [
      "어두운 마음에 빛이 비추어지는 것은",
      "눈 부시고 따갑고 자극적인 불편한 경험입니다.",
      "무엇보다도 내면의 어둠 속에 숨겨져 있던 것들을",
      "누군가에게 드러낸다는 건 더욱 힘든 일이지요.",
    ],
  },
  {
    title: "어둠",
    desc: [
      "하지만 어둠 속에서 정체도 모를 지독한 냄새가",
      "나의 감정, 생각, 신체, 대인관계,",
      "일 수행능력에까지 영향을 끼치고 있는데",
      "그대로 둘 수도 없는 노릇입니다.",
      "그대로 두면 고통이 계속 커지겠죠.",
    ],
  },
  {
    title: "온빛",
    desc: [
      "용기 내어 빛을 쬐어볼 결심을 하셨군요.",
      "생각보다 빛을 쬐는 일이 따스하고",
      "평온하다는 것을 경험하게 될 겁니다.",
      "마음에 정체 모를 냄새는 사라지고",
      "온기가 가득 채워집니다.",
    ],
  },
];

export const FEATURES: {
  title: string;
  desc: string;
  imgProps: ImageProps;
}[] = [
  {
    title: "면담 위주로 진료합니다",
    desc: "온빛은 면담치료를 진행하고 약물을 따로 처방하지 않습니다. 증상의 종류나 심각도에 따라 약물치료가 우선 되는 경우가 있으며 약물치료 없이 면담치료를 진행해도 되는 경우도 있습니다. 초기 면담 시 현재의 상태를 파악하여 어떠한 치료가 도움이 될지 결정을 내리게 되며 약물치료가 필요하거나 검사가 필요하다고 판단되는 경우 타병원 내원을 안내드릴 수도 있겠습니다.",
    imgProps: {
      src: cloudinaryImgUrl("chat_aokw9e.jpg"),
      alt: "대화하는 두 사람",
      width: 640,
      height: 960,
    },
  },
  {
    title: "꾸준한 치료가 중요합니다",
    desc: "면담치료는 회기당 45분, 주 1-3회씩 이루어집니다. 면담 시간 중의 대화를 통하여 치료자와 환자가 함께 환자의 어린 시절부터 무의식 중에 형성된 행동이나 생각의 방식/패턴을 이해해 가고, 본인에 대한 이해를 토대로 삶의 방식/패턴을 교정해가게 됩니다. 상당한 작업이기 때문에 지속적으로 집중하여 진행하는 것이 중요하며 적어도 주 1회 꾸준히 치료하도록 권하고 있습니다.",
    imgProps: {
      src: cloudinaryImgUrl("calendar_h6lrdo.jpg"),
      alt: "달력",
      width: 640,
      height: 959,
    },
  },
  {
    title: "자율성을 중요시합니다",
    desc: "마음을 깊이 들여다보며 이해해가는 과정은 상당한 용기가 필요합니다. 면담치료는 억지로 열어보이도록 강요하지 않으며 환자가 정하는 속도에 따라 치료가 이루어집니다. 빠르게 진행하기보다는 안정감을 느끼는 가운데 꾸준히 원하는 수준에 이를 때까지 치료를 진행하는 것이 좋습니다. 상황에 따라 면담기간은 달라지지만 적으면 몇 달에서 길면 몇 년에 걸쳐 치료가 이루어집니다.",
    imgProps: {
      src: cloudinaryImgUrl("toddler_auubjb.jpg"),
      alt: "걸음마하는 아이",
      width: 640,
      height: 426,
    },
  },
];

export const PROFILE: string[] = [
  "정신건강의학과 전문의",
  "서울대학교병원 인턴, 전공의 수련",
  "서울대학교 의학박사",
  "서울대학교 의학전문대학원 졸업",
  "서울대학교 생명과학부 졸업",
];
