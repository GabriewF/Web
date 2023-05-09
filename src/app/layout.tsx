import { Metadata } from "next/types";
import Links from "../components/links";

// Modern Normalize
import "modern-normalize/modern-normalize.css";

export const metadata: Metadata = {
  title: { absolute: "GabriewF", template: "%s - GabriewF" },
  description: "An Personal Website",

  creator: "GabriewF",
  publisher: "Vercel",

  viewport: {
    width: "device-width",
    height: "device-height",
    viewportFit: "auto",
    initialScale: 1,
  },

  twitter: {
    title: { absolute: "GabriewF", template: "%s - GabriewF" },
    description: "An Personal Website",
    card: "summary",
  },

  openGraph: {
    title: { absolute: "GabriewF", template: "%s - GabriewF" },
    type: "website",
    siteName: "GabriewF",
  },

  colorScheme: "only light",
  robots: { index: true, follow: true },
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
