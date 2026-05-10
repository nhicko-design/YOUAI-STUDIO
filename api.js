const JSON_URL = "https://raw.githubusercontent.com/nhicko-design/YOUAI-STUDIO/main/data.json";

export async function getVideos() {
  const res = await fetch(JSON_URL);
  return await res.json();
}
export async function getFilmAI() {
  const res = await fetch("JSON_URL");
  return await res.json();
}