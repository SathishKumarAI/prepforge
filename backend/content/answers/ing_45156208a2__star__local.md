---
qid: ing_45156208a2__star__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 376
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:00-05:00'
sources: []
---

**Situation** – In a mock interview I was asked to design an online Pastebin‑style service that could handle millions of users and support real‑time collaboration on code snippets. The challenge was to build something scalable, fault‑tolerant, and low‑latency.

**Task** – My goal was to sketch a high‑level architecture that would satisfy key non‑functional requirements: horizontal scalability, strong consistency for snippet updates, and a 99.9 % uptime SLA while keeping costs under budget.

**Action** – I started by decomposing the system into core components: an API gateway, stateless request handlers, a sharded NoSQL store (Cassandra) for snippets, a Redis cache layer for hot reads, and an event‑driven background worker for indexing. For collaboration I added a WebSocket service backed by Kafka to broadcast edits in real time. Load balancers distribute traffic across multiple container clusters; health checks trigger auto‑scaling. I also defined data retention policies and a CDN edge layer for static assets. I documented the flow from user request → API gateway → handler → cache/store, including fallback paths.

**Result** – The design supported 10 M daily active users with sub‑200 ms read latency and <1 % consistency errors under peak load. Post‑implementation metrics showed a 40 % reduction in read traffic after caching and a 30 % cost saving from the sharded architecture. I learned that early, coarse‑grained design decisions (choosing stateless services + NoSQL) can dramatically simplify scaling later on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
