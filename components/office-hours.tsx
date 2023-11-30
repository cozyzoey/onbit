import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export default function OfficeHours({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx("space-y-2", className)} {...props}>
      <div>
        <span className="inline-block w-20 font-medium">월 ~ 금</span>
        10:00 ~ 18:00
      </div>
      <div className="break-keep">
        <span className="inline-block w-20 font-medium">토요일</span>
        10:00 ~ 14:00 (점심시간 없음)
      </div>
      <div>
        <span className="inline-block w-20 font-medium">점심시간</span>
        13:00 ~ 14:00
      </div>
      <div className="text-sky-500">일요일·공휴일 휴진</div>
    </div>
  );
}
