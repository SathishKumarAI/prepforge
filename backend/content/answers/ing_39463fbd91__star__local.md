---
qid: ing_39463fbd91__star__local
question: 'Explain: Maintain a single API — Introduction to Apollo Federation - Apollo
  GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 278
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:20-05:00'
sources: []
---

**Situation** – In a fintech startup we had three micro‑services exposing separate GraphQL endpoints (users, accounts, payments). Our front‑end team complained about having to hit different URLs and maintain duplicate schemas.

**Task** – I was asked to expose a single public API that unified these services while preserving the existing schema contracts and keeping deployment friction low.

**Action** – I set up an Apollo Gateway as a lightweight orchestrator. Each micro‑service became a “remote” federated subgraph, exposing its type definitions and resolvers via Apollo Federation v2. I added `@key` directives to link shared entities (e.g., `User { id }`) and wrote stitching resolvers where needed. On the gateway side, I implemented schema introspection caching and used DataLoader to batch cross‑service requests, reducing round‑trips from 3 to 1. We also introduced a single authentication middleware that delegated token validation to the gateway.

**Result** – The public GraphQL endpoint reduced latency by ~35 % (average query time dropped from 420 ms to 270 ms) and cut front‑end maintenance effort by 70 %. I learned how federation balances schema ownership with centralized orchestration, and that careful batching can mitigate the added indirection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
