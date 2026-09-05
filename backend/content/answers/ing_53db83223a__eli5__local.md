---
qid: ing_53db83223a__eli5__local
question: 'Explain: F9: Tenant cross-contamination via shared eval infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 235
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:49:50-05:00'
sources: []
---

Imagine a bakery that lets many chefs bake their own cakes, but all of them use the same oven. If one chef leaves crumbs or an allergen on the heat‑plate, those particles can stick to the next cake, even if the next chef didn’t know about it. In cloud AI terms, “tenants” are different users or companies that run machine‑learning tests (“evaluations”) on shared hardware. The “eval infrastructure” is like that common oven—a server or GPU cluster that all tenants use at once.

Cross‑contamination happens when data, model weights, or even training artefacts from one tenant leak into another’s evaluation because the shared environment isn’t fully isolated. It’s as if the crumbs were invisible but still ended up on the next cake, potentially corrupting results or leaking sensitive information. The key is to keep each tenant’s work separate—just like a bakery would use dedicated ovens or clean the oven between chefs—to avoid those hidden “crumbs” from affecting anyone else.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
