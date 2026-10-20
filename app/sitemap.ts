import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://goodwork-social.vercel.app/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://goodwork-social.vercel.app/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://goodwork-social.vercel.app/work", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
