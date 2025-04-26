import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientWrapper from "@/components/ClientWrapper"; // 👈 包 ThemeProvider 的 component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alton's Portfolio",
  description: "Fun !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
