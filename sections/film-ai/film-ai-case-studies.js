/* =========================================================
   CASE STUDIES
   USING JSON VIDEOS
========================================================= */

export function FilmCaseStudies(projects = []) {

  const items = [
    {
      number: "01",
      title: "From Script To Screen",

      desc:
        "We transform raw concepts into cinematic visual narratives in record time using AI-assisted pre-production, storyboarding, directing, and film generation workflows.",

      video:
        projects[0]?.videoUrl || "",

      pipeline: [
        "Concept Development",
        "AI Storyboarding",
        "Visual Direction",
        "Rapid Production"
      ]
    },

    {
      number: "02",
      title: "AI Character Creation",

      desc:
        "Our AI-powered workflow enables emotionally expressive characters, digital performances, cinematic facial detail, and scalable casting without traditional production limitations.",

      video:
        projects[1]?.videoUrl || "",

      pipeline: [
        "AI Characters",
        "Performance Design",
        "Voice & Emotion",
        "Cinematic Expressions"
      ]
    },

    {
      number: "03",
      title: "Scalable Film Production",

      desc:
        "We build large-scale cinematic worlds while maintaining artistic consistency, visual quality, and emotional storytelling — allowing productions to scale faster and smarter.",

      video:
        projects[2]?.videoUrl || "",

      pipeline: [
        "World Building",
        "Scalable Workflow",
        "High Visual Quality",
        "Emotional Storytelling"
      ]
    }
  ];

  return `
    <section class="film-case-section">

      <div class="container">

        <!-- heading -->
        <div class="film-case-heading">

          <h2>
            Case Studies
          </h2>

          <p>
            Explore how we turn concepts into compelling visual narratives.
            Every project reflects our commitment to storytelling that resonates.
          </p>

        </div>

        <!-- list -->
        <div class="film-case-list">

          ${items.map((item, index) =>
            card(item, index)
          ).join("")}

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   CARD
========================================================= */

function card(item, index){

  return `
    <article class="
      film-case-item
      ${index % 2 ? "reverse" : ""}
    ">

      <!-- media -->
      <div class="film-case-media">

        <video
          autoplay
          muted
          loop
          playsinline
        >
          <source
            src="${item.video}"
            type="video/mp4"
          >
        </video>

      </div>

      <!-- content -->
      <div class="film-case-content">

        <div class="film-case-number">
          ${item.number}
        </div>

        <div class="film-case-genre">
          AI PRODUCTION PIPELINE
        </div>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.desc}
        </p>

        <!-- pipeline -->
        <div class="film-case-pipeline">

          ${item.pipeline.map(step => `
            <div class="film-pipeline-item">
              ${step}
            </div>
          `).join("")}

        </div>

        <button class="film-case-btn">
          Explore Workflow
        </button>

      </div>

    </article>
  `;
}