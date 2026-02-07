# Nelis Munene Academic Writer Portfolio

## Overview
This is a multi-page static portfolio site for Nelis Munene, a professional academic writer. It presents services, samples, blog content, and contact options, with shared navigation and a consistent visual system.

## Pages
- `index.html`: Home page with hero intro, FAQ accordion, highlights timeline, contact form, and WhatsApp-style testimonial slider.
- `about.html`: About page with professional background, writing philosophy, extended FAQ, and CTA.
- `services.html`: Services overview with a multi-card services grid.
- `samples.html`: Sample catalog with search and filter controls (discipline and citation style).
- `blog.html`: Blog landing page with post cards and sidebar.
- `contactme.html`: Contact page with WhatsApp CTA and detailed contact form.

## Stylesheets
- `index.css`: Home page styles, including hero, highlights timeline, and testimonial slider.
- `styles.css`: Shared styles for about, services, samples, blog, and contact pages. Includes global layout, typography, and page-specific sections.

## Scripts
- `script.js`: Global JavaScript loaded by all pages.
  - Auto-updates footer year.
  - Handles accordion expand/collapse behavior.
  - Smooth scroll for internal anchor links.
  - Front-end form submission interception with alert feedback.
  - WhatsApp button logic for contact page.
  - Sample preview click alerts for samples page.
  - Sample filtering logic (search, discipline, citation) for samples page.

## Assets
- External images are hosted on GitHub and referenced by URL in the HTML.
- Local folder: `Images/` (currently unused by the HTML files).

## External Resources
- Google Fonts:
  - Playfair Display
  - Inter

## Key UI Components
- Sticky header with global navigation and CTA button.
- Hero section with copy and headshot.
- FAQ accordion (home and about pages).
- Highlights timeline cards (home page).
- Testimonials slider (home page).
- Services grid (services page).
- Samples grid with search and filters (samples page).
- Blog cards with sidebar (blog page).
- WhatsApp CTA and contact forms (contact page).

## Known Issues / Cleanup Suggestions
- Encoding artifacts in HTML (e.g., "–", "’", "✔"): update to proper UTF-8 characters.
- `styles.css` references CSS variables not defined in `:root` (e.g., `--text-muted`, `--bg-card`, `--shadow-soft`, `--primary`, `--primary-dark`, `--text-main`, `--bg-muted`). Define these or replace with existing variables.
- `script.js` contains inline HTML `<script>` tags and duplicate preview handlers; extract the inline block into normal JS and de-duplicate.
- Some sample links use placeholder Google Docs URLs; replace with real links or disable.
- `index.js` is empty and can be removed if unused.

## Local Development
Open any HTML file directly in a browser, or run a local static server for consistent routing and asset loading.

Example (PowerShell):
```
# From d:\my_second_website
python -m http.server 8000
```
Then visit `http://localhost:8000/index.html`.

## License
All content is owned by Nelis Munene unless otherwise stated.
