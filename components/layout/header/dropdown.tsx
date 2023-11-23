import Link from "next/link";

import { NAV_MENU } from "@/constants/fixtures";

export default function Dropdown() {
  return (
    <div className="flex h-full items-stretch gap-x-8">
      {NAV_MENU.map(({ title, submenus }) => (
        <div key={title} className="group relative">
          <button type="button" className="h-full group-hover:text-primary-900">
            {title}
          </button>
          <div className="absolute left-0 z-10 hidden w-max origin-top-left space-y-1.5 bg-stone-100 px-6 py-3 group-hover:block">
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
  );
}
