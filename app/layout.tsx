import "./globals.css";

import clsx from "clsx";
import type { Metadata } from "next";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { east_sea_dokdo, gothic_a1 } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "(dev)온빛정신건강의학과의원",
  description: "개발중",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={clsx(gothic_a1.variable, east_sea_dokdo.variable)}
    >
      <body className="bg-stone-50 text-gray-900">
        <Header />
        <main className="pt-16 xl:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
