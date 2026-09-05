---
qid: ing_18e0be20db__star__local
question: 'Explain: DB auto-increment — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 383
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:50-05:00'
sources: []
---

**Situation** – When we launched our new SaaS platform for small retailers, the pilot data showed that the default MySQL AUTO_INCREMENT was choking on high concurrency: every batch of orders hit a lock and latency spiked to 120 ms during peak hours.

**Task** – I had to design a scalable ID strategy that kept uniqueness, avoided hotspots, and stayed simple enough for our ops team to maintain.

**Action** – I evaluated five approaches:
1. **UUIDv4** – easy but 36‑char strings increased index size.
2. **Snowflake IDs** – gave time‑sortable 64‑bit numbers; we built a small Node service to generate them.
3. **Hi/Lo algorithm** – reduced DB roundtrips, using Redis for the high value.
4. **Sequence table with shard key** – partitioned by tenant ID, but added extra join overhead.
5. **Custom hash of customer‑order timestamp + counter** – deterministic and compact.

After prototyping, I chose a hybrid Snowflake+Hi/Lo combo: the Snowflake part gave us 10 ms granularity per node; the Hi/Lo cache kept DB hits down to <1%. We wrapped it in a Go microservice that our Rails app called via gRPC.  

**Result** – Latency dropped from 120 ms to 15 ms under 5,000 QPS, and we eliminated deadlocks entirely. The system now supports 50 % more concurrent users with no change to the schema. I learned that mixing a time‑based generator with an in‑memory counter gives the best of both worlds for high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
