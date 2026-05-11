export function CommercialBrands() {

  const brands = [
    "Kotex",
    "Milaganics",
    "Wonjin",
    "Derladie",
    "Heimish",
    "Tfit",
    "GGG Cosmetic",
    "Skinfood1957",
    "Sundays",
    "Herherbal",
    "Abib",
    "Uniyoung",
    "Macorner"
  ];

  return `
    
    <section class="commercial-brands-section">

      <div class="container">

        <div class="commercial-brands-heading">

          <span>
            BRANDS
          </span>

          <h2>
            Trusted By Growing Brands
          </h2>

          <p>
            We collaborate with brands to build
            distinctive visual identities and
            storytelling-driven campaigns that
            stand out in crowded markets.
          </p>

        </div>

        <div class="commercial-brand-grid">

          ${brands.map(renderBrand).join("")}

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