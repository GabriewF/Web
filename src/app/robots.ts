import { MetadataRoute } from "next/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.gabriewf.tk/sitemap.xml",
  };
}
