export function Navbar() {
  return `
    <nav class="flex justify-between p-4 bg-gray-900">
      <h1 class="text-xl font-bold">🎬 AI SaaS</h1>
      <div class="flex gap-4">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </div>
    </nav>
  `;
}