import {MetadataRoute} from "next";

import moment from "moment";
import {appConfigs, siteUrl} from "@/resources/resources";

// TODO - refinar geração de sitemap. Buscar tentar gerar de forma automática, importando as notícias que existem do projeto, junto da descrição e conteúdo resumido delas.
moment.locale(appConfigs.locale);
const lastModified = moment().format(appConfigs["datetime-format"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl + "blog",
      lastModified: lastModified,
    },
  ];
}
