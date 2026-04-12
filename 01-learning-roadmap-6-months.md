# Learning roadmap — 6 months

Assumes **10–15 hours/week** of focused study and building. A concrete schedule (**1 hour Mon–Fri + 4 hours Sat–Sun = 13 hours/week**) maps to **[05-daily-track-24-weeks.md](05-daily-track-24-weeks.md)**—use that file for **daily** checklists, calendar starting **13 Apr 2026 (Monday)**, and **written assignments** (a calendar day counts complete only when tasks **and** that day’s assignment are done). Adjust proportionally if you have more or less time; protect **one shipped milestone per week** as the minimum bar.

## Month 1 — Node + HTTP + NestJS skeleton

**Themes:** How Node differs from the browser, request/response lifecycle, NestJS project structure, validation, one documented API surface.

| Week | Focus                                                                                          | Milestone (done when…)                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1    | Node fundamentals: modules, `async`/`await`, `process.env`, npm/pnpm scripts, reading errors   | You can explain the event loop at a “interview one-liner” level and run a small script with typed env validation |
| 2    | HTTP/REST: verbs, status codes, idempotency, pagination/query patterns, error shape            | You can sketch REST for a resource (e.g. `GET/POST/PATCH/DELETE`) and justify status codes                       |
| 3    | NestJS: CLI, modules, controllers, providers, DTOs, `ValidationPipe`, basic exception handling | CRUD endpoint works with validated body/query params and consistent JSON errors                                  |
| 4    | Swagger (`@nestjs/swagger`), one module fully documented; Jest unit test on a service          | Swagger UI lists your routes; at least one service has a meaningful unit test                                    |

**Month 1 exit:** A small **notes/tags** (or similar) CRUD API with Swagger, validation, and tests on core logic—not production-perfect, but coherent.

## Month 2 — NestJS depth + testing habits

**Themes:** Guards, interceptors, config, structured layering, Supertest integration tests.

| Week | Focus                                                                                      | Milestone                                                     |
| ---- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| 5    | `ConfigModule`, `.env` vs deployment secrets; global exception filter; logging approach    | App reads config safely; errors return a stable shape         |
| 6    | Auth basics: `@nestjs/passport` or custom guard pattern; hashing passwords (bcrypt/argon2) | Register + login endpoints; password never logged or returned |
| 7    | Guards (e.g. JWT guard), `@CurrentUser()` decorator pattern; role enum (even if one role)  | Protected route returns 401/403 correctly                     |
| 8    | Integration tests with Supertest; test DB or mocked repo strategy decided                  | Happy path + one failure path tested for auth + one CRUD flow |

**Month 2 exit:** Same app or a fork: **auth’d API** with integration tests on critical paths. You can explain middleware vs guards vs interceptors in one minute.

## Month 3 — PostgreSQL + Prisma + real modeling

**Themes:** Schema design, migrations, relations, transactions, seed data.

| Week | Focus                                                                       | Milestone                                                                   |
| ---- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 9    | Docker Compose for Postgres; Prisma init; first migration                   | DB runs with one command; schema in version control                         |
| 10   | Relations (1–N, N–M), indexes where obvious; Prisma Client in Nest services | Two related entities with correct cascades or explicit deletes              |
| 11   | Transactions for multi-step operations; seed script for dev/demo            | One flow uses `$transaction`; `pnpm seed` (or npm) populates realistic data |
| 12   | Refactor Month 1–2 “in-memory” logic to Prisma; keep tests green            | CRUD + auth backed by Postgres locally                                      |

**Month 3 exit:** **Project 1** data layer is real: migrations, relations, seed, and tests still passing against DB (or dedicated test DB).

## Month 4 — Project 1 (portfolio-grade API + thin UI)

**Themes:** RBAC or org-scoped data, invites or membership (if in scope), API polish, React client consuming your API.

| Week | Focus                                                                     | Milestone                                     |
| ---- | ------------------------------------------------------------------------- | --------------------------------------------- |
| 13   | Domain modeling for Project 1 (orgs/members/roles + core entity)          | ERD or diagram in repo; Prisma schema matches |
| 14   | Implement core workflows + permissions; pagination/filtering on main list | Main user journeys work end-to-end locally    |
| 15   | React app: auth flow, API client, error states; minimal but solid UX      | Login + primary screens against local API     |
| 16   | Hardening: rate limit basics, CORS, health check endpoint; README draft   | README explains setup; `/health` returns 200  |

**Month 4 exit:** **Project 1 MVP** feature-complete for portfolio narrative; deploy optional but desirable before Month 5.

## Month 5 — Production shape + Project 2 start (or deep dive)

**Themes:** CI, deployment, observability basics, optional differentiator (Stripe, OAuth, queue, or WebSockets).

| Week | Focus                                                                                                                 | Milestone                                                        |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 17   | GitHub Actions: lint + test on PR; branch protection idea                                                             | Green CI on main feature branch                                  |
| 18   | Deploy API + DB (managed Postgres); env vars; migrations on deploy                                                    | Public API URL works; no secrets in repo                         |
| 19   | Structured logging; request IDs if feasible; fix obvious production gaps                                              | You can find a failed request in logs                            |
| 20   | Start **Project 2** OR add one differentiator to Project 1 (see [03-portfolio-projects.md](03-portfolio-projects.md)) | Clear second “chapter” in your story (new repo or major feature) |

**Month 5 exit:** At least one **live demo** with stable env; second project or major feature underway.

## Month 6 — Polish, narrative, applications

**Themes:** Documentation, security self-review, interview stories, job search velocity.

| Week | Focus                                                                                               | Milestone                                                              |
| ---- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 21   | README + architecture diagram + env table + security section                                        | A stranger can run locally in under 30 minutes with your doc           |
| 22   | Resume bullets tied to outcomes (reliability, auth model, tests); LinkedIn/GitHub profile alignment | Each project has 2–3 measurable bullets                                |
| 23   | System-design prep: auth, DB scaling basics, caching tradeoffs, your own tradeoffs                  | You can whiteboard your stack in 10 minutes                            |
| 24   | Applications + interviews; iterate on feedback                                                      | N applications/week per your bandwidth; adjust portfolio from feedback |

**Month 6 exit:** Confident walkthrough of **two projects**, clear **fullstack** positioning, and active applications.

## Time budget (suggested)

- **50–60%** building and debugging real features
- **25–30%** reading docs / targeted courses (avoid passive binge). If you use **[NestJS Zero to Hero](https://www.udemy.com/course/nestjs-zero-to-hero/)** (Udemy), follow the **week-by-week map** in [05-daily-track-24-weeks.md](05-daily-track-24-weeks.md) so video stays bounded (~9h total, mostly weekends).
- **15–20%** tests, CI, deployment, documentation

## If you fall behind

- Drop optional topics (Redis, BullMQ, WebSockets) until Project 1 is deployed and tested.
- Prefer **smaller scope with tests + deploy** over more features with no deploy.

## If you move faster

- Add one differentiator early (e.g. Stripe customer portal, or GitHub OAuth).
- Contribute a small improvement to an open-source Nest example (issue + PR) as social proof—optional.
