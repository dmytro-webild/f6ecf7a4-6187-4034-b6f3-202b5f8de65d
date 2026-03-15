import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertexa Real Estate - Premium Property Investment Platform Nigeria",
  description: "Discover premium properties, invest in high-ROI real estate, and build wealth with Vertexa. Property buying, selling, rental, and investment services across Nigeria.",
  keywords: "real estate Nigeria, property for sale, investment properties, Abuja Lagos properties, home buying, property management",
  metadataBase: new URL("https://vertexa-realestate.com"),
  alternates: {
    canonical: "https://vertexa-realestate.com",
  },
  openGraph: {
    title: "Vertexa Real Estate - Nigeria's Premier Property Platform",
    description: "Trusted real estate solutions for buying, selling, renting, and investing. Over 500 properties, ₦2.5B+ transactions facilitated.",
    url: "https://vertexa-realestate.com",
    siteName: "Vertexa Real Estate",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/concrete-building-with-balcony_250224-309.jpg",
        alt: "Vertexa Real Estate - Premium Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertexa Real Estate - Premium Property Investment",
    description: "Discover properties, invest wisely, build wealth with Nigeria's trusted real estate platform.",
    images: ["http://img.b2bpic.net/free-photo/concrete-building-with-balcony_250224-309.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${openSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}