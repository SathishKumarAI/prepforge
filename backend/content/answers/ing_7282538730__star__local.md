---
qid: ing_7282538730__star__local
question: Can You Use Both REST and GraphQL? — REST vs GraphQL - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 297
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:24-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had an existing payment‑processing microservice exposed via REST for legacy partners, while our new mobile app demanded real‑time balance updates and flexible querying of user profiles. The product team wanted to keep the old integrations intact but also provide a modern API surface.

**Task** – I was tasked with designing an API layer that could serve both audiences without duplicating business logic or compromising performance.

**Action** – I introduced a GraphQL gateway in front of the same service, using Apollo Server. The REST endpoints remained untouched; I wrapped them as data sources for the GraphQL resolvers so they shared the same underlying DAO and caching strategy. To avoid over‑fetching, I added persisted queries and a depth limit. For performance monitoring, I instrumented both layers with OpenTelemetry and set up Prometheus alerts on latency thresholds.

**Result** – Within two weeks we had 95 % of the mobile app’s requests handled by GraphQL, cutting payload sizes by ~40 %. Legacy partners continued to hit REST without any changes, and our observability stack showed a 15 % reduction in overall API response times. I learned that a well‑orchestrated gateway can coexist with legacy APIs when you keep shared logic in one place and expose the right abstraction per client.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
