import { getVideos } from "../api.js";

import { CommercialHero } from "../sections/commercial/commercial-hero.js";
//import { CommercialServices } from "../sections/commercial/commercial-services.js";
import { CommercialShowcase } from "../sections/commercial/commercial-showcase.js";
import { CommercialBrands } from "../sections/commercial/commercial-brands.js";
//import { CommercialCTA } from "../sections/commercial/commercial-cta.js";

export async function Commercial() {

  const data = await getVideos();

  return `
    
    ${CommercialHero(data.commercial.hero)}


    ${CommercialShowcase(data.commercial.showcase)}

    ${CommercialBrands()}


  `;
}