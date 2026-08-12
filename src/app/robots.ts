import { MetadataRoute } from "next";
import { BASE_URL } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/']
            }
        ],
        sitemap: `https://${BASE_URL}/sitemap.xml`
    }
}
