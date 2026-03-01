# Rajvi Zala Portfolio Website - Development Plan

## 1. Reference Analysis: RishabJS (rishabjs.xyz)

### Vital: Responsive Design (Mobile and Desktop)

**RishabJS is primarily optimized for mobile view.** For this portfolio, the design must be **fully responsive for both mobile and desktop**. All layouts, typography, spacing, and navigation must adapt meaningfully across breakpoints (e.g. sm: 640px, md: 768px, lg: 1024px, xl: 1280px). Desktop users should get a rich, wide-layout experience; mobile users a touch-friendly, single-column flow.

### Features to Adopt

| Feature | Description | Implementation Priority |
|---------|-------------|------------------------|
| **Hero Section** | Bold name, role tagline, 3-line value proposition with distinctive typography (dice symbols 1-6 used as bullets) | High |
| **Featured Projects** | 2-3 spotlight projects on homepage with description and tech stack badges; "View all projects" CTA | High |
| **Projects Page** | Dedicated `/projects` page listing all projects with cards | High |
| **Experiences** | Chronological work history: company name (linked), role, dates, location, bullet achievements | High |
| **Proof of Work** | GitHub Pull Requests section with Merged/Open/Closed tabs - live data from GitHub API | Medium |
| **Skills Section** | Technology badges/icons grouped by category | High |
| **Contact CTA** | "Get in touch" block with booking link (Cal.com or similar) | High |
| **Minimal Navigation** | Clean header/nav, possibly sticky, with smooth scroll to sections | High |

### Design Language (RishabJS-inspired)

- **Typography**: Distinctive font pairings (e.g., display font for headings, neutral sans for body)
- **Layout**: Generous whitespace. Mobile: single-column, touch-friendly. Desktop: multi-column where appropriate (e.g. project grid, wider hero), restrained max-width
- **Color**: Muted, non-generic palette (avoid purple gradients and Inter font cliches)
- **Micro-interactions**: Subtle hover states, scroll-triggered reveals

---

## 2. Your Content (from Rajvi_Zala_SE.pdf and Rajvi_Zala_AI.pdf)

### Personal / Contact

| Field | Value |
|-------|-------|
| Name | Rajvi Zala |
| Location | New York, NY |
| Phone | 716-730-9620 |
| Email | rajvisinhzala@gmail.com |
| LinkedIn | linkedin.com/in/rajvizala7107 |
| GitHub | github.com/rajvizala |

### Hero Tagline Options (pick one or combine)

- Full-Stack Developer & AI Engineer - Building scalable systems and intelligent applications
- Specializing in Distributed Systems, RAG Pipelines, and Production ML
- Creating data-driven products that scale, reason, and deliver impact

### Education

| Institution | Degree | Date | Notes |
|-------------|--------|------|-------|
| University at Buffalo, NY | Masters in Artificial Intelligence | Dec 2025 | GPA 3.75; Coursework: Distributed Systems, Algorithms, Database Systems, Big Data, Software Engineering |
| Silver Oak University, India | Bachelor of Engineering in Computer Engineering | May 2024 | CGPA 9.99/10, Rank 1, Gold Medalist |

### Experience (chronological, most recent first)

1. **AI Engineering Intern - DTG** (Syracuse, NY) | May 2025 - Oct 2025
   - Distributed caching layer for high-throughput pipelines; 55-60% cost reduction
   - Scalable user personalization microservice with Neo4J
   - MCP server with Google ADK, A2A protocol; 99.9% uptime
   - Observability pipeline (LangFuse, Grafana)

2. **Research Assistant - Human Behavior Modelling Lab, UB** (Buffalo, NY) | Oct 2024 - Dec 2025
   - Diffusion-based and VQ-VAE pipelines for 3D agent assets
   - Fine-tuned autoregressive models, VQ-VAE tokenizer
   - FID, Diversity, MSE evaluation

3. **Jr. Software Engineer - Turabit LLC** (Gujarat, India) | Jan 2024 - Jul 2024
   - Production REST microservice, Docker, CI/CD
   - Backend optimization; 40% cloud cost reduction
   - Workflow orchestration (Jira, ServiceNow)
   - *AI resume variant*: NLP focus - DistilBERT entity detection, LLM optimization (Mistral, Mixtral, vLLM), LangGraph workflows

