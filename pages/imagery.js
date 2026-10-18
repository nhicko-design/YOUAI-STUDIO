import {
  getContent,
  imageryByCategory,
  pickByIds,
} from "../api.js";

import { ImageryHero }
from "../sections/imagery/imagery-hero.js";

import { ImageryGallery }
from "../sections/imagery/imagery-gallery.js";

import { ImageryCTA }
from "../sections/imagery/imagery-cta.js";

export async function Imagery() {

  const data = await getContent();
  const { imagery } = data;
  const heroImage = pickByIds(imagery.images, [imagery.heroImageId])[0];

  const fashion = imageryByCategory(imagery.images, "fashion");
  const product = imageryByCategory(imagery.images, "product");
  const conceptArt = imageryByCategory(imagery.images, "conceptArt");

  const fashionMeta = imagery.categories.fashion;
  const productMeta = imagery.categories.product;
  const conceptArtMeta = imagery.categories.conceptArt;

  return `

    ${ImageryHero(heroImage?.imageUrl || "")}

    ${ImageryGallery(
      fashionMeta.title,
      fashionMeta.description,
      fashion,
      "imagery-fashion"
    )}

    ${ImageryGallery(
      productMeta.title,
      productMeta.description,
      product,
      "imagery-product"
    )}

    ${ImageryGallery(
      conceptArtMeta.title,
      conceptArtMeta.description,
      conceptArt,
      "imagery-concept-art"
    )}

    ${ImageryCTA()}

  `;
}
