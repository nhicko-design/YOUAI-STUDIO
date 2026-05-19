import { getVideos } from "../api.js";

import { CommercialHero }
from "../sections/commercial/commercial-hero.js";

import { CommercialShowcase }
from "../sections/commercial/commercial-showcase.js";

import { CommercialBrands }
from "../sections/commercial/commercial-brands.js";

import { CommercialCTA }
from "../sections/commercial/commercial-cta.js";

import { initCommercialPlayer }
from "../sections/commercial/commercial-player.js";

export async function Commercial() {

  const data = await getVideos();

  // 🔥 init sau khi DOM render
  setTimeout(() => {

    initCommercialPlayer();

  }, 100);

  return `
    
    ${CommercialHero(
      data.commercial.hero
    )}

    ${CommercialShowcase(
      data.commercial.showcase
    )}

    ${CommercialBrands(
      data.commercial.brands
    )}

    ${CommercialCTA()}

  `;
}