export const NAV_MENU: {
  title: string;
  submenus: { title: string; href: `/${string}` }[];
}[] = [
  {
    title: "온빛 소개",
    submenus: [
      { title: "온빛의 특징", href: "/" },
      { title: "의료진 소개", href: "/" },
      { title: "공간 소개", href: "/" },
    ],
  },
  {
    title: "진료 안내",
    submenus: [
      { title: "진료 과목", href: "/" },
      { title: "진료 과정", href: "/" },
      { title: "개인 정신 치료", href: "/" },
      { title: "그룹 정신 치료", href: "/" },
    ],
  },
  {
    title: "예약 안내",
    submenus: [
      { title: "예약 문의", href: "/" },
      { title: "공지 사항", href: "/" },
      { title: "오시는 길", href: "/" },
    ],
  },
];
