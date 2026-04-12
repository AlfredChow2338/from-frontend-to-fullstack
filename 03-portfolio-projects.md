# Portfolio projects — two strong stories

Target **two** substantial projects. Each should demonstrate **end-to-end ownership**: API design, persistence, auth, tests, deployment, and a **thin but real** frontend (your existing strength).

---

## Project A (recommended): SaaS-lite workspace

**Elevator pitch:** Multi-tenant workspace where users belong to organizations with roles, and collaborate on one primary workflow.

### Suggested core workflow (pick one)

- **Tasks / projects** — boards or lists with assignees and statuses  
- **Invoices / billing-lite** — customers, invoices, line items, statuses (no need for real money in v1)  
- **Content calendar** — posts, channels, scheduled dates, approval state  

### Minimum viable scope (portfolio-grade)

- **Organizations** — create org, switch org context  
- **Membership** — invite by email token or join code (simplest path that is still believable)  
- **Roles** — at least `OWNER`, `MEMBER` (add `ADMIN` if time)  
- **Core entities** — CRUD + list with pagination for your workflow  
- **Auth** — register, login, refresh, logout; protected routes  
- **API** — NestJS + Prisma + Postgres; Swagger in dev  
- **UI** — React: login, org switcher, main workflow screens, empty/error states  

### Explicit out-of-scope (unless Month 5+)

- Mobile apps, perfect accessibility audit, i18n  
- Real payments (unless you choose Project B’s Stripe angle separately)  
- Infinite scale / Kubernetes  

### “Done” definition

- Live URL for API + UI (or API + documented Postman if UI slips—prefer both)  
- README gets a stranger from clone to running app in one sitting  
- At least **one integration test** for auth and **one** for a protected CRUD flow  

---

## Project B: pick a different angle

Choose **one** so your second project complements Project A rather than duplicating it.

### Option 1 — External integrations

- **Stripe** — checkout or billing portal, webhook endpoint with **signature verification**, idempotent handling  
- **OAuth** — Google or GitHub login; store provider IDs; link to local user  

**Done means:** You can explain replay attacks on webhooks and how you prevent double-processing.

### Option 2 — Realtime

- **WebSockets** (Nest gateway) — chat room, presence, or live notifications  
- **Auth on connect** — token in handshake or first message; disconnect rules  

**Done means:** You acknowledge scaling limits (single node OK for portfolio; sticky sessions or Redis adapter as stretch).

### Option 3 — Background processing

- **Queue (e.g. BullMQ + Redis)** — send email, generate PDF, or process imports  
- **Retries and dead-letter** — document what happens on failure  

**Done means:** User-facing action returns fast; work finishes asynchronously with visible status in UI or polling.

---

## README signals reviewers scan

Use this as a **template** for both repos.

### Title and links

- One-line description  
- **Live demo** links (API + UI)  
- Link to **Swagger** or OpenAPI JSON if public  

### Quickstart

- Prerequisites (Node version, Docker)  
- **One command** to run Postgres + migrate + seed + dev server  
- Where to create first user / demo credentials  

### Architecture

- Short **diagram** (Excalidraw, Mermaid in README, or image): client → API → DB → optional Redis/queue  
- Folder structure **one paragraph** (“`src/modules/*` feature-based…”)  

### Environment

| Variable | Purpose | Required |
|----------|---------|----------|
| `DATABASE_URL` | Postgres connection | yes |
| `JWT_SECRET` | signing | yes |
| … | … | … |

### Testing

- How to run unit tests  
- How to run integration tests (and test DB)  
- What is **not** covered (honesty builds trust)  

### Security

- What you implemented (hashing, HTTPS in prod, CORS, rate limits)  
- Known gaps (e.g. “no 2FA”, “no pen test”) — brief  

### Ops / deployment

- Where it’s hosted  
- How migrations run on deploy  
- How to view logs  

### What’s next

- 3 bullets of **real** improvements (performance, feature, hardening)  

---

## GitHub presentation tips

- Pin both repos; use concise descriptions with **stack keywords** (NestJS, Prisma, React).  
- Clean commit history on `main`; use PRs even solo (shows habits).  
- **Issues** or a small **Roadmap** doc: signals planning.  

---

## Narrative for interviews

For each project, prepare:

1. **Problem** — who would use it and why  
2. **Hardest part** — auth, data model, deployment, or race condition  
3. **Tradeoff** — what you’d redo with more time  
4. **Metrics** — even rough: test count, deploy time, p95 if you measured  

This maps cleanly to “Tell me about a project” and “Design an API for X.”
