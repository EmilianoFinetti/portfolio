# Emiliano Finetti | Personal Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?style=flat-square&logo=nginx&logoColor=white)](https://nginx.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

Source code for the personal portfolio website of **Emiliano Finetti** ([emilianofinetti.com](https://www.emilianofinetti.com)), Software & Computer Systems Engineer.

The site is built with **Astro** as a high-performance Static Site Generator (SSG), featuring a modern design system, seamless internationalization (IT/EN), persistent dark/light theme switching, and containerized deployment with Docker and Nginx.

---

## 🌟 Key Highlights & Features

### ⚡ Performance & Core Architecture
- **Zero-JS by Default**: Static HTML generation with scoped CSS and lightweight vanilla JavaScript where interactivity is required.
- **Automated Image Optimization**: Powered by Astro's asset pipeline (`astro:assets`), converting graphics to WebP with responsive densities and cache headers.
- **Containerized Multi-Stage Build**: Node 24 Alpine builder stage that compiles static assets, served by a hardened Nginx Alpine production image (< 30 MB).

### 🌐 Internationalization (i18n) & SEO
- **Dual Language Routing**: Static routes for Italian (`/`) and English (`/en/`).
- **Smart Language Detection**: Seamless client-side router checking `localStorage` preference, falling back to browser language (`navigator.language`).
- **Interactive SVG Flag Switcher**: Integrated directly in the navbar with animated transitions.
- **Search Engine Optimization**:
  - Valid `canonical` and bidirectional `alternate hreflang` tags (`it`, `en`, and `x-default`).
  - Open Graph & Twitter Card rich metadata.
  - Automated XML sitemap generation via `@astrojs/sitemap` (filtering error pages).
  - Dedicated custom `404.astro` and `/en/404.astro` error layouts.

### 🎨 Design System & Aesthetics
- **Theme Engine (Dark & Light Mode)**:
  - Custom CSS tokens (`--bg-color`, `--card-bg`, `--card-border`, `--primary-color`, etc.) for seamless adaptation.
  - Automatic detection of `prefers-color-scheme` with persistent manual toggle in `localStorage`.
  - Zero Flash of Unstyled Theme (FOUT) through inline head execution.
- **Glassmorphic Sticky Navbar**:
  - Backdrop blur filter (`backdrop-filter: blur(16px)`) with subtle borders.
  - Responsive mobile drawer navigation with animated hamburger toggle.
  - Contextual back button (`isSubpage={true}`) on subpages.
- **Hero & Interactive CTA Buttons**:
  - Radial gradient ambient lighting behind the profile avatar.
  - Harmonized CTA kinetic animations (elevation on hover, tactile press on click).
  - Downloadable bilingual CV in PDF format.
- **Advanced Interactive Carousel & Lightbox**:
  - Custom touch & drag scrollable stage (`ProjectCard.astro`) with floating navigation arrows and centered glassmorphic indicator pill dots.
  - Fullscreen Lightbox Modal singleton allowing users to inspect high-resolution project screenshots, complete with keyboard controls and image counter.
- **Floating Glassmorphic Cookie Toast**:
  - Non-intrusive floating card in the bottom corner with playful cookie icon micro-interaction.
  - Technical-cookies-only notice linked to dedicated `/cookie-policy/` pages.
  - Smooth spring physics on entrance and exit animations.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
|---|---|---|
| **Framework** | [Astro](https://astro.build/) (v5) | Static Site Generator & component compiler |
| **Styling** | Vanilla CSS3 + [Bootstrap 5.3](https://getbootstrap.com/) | Custom design system + responsive grid system |
| **Icons** | [FontAwesome 6](https://fontawesome.com/) + Custom SVGs | Iconography and inline SVG national flags |
| **Typography** | [Google Fonts](https://fonts.google.com/) | 'Inter' variable font |
| **SEO & Sitemap** | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Automated sitemap generator |
| **Web Server** | [Nginx](https://nginx.org/) | Reverse proxy and high-performance static file server |
| **Containers** | [Docker](https://www.docker.com/) & Docker Compose | Multi-stage image build and orchestration |

---

## 📁 Repository Structure

```text
EmilianoFinettiSite/
├── conf/
│   └── default.conf            # Nginx server configuration (canonical redirect, cache, 404)
├── public/
│   ├── assets/
│   │   ├── files/              # Downloadable CVs (Italian & English PDFs)
│   │   └── images/             # Static public images (social preview / OG card)
│   ├── favicon.svg             # Website favicon
│   └── robots.txt              # Search engine crawler directives
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css       # Global design system & theme variables (Light/Dark)
│   │   └── images/             # High-res screenshots, project mockups & logos
│   ├── components/
│   │   ├── Navbar.astro        # Sticky glassmorphic navbar with flags & theme switch
│   │   └── ProjectCard.astro   # Interactive project showcase with carousel & lightbox
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Master HTML shell (SEO, head, theme, footer, cookie toast)
│   │   └── ExperienceLayout.astro # Template for company experiences & project case studies
│   └── pages/
│       ├── 404.astro           # Custom Italian 404 page
│       ├── cookie-policy.astro # Italian Cookie Policy
│       ├── index.astro         # Italian Homepage
│       ├── experiences/        # Italian experience detail pages
│       │   ├── gong-technology-high-tech.astro
│       │   ├── kiwi.astro
│       │   └── polimi-motorcycle-factory.astro
│       ├── projects/           # Italian project detail pages
│       │   ├── melted-hero.astro
│       │   └── qt-coffee-machine.astro
│       └── en/                 # English mirrored routing
│           ├── 404.astro
│           ├── cookie-policy.astro
│           ├── index.astro
│           ├── experiences/
│           └── projects/
├── astro.config.mjs            # Astro configuration (site URL, sitemap filter, i18n routing)
├── Dockerfile                  # Multi-stage production container build
├── docker-compose.yml          # Container configuration for local testing / production run
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v20.x` or `v22.x+` (Node 24 recommended)
- **npm**: `v10+`

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EmilianoFinetti/EmilianoFinettiSite.git
   cd EmilianoFinettiSite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:4321`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🐳 Docker Deployment

The project includes an optimized multi-stage `Dockerfile` and `docker-compose.yml` for quick and reproducible deployment.

### Option A: Using Docker Compose (Recommended)

To build the image and launch the container in the background:
```bash
docker compose up -d --build
```
The site will be accessible at: `http://localhost:8080`.

To stop the container:
```bash
docker compose down
```

### Option B: Manual Docker Commands

1. **Build the Docker image**:
   ```bash
   docker build -t emiliano-finetti-site .
   ```

2. **Run the container**:
   ```bash
   docker run -d --name emiliano-site -p 8080:80 emiliano-finetti-site
   ```

---

## 👨‍💻 About Emiliano Finetti

Computer Systems & Software Engineer with a Master's Degree from **Politecnico di Milano** and a Bachelor's Degree from **Università di Trento**.

- **Core Competencies**: Back-end Architecture, Python, Django, C++, Qt 6, Distributed Systems, SQL, Linux, Docker, Data Infrastructure.
- **LinkedIn**: [linkedin.com/in/emiliano-finetti](https://www.linkedin.com/in/emiliano-finetti/)
- **GitHub**: [github.com/EmilianoFinetti](https://github.com/EmilianoFinetti)
- **Website**: [emilianofinetti.com](https://www.emilianofinetti.com)

---

## 📄 License & Intellectual Property

This repository adopts a dual-licensing structure to allow community reuse while strictly complying with European copyright and intellectual property frameworks:

- **Source Code ([MIT License](LICENSE))**: The codebase (Astro components, HTML, CSS design system, JavaScript logic, Docker and Nginx configurations) is released under the **MIT License**. You are welcome to fork, adapt, and use this architecture as inspiration or as a foundation for your own portfolio.
- **Personal Content & GDPR Notice (All Rights Reserved)**: All personal data, photographs, biographical text, and curriculum vitae files (`CV - *.pdf`) are protected personal data (EU Regulation 2016/679 - GDPR) and original creative work. They are **excluded** from the MIT license and may not be reproduced, republished, or distributed.
- **Third-Party Trademarks**: Institutional and corporate names and logos (e.g., Politecnico di Milano, Università di Trento, Gong Technology, Kiwi Technologies, Polimi Motorcycle Factory, and Istituto Enrico Fermi) remain the registered property of their respective owners and are displayed exclusively for descriptive/referential purposes (nominative fair use).

> **Note for Forking**: If you fork this repository, please replace all personal assets, CV files, photos, and third-party logos with your own content.
