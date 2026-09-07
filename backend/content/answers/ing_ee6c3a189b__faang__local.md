---
qid: ing_ee6c3a189b__faang__local
question: 'Explain: 🗺️ Which Repo Sections Map to What — Transition Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 451
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:30-05:00'
sources: []
---

**Clarify**  
You’re asking for a *road‑map* that maps high‑level repository sections (e.g., `src/`, `docs/`, `tests/`) to the roles they play when moving code from an old monolith into a new micro‑service architecture. Key assumptions:  
- The repo contains both legacy business logic and supporting assets.  
- Migration will be incremental, not all‑at‑once.  
- You want to keep CI/CD pipelines intact.

**Approach**  
1. Identify *Domain Boundaries* (use bounded‑context).  
2. Tag each folder with its responsibility: domain code, infrastructure, shared libs, docs, tests.  
3. Create a migration matrix that pairs repo sections with target services.  
4. Draft a phased plan: extract → refactor → deploy.

**Depth**  
| Repo Section | What it maps to in the new system | Why |
|--------------|----------------------------------|-----|
| `src/` (domain logic) | Service‑specific modules | Keeps business rules isolated |
| `infra/` (DB, cache config) | Service infra (Dockerfiles, Helm charts) | Enables independent scaling |
| `shared/` (utils, DTOs) | Common libs / API gateway contracts | Avoids duplication |
| `tests/` (unit & integration) | Service test suites | Guarantees contract integrity |
| `docs/` (README, architecture docs) | Service documentation + OpenAPI specs | Facilitates onboarding |

**Edge Cases**  
- Circular dependencies between shared modules → refactor to interfaces.  
- Legacy tests referencing monolith state → split into service‑level mocks.  
- Documentation gaps → flag and fill before cutover.

**Optimize & Communicate**  
*Improvements*: Automate the mapping with static analysis (e.g., `grep` for imports) and generate a migration dashboard.  
*Narrative*: “We’ll first surface all domain boundaries, then map each folder to its destination service, ensuring that every piece of code has a clear ownership line in the new architecture.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
