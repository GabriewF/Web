import type { Metadata } from "next/types";
import Links from "../components/links";

import "modern-normalize/modern-normalize.css";

export const metadata: Metadata = {
  title: { default: "GabriewF", template: "%s - GabriewF" },
  description: "An Personal Website using NextJS and other technologies.",

  openGraph: {
    title: { default: "GabriewF", template: "%s - GabriewF" },
    description: "An Personal Website using NextJS and other technologies.",
    locale: "en_US",

    type: "website",
    siteName: "GabriewF",
    determiner: "auto",

    images: [
      {
        url: "/meta/banner.webp",
        type: "image/webp",
        alt: "A white banner with 'Personal Website' written on it and a computer mouse in the background.",
        width: 2560,
        height: 1440,
      },
      {
        url: "/meta/banner.png",
        type: "image/png",
        alt: "A white banner with 'Personal Website' written on it and a computer mouse in the background.",
        width: 2560,
        height: 1440,
      },
    ],
  },

  twitter: {
    title: { default: "GabriewF", template: "%s - GabriewF" },
    description: "An Personal Website using NextJS and other technologies.",
    card: "summary_large_image",

    creator: "@GabriewF_",
    creatorId: "1433193130606698502",

    site: "@GabriewF_",
    siteId: "1433193130606698502",

    images: [
      {
        url: "/meta/banner.webp",
        type: "image/webp",
        alt: "A white banner with 'Personal Website' written on it and a computer mouse in the background.",
        width: 2560,
        height: 1440,
      },
      {
        url: "/meta/banner.png",
        type: "image/png",
        alt: "A white banner with 'Personal Website' written on it and a computer mouse in the background.",
        width: 2560,
        height: 1440,
      },
    ],
  },

  creator: "GabriewF",
  publisher: "Vercel",
  category: "website",

  manifest: "/manifest.webmanifest",
  applicationName: "GabriewF",
  colorScheme: "only light",

  robots: { index: true, follow: true },
  viewport: { width: "device-width", initialScale: 1 },
  metadataBase: new URL("/", "https://gabriewf.tk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <Links />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

export const runtime = "edge";
