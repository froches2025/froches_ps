import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const title = "Froches Pepper Sauce";
const description =
  "Froches Pepper Sauce: a West African pepper sauce made fresh in Kigali. Order on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sauce.froches.tech"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://sauce.froches.tech",
    siteName: title,
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1376,
        height: 768,
        alt: "Froches Pepper Sauce bottle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
