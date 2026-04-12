# NestJS stack checklist

Use this as a **depth meter**. Check items when you can **explain them in an interview** and **point to code** that demonstrates them.

Legend: **Done means** — minimum evidence you actually own the topic.

---

## Runtime and tooling

| Topic | Done means |
|--------|------------|
| Node.js LTS, package manager (npm/pnpm) | Scripts for `dev`, `build`, `test`, `migrate`; reproducible install |
| `process.env` and 12-factor config | No secrets in code; `.env.example` committed; prod uses platform env |
| Async error handling | Rejected promises don’t crash the process; Nest filters catch expected errors |
| Graceful shutdown (awareness) | You know why `SIGTERM` matters for DB connections and HTTP servers |

---

## HTTP and API design

| Topic | Done means |
|--------|------------|
| REST verbs and idempotency | You can justify PATCH vs PUT for your resources |
| Status codes | 400 vs 401 vs 403 vs 404 vs 409 vs 422 used deliberately on one module |
| Pagination/filtering | Cursor or offset strategy chosen; documented in Swagger |
| API error shape | Consistent JSON error body across controllers (via filter or interceptor) |
| Versioning (optional) | If you version, `/v1` or header strategy is documented |

---

## NestJS core

| Topic | Done means |
|--------|------------|
| Modules, providers, exports | Feature module encapsulates providers; `AppModule` wires cleanly |
| Controllers + route params | Params validated; no raw strings where DTOs exist |
| Dependency injection | Services injected in constructors; interfaces where you swap impls in tests |
| DTOs + `ValidationPipe` | `class-validator` rules; forbid unknown properties where appropriate |
| Pipes (custom) | At least one custom pipe OR clear rationale for only built-in pipes |
| Guards | Auth guard on protected routes; optional roles guard |
| Interceptors | Logging or response transform on a route or globally |
| Exception filters | Global filter maps domain errors to HTTP responses |
| Middleware vs guards vs interceptors | You can state execution order and when to use each |

---

## OpenAPI

| Topic | Done means |
|--------|------------|
| `@nestjs/swagger` | Swagger UI runs in dev; DTOs decorated; auth scheme documented |
| Request/response examples | At least one endpoint has clear example or description |

---

## Persistence (PostgreSQL + Prisma)

| Topic | Done means |
|--------|------------|
| Schema design | Normalized enough for demo; explicit relation ownership |
| Migrations | Every schema change is a migration; no “edit DB by hand” in prod story |
| Indexes | Foreign keys / common filters have indexes where it matters |
| Transactions | One multi-step workflow uses a transaction |
| Seeds | Script creates demo users/data for reviewers |
| Prisma in Nest | `PrismaService` lifecycle (onModuleInit/destroy) or equivalent pattern |

---

## Authentication and authorization

| Topic | Done means |
|--------|------------|
| Password hashing | bcrypt or argon2; cost factor not absurd; passwords never returned |
| JWT access token | Short-lived access token; validated in guard |
| Refresh token | Rotation or clear invalidation story you can explain |
| Storage in browser | If SPA: httpOnly cookie vs localStorage tradeoff articulated |
| RBAC or scoping | At least resource ownership or role check on sensitive routes |

---

## Security and robustness

| Topic | Done means |
|--------|------------|
| CORS | Configured for known origins in prod |
| Rate limiting | Basic limiter on auth routes or globally (Nest `@Throttle` or middleware) |
| Input validation | All external input validated at boundary (DTOs) |
| Dependency hygiene | No known critical vulns ignored; `npm audit` / renovate awareness |
| Security README | Short section: what you did, what you skipped (e.g. “no WAF”) |

---

## Testing

| Topic | Done means |
|--------|------------|
| Unit tests | Pure logic and services tested with mocks |
| Integration tests | Supertest hits real HTTP stack; auth + one CRUD path |
| Test DB strategy | Dedicated test database, transactions, or containers—pick one and document |
| CI | PR runs lint + tests automatically |

---

## Operations

| Topic | Done means |
|--------|------------|
| Docker Compose | Postgres (and app optional) starts with one command |
| Health check | `/health` or platform health used by deploy |
| Logging | Structured or consistent logs; correlation ID optional but nice |
| Deployment | One live environment; migrations applied as part of release process |
| Observability (minimal) | You can find errors in host logs or APM in under five minutes |

---

## Optional differentiators (after core is green)

| Topic | Done means |
|--------|------------|
| Redis | Cache or rate limit with explicit TTL and invalidation story |
| BullMQ / queues | Job processed asynchronously; failure/retry mentioned in README |
| WebSockets | Gateway module; auth on connection; reconnect behavior acknowledged |
| Stripe / OAuth | Webhook signature verification OR OAuth callback flow documented |

---

## Interview “fluency” checks (non-code)

- Explain **your auth flow** end-to-end in under two minutes.  
- Draw **your ER diagram** from memory.  
- Name **one tradeoff** you made (e.g. JWT vs sessions) and **one debt** you’d fix next.  

When those are easy, the checklist is doing its job.
