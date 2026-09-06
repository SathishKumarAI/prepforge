---
qid: ing_4605b1f863__fp__local
question: 'Explain: Change Types — Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 414
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:34:27-05:00'
sources: []
---

### Change Types in CI / CD Pipelines  
The core problem a pipeline solves is *trust*: we want to know that every change—whether a new feature, a refactor, or a patch—does exactly what it intends without breaking the rest of the system.  To reason about this, we classify changes into three orthogonal dimensions:

| Dimension | What it captures | Why it matters |
|-----------|-----------------|----------------|
| **Scope** (Local vs Global) | A change that touches only one module or a whole codebase | Local changes keep risk bounded; global ones require broader testing. |
| **Intent** (Feature, Fix, Refactor) | New functionality, bug resolution, or internal clean‑up | Different intents dictate the required test coverage and rollback strategy. |
| **Stability** (Stable vs Experimental) | Production‑ready vs prototype code | Stable changes go straight to staging; experimental ones may be gated behind feature flags. |

These axes converge in the *pipeline contract*: a change of type *Feature + Global + Experimental* triggers full end‑to‑end tests, can’t merge without approval, and must pass smoke‑tests before promotion.  

**Non‑obvious insight:**  
Most teams treat “refactor” as low risk, but a refactor that is *global* (e.g., changing an API contract) behaves like a feature change in terms of downstream impact. Recognizing this forces pipelines to apply the same rigorous gatekeeping to both feature and large refactor changes, preventing subtle regressions that survive in production because they were assumed “harmless.”  

By deriving the classification from *risk* rather than convention, CI/CD becomes an optimization problem: minimize total failure cost while maximizing deployment velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
