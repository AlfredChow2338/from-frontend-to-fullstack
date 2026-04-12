# Daily track — 24 weeks (NestJS fullstack)

Use this as your **day-by-day** execution layer for [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md).

## Your time box (per week)

| Days             | Budget                    |
| ---------------- | ------------------------- |
| Monday–Friday    | **1 hour/day** (5 hours)  |
| Saturday–Sunday  | **4 hours/day** (8 hours) |
| **Weekly total** | **13 hours**              |

**How to use each day**

- **Weekdays (1h):** One focused outcome. If you finish early, review yesterday’s notes or skim next day’s reading—do not start a second “big” thread.
- **Weekends (4h):** Four **~1h** slots (take a 5–10 min break between slots). Check them off as you go.

**Weekly rule:** Finish the **week milestone** in [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md). If you slip, drop polish first, not tests or core scope.

---

## Udemy: NestJS Zero to Hero (integrated)

**Course:** [NestJS Zero to Hero — Modern TypeScript Back-end Development](https://www.udemy.com/course/nestjs-zero-to-hero/) (Ariel Weinberger).  
**Rough length:** ~9 hours on-demand — target finishing the **core lectures** by **end of Week 8** (optional **Deployment** section anytime in Weeks 8–10).

### Two-repo rule (strongly recommended)

| Repo                                  | Purpose                                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`udemy-zero-to-hero`** (or similar) | Code **exactly** with the instructor — includes **TypeORM** + PostgreSQL + Docker as taught.                  |
| **`portfolio-api`**                   | Your **roadmap** app (notes → Project 1). From **Week 9** onward use **Prisma** + Postgres here, not TypeORM. |

**Why:** The course teaches **TypeORM**; this roadmap standardizes on **Prisma** for your portfolio from Month 3. Treat TypeORM entities/repositories as “ORM concepts,” then re-express them as Prisma schema + services when you migrate.

### Week-by-week course map (use Udemy’s section titles in the sidebar)

| When         | Course arc (typical outline — match to your sidebar)                                                                    | Your action                                                                                                                                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Week 2**   | Introduction, prerequisites, Nest CLI, first app                                                                        | Watch + create `udemy-zero-to-hero` project                                                                                                                                                                                          |
| **Week 3**   | Task Management REST: modules, controllers, services, DTOs, CRUD                                                        | Code-along in Udemy repo + mirror structure in **`portfolio-api`**                                                                                                                                                                   |
| **Week 4**   | Validation, pipes, error handling                                                                                       | Code-along + Swagger/tests on **portfolio**                                                                                                                                                                                          |
| **Week 5**   | Logging, configuration (often mid-course)                                                                               | Align with `ConfigModule` / logging on **portfolio**                                                                                                                                                                                 |
| **Week 6–7** | **PostgreSQL & TypeORM** + Docker, then **Authentication** (Passport, JWT, guards) — _order can vary by course version_ | **Weeks 6–7** below follow _TypeORM → Auth_; if your sidebar shows **Auth before TypeORM**, swap those two weeks’ **Udemy** blocks but keep the same **portfolio** milestones (in-memory auth until Prisma in Week 9 is still fine). |
| **Week 8**   | Unit + E2E testing                                                                                                      | Finish course testing chapters + Supertest on **portfolio**                                                                                                                                                                          |
| **Week 9+**  | _(Optional)_ Deployment section                                                                                         | Optional; **portfolio** DB work is **Prisma**, not a second TypeORM pass                                                                                                                                                             |

### Time budget for video

- Aim **~1.5–2.5 hours/week** on **Sat–Sun** (use 1–2 of the four weekend slots) so the ~9h fits without eating weekday roadmap work.
- Use **1.25×–1.5×** speed for parts that repeat your existing TS knowledge.

### Completion checklist (tick in Udemy)

- [ ] Introduction / prerequisites / CLI / first application
- [ ] Task Management REST API (modules, controllers, services, DTOs, CRUD)
- [ ] Validation & error handling (pipes, filters)
- [ ] PostgreSQL + **TypeORM** + Docker (in **Udemy repo only** for this phase)
- [ ] Authentication & authorization (Passport, JWT, guards)
- [ ] Logging & configuration (as covered in course)
- [ ] Testing (unit + E2E)
- [ ] _(Optional)_ Deployment / production notes

---

## Month 1 — Node + HTTP + NestJS skeleton

### Week 1 — Node fundamentals

**Milestone:** Event loop one-liner + small script with validated env.

- **Mon (1h)** — [ ] Install **Node LTS**; `node -v` / `npm -v`; create folder `playground-node`; `npm init -y`.
- **Tue (1h)** — [ ] Add **TypeScript** (or plain JS first week—pick one and keep): `tsconfig`, compile/run script; one `console.log` entry file.
- **Wed (1h)** — [ ] Load config: `.env` + `.env.example` (no secrets in git); read one variable in code; document in README stub.
- **Thu (1h)** — [ ] **async/await**: one function that `await`s a `Promise`; `try/catch`; log error without killing the process wrongly.
- **Fri (1h)** — [ ] `package.json` scripts: `build`, `start` (and `dev` if using watch); run from clean `npm install`.

**Sat (4h)** — [ ] (1h) Skim Node “event loop” / timers docs; write **5 bullets** in your notes (“what blocks vs defers”).  
 — [ ] (1h) **Validate env** with Zod (or manual): fail fast with clear message if required vars missing.  
 — [ ] (1h) Split code: `src/config.ts` + `src/main.ts` (or `.js`); one import path clean.  
 — [ ] (1h) **Retro (15m)** + push repo to GitHub; `.gitignore` includes `node_modules`, `.env`.

**Sun (4h)** — [ ] (1h) Read one stack trace end-to-end; fix a deliberate bug using only the trace.  
 — [ ] (1h) Add **eslint** (or biome) minimal config; fix one lint issue.  
 — [ ] (1h) README: prerequisites + how to run; **checkpoint**: stranger could run `npm i && npm start`.  
 — [ ] (1h) Buffer: stretch (pre-read HTTP week) or catch-up.

---

### Week 2 — HTTP & REST (concepts) + Udemy start

**Milestone:** Sketch REST for a resource; justify status codes. **Udemy:** Begin [NestJS Zero to Hero](https://www.udemy.com/course/nestjs-zero-to-hero/) — Introduction + Getting Started (Nest CLI, first project in **`udemy-zero-to-hero`**).

- **Mon (1h)** — [ ] List **HTTP verbs** you will use; one sentence each for when you use GET/POST/PATCH/DELETE.
- **Tue (1h)** — [ ] **Status codes**: write a mini table (200, 201, 204, 400, 401, 403, 404, 409, 422) with one example use each.
- **Wed (1h)** — [ ] **Idempotency**: explain which verbs are idempotent; note where retries matter.
- **Thu (1h)** — [ ] **Error shape**: define a JSON error body `{ code, message, details? }` on paper for your API.
- **Fri (1h)** — [ ] **Pagination**: choose cursor vs offset for a list endpoint; write pros/cons in notes.

**Sat (4h)** — [ ] (1h) Design **one resource** (e.g. `Note`): fields, routes, who can call.  
 — [ ] (1h) Draw request/response for **create** + **update** + **list** (paper or Excalidraw).  
 — [ ] (1h) List **domain errors** vs **validation errors**; map each to HTTP status.  
 — [ ] (1h) Optional: read MDN “HTTP overview” skim; bookmark for later.

**Sun (4h)** — [ ] (1h) **Udemy:** Finish **Introduction + Getting Started** if not done (Nest CLI, first app in `udemy-zero-to-hero`).  
 — [ ] (1h) Write **OpenAPI-style** summary (even if not YAML yet): paths + main schemas.  
 — [ ] (1h) **Retro** + prep Week 3 (`portfolio-api` vs Udemy repo — see [two-repo rule](#udemy-nestjs-zero-to-hero-integrated)).  
 — [ ] (1h) Rest or catch-up; ensure Week 1 repo still runs.

---

### Week 3 — NestJS core (CRUD + validation) + Udemy Task API

**Milestone:** CRUD with DTOs, `ValidationPipe`, consistent errors. **Udemy:** **Task Management (REST API)** — modules, controllers, providers, DTOs, CRUD (code-along in `udemy-zero-to-hero`; mirror in **`portfolio-api`**).

- **Mon (1h)** — [ ] **`portfolio-api`:** `nest new` (separate from Udemy folder); run dev; understand `main.ts` + `AppModule` (compare with Udemy app).
- **Tue (1h)** — [ ] **Udemy (≤45 min):** Feature modules, controllers, providers — **Portfolio (rest):** add **`notes`** module + empty controller/service.
- **Wed (1h)** — [ ] **Udemy (≤30 min):** DTOs / validation intro — **Portfolio:** `class-validator` DTOs + `ValidationPipe` on `notes`.
- **Thu (1h)** — [ ] **Portfolio:** **GET** list + **GET** by id + **POST**; return DTOs (reuse patterns from Udemy task entity).
- **Fri (1h)** — [ ] **Portfolio:** **PATCH** + **DELETE**; `NotFoundException` for bad ids.

**Sat (4h)** — [ ] (1h) **Udemy:** Any remaining Task CRUD / structure lectures.  
 — [ ] (1h) **Portfolio:** Exception filter or Nest defaults; 404/400 bodies match Week 2 error shape.  
 — [ ] (1h) **Portfolio:** In-memory store in service; **query** validation (e.g. pagination DTO) on list.  
 — [ ] (1h) **Portfolio:** **curl** or REST Client; `docs/requests.http`.

**Sun (4h)** — [ ] (1h) **Portfolio:** Thin controller, fat service.  
 — [ ] (1h) **Portfolio:** Invalid body → 400; wrong id → 404.  
 — [ ] (2h) Buffer or catch-up; tag commit `week-3-crud`.

---

### Week 4 — Swagger + unit tests + Udemy validation

**Milestone:** Swagger lists routes; one meaningful service unit test. **Udemy:** **Validation & error handling** (pipes, class-validator patterns — apply on **`portfolio-api`**; keep Udemy repo in sync if you want).

- **Mon (1h)** — [ ] **Udemy (≤30 min):** Validation pipes recap — **Portfolio:** `@nestjs/swagger`; Swagger UI path; document one DTO.
- **Tue (1h)** — [ ] **Portfolio:** Decorate all **notes** routes with summaries + response types.
- **Wed (1h)** — [ ] **Portfolio:** **tags** + example bodies for POST/PATCH in Swagger.
- **Thu (1h)** — [ ] **Udemy (≤30 min):** Error-handling lecture skim — **Portfolio:** **Jest** default test; `describe` / `it`.
- **Fri (1h)** — [ ] **Portfolio:** Unit test one pure function or service method (e.g. entity → response DTO).

**Sat (4h)** — [ ] (1h) **Udemy:** Finish validation/error sections you skipped.  
 — [ ] (1h) **Portfolio:** Mock repository in service test OR test pure mapping logic without DB.  
 — [ ] (1h) **Portfolio:** **Green** unit test that fails if a business rule breaks.  
 — [ ] (1h) **Portfolio:** README — Swagger link; **Month 1 checkpoint** vs [02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md).

**Sun (4h)** — [ ] (2h) **Portfolio:** Harden duplicate create → 409 if modeled; else document “not yet”.  
 — [ ] (1h) Retro + screenshot Swagger.  
 — [ ] (1h) Plan Month 2 + **Udemy** logging/config preview (Week 5).

---

## Month 2 — NestJS depth + testing

### Week 5 — Config, filters, logging + Udemy logging/config

**Milestone:** Stable config; stable error JSON shape. **Udemy:** **Logging & configuration** chapters (match sidebar — implement equivalent on **`portfolio-api`**).

- **Mon (1h)** — [ ] `ConfigModule.forRoot`; move magic strings to env; `.env.example` updated.
- **Tue (1h)** — [ ] **Global exception filter** (or refine existing): map `HttpException` + unknown errors.
- **Wed (1h)** — [ ] **Logger**: inject `Logger` in one service; log start/end of one operation (no PII).
- **Thu (1h)** — [ ] Config validation schema (e.g. `Joi` or custom) at bootstrap; fail fast on bad env.
- **Fri (1h)** — [ ] Document all env vars in README table.

**Sat (4h)** — [ ] (1h) **Udemy:** Logging & configuration sections — mirror patterns in **`portfolio-api`** (`ConfigModule`, `Logger`).  
 — [ ] (1h) **Portfolio:** Optional `x-request-id` → logs (interceptor or middleware).  
 — [ ] (1h) **Portfolio:** Replace `console.log` in hot paths with Nest `Logger`.  
 — [ ] (1h) **Portfolio:** Stable error JSON (**code** + **message** + traceId if added); trigger 500 in dev—no stack leak in prod mode.

**Sun (4h)** — [ ] (1h) **Udemy:** Finish any logging/config lectures not done Sat.  
 — [ ] (1h) **Portfolio:** Refactor `notes` to use config for port/CORS placeholder.  
 — [ ] (1h) Retro.  
 — [ ] (1h) Read Nest “Guards” doc + **Udemy** next section preview (auth).

---

### Week 6 — Auth basics (register / login) + Udemy TypeORM & Postgres (Udemy repo)

**Milestone:** Register + login; passwords hashed; never returned. **Udemy:** **Data persistence — PostgreSQL & TypeORM** + Docker (complete in **`udemy-zero-to-hero`** only this week). **Portfolio** stays in-memory or minimal until Prisma in Week 9.

- **Mon (1h)** — [ ] **Portfolio:** Add **User** model in-memory (roadmap). **Udemy:** Start TypeORM + Docker setup in **`udemy-zero-to-hero`** (Compose + DB running).
- **Tue (1h)** — [ ] **Udemy (≤45 min):** Entities + repository pattern — **Portfolio:** **bcrypt** hash on register; compare on login (constant-time via library API).
- **Wed (1h)** — [ ] **Portfolio:** `POST /auth/register` + `POST /auth/login` DTOs validated.
- **Thu (1h)** — [ ] **Portfolio:** On login success return **token payload plan** (sign JWT in Sat block if not yet).
- **Fri (1h)** — [ ] **Portfolio:** Duplicate email → 409; bad credentials → 401.

**Sat (4h)** — [ ] (1h) **Udemy:** TypeORM migrations / relations if still on DB section.  
 — [ ] (1h) **Portfolio:** `@nestjs/jwt` sign access token; **secret** + **expiry** from env.  
 — [ ] (1h) **Portfolio:** No token logging; redact passwords in debug.  
 — [ ] (1h) **Portfolio:** Swagger auth section; unit test hash/verify path if time.

**Sun (4h)** — [ ] (1h) **Udemy:** Close out Postgres/TypeORM module in Udemy repo.  
 — [ ] (1h) **Portfolio:** **Refresh token** design on paper—stub or defer to Week 7.  
 — [ ] (1h) Retro.  
 — [ ] (1h) **Portfolio:** Security note in README.

---

### Week 7 — JWT guard + roles + `@CurrentUser()` + Udemy auth

**Milestone:** Protected routes; 401 vs 403 correct. **Udemy:** **Authentication & authorization** (Passport, JWT strategy, guards — code-along in **`udemy-zero-to-hero`**; mirror behavior in **`portfolio-api`**).

- **Mon (1h)** — [ ] **Udemy (≤45 min):** Passport JWT setup — **Portfolio:** `JwtAuthGuard` / strategy; validate signature + expiry.
- **Tue (1h)** — [ ] **Portfolio:** **`@CurrentUser()`** decorator reading request user.
- **Wed (1h)** — [ ] **Portfolio:** Protect `notes` routes; **`@Public()`** for exceptions if needed.
- **Thu (1h)** — [ ] **Portfolio:** **Roles** enum + `RolesGuard` (even `USER` only) on one route.
- **Fri (1h)** — [ ] **Portfolio:** User A cannot delete user B’s note (if modeled).

**Sat (4h)** — [ ] (1h) **Udemy (≤45 min):** Guards / protected routes recap if needed.  
 — [ ] (1h) **Portfolio:** **Refresh** endpoint or document “phase 2”.  
 — [ ] (1h) **Portfolio:** Swagger **Bearer** auth; authorize in UI.  
 — [ ] (1h) **Portfolio:** Error matrix 401/403 + short **demo script** outline for later.

**Sun (4h)** — [ ] (1h) **Udemy:** Finish remaining auth/guards lectures.  
 — [ ] (1h) **Portfolio:** Edge cases — expired token; malformed header.  
 — [ ] (1h) Retro.  
 — [ ] (1h) Prep Supertest + **Udemy** testing section for Week 8.

---

### Week 8 — Supertest integration tests + Udemy testing

**Milestone:** Happy path + one failure for auth + one CRUD flow. **Udemy:** **Testing** (unit + E2E) — finish remaining lectures; **`portfolio-api`** is the source of truth for Supertest goals.

- **Mon (1h)** — [ ] **Udemy (≤30 min):** Testing overview — **Portfolio:** Supertest + `NestFactory` or e2e template.
- **Tue (1h)** — [ ] **Portfolio:** Test **register → login → access protected** with real HTTP.
- **Wed (1h)** — [ ] **Portfolio:** Test **401** when missing token on protected route.
- **Thu (1h)** — [ ] **Udemy (≤30 min):** E2E patterns — **Portfolio:** Test **CRUD** (create → get → patch → delete).
- **Fri (1h)** — [ ] **Portfolio:** Test **409** or **404** case you implemented.

**Sat (4h)** — [ ] (1h) **Udemy:** Finish **Testing** lectures if any remain.  
 — [ ] (1h) **Portfolio:** Decide **test DB strategy** (mock repo vs docker postgres for tests).  
 — [ ] (2h) **Portfolio:** Stabilize tests; reset state between tests.  
 — [ ] (1h) **Portfolio:** `npm run test:e2e` script ready for CI later.

**Sun (4h)** — [ ] (1h) **Udemy:** Complete any remaining **Testing** + optional **Deployment** intro (watch only; deploy **portfolio** later).  
 — [ ] (1h) **Portfolio:** **Explain aloud** middleware vs guard vs interceptor; comment gaps.  
 — [ ] (1h) Month 2 checkpoint vs [02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md).  
 — [ ] (1h) Plan Prisma + Docker Week 9 — **no new TypeORM in `portfolio-api`**.

---

## Month 3 — PostgreSQL + Prisma

### Week 9 — Docker Compose + Prisma init (+ Udemy wrap-up)

**Milestone:** Postgres up with one command; first migration in repo. **Udemy:** Core path should be **done**; optional: finish **Deployment** lecture and compare with your later Railway/Render setup. **`portfolio-api`** uses **Prisma** — translate mental model from Udemy’s TypeORM entities to Prisma models.

- **Mon (1h)** — [ ] Write `docker-compose.yml` for **Postgres 15+**; volume + port; `docker compose up -d`.
- **Tue (1h)** — [ ] `prisma init`; `DATABASE_URL` in `.env.example`; connect with `prisma db pull` skip—use `migrate`.
- **Wed (1h)** — [ ] First **schema**: `User`, `Note` (or your entities); `prisma migrate dev` named migration.
- **Thu (1h)** — [ ] `PrismaService` in Nest (`onModuleInit`/`onModuleDestroy` pattern from docs).
- **Fri (1h)** — [ ] Replace in-memory **User** repo with Prisma **create/find**.

**Sat (4h)** — [ ] (1h) Replace **Note** CRUD with Prisma.  
 — [ ] (1h) Ensure **FK** or relation User → Notes if applicable.  
 — [ ] (1h) README: Docker section “start db” + “run migrations”.  
 — [ ] (1h) `prisma studio` quick sanity check.

**Sun (4h)** — [ ] (2h) Fix integration tests to use DB (or dockerized test DB)—may spill to Week 10.  
 — [ ] (1h) Retro.  
 — [ ] (1h) Backup: export schema diagram screenshot.

---

### Week 10 — Relations + indexes

**Milestone:** Two related entities; sensible indexes; cascades explicit.

- **Mon (1h)** — [ ] Model **1–N** (user has many notes); relation fields in Prisma.
- **Tue (1h)** — [ ] **Indexes** on foreign keys + common filters (`userId`, `createdAt`).
- **Wed (1h)** — [ ] **N–M** if needed (e.g. tags): join table; migrate.
- **Thu (1h)** — [ ] Service methods use **include** / **select** to avoid over-fetching.
- **Fri (1h)** — [ ] Delete behavior: `onDelete` strategy documented; test cascade or block.

**Sat (4h)** — [ ] (1h) Query plan awareness: `EXPLAIN` one slow query on paper (optional install).  
 — [ ] (2h) Refactor services for **clear** repository boundaries.  
 — [ ] (1h) Integration tests updated for relations.

**Sun (4h)** — [ ] (2h) Buffer / test stabilization.  
 — [ ] (1h) ERD in repo (`docs/erd.png` or Mermaid).  
 — [ ] (1h) Retro.

---

### Week 11 — Transactions + seed

**Milestone:** One `$transaction` flow; `pnpm seed` populates demo data.

- **Mon (1h)** — [ ] Identify multi-step operation (e.g. create org + membership); wrap in `$transaction`.
- **Tue (1h)** — [ ] Failure case: one step throws → no partial commit.
- **Wed (1h)** — [ ] `prisma/seed.ts`; create admin + sample notes/tags.
- **Thu (1h)** — [ ] Wire `package.json` `"prisma": { "seed": "..." }` / `tsx` runner.
- **Fri (1h)** — [ ] README: how to seed; demo credentials (dev only).

**Sat (4h)** — [ ] (1h) Idempotency: seed safe to re-run (upsert) or document wipe.  
 — [ ] (2h) Add **integration test** for transactional flow.  
 — [ ] (1h) Review Prisma “transactions” docs for interview talking points.

**Sun (4h)** — [ ] (2h) Month 3 halfway checkpoint; fix failing tests.  
 — [ ] (1h) Retro.  
 — [ ] (1h) Plan Week 12 refactor scope.

---

### Week 12 — Refactor persistence + green tests

**Milestone:** CRUD + auth on Postgres; tests passing.

- **Mon (1h)** — [ ] Remove dead in-memory code paths; single source of truth Prisma.
- **Tue (1h)** — [ ] Run full e2e suite against local DB; fix race conditions.
- **Wed (1h)** — [ ] Test database: separate `DATABASE_URL_TEST` or docker profile—document.
- **Thu (1h)** — [ ] Migration workflow: `migrate deploy` documented for prod later.
- **Fri (1h)** — [ ] Performance sanity: N+1 check on list endpoint (use `include` wisely).

**Sat (4h)** — [ ] (2h) Harden tests; parallel vs serial decision documented.  
 — [ ] (1h) **Project 1** naming: repo rename or new folder; decision logged.  
 — [ ] (1h) Checkpoint vs checklist DB + Prisma sections.

**Sun (4h)** — [ ] (2h) Buffer / technical debt list (max 5 items).  
 — [ ] (1h) Retro Month 3.  
 — [ ] (1h) Skim [03-portfolio-projects.md](03-portfolio-projects.md) Project A scope.

---

## Month 4 — Project 1 MVP (API + thin React)

### Week 13 — Domain modeling (orgs / members / roles)

**Milestone:** ERD + Prisma schema for Project 1 core.

- **Mon (1h)** — [ ] Write **user stories** (3–5) for org + membership + core workflow.
- **Tue (1h)** — [ ] ERD: `Organization`, `Member`, `Role`, core entity (Task/Invoice/Post).
- **Wed (1h)** — [ ] Prisma schema draft; list all relations + constraints.
- **Thu (1h)** — [ ] First migration for new models; no UI yet.
- **Fri (1h)** — [ ] Services stubs: create org, invite code or email token (paper algorithm).

**Sat (4h)** — [ ] (2h) Implement **create org + add self as OWNER** API.  
 — [ ] (1h) Swagger updated.  
 — [ ] (1h) Seed updated for multi-tenant demo.

**Sun (4h)** — [ ] (2h) **Permission** checks on one resource (org-scoped).  
 — [ ] (1h) Retro.  
 — [ ] (1h) Plan React app structure Week 15.

---

### Week 14 — Workflows + permissions + list APIs

**Milestone:** Main journeys work locally (API-only ok).

- **Mon (1h)** — [ ] Core entity CRUD **scoped to org**; guard checks membership.
- **Tue (1h)** — [ ] List endpoint: **pagination** DTO + validation.
- **Wed (1h)** — [ ] Filter/sort query params validated; SQL injection safe via Prisma.
- **Thu (1h)** — [ ] Invite/join flow minimal viable (token table or join code).
- **Fri (1h)** — [ ] Role change rules (e.g. only OWNER promotes)—or document TODO if cut.

**Sat (4h)** — [ ] (2h) End-to-end **Postman/HTTP** collection for happy paths.  
 — [ ] (1h) Error handling for cross-org access → 403.  
 — [ ] (1h) Integration tests: critical path (org + create entity).

**Sun (4h)** — [ ] (2h) Buffer: more tests or cut scope list.  
 — [ ] (1h) Retro.  
 — [ ] (1h) Init React app if not started (Vite + TS).

---

### Week 15 — React client (auth + main screens)

**Milestone:** Login + primary screens against local API.

- **Mon (1h)** — [ ] API client module: base URL from env; fetch wrapper with **401** redirect to login.
- **Tue (1h)** — [ ] Login + store access token (httpOnly cookie preferred; if localStorage, document risk).
- **Wed (1h)** — [ ] Org switcher UI (if multi-org); load memberships.
- **Thu (1h)** — [ ] Core workflow screens: list + create modal/form.
- **Fri (1h)** — [ ] Loading / empty / error states on main list.

**Sat (4h)** — [ ] (2h) Polish UX minimally: consistent layout, form validation.  
 — [ ] (1h) CORS: local dev ports aligned; credentials if cookies.  
 — [ ] (1h) Screenshot for future README.

**Sun (4h)** — [ ] (2h) Fix cross-origin issues; document in README troubleshooting.  
 — [ ] (1h) Retro.  
 — [ ] (1h) Plan hardening Week 16.

---

### Week 16 — Hardening + README

**Milestone:** `/health` 200; README gets stranger to running stack.

- **Mon (1h)** — [ ] `GET /health` returns `{ status: 'ok' }` + maybe DB ping.
- **Tue (1h)** — [ ] **Rate limit** sensitive routes (`@nestjs/throttler` or middleware).
- **Wed (1h)** — [ ] **CORS** config for prod origin placeholder + dev localhost.
- **Thu (1h)** — [ ] README: **Docker Compose** full stack (db + api + optional web) or clear steps.
- **Fri (1h)** — [ ] Env table complete; `.env.example` for api + web.

**Sat (4h)** — [ ] (2h) Run through README on **fresh clone** (or ask friend); fix gaps.  
 — [ ] (1h) **Security** section: hashing, JWT, CORS, rate limit—honest limits.  
 — [ ] (1h) Tag release `v0.1-mvp`.

**Sun (4h)** — [ ] (2h) Month 4 retro; list **deploy** blockers for Month 5.  
 — [ ] (1h) Update [03-portfolio-projects.md](03-portfolio-projects.md) checklist mentally—what’s missing.  
 — [ ] (1h) Rest.

---

## Month 5 — CI, deploy, observability, Project 2

### Week 17 — GitHub Actions

**Milestone:** Lint + test on every PR.

- **Mon (1h)** — [ ] Add workflow file; run `npm ci` + `npm run lint` + `npm test`.
- **Tue (1h)** — [ ] Cache dependencies; pin Node version.
- **Wed (1h)** — [ ] E2E job: **services: postgres** matrix or skip e2e until docker in CI—document.
- **Thu (1h)** — [ ] Branch protection checklist (manual on GitHub): require CI pass.
- **Fri (1h)** — [ ] Badge in README (optional).

**Sat (4h)** — [ ] (2h) Fix flaky CI; deterministic tests.  
 — [ ] (1h) Document “how to debug CI” in CONTRIBUTING or README.  
 — [ ] (1h) Retro.

**Sun (4h)** — [ ] (2h) Buffer / improve coverage on critical path only.  
 — [ ] (1h) Choose deploy target (Railway / Render / Fly) and read “Postgres” guide.  
 — [ ] (1h) List env vars needed in prod.

---

### Week 18 — Deploy API + DB

**Milestone:** Public HTTPS API; migrations on deploy; no secrets in repo.

- **Mon (1h)** — [ ] Create hosted **Postgres**; copy connection string to host secrets.
- **Tue (1h)** — [ ] Deploy API; `DATABASE_URL` set; build command correct.
- **Wed (1h)** — [ ] Run **`prisma migrate deploy`** in release phase or entry script—document order.
- **Thu (1h)** — [ ] Smoke test Swagger or `/health` on prod URL.
- **Fri (1h)** — [ ] Deploy **frontend** static host or same platform; `VITE_*` / `NEXT_PUBLIC_*` envs.

**Sat (4h)** — [ ] (1h) CORS + cookie domain for prod front URL.  
 — [ ] (1h) HTTPS only; HSTS awareness (platform may handle).  
 — [ ] (1h) Document rollback strategy one paragraph.  
 — [ ] (1h) Celebrate + note URL in README.

**Sun (4h)** — [ ] (2h) Fix prod-only bug if any (logging first).  
 — [ ] (1h) Retro.  
 — [ ] (1h) Plan Week 19 observability.

---

### Week 19 — Logging + request tracing

**Milestone:** Find a failed request in logs within minutes.

- **Mon (1h)** — [ ] Structured JSON logs in prod (if platform supports); else consistent single-line format.
- **Tue (1h)** — [ ] Log **user id** + **request id** on each request (no PII).
- **Wed (1h)** — [ ] Log slow queries threshold (optional) or request duration middleware.
- **Thu (1h)** — [ ] Reproduce 500 in staging/prod; verify stack trace visibility vs safety.
- **Fri (1h)** — [ ] README: “where to see logs” for your host.

**Sat (4h)** — [ ] (2h) **Error monitoring** optional (Sentry free tier) one integration—or skip with rationale in README.  
 — [ ] (1h) Audit **secrets**: rotate JWT secret if exposed during debug.  
 — [ ] (1h) Retro.

**Sun (4h)** — [ ] (2h) Load test **optional** (k6 or `autocannon`) on `/health`—document baseline.  
 — [ ] (1h) Month 5 checkpoint.  
 — [ ] (1h) Decide Project 2 vs differentiator per [03-portfolio-projects.md](03-portfolio-projects.md).

---

### Week 20 — Project 2 or differentiator

**Milestone:** Second narrative chapter (new repo or major feature).

- **Mon (1h)** — [ ] Choose: **Stripe**, **OAuth**, **WebSockets**, or **BullMQ**—one only.
- **Tue (1h)** — [ ] Spike: smallest proof-of-concept in branch (e.g. webhook endpoint returns 200).
- **Wed (1h)** — [ ] Security read for chosen integration (signatures, state param, etc.).
- **Thu (1h)** — [ ] Integrate into main app behind feature flag or module.
- **Fri (1h)** — [ ] Tests for happy path + one attack/failure case.

**Sat (4h)** — [ ] (3h) Build **vertical slice** visible in UI or documented API.  
 — [ ] (1h) README section for new feature.

**Sun (4h)** — [ ] (2h) Polish + edge cases.  
 — [ ] (1h) Retro Month 5.  
 — [ ] (1h) Plan documentation Month 6.

---

## Month 6 — Polish + job search

### Week 21 — Docs + diagram + security audit

**Milestone:** Stranger runs locally in under 30 minutes per your README.

- **Mon (1h)** — [ ] Architecture **diagram** (Mermaid in README or image in `docs/`).
- **Tue (1h)** — [ ] **Troubleshooting** section: port conflicts, docker, prisma migrate errors.
- **Wed (1h)** — [ ] **Threat model** lite: auth, CSRF if cookies, SSRF if webhooks.
- **Thu (1h)** — [ ] Dependency audit; upgrade critical patches.
- **Fri (1h)** — [ ] “Limitations” section: honest scope boundaries.

**Sat (4h)** — [ ] (2h) Record **2–3 min** demo (optional) or detailed GIF checklist.  
 — [ ] (1h) Unify tone across both project READMEs.  
 — [ ] (1h) Retro.

**Sun (4h)** — [ ] (2h) Peer review: ask one person to follow README; capture friction.  
 — [ ] (1h) Fix top 3 README issues.  
 — [ ] (1h) Rest.

---

### Week 22 — Resume + profiles

**Milestone:** 2–3 measurable bullets per project on resume.

- **Mon (1h)** — [ ] Draft bullet: stack + **outcome** (e.g. “JWT auth + RBAC, 40+ integration tests”).
- **Tue (1h)** — [ ] Second bullet: **deploy** + DB migrations in CI/CD words.
- **Wed (1h)** — [ ] Third bullet: **differentiator** (Stripe/WS/queue) if applicable.
- **Thu (1h)** — [ ] **LinkedIn** headline + About: fullstack positioning with Nest/Postgres/React.
- **Fri (1h)** — [ ] GitHub profile README or pinned repos descriptions aligned.

**Sat (4h)** — [ ] (2h) Resume pass: numbers, links, no buzzword soup.  
 — [ ] (1h) Cover letter template paragraph (company research placeholder).  
 — [ ] (1h) Retro.

**Sun (4h)** — [ ] (2h) Portfolio site optional one-pager linking demos.  
 — [ ] (1h) Ask feedback from peer or mentor.  
 — [ ] (1h) Rest.

---

### Week 23 — System design + your stack

**Milestone:** Whiteboard your stack in 10 minutes.

- **Mon (1h)** — [ ] Draw auth flow: login → access token → refresh → logout.
- **Tue (1h)** — [ ] Draw data model on whiteboard from memory; fix gaps in notes.
- **Wed (1h)** — [ ] **Scaling** story: read replicas (conceptual), cache where, stateless API.
- **Thu (1h)** — [ ] **Tradeoffs**: JWT vs sessions; Prisma vs raw SQL when.
- **Fri (1h)** — [ ] One **mock interview** question answered out loud (record voice optional).

**Sat (4h)** — [ ] (2h) Deep dive weak area from mock (e.g. indexes, websocket scale).  
 — [ ] (1h) Flashcards or note sheet: 20 facts about your own codebase.  
 — [ ] (1h) Retro.

**Sun (4h)** — [ ] (2h) Practice **two** stories: conflict/debug and technical decision.  
 — [ ] (1h) Sleep hygiene + schedule applications for Week 24.  
 — [ ] (1h) Rest.

---

### Week 24 — Applications + iteration

**Milestone:** Sustained application cadence; iterate from feedback.

- **Mon (1h)** — [ ] Target list: N companies/week; tracker spreadsheet.
- **Tue (1h)** — [ ] Tailor **2 applications** with company-specific lines.
- **Wed (1h)** — [ ] Follow-ups; networking message template (if used).
- **Thu (1h)** — [ ] If coding assignment appears: timebox practice problem unrelated to portfolio.
- **Fri (1h)** — [ ] Review rejection/ghosting emotionally neutral; adjust pitch once.

**Sat (4h)** — [ ] (2h) Portfolio tweak from interview feedback (small, high ROI only).  
 — [ ] (1h) **Retro** full 6 months: what you’d tell yourself on day 1.  
 — [ ] (1h) Plan next 90 days skill goals.

**Sun (4h)** — [ ] (2h) Open source **good first issue** OR rest / recovery.  
 — [ ] (1h) Celebrate milestones completed.  
 — [ ] (1h) Optional: schedule recurring **1h/week** maintenance for pinned repos.

---

## Daily logging (30 seconds)

At end of each session, write one line:

`YYYY-MM-DD | 1h or 4h | done: … | tomorrow: …`

Keeps accountability without bureaucracy.

---

## When a day slips

- **Weekday:** Move that day’s smallest unit to **next** weekday; never steal from weekend blocks until Fri.
- **Weekend:** Complete **Sat core** before **Sun** polish; skip optional bullets first.
- **Whole week lost:** Re-run the same week number next week—do not advance milestone until the exit criteria in [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md) are roughly met.
