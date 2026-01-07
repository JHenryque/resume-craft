import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "../styles/globals.css";

import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontTitle = Nunito({
  variable: "--font-title",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeCrafter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background fomt-sans antialiased",
          fontSans.variable,
          fontTitle.variable,
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
