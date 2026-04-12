/**
 * Regenerate the **Daily assignments by calendar day** appendix in `05-daily-track-24-weeks.md`
 * after editing question banks: run from repo root:
 *   node scripts/generate-daily-assignments.js --md > /tmp/a.md
 * then merge the output where the `### Week 1 — … (2026-04-13` block starts.
 *
 * Also:
 *   `--calendar` — prints the week → Mon/Sun markdown table
 *   `--write-files` — writes `assignments/{YYYY-MM-DD}.md` for each day (default dir: ../assignments)
 */
const fs = require('fs');
const path = require('path');
const start = new Date(Date.UTC(2026, 3, 13)); // 2026-04-13 Monday (month 0-indexed: 3 = April)

function addDays(d, n) {
  const x = new Date(d);
  x.setUTCDate(x.getUTCDate() + n);
  return x;
}

function iso(d) {
  return d.toISOString().slice(0, 10);
}

// Week 0 = first week. day 0 = Mon ... 6 = Sun
function dateFor(weekIdx, dayIdx) {
  return iso(addDays(start, weekIdx * 7 + dayIdx));
}

// Assignment bank by week index (0-23) — 7 strings each (Mon-Sun), HTML escaped not needed for md
const banks = [
  // W1 Node
  [
    ['What is the Node.js LTS policy in one sentence, and which `node -v` output proves your install?', 'Why does `npm init -y` create a `package.json`, and what two fields identify the project?'],
    ['What is the difference between compiling TS with `tsc` and running with `ts-node` / `tsx`?', 'What does `"strict": true` in `tsconfig.json` change for you as a developer?'],
    ['Why commit `.env.example` but not `.env`? What could go wrong if `.env` is pushed to Git?', 'Name one way to read `process.env.MY_VAR` in a typed way.'],
    ['What happens to an unhandled `Promise` rejection in Node? How does `try/catch` around `await` help?', 'In one sentence: what runs on the microtask queue vs the next tick?'],
    ['What is the purpose of the `scripts` field in `package.json`? Give an example `npm run` you added.', 'What is the difference between `dependencies` and `devDependencies`?'],
    ['List two things that are *not* the same between browser JS and Node (APIs or globals).', 'In your own words: what does “single-threaded event loop” mean for CPU-heavy work?'],
    ['Pick one line from a stack trace you saw: what file/function did it point to, and what did you change?', 'What rule did ESLint enforce that you fixed, and why might that rule exist?'],
  ],
  // W2 HTTP + Udemy intro
  [
    ['When do you use POST vs PATCH for a “Note” resource?', 'Which HTTP status would you return for validation errors vs “not found”?'],
    ['Give one example each for 201, 204, 409 in a REST API.', 'What does `422 Unprocessable Entity` imply about the request body?'],
    ['Which HTTP methods are idempotent? Why does that matter for retries?', 'When is PUT *not* a good fit compared to PATCH?'],
    ['Sketch your standard JSON error shape and when you’d include `details`.', 'How do you avoid leaking internal errors to clients in production?'],
    ['Compare offset vs cursor pagination; when is cursor safer?', 'What query params would you use for sorting a list safely?'],
    ['For your `Note` resource: list routes and who may call them (public vs auth).', 'Draw the request body for `POST /notes` — required vs optional fields.'],
    ['What did you create in `udemy-zero-to-hero` today, and how does it differ from `portfolio-api`?', 'What is `nest new` doing on disk (folders you care about)?'],
  ],
  // W3 Nest CRUD
  [
    ['What is the responsibility of a Nest module vs a controller vs a service?', 'What is a DTO and why validate at the boundary?'],
    ['How does Nest resolve a provider (service) inside a controller?', 'What is `@Module({ imports, controllers, providers })` doing?'],
    ['What decorators from `class-validator` did you use, and what error does Nest return on failure?', 'What does `ValidationPipe` do before your handler runs?'],
    ['How do you return 404 for unknown id — which exception type?', 'Why return a response DTO instead of the raw entity?'],
    ['PATCH vs PUT in your API: which did you implement and why?', 'How do you avoid overwriting fields the client omitted in PATCH?'],
    ['Where did you put business logic — controller or service — and why?', 'How do you test a route manually with curl or REST Client?'],
    ['What is “thin controller, fat service” in one example from your code?', 'What edge cases did you handle for list pagination?'],
  ],
  // W4 Swagger + tests
  [
    ['What does `@ApiTags` / `@ApiOperation` buy you in Swagger UI?', 'How do you document auth (Bearer) in Swagger for protected routes?'],
    ['What is the difference between `@ApiResponse` and your actual runtime behavior?', 'Why add example bodies to POST in Swagger?'],
    ['How does Swagger help a frontend developer integrate?', 'What is one pitfall of outdated Swagger decorators?'],
    ['What is the difference between unit tests and e2e tests in Nest?', 'What does `describe` / `it` map to in your mental model?'],
    ['What pure logic did you unit test, and what did you mock?', 'What would cause your unit test to be flaky if it hit the real DB?'],
    ['What coverage do you *not* need for a portfolio API, and why?', 'Name one assertion that proves a business rule.'],
    ['What duplicate / conflict behavior did you implement or defer (409)?', 'What will you tackle first in Month 2 based on your retro?'],
  ],
  // W5 Config + logging
  [
    ['How does `ConfigModule` load `.env`, and what runs in production instead?', 'Why validate env at bootstrap?'],
    ['What does a global exception filter change about HTTP responses?', 'When would you use `HttpException` vs a custom domain error?'],
    ['What must never appear in logs (PII examples)?', 'What is structured logging vs `console.log`?'],
    ['Name one env var your app refuses to start without.', 'How do you document env vars for another developer?'],
    ['What is `x-request-id` / correlation id used for?', 'What is the order: middleware → guard → interceptor → handler?'],
    ['How does Nest `Logger` differ from `console.log` in a service?', 'What log level would you use for “incoming request” vs “unexpected error”?'],
    ['What did you read about Guards in the docs, and how does it connect to Week 7?', 'What is one config value you moved out of magic strings?'],
  ],
  // W6 Auth + TypeORM (Udemy)
  [
    ['Why hash passwords with bcrypt/argon2 instead of SHA-256?', 'What does “never return the password” mean in API responses?'],
    ['What is a TypeORM entity vs repository in your Udemy project?', 'What does `@Column({ unique: true })` enforce at DB level?'],
    ['What validation rules apply to `AuthCredentialsDto`?', 'What status code for duplicate email on register?'],
    ['What claims go in a JWT access token payload (no secrets)?', 'Where is the signing secret loaded from?'],
    ['401 vs 403: which applies to “wrong password”?', 'What threat is mitigated by short-lived access tokens?'],
    ['What is a migration in TypeORM/Postgres terms?', 'What did Docker Compose provide for Postgres locally?'],
    ['How will you migrate from TypeORM (Udemy) to Prisma (`portfolio-api`) without mixing ORMs?', 'What is your refresh-token story (implemented or deferred)?'],
  ],
  // W7 JWT guards + roles
  [
    ['How does Passport JWT strategy populate `req.user`?', 'What happens if the token is expired — where is that checked?'],
    ['How does `@CurrentUser()` get its value?', 'Why use a custom parameter decorator?'],
    ['What is `@Public()` for, if most routes are protected?', 'How does `JwtAuthGuard` decide 401?'],
    ['What is `RolesGuard` checking, and when is 403 returned?', 'How do you test “user A cannot touch user B’s resource”?'],
    ['How do you attach Bearer token in Swagger “Authorize”?', 'What is your refresh endpoint contract (or why deferred)?'],
    ['Malformed `Authorization` header: what status and why?', 'What did you document for cookie vs header token storage?'],
    ['In one minute: middleware vs guard vs interceptor.', 'What will your first Supertest test assert?'],
  ],
  // W8 Testing
  [
    ['How do you bootstrap the Nest app inside an e2e test?', 'Why use Supertest instead of raw `fetch` in tests?'],
    ['Write the happy path steps for register → login → protected route in test language.', 'What DB strategy did you pick for e2e (mock, sqlite, docker) and why?'],
    ['What assertion proves 401 when the token is missing?', 'How do you reset DB state between tests?'],
    ['What CRUD sequence did you cover in e2e?', 'What flake did you fix (timing, shared state)?'],
    ['409/404: which error path did you test and how?', 'What is in `test:e2e` script vs `test`?'],
    ['What remains from Udemy testing lectures to apply to `portfolio-api`?', 'What would you add to CI first: lint, unit, or e2e?'],
    ['Explain middleware vs guard vs interceptor from your own code paths.', 'What Prisma topic will you tackle on Week 9 Mon?'],
  ],
  // W9 Prisma init
  [
    ['What does `docker-compose.yml` provide for local Postgres?', 'What is `DATABASE_URL` format for Prisma?'],
    ['What files does `prisma init` create?', 'Why not use `db pull` for a greenfield schema?'],
    ['How does Prisma model a relation vs TypeORM entity relations?', 'What is a named migration and why commit it?'],
    ['How does `PrismaService` connect/disconnect on Nest lifecycle?', 'Where should `PrismaClient` be instantiated once?'],
    ['How do you replace in-memory user creation with `prisma.user.create`?', 'What transaction boundary would you use for user+profile creation?'],
    ['How do you run migrations against a fresh clone?', 'What does `prisma studio` help you verify?'],
    ['What broke in integration tests when DB became real, and how did you fix it?', 'Screenshot or describe your schema after today.'],
  ],
  // W10 Relations + indexes
  [
    ['Model 1–N: which side holds the foreign key in Prisma?', 'What is `include` vs `select` for list endpoints?'],
    ['Why index foreign keys and common filters?', 'What is an N+1 query and how does Prisma amplify or avoid it?'],
    ['How is an implicit many-to-many represented in Prisma schema?', 'When would you use an explicit join model instead?'],
    ['Give an example where `select` reduces payload size.', 'What is over-fetching in list APIs?'],
    ['What `onDelete` behavior did you choose and why?', 'What breaks if you cascade-delete the wrong direction?'],
    ['What did `EXPLAIN` (or reasoning) show about a slow query?', 'How did you refactor repositories/services for clarity?'],
    ['Paste or describe your ERD: entities and cardinalities.', 'What relation test failed first, and what did you learn?'],
  ],
  // W11 Transactions + seed
  [
    ['When must you use `prisma.$transaction`?', 'What happens if step 2 throws after step 1 succeeded without a transaction?'],
    ['How do you make seed idempotent (upsert vs wipe)?', 'Why never put production secrets in seed scripts?'],
    ['What demo users/data does your seed create?', 'How do you run seed from package.json?'],
    ['What is the Prisma seed hook in package.json for?', 'What env does seed use — dev only?'],
    ['What credentials are documented for local demo only?', 'What would you change before a public demo?'],
    ['What integration test covers your transactional flow?', 'Name one Prisma transaction interview talking point.'],
    ['Mid-month retro: what is the riskiest part of your data model now?', 'What failing test is blocking you?'],
  ],
  // W12 Refactor + green tests
  [
    ['What in-memory code did you delete today?', 'What is the single source of truth for persistence now?'],
    ['What race condition appeared in e2e and how was it fixed?', 'Serial vs parallel tests: what did you choose?'],
    ['How is `DATABASE_URL_TEST` different from dev?', 'What is the reset strategy between tests?'],
    ['What is your production migration command (`migrate deploy`)?', 'Where does it run in CI/CD later?'],
    ['How did you check for N+1 on a list endpoint?', 'What `include` change fixed it?'],
    ['What makes your test suite deterministic enough for CI?', 'What did you name Project 1 repo and why?'],
    ['List up to 5 technical-debt items honestly.', 'What is the first Project 1 user story you will implement in Week 13?'],
  ],
  // W13 Domain modeling
  [
    ['What user stories capture org + membership + core workflow?', 'Who are the actors (roles)?'],
    ['Draw or list entities: Organization, Member, Role, core entity — relations.', 'What constraints are DB-enforced vs app-enforced?'],
    ['What Prisma relation names and fields did you choose?', 'What is unique across tenants (slug, id)?'],
    ['What did the first migration introduce?', 'What did you intentionally leave out of v1?'],
    ['How will invites work (token, code, email) at a high level?', 'What is out of scope for the first cut?'],
    ['How do you enforce “only OWNER can X” in code?', 'What does Swagger document for org creation?'],
    ['What permission check secures org-scoped resources?', 'What React screens will consume these endpoints first?'],
  ],
  // W14 Workflows
  [
    ['How is core entity CRUD scoped to an org in queries?', 'What guard or service check prevents cross-org access?'],
    ['What pagination DTO fields did you validate?', 'Default page size — why cap it?'],
    ['How does Prisma prevent SQL injection compared to string-built SQL?', 'What sort fields are allowlisted?'],
    ['How does your invite/join token get validated?', 'What is the expiry story?'],
    ['What role change rules did you implement or defer?', 'What TODO is documented honestly?'],
    ['What requests are in your Postman collection for happy paths?', 'What status for cross-org access attempt?'],
    ['What integration test covers org + entity creation?', 'What did you scaffold for the React app (Vite)?'],
  ],
  // W15 React client
  [
    ['How does your fetch wrapper handle 401?', 'Where does base API URL come from (env)?'],
    ['Where is the token stored — cookie vs memory vs localStorage — and one tradeoff?', 'What is the CSRF implication of cookies?'],
    ['How does org switching change API calls?', 'What state lives in React vs URL?'],
    ['What loading / empty / error UX did you implement?', 'What would a user see on network failure?'],
    ['What form validation mirrors server validation?', 'What CORS settings are required for credentials?'],
    ['What polish improved perceived quality without big design time?', 'What screenshot did you capture for README?'],
    ['What CORS bug did you hit and how did you fix it?', 'What is left before hardening week?'],
  ],
  // W16 Hardening
  [
    ['What does `/health` check besides process up?', 'Would you ping DB in health — tradeoffs?'],
    ['What routes are rate-limited and why those?', 'What is a reasonable limit for auth routes?'],
    ['What origins are allowed in prod vs dev for CORS?', 'What about credentials + wildcard origins?'],
    ['What does your README promise for `docker compose up`?', 'What prerequisite versions are listed?'],
    ['What secrets exist in `.env.example` vs real `.env`?', 'What is redacted in logs?'],
    ['What failed when someone else followed your README?', 'What security guarantees do you *not* claim?'],
    ['What blocks deployment next month?', 'What checklist item from portfolio doc is still open?'],
  ],
  // W17 CI
  [
    ['What jobs run on each PR in GitHub Actions?', 'Why `npm ci` vs `npm install` in CI?'],
    ['What Node version is pinned and where?', 'Why pin instead of `lts/*` sometimes?'],
    ['How do you run Postgres for e2e in CI — service container or skip?', 'What is the failure mode if DB is missing?'],
    ['What branch protection rules do you want?', 'What is required status check name?'],
    ['What does the README badge prove?', 'What is *not* proven by a green badge?'],
    ['What flaky test did you fix and root cause?', 'What doc did you add for “debugging CI”?'],
    ['Which host (Railway/Render/Fly) did you pick and why?', 'What env vars must exist in production?'],
  ],
  // W18 Deploy
  [
    ['What managed Postgres did you use?', 'How is `DATABASE_URL` injected securely?'],
    ['What build/start commands does the platform run?', 'What Node version does prod use?'],
    ['When do migrations run relative to app start?', 'What happens if migration fails mid-deploy?'],
    ['What smoke test did you run on the public URL?', 'What is still HTTP-only that should be HTTPS?'],
    ['Where is the frontend hosted and how does it get API URL?', 'What env prefix does Vite/Next need?'],
    ['What CORS origin is configured for prod frontend?', 'What cookie settings break across domains?'],
    ['What is your one-paragraph rollback plan?', 'What prod bug did logs reveal?'],
  ],
  // W19 Observability
  [
    ['What fields are in every log line in prod?', 'What is redacted?'],
    ['How is request id propagated?', 'How do you find all logs for one request?'],
    ['What is your slow-request threshold and what do you log?', 'When would you add APM?'],
    ['What stack traces are visible in prod vs dev?', 'What is the security tradeoff?'],
    ['Where do platform logs live for your host?', 'What query do you run to find 5xx?'],
    ['Why Sentry (or why skip) for this project?', 'What secret did you rotate after a scare?'],
    ['What RPS or latency baseline did you measure on `/health`?', 'What feature is Project 2 vs polishing Project 1?'],
  ],
  // W20 Project 2
  [
    ['Which differentiator did you choose and why?', 'What is the smallest vertical slice?'],
    ['What did the spike prove in one branch?', 'What failed fast in the spike?'],
    ['What signature verification or OAuth state param matters for your choice?', 'What attack are you preventing?'],
    ['How is the feature isolated (module/flag)?', 'What config is new in env?'],
    ['What happy-path test did you add?', 'What malicious or replay case did you consider?'],
    ['What is visible in UI or API docs for the feature?', 'What README section did you add?'],
    ['What edge case burned time?', 'What documentation task is queued for Month 6?'],
  ],
  // W21 Docs + security
  [
    ['What does your architecture diagram communicate in 30 seconds?', 'What is intentionally out of scope?'],
    ['What troubleshooting entry saved you time?', 'What error message do new devs hit most?'],
    ['What is in your threat model for auth?', 'What about CSRF for cookie sessions?'],
    ['What vulnerability did `npm audit` surface?', 'What was your upgrade decision?'],
    ['What limitation are you honest about in README?', 'What would you fund next if you had a week?'],
    ['What is in your 2–3 min demo script?', 'What story does the demo *not* tell?'],
    ['What friction did a peer hit following your README?', 'What three fixes did you prioritize?'],
  ],
  // W22 Resume
  [
    ['What metric or scale claim can you defend on Project 1?', 'What is verifiable in the repo (tests, CI)?'],
    ['What deployment + migration wording is on your resume?', 'What link proves the live demo?'],
    ['What differentiator bullet is true and specific?', 'What buzzword did you remove?'],
    ['What keywords align your LinkedIn with fullstack hiring?', 'What role title are you targeting?'],
    ['What do pinned repos descriptions emphasize?', 'What repo is *not* pinned and why?'],
    ['What numbers on your resume are estimates vs measured?', 'What feedback did you get on clarity?'],
    ['What one-page portfolio site URL or section exists?', 'What mentor feedback changed your pitch?'],
  ],
  // W23 System design
  [
    ['Draw auth: login → access → refresh → logout without looking at code.', 'Where is refresh stored and rotated?'],
    ['What entities can you draw from memory?', 'What index would you add under read-heavy load?'],
    ['What is stateless about your API servers?', 'Where would Redis fit first — cache or rate limit?'],
    ['When would you drop Prisma for raw SQL?', 'What is an example query you’d optimize?'],
    ['What mock interview question stumped you — refined answer now?', 'What diagram would you draw on a whiteboard first?'],
    ['What weak area did you drill — summary in 3 bullets?', 'What 20 facts about *your* codebase are flashcard-worthy?'],
    ['What behavioral story will you tell in interviews?', 'What sleep/app schedule supports Week 24 applications?'],
  ],
  // W24 Apply
  [
    ['How many applications/week is your target?', 'What tracker columns do you use?'],
    ['What company-specific line did you add to two applications?', 'What research took longer than expected?'],
    ['What follow-up template do you use?', 'What networking norm do you follow (if any)?'],
    ['How do you timebox take-home assignments?', 'What do you do if spec is ambiguous?'],
    ['How do you handle ghosting emotionally and practically?', 'What one pitch change did you make after rejection?'],
    ['What portfolio change came from real interview feedback?', 'What would you tell yourself on day 1 (Apr 13)?'],
    ['What open-source issue did you pick (or why rest)?', 'What maintenance cadence will you keep for demos?'],
  ],
];

