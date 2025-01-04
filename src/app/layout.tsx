import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Header from "@/widgets/ui/layout/Header/Header";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-family-roboto",
})

export const metadata: Metadata = {
  title: "Rodoro Portfolio",
  description: "TODO: Add description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} flex flex-col items-center max-w-[1440px] mx-auto mt-7`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
