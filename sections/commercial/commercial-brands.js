export function CommercialBrands(brands = []) {

  return `
  
    <section class="commercial-brands-section">

      <div class="film-container">

        <!-- heading -->
        <div class="commercial-brand-heading">

          <div class="film-section-tag">
            BRAND PARTNERS
          </div>

          <h2>
            Trusted By Modern Brands
          </h2>

          <p>
            We collaborate with brands to build
            distinctive visual identities and
            storytelling-driven campaigns.
          </p>

        </div>

        <!-- logos -->
        <div class="commercial-brand-grid">

          ${brands.map(brand => `

            <div class="commercial-brand-card">

              <img
                src="${brand.logo}"
                alt="${brand.name}"
              >

            </div>

          `).join("")}

        </div>

      </div>

    </section>

  `;
}
function renderBrand(name){

  return `
    <div class="commercial-brand-item">
      ${name}
    </div>
  `;
}