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
  },

  twitter: {
    title: { default: "GabriewF", template: "%s - GabriewF" },
    description: "An Personal Website using NextJS and other technologies.",
    card: "summary_large_image",

    creator: "@GabriewF_",
    creatorId: "1433193130606698502",

    site: "@GabriewF_",
    siteId: "1433193130606698502",
  },

  creator: "GabriewF",
  publisher: "Vercel",
  category: "website",

  applicationName: "GabriewF",
  colorScheme: "only light",

  robots: { index: true, follow: true },
  viewport: { width: "device-width", initialScale: 1 },
  metadataBase: new URL("https://gabriewf.tk"),
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Links />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