4. **Jr. Software Engineer (Intern) - Turabit LLC** (Gujarat, India) | Sept 2023 - Dec 2023
   - Hybrid search (PostgreSQL, metadata filtering); 60% accuracy, 30% cost reduction
   - Web data ingestion microservice, rate limiting, task queues
   - Elasticsearch pipelines; 20% retrieval latency reduction
   - *AI resume variant*: RAG, Elasticsearch, Milvus

### Projects

1. **CollegeBot - Production RAG Pipeline**
   - Tech: LangChain, Zephyr-7B, FAISS, Flask
   - 800+ university pages; hybrid retrieval (FAISS + BM25); 68% to 82% precision
   - In-memory caching; 6s to 3s response time
   - End-to-end delivery; ~40% reduction in support tickets

2. **Smart Library Assistant - Full-Stack Mobile Backend**
   - Tech: Django, Flutter, Snips-NLU
   - Django REST API, 500+ books, auth, transactions
   - TF-IDF recommendation engine, NLU; 70% satisfaction

### Technical Skills (Grouped)

- **Languages**: Python, C++, C, Java, SQL, TypeScript, Go, Rust
- **Backend & Distributed**: Docker, Kubernetes, Apache Kafka, Microservices, FastAPI, Spring Boot, Django, Flask, Hibernate, REST APIs
- **Cloud & DevOps**: AWS (Lambda, DynamoDB, S3, EC2), Linux, Git, CI/CD
- **Databases & Search**: MySQL, PostgreSQL, MongoDB, Neo4J, Elasticsearch, Milvus, FAISS
- **AI & Observability**: LangFuse, Grafana, LangChain, LangGraph

---

## 3. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (or v3) |
| Animations | Framer Motion |
| Fonts | Variable font (e.g., Geist, Satoshi, or custom pairing) |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 4. Design Principles (Avoid Generic Portfolio Look)

- **No purple gradients** - Use a unique palette (e.g., warm neutrals + single accent)
- **Avoid Inter/Roboto default** - Use Geist, Satoshi, or a display + body pairing
- **Asymmetric or editorial layouts** - Offset sections, varied column widths
- **Depth via typography** - Font weight/scale contrast instead of heavy shadows
- **Intentional motion** - Scroll-triggered reveals, staggered list animations
- **Content-first** - Let your projects and metrics (55% cost reduction, 82% precision) stand out
- **Fully responsive** - Mobile-first base, but desktop must feel equally polished: multi-column layouts, larger typography, horizontal nav, grid-based project/skill sections

---

## 5. Site Structure and Pages

```
/                    → Home (all sections: Hero, Featured Projects, Experience, Proof of Work, Skills, Contact)
/projects            → All projects with detailed cards
```

### Section Order (Homepage)

1. Hero
2. Featured Projects (CollegeBot, Smart Library Assistant)
3. Experience
4. Proof of Work (GitHub PRs)
5. Skills
6. Contact / Get in Touch

### Homepage Flow (Mermaid)

```mermaid
flowchart TB
    subgraph Homepage [Homepage /]
        Hero[Hero Section]
        Featured[Featured Projects]
        Experience[Experience]
        ProofOfWork[Proof of Work]
        Skills[Skills]
        Contact[Contact]
    end
    
    subgraph ProjectsPage [/projects]
        AllProjects[All Projects]
    end
    
    Hero --> Featured --> Experience --> ProofOfWork --> Skills --> Contact
    Featured -->|View all| AllProjects
```

---

## 6. Component and File Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Experience.tsx
│   │   ├── ProofOfWork.tsx   # GitHub PRs
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ProjectCard.tsx
│       ├── ExperienceCard.tsx
│       └── SkillBadge.tsx
├── lib/
│   ├── data.ts               # Content (experience, projects, skills)
│   └── github.ts             # GitHub API for PRs
├── public/
│   └── (images if needed)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 7. Setup and Development Steps

### Phase 1: Bootstrap

