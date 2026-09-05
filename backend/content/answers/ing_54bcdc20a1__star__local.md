---
qid: ing_54bcdc20a1__star__local
question: What is an URL Shortener? — Design URL Shortener | System Design Interview
  | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 305
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:30-05:00'
sources: []
---

**Situation** – While leading a product launch at my previous company, we had to support a viral marketing campaign that required millions of unique links to be generated and tracked in real time. The existing link infrastructure couldn’t scale or provide the analytics needed.

**Task** – I was tasked with designing an URL shortener service that could handle 10 M requests per day, guarantee global uniqueness, allow custom aliases, and store click‑through metrics for later analysis—all while keeping latency under 50 ms.

**Action** – I chose a sharded key‑value store (Cassandra) for persistence, using a consistent hash on the short code to route writes. Short codes were generated via a base‑62 counter with optional checksum to avoid collisions. For high availability, I added a CDN edge layer that cached popular URLs and a Redis cache for hot keys. Custom aliases triggered a write‑through to a separate “aliases” table with strict uniqueness constraints. Metrics were pushed asynchronously to Kafka and processed by Spark jobs into an analytics warehouse.

**Result** – The system handled 12 M daily hits with <30 ms average latency, achieved 99.999% uptime, and reduced our link storage cost by 35%. I learned how to balance consistency, availability, and performance when designing a high‑scale microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
