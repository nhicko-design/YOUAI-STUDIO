export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="site-footer-main">
        <a class="footer-brand" href="#home" aria-label="YOUAI Studio home">
          <img src="./images/brand/Logo_YouAI_3.png" alt="" />
          <span class="footer-brand-copy">
            <strong>YOUAI<br />STUDIO</strong>
            <small>CINEMATIC AI STUDIO</small>
          </span>
        </a>

        <nav class="footer-links" aria-label="Footer navigation">
          <a href="#filmAI">Services</a>
          <a href="#filmAI">AI Film Engine</a>
          <a href="#commercial">Commercial System</a>
          <a href="#ai-imagery">AI Imagery</a>
          <a href="#highlight-projects">Highlight Projects</a>
          <a href="#about-studio">About Studio</a>
          <a class="footer-contact-link" href="#contact">Contact</a>
        </nav>
      </div>

      <div class="site-footer-bottom">
        <p>© ${year} YOUAI STUDIO. All rights reserved. Cinematic AI Film &amp; Visual Intelligence.</p>
        <div class="footer-signoff">
          <a href="https://youaistudio.vn" target="_blank" rel="noopener noreferrer">youaistudio.vn</a>
          <span class="footer-separator" aria-hidden="true">•</span>
          <strong>Vietnam's Leading AI Creative Studio</strong>
        </div>
      </div>
    </footer>
  `;
}
