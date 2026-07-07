# Premium Portfolio Website Plan

## Goal
Build a premium portfolio inspired by https://www.radnaabazar.com/en while creating an original design and interaction style.

## Tech Stack
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- GSAP + ScrollTrigger
- Lenis
- Framer Motion (optional)
- React Icons

## Project Structure
```text
src/
  assets/
  components/
  pages/
  hooks/
  animations/
  data/
  styles/
```

## Milestones

### Phase 1 – Project Setup
- Create Vite app
- Configure TypeScript
- Install Tailwind
- Configure routing
- Organize folders

### Phase 2 – Layout
- Navbar
- Hero
- About
- Skills
- Projects
- Contact
- Footer

### Phase 3 – Animations
- Smooth scrolling (Lenis)
- GSAP text reveals
- Scroll-triggered animations
- Image reveal effects
- Custom cursor
- Loading screen

### Phase 4 – Polish
- Responsive design
- Accessibility improvements
- Image optimization
- SEO metadata
- Performance audit

## Pages
- Home
- Project Details
- 404

## Future Features
- Dark/Light mode
- Blog
- CMS integration
- Analytics
- Contact form backend

## Git Workflow
```bash
git init
git add .
git commit -m "Initial portfolio setup"
```

Recommended commits:
1. Project setup
2. Layout complete
3. Hero animation
4. Projects section
5. About section
6. Contact section
7. Responsive improvements
8. Performance & SEO
9. Deploy

## GitHub Deployment

### Create Repository
1. Create a new GitHub repository.
2. Push your local project:
```bash
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main
```

### Deploy with GitHub Pages
Install:
```bash
npm install -D gh-pages
```

Update `vite.config.ts`:
```ts
base: "/<repo-name>/"
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

Alternatively, deploy automatically with GitHub Actions or use Vercel/Netlify.

## Definition of Done
- Responsive on mobile, tablet, desktop
- Smooth 60 FPS animations
- Lighthouse score above 90
- Clean component architecture
- Hosted on GitHub with live deployment
