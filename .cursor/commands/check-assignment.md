# Check assignment (fullstack roadmap)

---

## description: Review fullstack roadmap assignment answers for a day, add explanations and file comments, mark done if acceptable

Use this when the learner wants feedback on **today’s two questions** and optional **mark-as-done** in the daily track.

## Paths (workspace root)

- Daily track: `05-daily-track-24-weeks.md` (section **Daily assignments by calendar day**)
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

6. **If acceptable — update status**
   - Run:

     ```bash
     cd node scripts/mark-assignment-done.js YYYY-MM-DD
     ```

   - Confirm both `assignments/{date}.md` and the matching day in `05-daily-track-24-weeks.md` show `- [x] **Assignment done**`.

7. **If not acceptable**
   - Do **not** run the script. Still complete **step 4** so the file records what to fix. List concrete gaps in chat; the learner can revise and run this command again.

## Regenerating per-day files

If assignment markdown files were generated before `## My answers` existed, regenerate (overwrites files):

```bash
cd node scripts/generate-daily-assignments.js --write-files
```

Warn the user that this overwrites existing `assignments/*.md` if they have edits there.
