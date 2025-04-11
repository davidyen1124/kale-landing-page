import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/app/components/AuthProvider";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kale | Know what's in your food",
  description:
    "Uncover harmful additives and ultra-processed ingredients in everyday food products",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
