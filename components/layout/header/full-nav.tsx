import clsx from "clsx";
import Link from "next/link";

import Map from "@/components/map";
import { NAV_MENU } from "@/constants/fixtures";

export default function FullNav({ visible }: { visible: boolean }) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 h-screen w-full overflow-y-auto bg-stone-100 transition-all duration-500",
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-20 opacity-0",
      )}
    >
      <div className="mx-auto w-full max-w-screen-md px-4 pb-14 pt-28">
        <div className="mb-14 flex justify-between">
          {NAV_MENU.map(({ title, submenus }) => (
            <div key={title} className="md:text-lg xl:text-xl">
              <div className="mb-8 font-bold xl:mb-10">{title}</div>
              <div className="space-y-2">
                {submenus.map(({ title, href }) => (
                  <Link
                    href={href}
                    key={title}
                    className="block hover:text-primary-900"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 whitespace-pre font-medium text-primary-800 md:text-lg xl:text-xl">
          저희 의원에 예약 없이 방문하실 경우 <wbr />
          대기시간이 길어지거나 <wbr />
          진료에 어려움이 있을 수 있으니 <wbr />
          <strong className="font-bold">예약 후 방문</strong> 바랍니다.
        </div>

        <Map />
      </div>
    </div>
  );
}
