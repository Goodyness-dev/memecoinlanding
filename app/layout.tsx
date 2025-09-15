import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export const metadata: Metadata = {
  title: "Pablo Pilly – Meme Crypto, Community & Chaos",
  description: "Join the PabloCoin gang! Fast, fun, and community-driven crypto. Memes, staking, NFTs, and more.",
  keywords: ["PabloCoin", "crypto", "meme coin", "blockchain", "staking", "NFTs", "community"],
  authors: [{ name: "Pablo Pilly Team" }],
  
  openGraph: {
    title: "Pablo Pilly – Meme Crypto, Community & Chaos",
    description: "Join the PabloCoin gang! Fast, fun, and community-driven crypto. Memes, staking, NFTs, and more.",
    url: "https://pablopilly.com", // replace with your real domain
    siteName: "Pablo Pilly",
    images: [
      {
        url: "/Dog.png", // your social/OG banner
        width: 1200,
        height: 630,
        alt: "Pablo Pilly Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pablo Pilly – Meme Crypto, Community & Chaos",
    description: "Join the PabloCoin gang! Fast, fun, and community-driven crypto. Memes, staking, NFTs, and more.",
    images: ["/Dog.png"],
    creator: "@yourtwitterhandle", // replace with your Twitter handle
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
