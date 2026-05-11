import { getVideos } from "../api.js";

import { FilmAIHero }
from "../sections/film-ai/film-ai-hero.js";

import { FilmShowreel }
from "../sections/film-ai/film-ai-showreel.js";

import { FilmCaseStudies }
from "../sections/film-ai/film-ai-case-studies.js";

import { ProjectShowcase }
from "../sections/film-ai/project-showcase.js";

import { StartFilmSection }
from "../sections/film-ai/start-film.js";
export async function FilmAI() {

  const data = await getVideos();

  return `

    ${FilmAIHero(
      data.filmAI.hero,
      data.filmAI.projects
    )}

    ${FilmShowreel(
      data.filmAI.projects
    )}

    ${FilmCaseStudies(
      data.filmAI.projects
    )}

    ${ProjectShowcase(
      data.filmAI.projects
    )}

    ${StartFilmSection()}

  `;
}