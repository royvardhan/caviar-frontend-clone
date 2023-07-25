import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smol caviar frontend",
  description: "A smol frontend for caviar testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,1) 5%, rgba(255,224,219,1) 200%)",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
