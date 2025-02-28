import { defineContentConfig,defineCollection } from "@nuxt/content";
export default defineContentConfig({
    collections: {
        webpages: defineCollection({
            type: "page",
            source: '**/*.md',
        })
    }
});