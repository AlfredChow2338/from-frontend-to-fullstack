# Weekly rhythm and metrics

Consistency beats intensity. This section turns the roadmap into **repeatable weekly habits** and **measurable outputs** so you can course-correct before month-end.

For **day-level** tasks (1h on weekdays, 4h on Sat–Sun), use **[05-daily-track-24-weeks.md](05-daily-track-24-weeks.md)** (calendar from **13 Apr 2026**, plus **written assignments** per day); use this file for ratios and weekly metrics.

---

## Weekly time split (default)

| Activity | Share | Notes |
|----------|--------|--------|
| Building features / debugging | 50–60% | Must touch Nest, DB, or integration tests |
| Targeted learning | 25–30% | Docs, one chapter, official Nest/Prisma guides—**stop** when it replaces shipping |
| Tests, CI, docs, deploy | 15–20% | Non-negotiable near Month 4+ |

If a week is **only** tutorials, treat it as a failed week for portfolio goals.

---

## A repeatable week (10–15 hours example; ~13h if using 1h×5 + 4h×2)

| When | Block | Outcome |
|------|--------|---------|
| Start | 15 min | Write last week’s retro (3 bullets: shipped, learned, next) |
| Deep work 1 | 2–3 hrs | Feature or integration test toward current milestone |
| Deep work 2 | 2–3 hrs | Same thread—finish the slice, don’t start three |
| Review | 1 hr | Read one official doc page tied to yesterday’s bug |
| Deep work 3 | 2–3 hrs | Deploy, fix env, or CI—ops counts as progress |
| Buffer | 1 hr | README, diagram, or refactor for clarity |

**Rule:** One **vertical slice** per week (e.g. “invite accepted → member added → visible in UI”) beats many horizontal half-features.

---

## Weekly metrics (track in a notebook or spreadsheet)

Minimum:

| Metric | Target |
|--------|--------|
| Ship log | ≥1 merged meaningful PR or equivalent commit set |
| Tests | Net new or strengthened tests on critical path |
| Demo | Can you show **something working** in 5 minutes? Yes/No |
| Daily assignments | Every calendar day in **[05-daily-track-24-weeks.md](05-daily-track-24-weeks.md)**: tasks done **and** **Assignment done** for that date (written answers) |

Stretch:

| Metric | Why |
|--------|-----|
| Incidents fixed | Production or staging bugs you diagnosed from logs |
| Docs updated | README or ADR touched when behavior changed |

---

## Monthly review (last weekend of each month)

Answer in writing:

1. **What shipped** that a reviewer could see (URL, screenshot, or API behavior)?  
2. **What did you learn** that you didn’t know at the start of the month?  
3. **What blocked you**—skill gap, tooling, or scope creep?  
4. **Next month’s one theme** (e.g. “deploy + CI” or “RBAC completion”)  

Adjust [01-learning-roadmap-6-months.md](01-learning-roadmap-6-months.md) dates if needed—plans are not scripture.

---

## Interview prep hooks (ongoing, low intensity)

Spend **30–60 minutes/week** after Month 3:

- **Explain aloud** your auth and data model while drawing on paper.  
- **One LeetCode-free** system question: “How would you add audit logs?” or “How would you paginate this query?”  
- **Read your own README** as if you were hostile—fix gaps.  

Bump prep to **daily** in Month 6 when interviews start.

---

## Anti-patterns to catch early

| Signal | Fix |
|--------|-----|
| No deploy by end of Month 5 | Cut scope; ship API + Swagger first |
| Tests always “next week” | Write one integration test before the next feature |
| Perfect UI, vague API | Cap UI time; backend and README carry hiring signal |
| New stack piece every week | Redis, queues, and sockets **after** Postgres + auth + deploy are boring |

---

## Definition of a “green” week

You hit **green** if all are true:

- [ ] At least one concrete artifact moved toward **Project 1 or 2** (code, test, or deploy)  
- [ ] You can **demo** progress without apologizing for “still WIP” everywhere  
- [ ] [02-nestjs-stack-checklist.md](02-nestjs-stack-checklist.md) gained **one** new honest checkmark  
- [ ] Every day you claimed “worked” has **Assignment done** in [05-daily-track-24-weeks.md](05-daily-track-24-weeks.md) for that calendar date (written answers)  

When weeks are red three times in a row, shrink scope and shorten milestones—velocity matters more than ambition on the calendar.
