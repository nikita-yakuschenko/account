import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Авангард Строй — личный кабинет",
  description: "Личный кабинет клиента компании Авангард Строй. Скоро запуск.",
  icons: {
    icon: [{ url: "/logo_social_l.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
