const JSON_URL = new URL("./data.json", import.meta.url).href;

export async function getContent() {
  const res = await fetch(JSON_URL);

  if (!res.ok) {
    throw new Error(`Failed to load content (${res.status})`);
  }

  return await res.json();
}

/** @deprecated Use getContent() */
export async function getVideos() {
  return getContent();
}

export function pickByIds(items = [], ids = []) {
  const byId = new Map(
    items.filter((item) => item?.id).map((item) => [item.id, item])
  );

  return ids.map((id) => byId.get(id)).filter(Boolean);
}

export function imageryByCategory(images = [], category) {
  return images.filter((image) => image.category === category);
}

export function resolveHighlights(highlights = [], filmProjects = []) {
  const filmsById = new Map(
    filmProjects.filter((p) => p?.id).map((p) => [p.id, p])
  );

  return highlights.map((entry) => {
    const film = entry.filmId ? filmsById.get(entry.filmId) : null;

    return {
      title: entry.title || film?.title || "",
      type: entry.type || "",
      description: entry.description || "",
      image: entry.image || film?.poster || "",
    };
  });
}
