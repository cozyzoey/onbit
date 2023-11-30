"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import Button from "@/components/button";

export default function Address() {
  const [addressCopied, setAddressCopied] = useState(false);
  const addressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (addressCopied) {
      const timer = setTimeout(() => setAddressCopied(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [addressCopied]);

  const onAddressCopy = async () => {
    if (!addressRef?.current) return;

    navigator.clipboard
      .writeText(addressRef.current.innerText)
      .then(() => {
        toast.success("주소를 복사했습니다");
      })
      .catch(() => {
        toast.error("주소 복사에 실패했습니다");
      });
  };

  return (
    <div className="mb-16">
      <div className="mb-1">온빛정신건강의학과</div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p
          ref={addressRef}
          className="break-keep text-2xl font-semibold text-sky-500"
        >
          서울 서초구 효령로33길 45 3층 (KH빌딩)
        </p>
        <div className="space-x-2 whitespace-nowrap">
          <Button onClick={onAddressCopy} color="sky">
            주소복사
          </Button>
          <Button color="orange">
            <Link
              href="https://map.naver.com/v5/search/%EC%98%A8%EB%B9%9B%EC%A0%95%EC%8B%A0%EA%B1%B4%EA%B0%95/place/1977317170?c=14137213.6864790,4506706.6133002,19,0,0,0,dh"
              target="__blank"
            >
              지도에서 보기
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
