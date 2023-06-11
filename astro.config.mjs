import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  head: {
    // ...other head meta tags
    link: [
    // Add the following line to change the web icon
    {
      rel: 'icon',
      type: 'image/png',
      href: './src/assets/icons/jitrak-icon.png'
    }]
  },
  experimental: {
    assets: true
  },
  integrations: [tailwind(), mdx()]
} // your configuration options here...
// https://docs.astro.build/en/reference/configuration-reference/
);