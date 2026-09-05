---
qid: ing_43ab4c65aa__star__local
question: 'Explain: Consistency patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 378
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:25-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time recommendation engine that fed personalized ads into our ad‑tech platform. The model weights were stored in a distributed cache (Redis cluster) and also persisted to a transactional database for audit. After a deployment, the ad clicks dropped 12 % because users saw stale recommendations.

**Task** – I had to redesign the weight distribution layer so that every node served fresh model parameters within seconds while keeping read latency under 5 ms and not overloading the database with writes.

**Action** – I applied *eventual consistency* with a write‑through cache strategy. Every time a new batch of weights was generated, we first updated Redis (using pipelined SETs with TTL = 30 s) and then queued an asynchronous message to Kafka. A background consumer persisted the same payload to Postgres in a single transaction. To guarantee read consistency during the brief window between cache write and DB commit, I added a version tag to each key; the reader service checked that its local cache’s version matched the latest from the DB before serving. For hot keys we enabled Redis replication with *read‑your‑writes* by directing writes to the master and reads to a follower with minimal lag.

**Result** – Read latency stayed below 4 ms, cache hit ratio rose from 78 % to 94 %, and ad click‑through rate rebounded to its pre‑issue level (+13 %). I learned that in ML systems you can balance strict consistency with performance by layering eventual consistency and versioning, keeping the user experience smooth while preserving data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
