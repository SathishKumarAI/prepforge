---
qid: ing_0c04c41181__star__local
question: 'Explain: Addressing the Limitations — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 355
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:44-05:00'
sources: []
---

**Situation** – While working at a SaaS startup, our marketing team needed a custom URL shortener to track campaign performance. The existing free service was slow, lacked analytics, and frequently generated collisions for high‑volume traffic.

**Task** – Build an internal shortener that could handle 10 M requests/day, guarantee unique codes with <0.01% collision rate, store click metadata, and scale horizontally without downtime.

**Action** – I chose a sharded NoSQL store (Cassandra) for key–value lookup, using a deterministic hash of the long URL plus a random salt to avoid collisions; if a collision occurred we incremented the salt. For analytics I added an append‑only log in Kafka, replayed into Elasticsearch for real‑time dashboards. The API layer was built with Go, exposing a REST endpoint that returns a 6‑character base‑62 code. To support scaling I deployed stateless workers behind a Kubernetes cluster and used Redis cache to warm popular links. We also added rate limiting via Envoy to prevent abuse.

**Result** – The system handled 12 M hits/day with <0.005% collision rate, latency stayed under 30 ms for 99th percentile requests, and the analytics dashboard showed real‑time CTRs within seconds. I learned that coupling deterministic hashing with a lightweight retry mechanism and an event‑driven log can yield both high availability and insightful metrics in a URL shortener.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
