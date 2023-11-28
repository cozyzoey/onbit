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
      { title: "공간 소개", href: "/" },
    ],
  },
  {
    title: "진료 안내",
    submenus: [
      { title: "진료 과목", href: "/treatment" },
      { title: "진료 과정", href: "/" },
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
