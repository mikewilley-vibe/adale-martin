import type { MetadataRoute } from "next";

const origin = "https://www.adalemartin.com";

const paths = [
  "/",
  "/about",
  "/service",
  "/compare",
  "/parents",
  "/get-involved",
  "/donate",
  "/vote",
  "/media",
  "/goals/academic-outcomes",
  "/goals/safe-schools",
  "/goals/workforce",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${origin}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" || path === "/vote" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
