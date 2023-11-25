import "./globals.css";

import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const gothic_a1 = Gothic_A1({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gothic-a1",
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="ko" className={gothic_a1.variable}>
      <body className="bg-stone-50 text-gray-900">
        <Header />
        <main className="py-16 xl:py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
