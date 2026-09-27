# Emiliano Finetti | Personal Portfolio

This repository contains the source code for my personal portfolio website.

## 🚀 Overview

The website is a statically generated application (SSG) built to showcase my academic background, technical skills, and professional experience as a Software & Data Engineer. Recently migrated to **Astro**, the project focuses on high performance, SEO optimization, and a highly modular component-based architecture.

## 🛠️ Technologies Used

- **Astro** (Static Site Generator & Build Tool)
- **HTML5 & CSS3**
- **Bootstrap 5.3** (For responsive layout and UI components)
- **JavaScript (Vanilla)** (For custom logic like carousels and theme toggling)
- **Docker & Nginx** (Multi-stage build for lightweight deployment)
- **FontAwesome** (Iconography)

## 🌐 Features

- **High Performance & Optimization:** Leveraging Astro's build process for automatic image optimization (WebP) and zero-JS client delivery where possible.
- **Internationalization (i18n):** Static routing for multiple languages (`/` for IT, `/en/` for EN) with automatic initial browser language detection and redirection.
- **Theme Switcher:** Persistent Dark/Light mode toggle utilizing `localStorage`.
- **Modular Architecture:** Reusable layouts (`BaseLayout`, `ExperienceLayout`) and components (`ProjectCard`) for scalable content management.
- **Fully Responsive:** Optimized for both mobile and desktop viewports using the Bootstrap grid system.

## 📁 Directory Structure

```text
.
├── src/                    # Application source code
│   ├── assets/             # Local images (automatically optimized by Astro)
│   ├── components/         # Reusable UI components (e.g., ProjectCard)
│   ├── layouts/            # Page layout wrappers (e.g., BaseLayout)
│   └── pages/              # File-based routing (Root for IT, /en/ for EN)
├── public/                 # Static assets (Favicon, CV, robots.txt)
├── conf/                   # Nginx configuration (default.conf)
├── astro.config.mjs        # Astro configuration file
├── package.json            # Node.js dependencies and scripts
├── Dockerfile              # Multi-stage Docker build instructions
└── docker-compose.yml      # Docker Compose configuration
```

## 🏗️ Local Development

To run project locally:

1. Install dependencies:

   ```bash
   npm install
   ```
1. Start the development server:

   ```bash
   npm run dev
   ```
1. Build for production:

   ```bash
   npm run build
   ```
## 👨‍💻 About Me

I am currently pursuing a Master's Degree in Computer Science and Engineering at Politecnico di Milano. I have hands-on experience in:

- Software Development: C++, Python, Django, Node.js, Qt 6
- Database Management: MySQL
- Systems & DevOps: Linux, Docker, Git, GitHub Actions, Data Engineering (NAS/Rack)

Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/emiliano-finetti/) or check out my other projects on [GitHub](https://github.com/EmilianoFinetti).
