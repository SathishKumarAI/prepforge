---
qid: ing_c7928f7c2a__star__local
question: 'Explain: REST vs GraphQL — 10 System Design Tradeoffs You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 360
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:38-05:00'
sources: []
---

**Situation** – While leading a data‑science platform for real‑time recommendation at a streaming service, we had to expose model predictions to mobile clients. The existing REST API was slow: each request fetched the entire user profile, even though the UI only needed age and watch history.

**Task** – Redesign the endpoint layer so that mobile apps could retrieve just the fields they need, reduce bandwidth, and keep our ML inference pipeline scalable under 10 k requests per second.

**Action** – I introduced GraphQL for the front‑end calls while keeping REST for batch jobs. We defined a single schema that mirrored our relational tables but added resolvers that hit the in‑memory cache first. To avoid “overfetching” we used persisted queries and set field‑level rate limits. For “underfetching” we implemented automatic batching of identical sub‑queries with DataLoader, cutting 30 % of round‑trips. We also built a middleware that logged query complexity to prevent expensive joins from hitting the inference engine. Tradeoffs: added schema maintenance overhead, but gained fine‑grained data control and better mobile performance.

**Result** – Mobile bandwidth dropped by 45 %, latency improved from 180 ms to 90 ms on average, and we handled a 2× traffic surge without scaling the ML cluster. I learned that choosing between REST and GraphQL is less about the protocol itself and more about aligning data granularity, caching strategy, and operational complexity with user needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
