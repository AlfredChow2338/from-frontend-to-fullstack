# Fullstack developer roadmap (NestJS) — 6 months

This folder holds a structured learning plan and portfolio strategy for moving from **frontend (TypeScript/JavaScript)** toward **fullstack roles** with a **NestJS**-centric stack, on roughly a **six-month** horizon before active applications.

## Who this is for

- Strong TS/JS and frontend experience (this plan assumes ~senior-level frontend literacy).
- Goal: credible **API ownership**, **persistence**, **auth**, **testing**, and **deployment**—not only UI.

## How to use this folder

1. Read **[01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md)** for the month-by-month syllabus and milestones.
2. Follow **[05-daily-track-24-weeks.md](05-daily-track-24-weeks.md)** for **day-by-day** checklists (1h weekdays + 4h weekends = 13h/week), calendar starting **Mon 13 Apr 2026**, **daily written assignments** (day = done only with tasks + assignment), and **[NestJS Zero to Hero](https://www.udemy.com/course/nestjs-zero-to-hero/)** (Ariel Weinberger) integrated **Weeks 2–9** with a **two-repo** rule (Udemy + `portfolio-api`).
3. Track depth with **[02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md)** (“done means…” for each topic).
4. Shape shipping work using **[03-portfolio-projects.md](03-portfolio-projects.md)** (project specs and README signals).
5. Keep momentum with **[04-weekly-rhythm-and-metrics.md](04-weekly-rhythm-and-metrics.md)** (weekly cadence and measurable outputs).

## Stack anchor (stay consistent)

| Layer | Default choice |
|--------|----------------|
| API framework | NestJS |
| Database | PostgreSQL |
| ORM | Prisma (or TypeORM—pick one) |
| Auth | JWT access + refresh; hashed passwords |
| Tests | Jest + Supertest; integration tests for critical paths |
| Local infra | Docker Compose |
| Deploy | One platform (e.g. Railway, Render, Fly.io) learned well |

## Documents

| File | Contents |
|------|----------|
| [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md) | Phased syllabus, weekly focus, milestones |
| [05-daily-track-24-weeks.md](05-daily-track-24-weeks.md) | Calendar from 13 Apr 2026, daily tasks, **written assignments** per day, Udemy map (13h/week) |
| [assignments/](assignments/) | One `{YYYY-MM-DD}.md` per day with the two questions (`--write-files` in [scripts/generate-daily-assignments.js](scripts/generate-daily-assignments.js)) |
| [02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md) | Topic checklist with completion criteria |
| [03-portfolio-projects.md](03-portfolio-projects.md) | Two-project portfolio strategy and README template |
| [04-weekly-rhythm-and-metrics.md](04-weekly-rhythm-and-metrics.md) | Time split, weekly rhythm, metrics, interview hooks |

## Principle

Ship **two strong, end-to-end projects** rather than many shallow demos. Bias time toward the backend, tests, and operations; keep the UI clean but proportionate.
