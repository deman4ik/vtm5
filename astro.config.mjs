import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://vtm5.ru",
  integrations: [
    starlightLinksValidator(),
    starlight({
      title: "VTM5.RU",
      locales: {
        root: {
          label: "Русский",
          lang: "ru-RU"
        }
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/globals.css",
        "./src/styles/override-content.css",
        "@fontsource-variable/eb-garamond"
      ],
      components: {
        ThemeProvider: "./src/components/override/ThemeProvider.astro",
        PageTitle: "./src/components/override/PageTitle.astro"
      },
      social: {
        github: "https://github.com/deman4ik/vtm5"
      },
      pagination: true,
      sidebar: [
        {
          label: "Основные параметры",
          link: "/traits"
        },
        {
          label: "Характеристики",
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Физические",
              collapsed: true,
              items: [
                {
                  label: "Сила",
                  link: "/attributes/strength"
                },
                {
                  label: "Ловкость",
                  link: "/attributes/dexterity"
                },
                {
                  label: "Выносливость",
                  link: "/attributes/stamina"
                }
              ]
            }
          ]
        },
        {
          label: "Источники",
          collapsed: true,
          autogenerate: {
            directory: "sources"
          }
        },
        {
          label: "О проекте",
          link: "/about"
        }
      ]
    }),
    tailwind({
      applyBaseStyles: false
    }),
    react()
  ]
});
