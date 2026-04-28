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
- In each **Week N** task table below, the **Date** column is the calendar day for that row (Week 1 starts **2026-04-13**; Sat/Sun rows that share a date are the four slots for that day).

**Weekly rule:** Finish the **week milestone** in [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md). If you slip, drop polish first, not tests or core scope.

## Calendar start & day completion (April 2026)

- **First roadmap day = Monday 13 April 2026.** Each checklist “day” in this file maps to **one calendar day** in order (Mon → Fri → Sat → Sun within each week).
- **Last calendar day of the 24 weeks = Sunday 27 September 2026** (168 days).
- **A calendar day counts as finished only when:**
  1. You complete that day’s **tasks** (checkboxes above for that weekday/weekend slot), **and**
  2. You complete that day’s **assignment**: answer **both** questions in writing (notebook, `notes/`, or a doc in your repo — your choice). Then tick **Assignment done** for that date in [Daily assignments by calendar day](#daily-assignments-by-calendar-day) (section after Week 24).

Skipping the written assignment means the day stays **incomplete** for tracking, even if code tasks were done.

### Week → date range (2026)

| Week | Monday (start) | Sunday (end) |
| ---- | -------------- | ------------ |
| 1    | 2026-04-13     | 2026-04-19   |
| 2    | 2026-04-20     | 2026-04-26   |
| 3    | 2026-04-27     | 2026-05-03   |
| 4    | 2026-05-04     | 2026-05-10   |
| 5    | 2026-05-11     | 2026-05-17   |
| 6    | 2026-05-18     | 2026-05-24   |
| 7    | 2026-05-25     | 2026-05-31   |
| 8    | 2026-06-01     | 2026-06-07   |
| 9    | 2026-06-08     | 2026-06-14   |
| 10   | 2026-06-15     | 2026-06-21   |
| 11   | 2026-06-22     | 2026-06-28   |
| 12   | 2026-06-29     | 2026-07-05   |
| 13   | 2026-07-06     | 2026-07-12   |
| 14   | 2026-07-13     | 2026-07-19   |
| 15   | 2026-07-20     | 2026-07-26   |
| 16   | 2026-07-27     | 2026-08-02   |
| 17   | 2026-08-03     | 2026-08-09   |
| 18   | 2026-08-10     | 2026-08-16   |
| 19   | 2026-08-17     | 2026-08-23   |
| 20   | 2026-08-24     | 2026-08-30   |
| 21   | 2026-08-31     | 2026-09-06   |
| 22   | 2026-09-07     | 2026-09-13   |
| 23   | 2026-09-14     | 2026-09-20   |
| 24   | 2026-09-21     | 2026-09-27   |

---

## Assignments (required to count a day “finished”)

Each calendar day has **two questions** under **[Daily assignments by calendar day](#daily-assignments-by-calendar-day)** (section starts after **Week 24** tasks). Per-day files (same questions) live in **[assignments/](assignments/)** as `{YYYY-MM-DD}.md` (regenerate with `node scripts/generate-daily-assignments.js --write-files`). Complete that day’s **tasks** and **written answers**, then tick **Assignment done** in that file or in the section below. A day with code done but no written assignment stays **incomplete**.

---

## Udemy: NestJS Zero to Hero (integrated)

**Course:** [NestJS Zero to Hero — Modern TypeScript Back-end Development](https://www.udemy.com/course/nestjs-zero-to-hero/) (Ariel Weinberger).  
**Rough length:** ~9 hours on-demand — target finishing the **core lectures** by **end of Week 8** (optional **Deployment** section anytime in Weeks 8–10).

### Two-repo rule (strongly recommended)

| Repo                                    | Purpose                                                                                                       |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `**udemy-zero-to-hero`\*\* (or similar) | Code **exactly** with the instructor — includes **TypeORM** + PostgreSQL + Docker as taught.                  |
| `**portfolio-api`\*\*                   | Your **roadmap** app (notes → Project 1). From **Week 9** onward use **Prisma** + Postgres here, not TypeORM. |

**Why:** The course teaches **TypeORM**; this roadmap standardizes on **Prisma** for your portfolio from Month 3. Treat TypeORM entities/repositories as “ORM concepts,” then re-express them as Prisma schema + services when you migrate.

### Week-by-week course map (use Udemy’s section titles in the sidebar)

| When         | Course arc (typical outline — match to your sidebar)                                                                    | Your action                                                                                                                                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Week 2**   | Introduction, prerequisites, Nest CLI, first app                                                                        | Watch + create `udemy-zero-to-hero` project                                                                                                                                                                                          |
| **Week 3**   | Task Management REST: modules, controllers, services, DTOs, CRUD                                                        | Code-along in Udemy repo + mirror structure in `**portfolio-api`\*\*                                                                                                                                                                 |
| **Week 4**   | Validation, pipes, error handling                                                                                       | Code-along + Swagger/tests on **portfolio**                                                                                                                                                                                          |
| **Week 5**   | Logging, configuration (often mid-course)                                                                               | Align with `ConfigModule` / logging on **portfolio**                                                                                                                                                                                 |
| **Week 6–7** | **PostgreSQL & TypeORM** + Docker, then **Authentication** (Passport, JWT, guards) — _order can vary by course version_ | **Weeks 6–7** below follow _TypeORM → Auth_; if your sidebar shows **Auth before TypeORM**, swap those two weeks’ **Udemy** blocks but keep the same **portfolio** milestones (in-memory auth until Prisma in Week 9 is still fine). |
| **Week 8**   | Unit + E2E testing                                                                                                      | Finish course testing chapters + Supertest on **portfolio**                                                                                                                                                                          |
| **Week 9+**  | _(Optional)_ Deployment section                                                                                         | Optional; **portfolio** DB work is **Prisma**, not a second TypeORM pass                                                                                                                                                             |

### Time budget for video

- Aim **~1.5–2.5 hours/week** on **Sat–Sun** (use 1–2 of the four weekend slots) so the ~9h fits without eating weekday roadmap work.
- Use **1.25×–1.5×** speed for parts that repeat your existing TS knowledge.

### Completion checklist (tick in Udemy)

- Introduction / prerequisites / CLI / first application
- Task Management REST API (modules, controllers, services, DTOs, CRUD)
- Validation & error handling (pipes, filters)
- PostgreSQL + **TypeORM** + Docker (in **Udemy repo only** for this phase)
- Authentication & authorization (Passport, JWT, guards)
- Logging & configuration (as covered in course)
- Testing (unit + E2E)
- _(Optional)_ Deployment / production notes

---

## Month 1 — Node + HTTP + NestJS skeleton

### Week 1 — Node fundamentals

**Milestone:** Event loop one-liner + small script with validated env.

| Day | Date       | Time | Done | Task                                                                                                                         |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-04-13 | 1h   | [x]  | Install **Node LTS**; `node -v` / `npm -v`; create folder `playground-node`; `npm init -y`.                                  |
| Tue | 2026-04-14 | 1h   | [x]  | Add **TypeScript** (or plain JS first week—pick one and keep): `tsconfig`, compile/run script; one `console.log` entry file. |
| Wed | 2026-04-15 | 1h   | [x]  | Load config: `.env` + `.env.example` (no secrets in git); read one variable in code; document in README stub.                |
| Thu | 2026-04-16 | 1h   | [x]  | **async/await**: one function that `await`s a `Promise`; `try/catch`; log error without killing the process wrongly.         |
| Fri | 2026-04-17 | 1h   | [x]  | `package.json` scripts: `build`, `start` (and `dev` if using watch); run from clean `npm install`.                           |
| Sat | 2026-04-18 | 1h   | [x]  | Skim Node “event loop” / timers docs; write **5 bullets** in your notes (“what blocks vs defers”).                           |
| Sat | 2026-04-18 | 1h   | [x]  | **Validate env** with Zod (or manual): fail fast with clear message if required vars missing.                                |
| Sat | 2026-04-18 | 1h   | [x]  | Split code: `src/config.ts` + `src/main.ts` (or `.js`); one import path clean.                                               |
| Sat | 2026-04-18 | 1h   | [x]  | **Retro (15m)** + push repo to GitHub; `.gitignore` includes `node_modules`, `.env`.                                         |
| Sun | 2026-04-19 | 1h   | [x]  | Read one stack trace end-to-end; fix a deliberate bug using only the trace.                                                  |
| Sun | 2026-04-19 | 1h   | [x]  | Add **eslint** (or biome) minimal config; fix one lint issue.                                                                |
| Sun | 2026-04-19 | 1h   | [x]  | README: prerequisites + how to run; **checkpoint**: stranger could run `npm i && npm start`.                                 |
| Sun | 2026-04-19 | 1h   | [x]  | Buffer: stretch (pre-read HTTP week) or catch-up.                                                                            |

---

### Week 2 — HTTP & REST (concepts) + Udemy start

**Milestone:** Sketch REST for a resource; justify status codes. **Udemy:** Begin [NestJS Zero to Hero](https://www.udemy.com/course/nestjs-zero-to-hero/) — Introduction + Getting Started (Nest CLI, first project in `**udemy-zero-to-hero`\*\*).

| Day | Date       | Time | Done | Task                                                                                                                  |
| --- | ---------- | ---- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-04-20 | 1h   | [x]  | List **HTTP verbs** you will use; one sentence each for when you use GET/POST/PATCH/DELETE.                           |
| Tue | 2026-04-21 | 1h   | [x]  | **Status codes**: write a mini table (200, 201, 204, 400, 401, 403, 404, 409, 422) with one example use each.         |
| Wed | 2026-04-22 | 1h   | [ ]  | **Idempotency**: explain which verbs are idempotent; note where retries matter.                                       |
| Thu | 2026-04-23 | 1h   | [x]  | **Error shape**: define a JSON error body `{ code, message, details? }` on paper for your API.                        |
| Fri | 2026-04-24 | 1h   | [x]  | **Pagination**: choose cursor vs offset for a list endpoint; write pros/cons in notes.                                |
| Sat | 2026-04-25 | 1h   | [x]  | Design **one resource** (e.g. `Note`): fields, routes, who can call.                                                  |
| Sat | 2026-04-25 | 1h   | [x]  | Draw request/response for **create** + **update** + **list** (paper or Excalidraw).                                   |
| Sat | 2026-04-25 | 1h   | [x]  | List **domain errors** vs **validation errors**; map each to HTTP status.                                             |
| Sat | 2026-04-25 | 1h   | [x]  | Optional: read MDN “HTTP overview” skim; bookmark for later.                                                          |
| Sun | 2026-04-26 | 1h   | [x]  | **Udemy:** Finish **Introduction + Getting Started** if not done (Nest CLI, first app in `udemy-zero-to-hero`).       |
| Sun | 2026-04-26 | 1h   | [x]  | Write **OpenAPI-style** summary (even if not YAML yet): paths + main schemas.                                         |
| Sun | 2026-04-26 | 1h   | [x]  | **Retro** + prep Week 3 (`portfolio-api` vs Udemy repo — see [two-repo rule](#udemy-nestjs-zero-to-hero-integrated)). |
| Sun | 2026-04-26 | 1h   | [x]  | Rest or catch-up; ensure Week 1 repo still runs.                                                                      |

---

### Week 3 — NestJS core (CRUD + validation) + Udemy Task API

**Milestone:** CRUD with DTOs, `ValidationPipe`, consistent errors. **Udemy:** **Task Management (REST API)** — modules, controllers, providers, DTOs, CRUD (code-along in `udemy-zero-to-hero`; mirror in `**portfolio-api`\*\*).

| Day | Date       | Time | Done | Task                                                                                                                                      |
| --- | ---------- | ---- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-04-27 | 1h   | [x]  | `**portfolio-api`:\*\* `nest new` (separate from Udemy folder); run dev; understand `main.ts` + `AppModule` (compare with Udemy app).     |
| Tue | 2026-04-28 | 1h   | [ ]  | **Udemy (≤45 min):** Feature modules, controllers, providers — **Portfolio (rest):** add `**notes`\*\* module + empty controller/service. |
| Wed | 2026-04-29 | 1h   | [ ]  | **Udemy (≤30 min):** DTOs / validation intro — **Portfolio:** `class-validator` DTOs + `ValidationPipe` on `notes`.                       |
| Thu | 2026-04-30 | 1h   | [ ]  | **Portfolio:** **GET** list + **GET** by id + **POST**; return DTOs (reuse patterns from Udemy task entity).                              |
| Fri | 2026-05-01 | 1h   | [ ]  | **Portfolio:** **PATCH** + **DELETE**; `NotFoundException` for bad ids.                                                                   |
| Sat | 2026-05-02 | 1h   | [ ]  | **Udemy:** Any remaining Task CRUD / structure lectures.                                                                                  |
| Sat | 2026-05-02 | 1h   | [ ]  | **Portfolio:** Exception filter or Nest defaults; 404/400 bodies match Week 2 error shape.                                                |
| Sat | 2026-05-02 | 1h   | [ ]  | **Portfolio:** In-memory store in service; **query** validation (e.g. pagination DTO) on list.                                            |
| Sat | 2026-05-02 | 1h   | [ ]  | **Portfolio:** **curl** or REST Client; `docs/requests.http`.                                                                             |
| Sun | 2026-05-03 | 1h   | [ ]  | **Portfolio:** Thin controller, fat service.                                                                                              |
| Sun | 2026-05-03 | 1h   | [ ]  | **Portfolio:** Invalid body → 400; wrong id → 404.                                                                                        |
| Sun | 2026-05-03 | 2h   | [ ]  | Buffer or catch-up; tag commit `week-3-crud`.                                                                                             |

---

### Week 4 — Swagger + unit tests + Udemy validation

**Milestone:** Swagger lists routes; one meaningful service unit test. **Udemy:** **Validation & error handling** (pipes, class-validator patterns — apply on `**portfolio-api`\*\*; keep Udemy repo in sync if you want).

| Day | Date       | Time | Done | Task                                                                                                                          |
| --- | ---------- | ---- | ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-05-04 | 1h   | [ ]  | **Udemy (≤30 min):** Validation pipes recap — **Portfolio:** `@nestjs/swagger`; Swagger UI path; document one DTO.            |
| Tue | 2026-05-05 | 1h   | [ ]  | **Portfolio:** Decorate all **notes** routes with summaries + response types.                                                 |
| Wed | 2026-05-06 | 1h   | [ ]  | **Portfolio:** **tags** + example bodies for POST/PATCH in Swagger.                                                           |
| Thu | 2026-05-07 | 1h   | [ ]  | **Udemy (≤30 min):** Error-handling lecture skim — **Portfolio:** **Jest** default test; `describe` / `it`.                   |
| Fri | 2026-05-08 | 1h   | [ ]  | **Portfolio:** Unit test one pure function or service method (e.g. entity → response DTO).                                    |
| Sat | 2026-05-09 | 1h   | [ ]  | **Udemy:** Finish validation/error sections you skipped.                                                                      |
| Sat | 2026-05-09 | 1h   | [ ]  | **Portfolio:** Mock repository in service test OR test pure mapping logic without DB.                                         |
| Sat | 2026-05-09 | 1h   | [ ]  | **Portfolio:** **Green** unit test that fails if a business rule breaks.                                                      |
| Sat | 2026-05-09 | 1h   | [ ]  | **Portfolio:** README — Swagger link; **Month 1 checkpoint** vs [02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md). |
| Sun | 2026-05-10 | 2h   | [ ]  | **Portfolio:** Harden duplicate create → 409 if modeled; else document “not yet”.                                             |
| Sun | 2026-05-10 | 1h   | [ ]  | Retro + screenshot Swagger.                                                                                                   |
| Sun | 2026-05-10 | 1h   | [ ]  | Plan Month 2 + **Udemy** logging/config preview (Week 5).                                                                     |

---

## Month 2 — NestJS depth + testing

### Week 5 — Config, filters, logging + Udemy logging/config

**Milestone:** Stable config; stable error JSON shape. **Udemy:** **Logging & configuration** chapters (match sidebar — implement equivalent on `**portfolio-api`\*\*).

| Day | Date       | Time | Done | Task                                                                                                                         |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-05-11 | 1h   | [ ]  | `ConfigModule.forRoot`; move magic strings to env; `.env.example` updated.                                                   |
| Tue | 2026-05-12 | 1h   | [ ]  | **Global exception filter** (or refine existing): map `HttpException` + unknown errors.                                      |
| Wed | 2026-05-13 | 1h   | [ ]  | **Logger**: inject `Logger` in one service; log start/end of one operation (no PII).                                         |
| Thu | 2026-05-14 | 1h   | [ ]  | Config validation schema (e.g. `Joi` or custom) at bootstrap; fail fast on bad env.                                          |
| Fri | 2026-05-15 | 1h   | [ ]  | Document all env vars in README table.                                                                                       |
| Sat | 2026-05-16 | 1h   | [ ]  | **Udemy:** Logging & configuration sections — mirror patterns in `**portfolio-api`\*\* (`ConfigModule`, `Logger`).           |
| Sat | 2026-05-16 | 1h   | [ ]  | **Portfolio:** Optional `x-request-id` → logs (interceptor or middleware).                                                   |
| Sat | 2026-05-16 | 1h   | [ ]  | **Portfolio:** Replace `console.log` in hot paths with Nest `Logger`.                                                        |
| Sat | 2026-05-16 | 1h   | [ ]  | **Portfolio:** Stable error JSON (**code** + **message** + traceId if added); trigger 500 in dev—no stack leak in prod mode. |
| Sun | 2026-05-17 | 1h   | [ ]  | **Udemy:** Finish any logging/config lectures not done Sat.                                                                  |
| Sun | 2026-05-17 | 1h   | [ ]  | **Portfolio:** Refactor `notes` to use config for port/CORS placeholder.                                                     |
| Sun | 2026-05-17 | 1h   | [ ]  | Retro.                                                                                                                       |
| Sun | 2026-05-17 | 1h   | [ ]  | Read Nest “Guards” doc + **Udemy** next section preview (auth).                                                              |

---

### Week 6 — Auth basics (register / login) + Udemy TypeORM & Postgres (Udemy repo)

**Milestone:** Register + login; passwords hashed; never returned. **Udemy:** **Data persistence — PostgreSQL & TypeORM** + Docker (complete in `**udemy-zero-to-hero`** only this week). **Portfolio\*\* stays in-memory or minimal until Prisma in Week 9.

| Day | Date       | Time | Done | Task                                                                                                                                                 |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-05-18 | 1h   | [ ]  | **Portfolio:** Add **User** model in-memory (roadmap). **Udemy:** Start TypeORM + Docker setup in `**udemy-zero-to-hero`\*\* (Compose + DB running). |
| Tue | 2026-05-19 | 1h   | [ ]  | **Udemy (≤45 min):** Entities + repository pattern — **Portfolio:** **bcrypt** hash on register; compare on login (constant-time via library API).   |
| Wed | 2026-05-20 | 1h   | [ ]  | **Portfolio:** `POST /auth/register` + `POST /auth/login` DTOs validated.                                                                            |
| Thu | 2026-05-21 | 1h   | [ ]  | **Portfolio:** On login success return **token payload plan** (sign JWT in Sat block if not yet).                                                    |
| Fri | 2026-05-22 | 1h   | [ ]  | **Portfolio:** Duplicate email → 409; bad credentials → 401.                                                                                         |
| Sat | 2026-05-23 | 1h   | [ ]  | **Udemy:** TypeORM migrations / relations if still on DB section.                                                                                    |
| Sat | 2026-05-23 | 1h   | [ ]  | **Portfolio:** `@nestjs/jwt` sign access token; **secret** + **expiry** from env.                                                                    |
| Sat | 2026-05-23 | 1h   | [ ]  | **Portfolio:** No token logging; redact passwords in debug.                                                                                          |
| Sat | 2026-05-23 | 1h   | [ ]  | **Portfolio:** Swagger auth section; unit test hash/verify path if time.                                                                             |
| Sun | 2026-05-24 | 1h   | [ ]  | **Udemy:** Close out Postgres/TypeORM module in Udemy repo.                                                                                          |
| Sun | 2026-05-24 | 1h   | [ ]  | **Portfolio:** **Refresh token** design on paper—stub or defer to Week 7.                                                                            |
| Sun | 2026-05-24 | 1h   | [ ]  | Retro.                                                                                                                                               |
| Sun | 2026-05-24 | 1h   | [ ]  | **Portfolio:** Security note in README.                                                                                                              |

---

### Week 7 — JWT guard + roles + `@CurrentUser()` + Udemy auth

**Milestone:** Protected routes; 401 vs 403 correct. **Udemy:** **Authentication & authorization** (Passport, JWT strategy, guards — code-along in `**udemy-zero-to-hero`**; mirror behavior in `**portfolio-api\*\*`).

| Day | Date       | Time | Done | Task                                                                                                             |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-05-25 | 1h   | [ ]  | **Udemy (≤45 min):** Passport JWT setup — **Portfolio:** `JwtAuthGuard` / strategy; validate signature + expiry. |
| Tue | 2026-05-26 | 1h   | [ ]  | **Portfolio:** `**@CurrentUser()`\*\* decorator reading request user.                                            |
| Wed | 2026-05-27 | 1h   | [ ]  | **Portfolio:** Protect `notes` routes; `**@Public()`\*\* for exceptions if needed.                               |
| Thu | 2026-05-28 | 1h   | [ ]  | **Portfolio:** **Roles** enum + `RolesGuard` (even `USER` only) on one route.                                    |
| Fri | 2026-05-29 | 1h   | [ ]  | **Portfolio:** User A cannot delete user B’s note (if modeled).                                                  |
| Sat | 2026-05-30 | 1h   | [ ]  | **Udemy (≤45 min):** Guards / protected routes recap if needed.                                                  |
| Sat | 2026-05-30 | 1h   | [ ]  | **Portfolio:** **Refresh** endpoint or document “phase 2”.                                                       |
| Sat | 2026-05-30 | 1h   | [ ]  | **Portfolio:** Swagger **Bearer** auth; authorize in UI.                                                         |
| Sat | 2026-05-30 | 1h   | [ ]  | **Portfolio:** Error matrix 401/403 + short **demo script** outline for later.                                   |
| Sun | 2026-05-31 | 1h   | [ ]  | **Udemy:** Finish remaining auth/guards lectures.                                                                |
| Sun | 2026-05-31 | 1h   | [ ]  | **Portfolio:** Edge cases — expired token; malformed header.                                                     |
| Sun | 2026-05-31 | 1h   | [ ]  | Retro.                                                                                                           |
| Sun | 2026-05-31 | 1h   | [ ]  | Prep Supertest + **Udemy** testing section for Week 8.                                                           |

---

### Week 8 — Supertest integration tests + Udemy testing

**Milestone:** Happy path + one failure for auth + one CRUD flow. **Udemy:** **Testing** (unit + E2E) — finish remaining lectures; `**portfolio-api`\*\* is the source of truth for Supertest goals.

| Day | Date       | Time | Done | Task                                                                                                                    |
| --- | ---------- | ---- | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| Mon | 2026-06-01 | 1h   | [ ]  | **Udemy (≤30 min):** Testing overview — **Portfolio:** Supertest + `NestFactory` or e2e template.                       |
| Tue | 2026-06-02 | 1h   | [ ]  | **Portfolio:** Test **register → login → access protected** with real HTTP.                                             |
| Wed | 2026-06-03 | 1h   | [ ]  | **Portfolio:** Test **401** when missing token on protected route.                                                      |
| Thu | 2026-06-04 | 1h   | [ ]  | **Udemy (≤30 min):** E2E patterns — **Portfolio:** Test **CRUD** (create → get → patch → delete).                       |
| Fri | 2026-06-05 | 1h   | [ ]  | **Portfolio:** Test **409** or **404** case you implemented.                                                            |
| Sat | 2026-06-06 | 1h   | [ ]  | **Udemy:** Finish **Testing** lectures if any remain.                                                                   |
| Sat | 2026-06-06 | 1h   | [ ]  | **Portfolio:** Decide **test DB strategy** (mock repo vs docker postgres for tests).                                    |
| Sat | 2026-06-06 | 2h   | [ ]  | **Portfolio:** Stabilize tests; reset state between tests.                                                              |
| Sat | 2026-06-06 | 1h   | [ ]  | **Portfolio:** `npm run test:e2e` script ready for CI later.                                                            |
| Sun | 2026-06-07 | 1h   | [ ]  | **Udemy:** Complete any remaining **Testing** + optional **Deployment** intro (watch only; deploy **portfolio** later). |
| Sun | 2026-06-07 | 1h   | [ ]  | **Portfolio:** **Explain aloud** middleware vs guard vs interceptor; comment gaps.                                      |
| Sun | 2026-06-07 | 1h   | [ ]  | Month 2 checkpoint vs [02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md).                                     |
| Sun | 2026-06-07 | 1h   | [ ]  | Plan Prisma + Docker Week 9 — **no new TypeORM in `portfolio-api`**.                                                    |

---

## Month 3 — PostgreSQL + Prisma

### Week 9 — Docker Compose + Prisma init (+ Udemy wrap-up)

**Milestone:** Postgres up with one command; first migration in repo. **Udemy:** Core path should be **done**; optional: finish **Deployment** lecture and compare with your later Railway/Render setup. `**portfolio-api`** uses **Prisma\*\* — translate mental model from Udemy’s TypeORM entities to Prisma models.

| Day | Date       | Time | Done | Task                                                                                               |
| --- | ---------- | ---- | ---- | -------------------------------------------------------------------------------------------------- |
| Mon | 2026-06-08 | 1h   | [ ]  | Write `docker-compose.yml` for **Postgres 15+**; volume + port; `docker compose up -d`.            |
| Tue | 2026-06-09 | 1h   | [ ]  | `prisma init`; `DATABASE_URL` in `.env.example`; connect with `prisma db pull` skip—use `migrate`. |
| Wed | 2026-06-10 | 1h   | [ ]  | First **schema**: `User`, `Note` (or your entities); `prisma migrate dev` named migration.         |
| Thu | 2026-06-11 | 1h   | [ ]  | `PrismaService` in Nest (`onModuleInit`/`onModuleDestroy` pattern from docs).                      |
| Fri | 2026-06-12 | 1h   | [ ]  | Replace in-memory **User** repo with Prisma **create/find**.                                       |
| Sat | 2026-06-13 | 1h   | [ ]  | Replace **Note** CRUD with Prisma.                                                                 |
| Sat | 2026-06-13 | 1h   | [ ]  | Ensure **FK** or relation User → Notes if applicable.                                              |
| Sat | 2026-06-13 | 1h   | [ ]  | README: Docker section “start db” + “run migrations”.                                              |
| Sat | 2026-06-13 | 1h   | [ ]  | `prisma studio` quick sanity check.                                                                |
| Sun | 2026-06-14 | 2h   | [ ]  | Fix integration tests to use DB (or dockerized test DB)—may spill to Week 10.                      |
| Sun | 2026-06-14 | 1h   | [ ]  | Retro.                                                                                             |
| Sun | 2026-06-14 | 1h   | [ ]  | Backup: export schema diagram screenshot.                                                          |

---

### Week 10 — Relations + indexes

**Milestone:** Two related entities; sensible indexes; cascades explicit.

| Day | Date       | Time | Done | Task                                                                        |
| --- | ---------- | ---- | ---- | --------------------------------------------------------------------------- |
| Mon | 2026-06-15 | 1h   | [ ]  | Model **1–N** (user has many notes); relation fields in Prisma.             |
| Tue | 2026-06-16 | 1h   | [ ]  | **Indexes** on foreign keys + common filters (`userId`, `createdAt`).       |
| Wed | 2026-06-17 | 1h   | [ ]  | **N–M** if needed (e.g. tags): join table; migrate.                         |
| Thu | 2026-06-18 | 1h   | [ ]  | Service methods use **include** / **select** to avoid over-fetching.        |
| Fri | 2026-06-19 | 1h   | [ ]  | Delete behavior: `onDelete` strategy documented; test cascade or block.     |
| Sat | 2026-06-20 | 1h   | [ ]  | Query plan awareness: `EXPLAIN` one slow query on paper (optional install). |
| Sat | 2026-06-20 | 2h   | [ ]  | Refactor services for **clear** repository boundaries.                      |
| Sat | 2026-06-20 | 1h   | [ ]  | Integration tests updated for relations.                                    |
| Sun | 2026-06-21 | 2h   | [ ]  | Buffer / test stabilization.                                                |
| Sun | 2026-06-21 | 1h   | [ ]  | ERD in repo (`docs/erd.png` or Mermaid).                                    |
| Sun | 2026-06-21 | 1h   | [ ]  | Retro.                                                                      |

---

### Week 11 — Transactions + seed

**Milestone:** One `$transaction` flow; `pnpm seed` populates demo data.

| Day | Date       | Time | Done | Task                                                                                  |
| --- | ---------- | ---- | ---- | ------------------------------------------------------------------------------------- |
| Mon | 2026-06-22 | 1h   | [ ]  | Identify multi-step operation (e.g. create org + membership); wrap in `$transaction`. |
| Tue | 2026-06-23 | 1h   | [ ]  | Failure case: one step throws → no partial commit.                                    |
| Wed | 2026-06-24 | 1h   | [ ]  | `prisma/seed.ts`; create admin + sample notes/tags.                                   |
| Thu | 2026-06-25 | 1h   | [ ]  | Wire `package.json` `"prisma": { "seed": "..." }` / `tsx` runner.                     |
| Fri | 2026-06-26 | 1h   | [ ]  | README: how to seed; demo credentials (dev only).                                     |
| Sat | 2026-06-27 | 1h   | [ ]  | Idempotency: seed safe to re-run (upsert) or document wipe.                           |
| Sat | 2026-06-27 | 2h   | [ ]  | Add **integration test** for transactional flow.                                      |
| Sat | 2026-06-27 | 1h   | [ ]  | Review Prisma “transactions” docs for interview talking points.                       |
| Sun | 2026-06-28 | 2h   | [ ]  | Month 3 halfway checkpoint; fix failing tests.                                        |
| Sun | 2026-06-28 | 1h   | [ ]  | Retro.                                                                                |
| Sun | 2026-06-28 | 1h   | [ ]  | Plan Week 12 refactor scope.                                                          |

---

### Week 12 — Refactor persistence + green tests

**Milestone:** CRUD + auth on Postgres; tests passing.

| Day | Date       | Time | Done | Task                                                                       |
| --- | ---------- | ---- | ---- | -------------------------------------------------------------------------- |
| Mon | 2026-06-29 | 1h   | [ ]  | Remove dead in-memory code paths; single source of truth Prisma.           |
| Tue | 2026-06-30 | 1h   | [ ]  | Run full e2e suite against local DB; fix race conditions.                  |
| Wed | 2026-07-01 | 1h   | [ ]  | Test database: separate `DATABASE_URL_TEST` or docker profile—document.    |
| Thu | 2026-07-02 | 1h   | [ ]  | Migration workflow: `migrate deploy` documented for prod later.            |
| Fri | 2026-07-03 | 1h   | [ ]  | Performance sanity: N+1 check on list endpoint (use `include` wisely).     |
| Sat | 2026-07-04 | 2h   | [ ]  | Harden tests; parallel vs serial decision documented.                      |
| Sat | 2026-07-04 | 1h   | [ ]  | **Project 1** naming: repo rename or new folder; decision logged.          |
| Sat | 2026-07-04 | 1h   | [ ]  | Checkpoint vs checklist DB + Prisma sections.                              |
| Sun | 2026-07-05 | 2h   | [ ]  | Buffer / technical debt list (max 5 items).                                |
| Sun | 2026-07-05 | 1h   | [ ]  | Retro Month 3.                                                             |
| Sun | 2026-07-05 | 1h   | [ ]  | Skim [03-portfolio-projects.md](03-portfolio-projects.md) Project A scope. |

---

## Month 4 — Project 1 MVP (API + thin React)

### Week 13 — Domain modeling (orgs / members / roles)

**Milestone:** ERD + Prisma schema for Project 1 core.

| Day | Date       | Time | Done | Task                                                                      |
| --- | ---------- | ---- | ---- | ------------------------------------------------------------------------- |
| Mon | 2026-07-06 | 1h   | [ ]  | Write **user stories** (3–5) for org + membership + core workflow.        |
| Tue | 2026-07-07 | 1h   | [ ]  | ERD: `Organization`, `Member`, `Role`, core entity (Task/Invoice/Post).   |
| Wed | 2026-07-08 | 1h   | [ ]  | Prisma schema draft; list all relations + constraints.                    |
| Thu | 2026-07-09 | 1h   | [ ]  | First migration for new models; no UI yet.                                |
| Fri | 2026-07-10 | 1h   | [ ]  | Services stubs: create org, invite code or email token (paper algorithm). |
| Sat | 2026-07-11 | 2h   | [ ]  | Implement **create org + add self as OWNER** API.                         |
| Sat | 2026-07-11 | 1h   | [ ]  | Swagger updated.                                                          |
| Sat | 2026-07-11 | 1h   | [ ]  | Seed updated for multi-tenant demo.                                       |
| Sun | 2026-07-12 | 2h   | [ ]  | **Permission** checks on one resource (org-scoped).                       |
| Sun | 2026-07-12 | 1h   | [ ]  | Retro.                                                                    |
| Sun | 2026-07-12 | 1h   | [ ]  | Plan React app structure Week 15.                                         |

---

### Week 14 — Workflows + permissions + list APIs

**Milestone:** Main journeys work locally (API-only ok).

| Day | Date       | Time | Done | Task                                                                  |
| --- | ---------- | ---- | ---- | --------------------------------------------------------------------- |
| Mon | 2026-07-13 | 1h   | [ ]  | Core entity CRUD **scoped to org**; guard checks membership.          |
| Tue | 2026-07-14 | 1h   | [ ]  | List endpoint: **pagination** DTO + validation.                       |
| Wed | 2026-07-15 | 1h   | [ ]  | Filter/sort query params validated; SQL injection safe via Prisma.    |
| Thu | 2026-07-16 | 1h   | [ ]  | Invite/join flow minimal viable (token table or join code).           |
| Fri | 2026-07-17 | 1h   | [ ]  | Role change rules (e.g. only OWNER promotes)—or document TODO if cut. |
| Sat | 2026-07-18 | 2h   | [ ]  | End-to-end **Postman/HTTP** collection for happy paths.               |
| Sat | 2026-07-18 | 1h   | [ ]  | Error handling for cross-org access → 403.                            |
| Sat | 2026-07-18 | 1h   | [ ]  | Integration tests: critical path (org + create entity).               |
| Sun | 2026-07-19 | 2h   | [ ]  | Buffer: more tests or cut scope list.                                 |
| Sun | 2026-07-19 | 1h   | [ ]  | Retro.                                                                |
| Sun | 2026-07-19 | 1h   | [ ]  | Init React app if not started (Vite + TS).                            |

---

### Week 15 — React client (auth + main screens)

**Milestone:** Login + primary screens against local API.

| Day | Date       | Time | Done | Task                                                                                    |
| --- | ---------- | ---- | ---- | --------------------------------------------------------------------------------------- |
| Mon | 2026-07-20 | 1h   | [ ]  | API client module: base URL from env; fetch wrapper with **401** redirect to login.     |
| Tue | 2026-07-21 | 1h   | [ ]  | Login + store access token (httpOnly cookie preferred; if localStorage, document risk). |
| Wed | 2026-07-22 | 1h   | [ ]  | Org switcher UI (if multi-org); load memberships.                                       |
| Thu | 2026-07-23 | 1h   | [ ]  | Core workflow screens: list + create modal/form.                                        |
| Fri | 2026-07-24 | 1h   | [ ]  | Loading / empty / error states on main list.                                            |
| Sat | 2026-07-25 | 2h   | [ ]  | Polish UX minimally: consistent layout, form validation.                                |
| Sat | 2026-07-25 | 1h   | [ ]  | CORS: local dev ports aligned; credentials if cookies.                                  |
| Sat | 2026-07-25 | 1h   | [ ]  | Screenshot for future README.                                                           |
| Sun | 2026-07-26 | 2h   | [ ]  | Fix cross-origin issues; document in README troubleshooting.                            |
| Sun | 2026-07-26 | 1h   | [ ]  | Retro.                                                                                  |
| Sun | 2026-07-26 | 1h   | [ ]  | Plan hardening Week 16.                                                                 |

---

### Week 16 — Hardening + README

**Milestone:** `/health` 200; README gets stranger to running stack.

| Day | Date       | Time | Done | Task                                                                                           |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------------------- |
| Mon | 2026-07-27 | 1h   | [ ]  | `GET /health` returns `{ status: 'ok' }` + maybe DB ping.                                      |
| Tue | 2026-07-28 | 1h   | [ ]  | **Rate limit** sensitive routes (`@nestjs/throttler` or middleware).                           |
| Wed | 2026-07-29 | 1h   | [ ]  | **CORS** config for prod origin placeholder + dev localhost.                                   |
| Thu | 2026-07-30 | 1h   | [ ]  | README: **Docker Compose** full stack (db + api + optional web) or clear steps.                |
| Fri | 2026-07-31 | 1h   | [ ]  | Env table complete; `.env.example` for api + web.                                              |
| Sat | 2026-08-01 | 2h   | [ ]  | Run through README on **fresh clone** (or ask friend); fix gaps.                               |
| Sat | 2026-08-01 | 1h   | [ ]  | **Security** section: hashing, JWT, CORS, rate limit—honest limits.                            |
| Sat | 2026-08-01 | 1h   | [ ]  | Tag release `v0.1-mvp`.                                                                        |
| Sun | 2026-08-02 | 2h   | [ ]  | Month 4 retro; list **deploy** blockers for Month 5.                                           |
| Sun | 2026-08-02 | 1h   | [ ]  | Update [03-portfolio-projects.md](03-portfolio-projects.md) checklist mentally—what’s missing. |
| Sun | 2026-08-02 | 1h   | [ ]  | Rest.                                                                                          |

---

## Month 5 — CI, deploy, observability, Project 2

### Week 17 — GitHub Actions

**Milestone:** Lint + test on every PR.

| Day | Date       | Time | Done | Task                                                                            |
| --- | ---------- | ---- | ---- | ------------------------------------------------------------------------------- |
| Mon | 2026-08-03 | 1h   | [ ]  | Add workflow file; run `npm ci` + `npm run lint` + `npm test`.                  |
| Tue | 2026-08-04 | 1h   | [ ]  | Cache dependencies; pin Node version.                                           |
| Wed | 2026-08-05 | 1h   | [ ]  | E2E job: **services: postgres** matrix or skip e2e until docker in CI—document. |
| Thu | 2026-08-06 | 1h   | [ ]  | Branch protection checklist (manual on GitHub): require CI pass.                |
| Fri | 2026-08-07 | 1h   | [ ]  | Badge in README (optional).                                                     |
| Sat | 2026-08-08 | 2h   | [ ]  | Fix flaky CI; deterministic tests.                                              |
| Sat | 2026-08-08 | 1h   | [ ]  | Document “how to debug CI” in CONTRIBUTING or README.                           |
| Sat | 2026-08-08 | 1h   | [ ]  | Retro.                                                                          |
| Sun | 2026-08-09 | 2h   | [ ]  | Buffer / improve coverage on critical path only.                                |
| Sun | 2026-08-09 | 1h   | [ ]  | Choose deploy target (Railway / Render / Fly) and read “Postgres” guide.        |
| Sun | 2026-08-09 | 1h   | [ ]  | List env vars needed in prod.                                                   |

---

### Week 18 — Deploy API + DB

**Milestone:** Public HTTPS API; migrations on deploy; no secrets in repo.

| Day | Date       | Time | Done | Task                                                                               |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------- |
| Mon | 2026-08-10 | 1h   | [ ]  | Create hosted **Postgres**; copy connection string to host secrets.                |
| Tue | 2026-08-11 | 1h   | [ ]  | Deploy API; `DATABASE_URL` set; build command correct.                             |
| Wed | 2026-08-12 | 1h   | [ ]  | Run `**prisma migrate deploy`\*\* in release phase or entry script—document order. |
| Thu | 2026-08-13 | 1h   | [ ]  | Smoke test Swagger or `/health` on prod URL.                                       |
| Fri | 2026-08-14 | 1h   | [ ]  | Deploy **frontend** static host or same platform; `VITE_`_ / `NEXT*PUBLIC*_` envs. |
| Sat | 2026-08-15 | 1h   | [ ]  | CORS + cookie domain for prod front URL.                                           |
| Sat | 2026-08-15 | 1h   | [ ]  | HTTPS only; HSTS awareness (platform may handle).                                  |
| Sat | 2026-08-15 | 1h   | [ ]  | Document rollback strategy one paragraph.                                          |
| Sat | 2026-08-15 | 1h   | [ ]  | Celebrate + note URL in README.                                                    |
| Sun | 2026-08-16 | 2h   | [ ]  | Fix prod-only bug if any (logging first).                                          |
| Sun | 2026-08-16 | 1h   | [ ]  | Retro.                                                                             |
| Sun | 2026-08-16 | 1h   | [ ]  | Plan Week 19 observability.                                                        |

---

### Week 19 — Logging + request tracing

**Milestone:** Find a failed request in logs within minutes.

| Day | Date       | Time | Done | Task                                                                                               |
| --- | ---------- | ---- | ---- | -------------------------------------------------------------------------------------------------- |
| Mon | 2026-08-17 | 1h   | [ ]  | Structured JSON logs in prod (if platform supports); else consistent single-line format.           |
| Tue | 2026-08-18 | 1h   | [ ]  | Log **user id** + **request id** on each request (no PII).                                         |
| Wed | 2026-08-19 | 1h   | [ ]  | Log slow queries threshold (optional) or request duration middleware.                              |
| Thu | 2026-08-20 | 1h   | [ ]  | Reproduce 500 in staging/prod; verify stack trace visibility vs safety.                            |
| Fri | 2026-08-21 | 1h   | [ ]  | README: “where to see logs” for your host.                                                         |
| Sat | 2026-08-22 | 2h   | [ ]  | **Error monitoring** optional (Sentry free tier) one integration—or skip with rationale in README. |
| Sat | 2026-08-22 | 1h   | [ ]  | Audit **secrets**: rotate JWT secret if exposed during debug.                                      |
| Sat | 2026-08-22 | 1h   | [ ]  | Retro.                                                                                             |
| Sun | 2026-08-23 | 2h   | [ ]  | Load test **optional** (k6 or `autocannon`) on `/health`—document baseline.                        |
| Sun | 2026-08-23 | 1h   | [ ]  | Month 5 checkpoint.                                                                                |
| Sun | 2026-08-23 | 1h   | [ ]  | Decide Project 2 vs differentiator per [03-portfolio-projects.md](03-portfolio-projects.md).       |

---

### Week 20 — Project 2 or differentiator

**Milestone:** Second narrative chapter (new repo or major feature).

| Day | Date       | Time | Done | Task                                                                            |
| --- | ---------- | ---- | ---- | ------------------------------------------------------------------------------- |
| Mon | 2026-08-24 | 1h   | [ ]  | Choose: **Stripe**, **OAuth**, **WebSockets**, or **BullMQ**—one only.          |
| Tue | 2026-08-25 | 1h   | [ ]  | Spike: smallest proof-of-concept in branch (e.g. webhook endpoint returns 200). |
| Wed | 2026-08-26 | 1h   | [ ]  | Security read for chosen integration (signatures, state param, etc.).           |
| Thu | 2026-08-27 | 1h   | [ ]  | Integrate into main app behind feature flag or module.                          |
| Fri | 2026-08-28 | 1h   | [ ]  | Tests for happy path + one attack/failure case.                                 |
| Sat | 2026-08-29 | 3h   | [ ]  | Build **vertical slice** visible in UI or documented API.                       |
| Sat | 2026-08-29 | 1h   | [ ]  | README section for new feature.                                                 |
| Sun | 2026-08-30 | 2h   | [ ]  | Polish + edge cases.                                                            |
| Sun | 2026-08-30 | 1h   | [ ]  | Retro Month 5.                                                                  |
| Sun | 2026-08-30 | 1h   | [ ]  | Plan documentation Month 6.                                                     |

---

## Month 6 — Polish + job search

### Week 21 — Docs + diagram + security audit

**Milestone:** Stranger runs locally in under 30 minutes per your README.

| Day | Date       | Time | Done | Task                                                                        |
| --- | ---------- | ---- | ---- | --------------------------------------------------------------------------- |
| Mon | 2026-08-31 | 1h   | [ ]  | Architecture **diagram** (Mermaid in README or image in `docs/`).           |
| Tue | 2026-09-01 | 1h   | [ ]  | **Troubleshooting** section: port conflicts, docker, prisma migrate errors. |
| Wed | 2026-09-02 | 1h   | [ ]  | **Threat model** lite: auth, CSRF if cookies, SSRF if webhooks.             |
| Thu | 2026-09-03 | 1h   | [ ]  | Dependency audit; upgrade critical patches.                                 |
| Fri | 2026-09-04 | 1h   | [ ]  | “Limitations” section: honest scope boundaries.                             |
| Sat | 2026-09-05 | 2h   | [ ]  | Record **2–3 min** demo (optional) or detailed GIF checklist.               |
| Sat | 2026-09-05 | 1h   | [ ]  | Unify tone across both project READMEs.                                     |
| Sat | 2026-09-05 | 1h   | [ ]  | Retro.                                                                      |
| Sun | 2026-09-06 | 2h   | [ ]  | Peer review: ask one person to follow README; capture friction.             |
| Sun | 2026-09-06 | 1h   | [ ]  | Fix top 3 README issues.                                                    |
| Sun | 2026-09-06 | 1h   | [ ]  | Rest.                                                                       |

---

### Week 22 — Resume + profiles

**Milestone:** 2–3 measurable bullets per project on resume.

| Day | Date       | Time | Done | Task                                                                               |
| --- | ---------- | ---- | ---- | ---------------------------------------------------------------------------------- |
| Mon | 2026-09-07 | 1h   | [ ]  | Draft bullet: stack + **outcome** (e.g. “JWT auth + RBAC, 40+ integration tests”). |
| Tue | 2026-09-08 | 1h   | [ ]  | Second bullet: **deploy** + DB migrations in CI/CD words.                          |
| Wed | 2026-09-09 | 1h   | [ ]  | Third bullet: **differentiator** (Stripe/WS/queue) if applicable.                  |
| Thu | 2026-09-10 | 1h   | [ ]  | **LinkedIn** headline + About: fullstack positioning with Nest/Postgres/React.     |
| Fri | 2026-09-11 | 1h   | [ ]  | GitHub profile README or pinned repos descriptions aligned.                        |
| Sat | 2026-09-12 | 2h   | [ ]  | Resume pass: numbers, links, no buzzword soup.                                     |
| Sat | 2026-09-12 | 1h   | [ ]  | Cover letter template paragraph (company research placeholder).                    |
| Sat | 2026-09-12 | 1h   | [ ]  | Retro.                                                                             |
| Sun | 2026-09-13 | 2h   | [ ]  | Portfolio site optional one-pager linking demos.                                   |
| Sun | 2026-09-13 | 1h   | [ ]  | Ask feedback from peer or mentor.                                                  |
| Sun | 2026-09-13 | 1h   | [ ]  | Rest.                                                                              |

---

### Week 23 — System design + your stack

**Milestone:** Whiteboard your stack in 10 minutes.

| Day | Date       | Time | Done | Task                                                                       |
| --- | ---------- | ---- | ---- | -------------------------------------------------------------------------- |
| Mon | 2026-09-14 | 1h   | [ ]  | Draw auth flow: login → access token → refresh → logout.                   |
| Tue | 2026-09-15 | 1h   | [ ]  | Draw data model on whiteboard from memory; fix gaps in notes.              |
| Wed | 2026-09-16 | 1h   | [ ]  | **Scaling** story: read replicas (conceptual), cache where, stateless API. |
| Thu | 2026-09-17 | 1h   | [ ]  | **Tradeoffs**: JWT vs sessions; Prisma vs raw SQL when.                    |
| Fri | 2026-09-18 | 1h   | [ ]  | One **mock interview** question answered out loud (record voice optional). |
| Sat | 2026-09-19 | 2h   | [ ]  | Deep dive weak area from mock (e.g. indexes, websocket scale).             |
| Sat | 2026-09-19 | 1h   | [ ]  | Flashcards or note sheet: 20 facts about your own codebase.                |
| Sat | 2026-09-19 | 1h   | [ ]  | Retro.                                                                     |
| Sun | 2026-09-20 | 2h   | [ ]  | Practice **two** stories: conflict/debug and technical decision.           |
| Sun | 2026-09-20 | 1h   | [ ]  | Sleep hygiene + schedule applications for Week 24.                         |
| Sun | 2026-09-20 | 1h   | [ ]  | Rest.                                                                      |

---

### Week 24 — Applications + iteration

**Milestone:** Sustained application cadence; iterate from feedback.

| Day | Date       | Time | Done | Task                                                                           |
| --- | ---------- | ---- | ---- | ------------------------------------------------------------------------------ |
| Mon | 2026-09-21 | 1h   | [ ]  | Target list: N companies/week; tracker spreadsheet.                            |
| Tue | 2026-09-22 | 1h   | [ ]  | Tailor **2 applications** with company-specific lines.                         |
| Wed | 2026-09-23 | 1h   | [ ]  | Follow-ups; networking message template (if used).                             |
| Thu | 2026-09-24 | 1h   | [ ]  | If coding assignment appears: timebox practice problem unrelated to portfolio. |
| Fri | 2026-09-25 | 1h   | [ ]  | Review rejection/ghosting emotionally neutral; adjust pitch once.              |
| Sat | 2026-09-26 | 2h   | [ ]  | Portfolio tweak from interview feedback (small, high ROI only).                |
| Sat | 2026-09-26 | 1h   | [ ]  | **Retro** full 6 months: what you’d tell yourself on day 1.                    |
| Sat | 2026-09-26 | 1h   | [ ]  | Plan next 90 days skill goals.                                                 |
| Sun | 2026-09-27 | 2h   | [ ]  | Open source **good first issue** OR rest / recovery.                           |
| Sun | 2026-09-27 | 1h   | [ ]  | Celebrate milestones completed.                                                |
| Sun | 2026-09-27 | 1h   | [ ]  | Optional: schedule recurring **1h/week** maintenance for pinned repos.         |

---

## Daily assignments by calendar day

Two questions per date; **Assignment done** is required to count the calendar day finished (together with that day’s tasks above).

### Week 1 — Node fundamentals (2026-04-13 — 2026-04-19)

#### Mon 2026-04-13

1. What is the Node.js LTS policy in one sentence, and which `node -v` output proves your install?
2. Why does `npm init -y` create a `package.json`, and what two fields identify the project?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-04-14

1. What is the difference between compiling TS with `tsc` and running with `ts-node` / `tsx`?
2. What does `"strict": true` in `tsconfig.json` change for you as a developer?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-04-15

1. Why commit `.env.example` but not `.env`? What could go wrong if `.env` is pushed to Git?
2. Name one way to read `process.env.MY_VAR` in a typed way.

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-04-16

1. What happens to an unhandled `Promise` rejection in Node? How does `try/catch` around `await` help?
2. In one sentence: what runs on the microtask queue vs the next tick?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-04-17

1. What is the purpose of the `scripts` field in `package.json`? Give an example `npm run` you added.
2. What is the difference between `dependencies` and `devDependencies`?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-04-18

1. List two things that are _not_ the same between browser JS and Node (APIs or globals).
2. In your own words: what does “single-threaded event loop” mean for CPU-heavy work?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-04-19

1. Pick one line from a stack trace you saw: what file/function did it point to, and what did you change?
2. What rule did ESLint enforce that you fixed, and why might that rule exist?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 2 — HTTP & REST + Udemy start (2026-04-20 — 2026-04-26)

#### Mon 2026-04-20

1. When do you use POST vs PATCH for a “Note” resource?
2. Which HTTP status would you return for validation errors vs “not found”?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-04-21

1. Give one example each for 201, 204, 409 in a REST API.
2. What does `422 Unprocessable Entity` imply about the request body?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-04-22

1. Which HTTP methods are idempotent? Why does that matter for retries?
2. When is PUT _not_ a good fit compared to PATCH?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-04-23

1. Sketch your standard JSON error shape and when you’d include `details`.
2. How do you avoid leaking internal errors to clients in production?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-04-24

1. Compare offset vs cursor pagination; when is cursor safer?
2. What query params would you use for sorting a list safely?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-04-25

1. For your `Note` resource: list routes and who may call them (public vs auth).
2. Draw the request body for `POST /notes` — required vs optional fields.

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-04-26

1. What did you create in `udemy-zero-to-hero` today, and how does it differ from `portfolio-api`?
2. What is `nest new` doing on disk (folders you care about)?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 3 — NestJS core (CRUD) + Udemy Task API (2026-04-27 — 2026-05-03)

#### Mon 2026-04-27

1. What is the responsibility of a Nest module vs a controller vs a service?
2. What is a DTO and why validate at the boundary?

- [x] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-04-28

1. How does Nest resolve a provider (service) inside a controller?
2. What is `@Module({ imports, controllers, providers })` doing?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-04-29

1. What decorators from `class-validator` did you use, and what error does Nest return on failure?
2. What does `ValidationPipe` do before your handler runs?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-04-30

1. How do you return 404 for unknown id — which exception type?
2. Why return a response DTO instead of the raw entity?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-05-01

1. PATCH vs PUT in your API: which did you implement and why?
2. How do you avoid overwriting fields the client omitted in PATCH?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-05-02

1. Where did you put business logic — controller or service — and why?
2. How do you test a route manually with curl or REST Client?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-05-03

1. What is “thin controller, fat service” in one example from your code?
2. What edge cases did you handle for list pagination?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 4 — Swagger + unit tests + Udemy validation (2026-05-04 — 2026-05-10)

#### Mon 2026-05-04

1. What does `@ApiTags` / `@ApiOperation` buy you in Swagger UI?
2. How do you document auth (Bearer) in Swagger for protected routes?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-05-05

1. What is the difference between `@ApiResponse` and your actual runtime behavior?
2. Why add example bodies to POST in Swagger?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-05-06

1. How does Swagger help a frontend developer integrate?
2. What is one pitfall of outdated Swagger decorators?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-05-07

1. What is the difference between unit tests and e2e tests in Nest?
2. What does `describe` / `it` map to in your mental model?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-05-08

1. What pure logic did you unit test, and what did you mock?
2. What would cause your unit test to be flaky if it hit the real DB?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-05-09

1. What coverage do you _not_ need for a portfolio API, and why?
2. Name one assertion that proves a business rule.

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-05-10

1. What duplicate / conflict behavior did you implement or defer (409)?
2. What will you tackle first in Month 2 based on your retro?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 5 — Config, filters, logging + Udemy logging/config (2026-05-11 — 2026-05-17)

#### Mon 2026-05-11

1. How does `ConfigModule` load `.env`, and what runs in production instead?
2. Why validate env at bootstrap?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-05-12

1. What does a global exception filter change about HTTP responses?
2. When would you use `HttpException` vs a custom domain error?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-05-13

1. What must never appear in logs (PII examples)?
2. What is structured logging vs `console.log`?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-05-14

1. Name one env var your app refuses to start without.
2. How do you document env vars for another developer?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-05-15

1. What is `x-request-id` / correlation id used for?
2. What is the order: middleware → guard → interceptor → handler?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-05-16

1. How does Nest `Logger` differ from `console.log` in a service?
2. What log level would you use for “incoming request” vs “unexpected error”?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-05-17

1. What did you read about Guards in the docs, and how does it connect to Week 7?
2. What is one config value you moved out of magic strings?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 6 — Auth basics + Udemy TypeORM & Postgres (2026-05-18 — 2026-05-24)

#### Mon 2026-05-18

1. Why hash passwords with bcrypt/argon2 instead of SHA-256?
2. What does “never return the password” mean in API responses?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-05-19

1. What is a TypeORM entity vs repository in your Udemy project?
2. What does `@Column({ unique: true })` enforce at DB level?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-05-20

1. What validation rules apply to `AuthCredentialsDto`?
2. What status code for duplicate email on register?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-05-21

1. What claims go in a JWT access token payload (no secrets)?
2. Where is the signing secret loaded from?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-05-22

1. 401 vs 403: which applies to “wrong password”?
2. What threat is mitigated by short-lived access tokens?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-05-23

1. What is a migration in TypeORM/Postgres terms?
2. What did Docker Compose provide for Postgres locally?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-05-24

1. How will you migrate from TypeORM (Udemy) to Prisma (`portfolio-api`) without mixing ORMs?
2. What is your refresh-token story (implemented or deferred)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 7 — JWT guard + roles + Udemy auth (2026-05-25 — 2026-05-31)

#### Mon 2026-05-25

1. How does Passport JWT strategy populate `req.user`?
2. What happens if the token is expired — where is that checked?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-05-26

1. How does `@CurrentUser()` get its value?
2. Why use a custom parameter decorator?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-05-27

1. What is `@Public()` for, if most routes are protected?
2. How does `JwtAuthGuard` decide 401?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-05-28

1. What is `RolesGuard` checking, and when is 403 returned?
2. How do you test “user A cannot touch user B’s resource”?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-05-29

1. How do you attach Bearer token in Swagger “Authorize”?
2. What is your refresh endpoint contract (or why deferred)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-05-30

1. Malformed `Authorization` header: what status and why?
2. What did you document for cookie vs header token storage?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-05-31

1. In one minute: middleware vs guard vs interceptor.
2. What will your first Supertest test assert?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 8 — Supertest integration tests + Udemy testing (2026-06-01 — 2026-06-07)

#### Mon 2026-06-01

1. How do you bootstrap the Nest app inside an e2e test?
2. Why use Supertest instead of raw `fetch` in tests?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-06-02

1. Write the happy path steps for register → login → protected route in test language.
2. What DB strategy did you pick for e2e (mock, sqlite, docker) and why?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-06-03

1. What assertion proves 401 when the token is missing?
2. How do you reset DB state between tests?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-06-04

1. What CRUD sequence did you cover in e2e?
2. What flake did you fix (timing, shared state)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-06-05

1. 409/404: which error path did you test and how?
2. What is in `test:e2e` script vs `test`?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-06-06

1. What remains from Udemy testing lectures to apply to `portfolio-api`?
2. What would you add to CI first: lint, unit, or e2e?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-06-07

1. Explain middleware vs guard vs interceptor from your own code paths.
2. What Prisma topic will you tackle on Week 9 Mon?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 9 — Docker Compose + Prisma init (+ Udemy wrap-up) (2026-06-08 — 2026-06-14)

#### Mon 2026-06-08

1. What does `docker-compose.yml` provide for local Postgres?
2. What is `DATABASE_URL` format for Prisma?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-06-09

1. What files does `prisma init` create?
2. Why not use `db pull` for a greenfield schema?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-06-10

1. How does Prisma model a relation vs TypeORM entity relations?
2. What is a named migration and why commit it?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-06-11

1. How does `PrismaService` connect/disconnect on Nest lifecycle?
2. Where should `PrismaClient` be instantiated once?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-06-12

1. How do you replace in-memory user creation with `prisma.user.create`?
2. What transaction boundary would you use for user+profile creation?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-06-13

1. How do you run migrations against a fresh clone?
2. What does `prisma studio` help you verify?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-06-14

1. What broke in integration tests when DB became real, and how did you fix it?
2. Screenshot or describe your schema after today.

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 10 — Relations + indexes (2026-06-15 — 2026-06-21)

#### Mon 2026-06-15

1. Model 1–N: which side holds the foreign key in Prisma?
2. What is `include` vs `select` for list endpoints?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-06-16

1. Why index foreign keys and common filters?
2. What is an N+1 query and how does Prisma amplify or avoid it?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-06-17

1. How is an implicit many-to-many represented in Prisma schema?
2. When would you use an explicit join model instead?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-06-18

1. Give an example where `select` reduces payload size.
2. What is over-fetching in list APIs?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-06-19

1. What `onDelete` behavior did you choose and why?
2. What breaks if you cascade-delete the wrong direction?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-06-20

1. What did `EXPLAIN` (or reasoning) show about a slow query?
2. How did you refactor repositories/services for clarity?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-06-21

1. Paste or describe your ERD: entities and cardinalities.
2. What relation test failed first, and what did you learn?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 11 — Transactions + seed (2026-06-22 — 2026-06-28)

#### Mon 2026-06-22

1. When must you use `prisma.$transaction`?
2. What happens if step 2 throws after step 1 succeeded without a transaction?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-06-23

1. How do you make seed idempotent (upsert vs wipe)?
2. Why never put production secrets in seed scripts?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-06-24

1. What demo users/data does your seed create?
2. How do you run seed from package.json?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-06-25

1. What is the Prisma seed hook in package.json for?
2. What env does seed use — dev only?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-06-26

1. What credentials are documented for local demo only?
2. What would you change before a public demo?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-06-27

1. What integration test covers your transactional flow?
2. Name one Prisma transaction interview talking point.

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-06-28

1. Mid-month retro: what is the riskiest part of your data model now?
2. What failing test is blocking you?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 12 — Refactor persistence + green tests (2026-06-29 — 2026-07-05)

#### Mon 2026-06-29

1. What in-memory code did you delete today?
2. What is the single source of truth for persistence now?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-06-30

1. What race condition appeared in e2e and how was it fixed?
2. Serial vs parallel tests: what did you choose?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-07-01

1. How is `DATABASE_URL_TEST` different from dev?
2. What is the reset strategy between tests?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-07-02

1. What is your production migration command (`migrate deploy`)?
2. Where does it run in CI/CD later?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-07-03

1. How did you check for N+1 on a list endpoint?
2. What `include` change fixed it?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-07-04

1. What makes your test suite deterministic enough for CI?
2. What did you name Project 1 repo and why?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-07-05

1. List up to 5 technical-debt items honestly.
2. What is the first Project 1 user story you will implement in Week 13?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 13 — Domain modeling (orgs / members / roles) (2026-07-06 — 2026-07-12)

#### Mon 2026-07-06

1. What user stories capture org + membership + core workflow?
2. Who are the actors (roles)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-07-07

1. Draw or list entities: Organization, Member, Role, core entity — relations.
2. What constraints are DB-enforced vs app-enforced?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-07-08

1. What Prisma relation names and fields did you choose?
2. What is unique across tenants (slug, id)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-07-09

1. What did the first migration introduce?
2. What did you intentionally leave out of v1?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-07-10

1. How will invites work (token, code, email) at a high level?
2. What is out of scope for the first cut?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-07-11

1. How do you enforce “only OWNER can X” in code?
2. What does Swagger document for org creation?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-07-12

1. What permission check secures org-scoped resources?
2. What React screens will consume these endpoints first?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 14 — Workflows + permissions + list APIs (2026-07-13 — 2026-07-19)

#### Mon 2026-07-13

1. How is core entity CRUD scoped to an org in queries?
2. What guard or service check prevents cross-org access?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-07-14

1. What pagination DTO fields did you validate?
2. Default page size — why cap it?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-07-15

1. How does Prisma prevent SQL injection compared to string-built SQL?
2. What sort fields are allowlisted?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-07-16

1. How does your invite/join token get validated?
2. What is the expiry story?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-07-17

1. What role change rules did you implement or defer?
2. What TODO is documented honestly?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-07-18

1. What requests are in your Postman collection for happy paths?
2. What status for cross-org access attempt?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-07-19

1. What integration test covers org + entity creation?
2. What did you scaffold for the React app (Vite)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 15 — React client (auth + main screens) (2026-07-20 — 2026-07-26)

#### Mon 2026-07-20

1. How does your fetch wrapper handle 401?
2. Where does base API URL come from (env)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-07-21

1. Where is the token stored — cookie vs memory vs localStorage — and one tradeoff?
2. What is the CSRF implication of cookies?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-07-22

1. How does org switching change API calls?
2. What state lives in React vs URL?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-07-23

1. What loading / empty / error UX did you implement?
2. What would a user see on network failure?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-07-24

1. What form validation mirrors server validation?
2. What CORS settings are required for credentials?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-07-25

1. What polish improved perceived quality without big design time?
2. What screenshot did you capture for README?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-07-26

1. What CORS bug did you hit and how did you fix it?
2. What is left before hardening week?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 16 — Hardening + README (2026-07-27 — 2026-08-02)

#### Mon 2026-07-27

1. What does `/health` check besides process up?
2. Would you ping DB in health — tradeoffs?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-07-28

1. What routes are rate-limited and why those?
2. What is a reasonable limit for auth routes?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-07-29

1. What origins are allowed in prod vs dev for CORS?
2. What about credentials + wildcard origins?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-07-30

1. What does your README promise for `docker compose up`?
2. What prerequisite versions are listed?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-07-31

1. What secrets exist in `.env.example` vs real `.env`?
2. What is redacted in logs?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-08-01

1. What failed when someone else followed your README?
2. What security guarantees do you _not_ claim?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-08-02

1. What blocks deployment next month?
2. What checklist item from portfolio doc is still open?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 17 — GitHub Actions (2026-08-03 — 2026-08-09)

#### Mon 2026-08-03

1. What jobs run on each PR in GitHub Actions?
2. Why `npm ci` vs `npm install` in CI?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-08-04

1. What Node version is pinned and where?
2. Why pin instead of `lts/`\* sometimes?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-08-05

1. How do you run Postgres for e2e in CI — service container or skip?
2. What is the failure mode if DB is missing?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-08-06

1. What branch protection rules do you want?
2. What is required status check name?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-08-07

1. What does the README badge prove?
2. What is _not_ proven by a green badge?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-08-08

1. What flaky test did you fix and root cause?
2. What doc did you add for “debugging CI”?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-08-09

1. Which host (Railway/Render/Fly) did you pick and why?
2. What env vars must exist in production?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 18 — Deploy API + DB (2026-08-10 — 2026-08-16)

#### Mon 2026-08-10

1. What managed Postgres did you use?
2. How is `DATABASE_URL` injected securely?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-08-11

1. What build/start commands does the platform run?
2. What Node version does prod use?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-08-12

1. When do migrations run relative to app start?
2. What happens if migration fails mid-deploy?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-08-13

1. What smoke test did you run on the public URL?
2. What is still HTTP-only that should be HTTPS?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-08-14

1. Where is the frontend hosted and how does it get API URL?
2. What env prefix does Vite/Next need?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-08-15

1. What CORS origin is configured for prod frontend?
2. What cookie settings break across domains?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-08-16

1. What is your one-paragraph rollback plan?
2. What prod bug did logs reveal?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 19 — Logging + request tracing (2026-08-17 — 2026-08-23)

#### Mon 2026-08-17

1. What fields are in every log line in prod?
2. What is redacted?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-08-18

1. How is request id propagated?
2. How do you find all logs for one request?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-08-19

1. What is your slow-request threshold and what do you log?
2. When would you add APM?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-08-20

1. What stack traces are visible in prod vs dev?
2. What is the security tradeoff?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-08-21

1. Where do platform logs live for your host?
2. What query do you run to find 5xx?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-08-22

1. Why Sentry (or why skip) for this project?
2. What secret did you rotate after a scare?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-08-23

1. What RPS or latency baseline did you measure on `/health`?
2. What feature is Project 2 vs polishing Project 1?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 20 — Project 2 or differentiator (2026-08-24 — 2026-08-30)

#### Mon 2026-08-24

1. Which differentiator did you choose and why?
2. What is the smallest vertical slice?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-08-25

1. What did the spike prove in one branch?
2. What failed fast in the spike?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-08-26

1. What signature verification or OAuth state param matters for your choice?
2. What attack are you preventing?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-08-27

1. How is the feature isolated (module/flag)?
2. What config is new in env?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-08-28

1. What happy-path test did you add?
2. What malicious or replay case did you consider?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-08-29

1. What is visible in UI or API docs for the feature?
2. What README section did you add?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-08-30

1. What edge case burned time?
2. What documentation task is queued for Month 6?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 21 — Docs + diagram + security audit (2026-08-31 — 2026-09-06)

#### Mon 2026-08-31

1. What does your architecture diagram communicate in 30 seconds?
2. What is intentionally out of scope?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-09-01

1. What troubleshooting entry saved you time?
2. What error message do new devs hit most?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-09-02

1. What is in your threat model for auth?
2. What about CSRF for cookie sessions?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-09-03

1. What vulnerability did `npm audit` surface?
2. What was your upgrade decision?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-09-04

1. What limitation are you honest about in README?
2. What would you fund next if you had a week?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-09-05

1. What is in your 2–3 min demo script?
2. What story does the demo _not_ tell?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-09-06

1. What friction did a peer hit following your README?
2. What three fixes did you prioritize?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 22 — Resume + profiles (2026-09-07 — 2026-09-13)

#### Mon 2026-09-07

1. What metric or scale claim can you defend on Project 1?
2. What is verifiable in the repo (tests, CI)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-09-08

1. What deployment + migration wording is on your resume?
2. What link proves the live demo?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-09-09

1. What differentiator bullet is true and specific?
2. What buzzword did you remove?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-09-10

1. What keywords align your LinkedIn with fullstack hiring?
2. What role title are you targeting?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-09-11

1. What do pinned repos descriptions emphasize?
2. What repo is _not_ pinned and why?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-09-12

1. What numbers on your resume are estimates vs measured?
2. What feedback did you get on clarity?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-09-13

1. What one-page portfolio site URL or section exists?
2. What mentor feedback changed your pitch?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 23 — System design + your stack (2026-09-14 — 2026-09-20)

#### Mon 2026-09-14

1. Draw auth: login → access → refresh → logout without looking at code.
2. Where is refresh stored and rotated?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-09-15

1. What entities can you draw from memory?
2. What index would you add under read-heavy load?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-09-16

1. What is stateless about your API servers?
2. Where would Redis fit first — cache or rate limit?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-09-17

1. When would you drop Prisma for raw SQL?
2. What is an example query you’d optimize?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-09-18

1. What mock interview question stumped you — refined answer now?
2. What diagram would you draw on a whiteboard first?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-09-19

1. What weak area did you drill — summary in 3 bullets?
2. What 20 facts about _your_ codebase are flashcard-worthy?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-09-20

1. What behavioral story will you tell in interviews?
2. What sleep/app schedule supports Week 24 applications?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

### Week 24 — Applications + iteration (2026-09-21 — 2026-09-27)

#### Mon 2026-09-21

1. How many applications/week is your target?
2. What tracker columns do you use?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Tue 2026-09-22

1. What company-specific line did you add to two applications?
2. What research took longer than expected?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Wed 2026-09-23

1. What follow-up template do you use?
2. What networking norm do you follow (if any)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Thu 2026-09-24

1. How do you timebox take-home assignments?
2. What do you do if spec is ambiguous?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Fri 2026-09-25

1. How do you handle ghosting emotionally and practically?
2. What one pitch change did you make after rejection?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sat 2026-09-26

1. What portfolio change came from real interview feedback?
2. What would you tell yourself on day 1 (Apr 13)?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

#### Sun 2026-09-27

1. What open-source issue did you pick (or why rest)?
2. What maintenance cadence will you keep for demos?

- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)

## Daily logging (30 seconds)

At end of each session, write one line:

`YYYY-MM-DD | 1h or 4h | done: … | tomorrow: …`

Keeps accountability without bureaucracy.

---

## When a day slips

- **Weekday:** Move that day’s smallest unit to **next** weekday; never steal from weekend blocks until Fri.
- **Weekend:** Complete **Sat core** before **Sun** polish; skip optional bullets first.
- **Whole week lost:** Re-run the same week number next week—do not advance milestone until the exit criteria in [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md) are roughly met.
