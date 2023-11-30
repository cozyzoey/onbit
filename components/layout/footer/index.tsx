import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { HiOutlinePrinter } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMap } from "react-icons/hi";

const INFO: { tag: ReactNode; content: string }[] = [
  { tag: <HiOutlinePhone />, content: "02-522-9730" },
  { tag: <HiOutlinePrinter />, content: "02-522-9731" },
  { tag: <HiOutlineMail />, content: "contact@onbitclinic.com" },
  { tag: <HiOutlineMap />, content: "서울 서초구 효령로33길 45 (KH빌딩 3층)" },
  { tag: "대표자", content: "박노연" },
  { tag: "사업자등록번호", content: "566-91-01642" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-stone-200 px-4 py-8">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 md:flex-row md:gap-8">
        <div className="w-max">
          <Image
            className="mx-auto"
            src="/onbit.svg"
            alt="온빛 로고"
            width={40}
            height={40}
          />
          <span className="whitespace-nowrap text-xs text-primary-900">
            온빛정신건강의학과의원
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-gray-700 md:justify-start">
          {INFO.map(({ tag, content }, idx) => (
            <div key={idx} className="flex items-center gap-x-1">
              <span className="text-primary-800">{tag}</span>
              {content}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-3 border-white" />
      <div className="text-center text-gray-700">
        <span className="mr-4 inline-block">
          Copyright &copy; {new Date().getFullYear()} by 온빛정신건강의학과의원
        </span>
        <Link href="/policy" className="inline-block font-semibold">
          개인정보 처리방침
        </Link>
      </div>
    </footer>
  );
}
