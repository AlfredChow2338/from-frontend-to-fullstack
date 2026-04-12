---
description: Review fullstack roadmap assignment answers for a day, add explanations and file comments, mark done if acceptable
---

# Check assignment (fullstack roadmap)

Use when the workspace root is **`from-frontend-to-fullstack`** (paths below are relative to this folder).

## Paths

- Daily track: `05-daily-track-24-weeks.md` (weekly **`| Day | Date | Time | Done | Task |`** tables: use the **Date** column to find rows for `{date}` and set **Done** to `[x]` when acceptable; plus **Daily assignments by calendar day** below Week 24)
- Answer file: `assignments/{YYYY-MM-DD}.md`
- Mark script: `node scripts/mark-assignment-done.js {YYYY-MM-DD}`

## What you should do

1. **Resolve the date**
   - If the user gave a date (e.g. `2026-04-13`), use it.
   - Else infer from an `@`-mentioned `assignments/YYYY-MM-DD.md` path, or ask for `YYYY-MM-DD`.

2. **Read answers**
   - Open `assignments/{date}.md` and read the answers under `## Answers` or `## My answers` (whichever exists).
   - If there is no answer section or the file is missing, ask for the path or pasted answers.

3. **Evaluate (good-faith bar)**
   - Both questions should show **engagement** and **mostly correct** understanding. Brief answers are fine.
   - If answers are empty, copy-pasted without thought, or **materially wrong**, say what to fix and **do not** mark the assignment done.

4. **Write feedback into the assignment file (required every time)**
   - In `assignments/{date}.md`, ensure there is a subsection **`### Reviewer comments`** directly **under** `## Answers` / `## My answers` and **above** the `---` that precedes the assignment checkbox.
   - If `### Reviewer comments` already exists, **replace** its content with the new review (keep the heading).
   - Use a short bullet per question (**Q1**, **Q2**): what was strong, what to fix or deepen, optional links to official docs. For failed reviews, be specific about what must change before checking **Assignment done**.
   - This step is **not optional**: the learner should see persistent notes in the repo, not only in chat.

5. **Teach (in chat)**
   - Add a short **Explanations for this day** (or similar) in your reply: theme of the week, jargon, 1–2 examples or mental models. The file’s `### Reviewer comments` can be tighter; the chat section can go a bit broader.

6. **If acceptable — update status (all required)**

   Do **6a**, then **6b**, every time the review is acceptable. Do not skip the weekly table.

   **6a — Script (written assignment + daily section)**

   - Run:

     ```bash
     node scripts/mark-assignment-done.js YYYY-MM-DD
     ```

     (from this repo root, or `cd from-frontend-to-fullstack && …` if the shell cwd is higher.)

   - Confirm `assignments/{date}.md` and the matching **`#### … {date}`** block under **Daily assignments by calendar day** show `- [x] **Assignment done**`.

   **6b — Weekly task table (`Done`, matched by `Date`) — same file, Month sections**

   - Open `05-daily-track-24-weeks.md` and find **`### Week N`** whose date range includes `{date}` (use **Week → date range (2026)** or Monday **`2026-04-13`** = Week 1).
   - In that week’s table, columns are: **Day \| Date \| Time \| Done \| Task**. Match rows where the **Date** cell is exactly **`{date}`** (same `YYYY-MM-DD` string as the assignment file).
   - On **every** matching row, change the **Done** cell from **`[ ]`** to **`[x]`** (preserve spacing like `[ ]` → `[x]` to match the file). Do **not** change rows with other dates.
   - Weekdays usually have **one** row per `{date}`; **Sat**/**Sun** can have **up to four** rows sharing the same **Date**—update **Done** on **all** of them unless the learner asked to tick only some (see caveat).
   - If every matching row is already **`[x]`**, leave the table as-is.
   - **Weekend caveat:** If the learner says they did **not** finish all four slots, only set **`[x]`** on the rows they name; otherwise set **`[x]`** on all rows whose **Date** equals `{date}` and remind them they can uncheck any slot still open.
   - Briefly confirm in chat how many table rows were updated (e.g. “1 row” or “4 rows for 2026-04-18”).

7. **If not acceptable**
   - Do **not** run the script. Do **not** change **`[ ]` → `[x]`** in the weekly table on rows whose **Date** equals `{date}`. Still complete **step 4** so the file records what to fix. List concrete gaps in chat; the learner can revise and run this command again.

## Regenerating per-day files

```bash
node scripts/generate-daily-assignments.js --write-files
```

Warn the user that this overwrites existing `assignments/*.md` if they have edits there.