1. **Create Next.js project**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
   ```

2. **Install dependencies**
   ```bash
   npm install framer-motion lucide-react
   ```

3. **Configure fonts** - Add Geist or custom fonts in `layout.tsx` and `tailwind.config.ts`

4. **Create data layer** - `lib/data.ts` with typed content for experience, projects, skills

### Phase 2: Layout and Hero

5. **Layout** - `Header`, `Footer`, global styles (color vars, spacing)

6. **Hero section** - Name, tagline, 3-line value prop with distinctive styling

### Phase 3: Content Sections

7. **Featured Projects** - 2 project cards with tech stack badges

8. **Projects page** - Full project cards for CollegeBot and Smart Library Assistant

9. **Experience** - Timeline or card list with company, role, dates, bullets

10. **Skills** - Grouped badges (Languages, Backend, Cloud, Databases, AI)

11. **Contact** - Links (email, LinkedIn, GitHub) + optional Cal.com or Calendly embed

### Phase 4: Proof of Work

12. **GitHub API** - Fetch PRs for `rajvizala`; Merged/Open/Closed tabs (server or client component with `GITHUB_TOKEN` env)

### Phase 5: Polish and Deploy

13. **Animations** - Framer Motion for scroll reveals and hover states

14. **Responsive** - Test breakpoints, touch targets

15. **SEO** - Metadata, Open Graph in `layout.tsx`

16. **Vercel** - Connect repo, deploy; add env vars if using GitHub API

---

## 8. Vercel Deployment

1. Push project to GitHub (see Stage-wise Commits below)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import the portfolio repository
4. Framework preset: Next.js (auto-detected)
5. Add environment variables (e.g. `GITHUB_TOKEN` for Proof of Work) if used
6. Deploy; Vercel will assign a `.vercel.app` URL
7. Add custom domain (optional) in Vercel project settings

---

## 9. Stage-wise GitHub Commit Strategy

Commit incrementally so your GitHub contribution graph shows consistent activity rather than one large spike.

### Day 1: Project Setup

- Commit 1: `chore: initialize Next.js project with TypeScript and Tailwind`
  - Add: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `.gitignore`, `README.md`

- Commit 2: `feat: add base layout and fonts`
  - Add: `components/layout/Header.tsx`, `components/layout/Footer.tsx`, update `layout.tsx` with font config

### Day 2: Data and Hero

- Commit 3: `feat: add content data layer`
  - Add: `lib/data.ts` (experience, projects, skills, contact)

- Commit 4: `feat: implement Hero section`
  - Add: `components/sections/Hero.tsx`, wire into `page.tsx`

### Day 3: Projects and Experience

- Commit 5: `feat: add FeaturedProjects section`
  - Add: `components/sections/FeaturedProjects.tsx`, `components/ui/ProjectCard.tsx`

- Commit 6: `feat: add dedicated projects page`
  - Add: `app/projects/page.tsx`, refine `ProjectCard` if needed

- Commit 7: `feat: add Experience section`
  - Add: `components/sections/Experience.tsx`, `components/ui/ExperienceCard.tsx`

### Day 4: Skills and Contact

- Commit 8: `feat: add Skills section`
  - Add: `components/sections/Skills.tsx`, `components/ui/SkillBadge.tsx`

- Commit 9: `feat: add Contact section`
  - Add: `components/sections/Contact.tsx`

### Day 5: Proof of Work and Polish

- Commit 10: `feat: add Proof of Work with GitHub PRs`
  - Add: `components/sections/ProofOfWork.tsx`, `lib/github.ts`

- Commit 11: `style: add animations and responsive refinements`
  - Update: Framer Motion in sections, responsive breakpoints

- Commit 12: `chore: add SEO metadata and deployment config`
  - Update: `layout.tsx` metadata, add `vercel.json` or config if needed

### Day 6: Final Touches

- Commit 13: `fix: accessibility and small UX improvements`
  - Update: ARIA labels, focus states, contrast

- Commit 14: `docs: update README with project overview and setup`
  - Update: `README.md`

---

## 10. Pre-Development Checklist

- [ ] Node.js 18+ installed
- [ ] GitHub account ready
- [ ] Decide: use SE or AI resume variant for Experience bullets (or merge both)
- [ ] Optional: Cal.com or Calendly account for booking link
- [ ] GitHub Personal Access Token (for Proof of Work PR display) - create at github.com/settings/tokens

---

## 11. Summary

| Item | Action |
|------|--------|
| Reference | RishabJS: minimal, typography-led, proof-of-work, single-page + projects |
| Content | Rajvi Zala - AI/Full-Stack focus, UB + Silver Oak, DTG + UB Lab + Turabit, CollegeBot + Smart Library |
| Stack | Next.js 15, TypeScript, Tailwind, Framer Motion, Lucide |
| Design | Distinctive fonts, no purple gradients, editorial layout, motion |
| Deploy | Vercel, GitHub integration |
| Commits | 14 stage-wise commits over ~6 days for contribution history |

---

Next step: Run the bootstrap commands and start with Day 1 commits. Once the base is ready, we can proceed section by section.
