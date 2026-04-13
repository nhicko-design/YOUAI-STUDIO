export function Navbar() {
  return `
    <nav class="flex items-center justify-between p-4 bg-black border-b border-gray-800">
      
      <div class="flex items-center gap-3">
        <img src="./images/logo.png" class="w-10 h-10 rounded-full" />
        <span class="text-lg font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
          YOU AI
        </span>
      </div>

      <div class="flex gap-6 text-gray-300">
        <a href="#home" class="hover:text-white">Home</a>
        <a href="#gallery" class="hover:text-white">Gallery</a>
        <a href="#about" class="hover:text-white">About</a>
      </div>
    </nav>
  `;
}