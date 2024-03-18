import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { TransitionProvider } from "@app/components/TransitionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fardin Portfolio App",
  description: "An example of the animated portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden relative`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
