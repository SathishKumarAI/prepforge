---
qid: ing_61add12e47__star__local
question: 'Explain: How Sharding Works — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:19-05:00'
sources: []
---

**Situation** – At my previous job we had a recommendation engine that served millions of users per day. The PostgreSQL instance started bottlenecking on write latency; our batch jobs were taking hours and the API response time rose to 250 ms, which violated SLA.

**Task** – I was tasked with scaling the user‑profile table so that writes stayed under 30 ms while keeping query performance for personalized recommendations intact.

**Action** – I designed a horizontal sharding strategy. First, I chose a natural key—`user_id`—and hashed it using SHA‑256 modulo the number of shards (initially eight). Each shard lived on its own server behind a connection pooler, so we avoided cross‑node joins. To keep read performance high, I replicated each shard to two read replicas and used PostgreSQL’s logical replication for eventual consistency. For routing, I built a lightweight in‑memory lookup table in the application that maps `user_id` ranges to shard hosts. During migration, I employed zero‑downtime “online schema change” tooling (pg_repack) so we could add shards without locking tables.

**Result** – Write latency dropped from 250 ms to 18 ms and batch job times fell from 3 hours to under 30 minutes. The system now handles 10× the traffic with a single 5‑minute maintenance window for scaling. I learned that sharding isn’t just about splitting data; careful routing, replication strategy, and graceful schema evolution are equally critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