const WEEK_TITLES = [
  'Node fundamentals',
  'HTTP & REST + Udemy start',
  'NestJS core (CRUD) + Udemy Task API',
  'Swagger + unit tests + Udemy validation',
  'Config, filters, logging + Udemy logging/config',
  'Auth basics + Udemy TypeORM & Postgres',
  'JWT guard + roles + Udemy auth',
  'Supertest integration tests + Udemy testing',
  'Docker Compose + Prisma init (+ Udemy wrap-up)',
  'Relations + indexes',
  'Transactions + seed',
  'Refactor persistence + green tests',
  'Domain modeling (orgs / members / roles)',
  'Workflows + permissions + list APIs',
  'React client (auth + main screens)',
  'Hardening + README',
  'GitHub Actions',
  'Deploy API + DB',
  'Logging + request tracing',
  'Project 2 or differentiator',
  'Docs + diagram + security audit',
  'Resume + profiles',
  'System design + your stack',
  'Applications + iteration',
];

const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function renderMarkdownAppendix() {
  let out = '';
  for (let w = 0; w < 24; w++) {
    const mon = dateFor(w, 0);
    const sun = dateFor(w, 6);
    out += `### Week ${w + 1} — ${WEEK_TITLES[w]} (${mon} — ${sun})\n\n`;
    for (let d = 0; d < 7; d++) {
      const dt = dateFor(w, d);
      const [q1, q2] = banks[w][d];
      out += `#### ${DOW[d]} ${dt}\n\n`;
      out += `1. ${q1}\n`;
      out += `2. ${q2}\n\n`;
      out += `- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)\n\n`;
    }
  }
  return out;
}

