export function Navbar() {
  return `
    <nav class="fixed top-0 w-full z-50 backdrop-blur-lg 
                bg-black/40 border-b border-gray-800 px-6 py-4">

      <div class="flex justify-between items-center max-w-7xl mx-auto">

        <div class="flex items-center gap-3">
          <img src="./images/logo.png" class="w-8 h-8 rounded-full"/>
          <span class="font-bold text-lg">YOU AI</span>
        </div>

        <div class="flex gap-6 text-gray-300">
          <a href="#home" class="hover:text-white">Home</a>
          <a href="#filmAI" class="hover:text-white">Film AI</a>
          <a href="#commercial" class="hover:text-white">Commercial</a>
          <a href="#about" class="hover:text-white">About</a>
        </div>

      </div>
    </nav>
  `;
}