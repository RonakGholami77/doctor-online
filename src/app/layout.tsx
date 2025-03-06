import type { Metadata } from "next";
import "./globals.css";
import {Vazirmatn , Markazi_Text , Noto_Kufi_Arabic } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ['latin' , 'arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

const markazi = Markazi_Text({
  subsets: ['latin' , 'arabic'],
  variable: '--font-markazi',
  display: 'swap',
})

const kufi =  Noto_Kufi_Arabic({
  subsets: ['latin' , 'arabic'],
  variable: '--font-noto-Kufi-Arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "دکتر آنلاین",
  description: "پلتفرم رزرو نوبت دکتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${markazi.variable} ${kufi.variable}`}>
      <body >
        {children}
      </body>
    </html>
  );
}