function renderWeekCalendarTable() {
  let out =
    '| Week | Monday (start) | Sunday (end) |\n|------|----------------|-------------|\n';
  for (let w = 0; w < 24; w++) {
    out += `| ${w + 1} | ${dateFor(w, 0)} | ${dateFor(w, 6)} |\n`;
  }
  return out;
}

function writePerDayFiles(assignmentsDir) {
  fs.mkdirSync(assignmentsDir, { recursive: true });
  let count = 0;
  for (let w = 0; w < 24; w++) {
    for (let d = 0; d < 7; d++) {
      const dt = dateFor(w, d);
      const [q1, q2] = banks[w][d];
      const body = `# ${dt} · Week ${w + 1} · ${DOW[d]}

**Theme:** ${WEEK_TITLES[w]}

## Questions

1. ${q1}
2. ${q2}

## My answers

<!-- Write here, or paste answers in chat when using /check-assignment. -->

### Reviewer comments

<!-- Filled or updated by /check-assignment. -->

---

- [ ] **Assignment done** (written answers in your notes or repo — calendar day counts complete only with this checked)

_Back to [daily track](../05-daily-track-24-weeks.md#daily-assignments-by-calendar-day)._
`;
      const filePath = path.join(assignmentsDir, `${dt}.md`);
      fs.writeFileSync(filePath, body, 'utf8');
      count += 1;
    }
  }
  return { count, assignmentsDir };
}

if (require.main === module) {
  if (process.argv.includes('--write-files')) {
    const custom = process.argv.find((a) => a.startsWith('--out='));
    const dir = custom
      ? path.resolve(process.cwd(), custom.slice('--out='.length))
      : path.join(__dirname, '..', 'assignments');
    const { count, assignmentsDir } = writePerDayFiles(dir);
    console.error(`Wrote ${count} files under ${assignmentsDir}`);
  } else if (process.argv.includes('--md')) {
    process.stdout.write(renderMarkdownAppendix());
  } else if (process.argv.includes('--calendar')) {
    process.stdout.write(renderWeekCalendarTable());
  } else {
    for (let w = 0; w < 24; w++) {
      for (let d = 0; d < 7; d++) {
        const dt = dateFor(w, d);
        const qs = banks[w][d];
        console.log(`${w + 1}\t${DOW[d]}\t${dt}\t${qs[0]}\t${qs[1]}`);
      }
    }
  }
}
