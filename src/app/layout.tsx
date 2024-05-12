import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scraper",
  description: "It is a nextjs website which helps you to scrap data from any website using nextjs Api Routes.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["scrap", "scrapping", "web data", "web-scraping"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
