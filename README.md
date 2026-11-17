# Muhammad Adeel Basit — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for hosting
```bash
npm run build      # output in /dist — upload the contents of dist/ to any host
npm run preview    # preview the production build
```
Works on Netlify, Vercel, GitHub Pages, or shared hosting (cPanel). The build uses relative paths, so it also works from a sub-folder.

## Editing content
All text, links, projects, skills and documents are in **`src/data/portfolio.js`**.

- **Add a project:** add an object to `projects` (title, category `wordpress` | `webapp`, description, tags, image, link, domain, accent colour).
  Put the screenshot in `public/images/`. If you leave `image` out, a branded placeholder thumbnail is generated automatically.
- **Add a certificate:** put the PDF in `public/documents/` and add it to `documents`.

## Structure
```
public/images      screenshots + profile photo
public/documents   certificates & case-study PDFs
src/components     one component per section
src/hooks          typing effect, scroll reveal, active nav section
src/styles         global.css (design tokens + responsive styles)
old-html-version/  backup of the original HTML/CSS site
```
