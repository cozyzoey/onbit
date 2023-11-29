import { ReactNode } from "react";

export default function StaffLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-lg px-4 pb-20 pt-10">{children}</div>
  );
}
