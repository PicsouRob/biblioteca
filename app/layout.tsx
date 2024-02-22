import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import NextAuthProvider from "./NextAuthProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: "Bibioteca",
  description: "Generado por el grupo No: 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}