export type Lang = "en" | "es";

export interface Translations {
  nav: { home: string; news: string; sponsors: string };
  footer: { affiliate: string; navigate: string; contact: string; rights: string; member: string };
  home: {
    eyebrow: string; subtitle: string; cta_news: string; cta_support: string; scroll: string;
    about_eyebrow: string; about_heading: string; about_p1: string; about_p1_highlight: string; about_p1_end: string; about_p2: string;
    stats: { number: string; label: string }[];
    event_eyebrow: string; event_heading: string; event_year_label: string; event_city_label: string; event_desc: string; event_cta: string;
    news_eyebrow: string; news_heading: string; news_all: string; news_read_more: string;
  };
  news: { eyebrow: string; heading: string; empty: string };
  article: { back: string; by: string; cta_heading: string; cta_sub: string; cta_btn: string };
  sponsors: {
    eyebrow: string; heading: string; subheading: string; current_eyebrow: string; placeholder: string;
    cta_secure: string; filling: string; banner: string; banner_sub: string;
    packages_eyebrow: string; packages_heading: string; exclusive_badge: string; get_started: string;
    ready_heading: string; ready_sub: string; email_btn: string; call: string;
    packages: { tier: string; price: string; ideal: string }[];
    perks: string[][];
  };
}

export const t: Record<Lang, Translations> = {
  en: {
    nav: {
      home: "Home",
      news: "News",
      sponsors: "Sponsors",
    },
    footer: {
      affiliate: "Affiliated with GAMMA International.",
      navigate: "Navigate",
      contact: "Contact",
      rights: "All rights reserved.",
      member: "Official member of",
    },
    home: {
      eyebrow: "Puerto Rico National Team",
      subtitle:
        "Puerto Rico's official national MMA federation. Developing champions, representing the island, competing on the world stage under GAMMA International.",
      cta_news: "Latest News",
      cta_support: "Support the Team",
      scroll: "Scroll",
      about_eyebrow: "About",
      about_heading: "The Federation",
      about_p1:
        "FAMMPR — the Federación de Artes Marciales Mixtas de Puerto Rico — is Puerto Rico's official governing body for mixed martial arts, proudly affiliated with",
      about_p1_highlight: "GAMMA International",
      about_p1_end: ", the global authority for MMA.",
      about_p2:
        "We develop athletes at every level — youth to elite — representing Puerto Rico on the international stage and building a legacy of excellence in combat sports.",
      stats: [
        { number: "GAMMA", label: "International Affiliate" },
        { number: "2026", label: "Pan American Championships" },
        { number: "Youth\n+\nElite", label: "One Team. One Trip." },
        { number: "Bogotá", label: "Colombia — Our Next Stage" },
      ],
      event_eyebrow: "Upcoming Event",
      event_heading: "GAMMA Pan American\nChampionships",
      event_year_label: "Year",
      event_city_label: "Colombia",
      event_desc:
        "Team Puerto Rico will compete at the 2026 GAMMA Pan American Championships — our youth and adult athletes traveling together as one unified delegation.",
      event_cta: "Help Send the Team",
      news_eyebrow: "Latest",
      news_heading: "News",
      news_all: "All News →",
      news_read_more: "Read More",
    },
    news: {
      eyebrow: "FAMMPR",
      heading: "News",
      empty: "No articles yet. Check back soon.",
    },
    article: {
      back: "All News",
      by: "By",
      cta_heading: "Ready to get involved?",
      cta_sub:
        "Support Team Puerto Rico or learn about competing under FAMMPR.",
      cta_btn: "Support the Team →",
    },
    sponsors: {
      eyebrow: "2026 GAMMA Pan American Championships",
      heading: "Our Sponsors",
      subheading:
        "These businesses believe in Team Puerto Rico. Their support makes it possible for our athletes to compete on the international stage.",
      current_eyebrow: "Current Sponsors",
      placeholder: "Your Brand",
      cta_secure: "Secure yours below.",
      filling: "Sponsorship spots are filling in.",
      banner:
        "You're not buying an ad impression. You're becoming part of Puerto Rico's journey to the international stage.",
      banner_sub:
        "Sponsor recognition across our full social media coverage — before, during, and after the 2026 GAMMA Pan American Championships in Bogotá, Colombia.",
      packages_eyebrow: "Sponsorship Packages",
      packages_heading: "Choose Your Level",
      exclusive_badge: "1 Spot Only",
      get_started: "Get Started",
      ready_heading: "Ready to become an official partner?",
      ready_sub:
        "Reach out and we'll find the right package for your business. Limited spots available.",
      email_btn: "Email Us",
      call: "or call (939) 238-5257",
      packages: [
        {
          tier: "Bronze",
          price: "$300 – $500",
          ideal: "Restaurants, gyms, supplement stores, chiropractors",
        },
        {
          tier: "Silver",
          price: "$750 – $1,000",
          ideal: "Local businesses looking for consistent visibility",
        },
        {
          tier: "Gold",
          price: "$1,500 – $2,000",
          ideal: "Larger local businesses seeking campaign-level exposure",
        },
        {
          tier: "Presenting",
          price: "$3,000+",
          ideal: "One exclusive spot available",
        },
      ],
      perks: [
        [
          "Logo on sponsor graphic",
          "1 dedicated sponsor thank-you story",
          "Mention in post caption",
          "Business tagged in posts",
        ],
        [
          "Everything in Bronze",
          "Featured in 2–3 posts",
          "Logo on travel announcement graphics",
          "One dedicated sponsor spotlight reel",
          "Story mentions throughout the trip",
        ],
        [
          "Everything in Silver",
          "Featured throughout the entire campaign",
          "Logo in every sponsor graphic",
          "Multiple reels with sponsor recognition",
          "Dedicated appreciation post",
          "Priority placement",
        ],
        [
          "Top logo placement on all content",
          "Mention on every sponsor graphic",
          "Dedicated feature video",
          "Multiple tagged posts throughout campaign",
          "Press / media mentions where applicable",
          "Priority recognition at every opportunity",
          '"Official Presenting Sponsor of Team Puerto Rico"',
        ],
      ],
    },
  },

  es: {
    nav: {
      home: "Inicio",
      news: "Noticias",
      sponsors: "Patrocinadores",
    },
    footer: {
      affiliate: "Afiliada a GAMMA International.",
      navigate: "Navegar",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      member: "Miembro oficial de",
    },
    home: {
      eyebrow: "Equipo Nacional de Puerto Rico",
      subtitle:
        "La federación oficial de MMA de Puerto Rico. Desarrollando campeones, representando la isla, compitiendo en el escenario mundial bajo GAMMA International.",
      cta_news: "Últimas Noticias",
      cta_support: "Apoya al Equipo",
      scroll: "Bajar",
      about_eyebrow: "Acerca de",
      about_heading: "La Federación",
      about_p1:
        "FAMMPR — la Federación de Artes Marciales Mixtas de Puerto Rico — es el organismo rector oficial de las artes marciales mixtas en Puerto Rico, orgullosamente afiliada a",
      about_p1_highlight: "GAMMA International",
      about_p1_end: ", la autoridad global del MMA.",
      about_p2:
        "Desarrollamos atletas en todos los niveles — desde juveniles hasta élite — representando a Puerto Rico en el escenario internacional y construyendo un legado de excelencia en los deportes de combate.",
      stats: [
        { number: "GAMMA", label: "Afiliado Internacional" },
        { number: "2026", label: "Campeonatos Panamericanos" },
        { number: "Juvenil\n+\nÉlite", label: "Un Equipo. Un Viaje." },
        { number: "Bogotá", label: "Colombia — Nuestro Próximo Escenario" },
      ],
      event_eyebrow: "Próximo Evento",
      event_heading: "Campeonatos\nPanamericanos GAMMA",
      event_year_label: "Año",
      event_city_label: "Colombia",
      event_desc:
        "El Equipo Puerto Rico competirá en los Campeonatos Panamericanos GAMMA 2026 — nuestros atletas juveniles y adultos viajando juntos como una delegación unificada.",
      event_cta: "Ayuda a Enviar al Equipo",
      news_eyebrow: "Últimas",
      news_heading: "Noticias",
      news_all: "Todas las Noticias →",
      news_read_more: "Leer Más",
    },
    news: {
      eyebrow: "FAMMPR",
      heading: "Noticias",
      empty: "Aún no hay artículos. Vuelve pronto.",
    },
    article: {
      back: "Todas las Noticias",
      by: "Por",
      cta_heading: "¿Listo para involucrarte?",
      cta_sub:
        "Apoya al Equipo Puerto Rico o aprende sobre cómo competir bajo FAMMPR.",
      cta_btn: "Apoya al Equipo →",
    },
    sponsors: {
      eyebrow: "Campeonatos Panamericanos GAMMA 2026",
      heading: "Nuestros Patrocinadores",
      subheading:
        "Estos negocios creen en el Equipo Puerto Rico. Su apoyo hace posible que nuestros atletas compitan en el escenario internacional.",
      current_eyebrow: "Patrocinadores Actuales",
      placeholder: "Tu Marca",
      cta_secure: "Asegura el tuyo abajo.",
      filling: "Los espacios de patrocinio se están llenando.",
      banner:
        "No estás comprando una impresión de anuncio. Estás formando parte del viaje de Puerto Rico hacia el escenario internacional.",
      banner_sub:
        "Reconocimiento del patrocinador en toda nuestra cobertura en redes sociales — antes, durante y después de los Campeonatos Panamericanos GAMMA 2026 en Bogotá, Colombia.",
      packages_eyebrow: "Paquetes de Patrocinio",
      packages_heading: "Elige Tu Nivel",
      exclusive_badge: "1 Espacio",
      get_started: "Comenzar",
      ready_heading: "¿Listo para ser socio oficial?",
      ready_sub:
        "Contáctanos y encontraremos el paquete adecuado para tu negocio. Espacios limitados.",
      email_btn: "Escríbenos",
      call: "o llama al (939) 238-5257",
      packages: [
        {
          tier: "Bronce",
          price: "$300 – $500",
          ideal: "Restaurantes, gimnasios, tiendas de suplementos, quiroprácticos",
        },
        {
          tier: "Plata",
          price: "$750 – $1,000",
          ideal: "Negocios locales que buscan visibilidad constante",
        },
        {
          tier: "Oro",
          price: "$1,500 – $2,000",
          ideal: "Negocios locales más grandes con necesidad de exposición a nivel de campaña",
        },
        {
          tier: "Presentador",
          price: "$3,000+",
          ideal: "Un espacio exclusivo disponible",
        },
      ],
      perks: [
        [
          "Logo en gráfico de patrocinador",
          "1 historia de agradecimiento dedicada",
          "Mención en la descripción de la publicación",
          "Negocio etiquetado en publicaciones",
        ],
        [
          "Todo lo del Bronce",
          "Destacado en 2–3 publicaciones",
          "Logo en gráficos del anuncio de viaje",
          "Un reel de presentación dedicado al patrocinador",
          "Menciones en historias durante el viaje",
        ],
        [
          "Todo lo de Plata",
          "Destacado durante toda la campaña",
          "Logo en cada gráfico de patrocinador",
          "Múltiples reels con reconocimiento del patrocinador",
          "Publicación de agradecimiento dedicada",
          "Ubicación prioritaria",
        ],
        [
          "Ubicación de logo premium en todo el contenido",
          "Mención en cada gráfico de patrocinador",
          "Video de presentación dedicado",
          "Múltiples publicaciones etiquetadas durante la campaña",
          "Menciones en prensa / medios cuando aplique",
          "Reconocimiento prioritario en cada oportunidad",
          '"Patrocinador Presentador Oficial del Equipo Puerto Rico"',
        ],
      ],
    },
  },
};
