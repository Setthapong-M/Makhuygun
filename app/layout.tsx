import type { Metadata } from "next";
import "./globals.css";

import { Martian_Mono } from "next/font/google"; // [NEW]

const martianMono = Martian_Mono({ subsets: ["latin"] }); // [NEW]

export const metadata: Metadata = {
  title: "Momentum Shooting Training Club",
  description: "Professional Firearms Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${martianMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
