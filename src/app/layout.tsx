import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from './components/Header';
import Menu from './components/Menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
      >
          {children}
          <Header />
          <Menu />
      </body>
    </html>
  );
}
