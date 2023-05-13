import { MetadataRoute } from "next/types";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.gabriewf.tk",
      lastModified: new Date(),
    },
  ];
}
