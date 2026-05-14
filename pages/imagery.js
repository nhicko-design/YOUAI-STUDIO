import { getVideos }
from "../api.js";

import { ImageryHero }
from "../sections/imagery/imagery-hero.js";

import { ImageryGallery }
from "../sections/imagery/imagery-gallery.js";

import { ImageryCTA }
from "../sections/imagery/imagery-cta.js";

export async function Imagery(){

  const data =
    await getVideos();

  return `

    ${ImageryHero(data.imagery)}

    ${ImageryGallery(
      "Fashion",
      "Bold editorial visuals crafted to define identity and set trends.",
      data.imageryFashion
    )}

    ${ImageryGallery(
      "Product",
      "High-end product visuals for advertising, ecommerce and campaigns.",
      data.imageryProduct
    )}

    ${ImageryGallery(
      "Concept Art",
      "Unlimited creativity from surreal worlds to cinematic universes.",
      data.imageryConceptArt
    )}

    ${ImageryCTA()}

  `;
}