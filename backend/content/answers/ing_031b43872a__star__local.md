---
qid: ing_031b43872a__star__local
question: 'Explain: SQL — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:29-05:00'
sources: []
---

**Situation** – In my last role at a mobile gaming studio we were rolling out a new competitive mode that required real‑time leaderboards for over 50,000 concurrent players during peak hours. The existing leaderboard was an in‑memory cache that crashed when the load spiked and had no persistence.

**Task** – I needed to design a scalable, fault‑tolerant leaderboard system that could update scores in near real time, support pagination, and survive node failures without losing data, all while keeping latency under 100 ms.

**Action** – I chose PostgreSQL with the `pg_partman` extension for time‑partitioned tables (one partition per day) to keep inserts fast. I added a materialized view that aggregated top‑10 scores per region and refreshed it every minute via a background worker. For write paths, I used an upsert (`INSERT … ON CONFLICT`) to avoid race conditions on duplicate user IDs. To keep read latency low, I cached the materialized view in Redis with a 5 s TTL and fell back to SQL when cache misses occurred. Finally, I set up logical replication to a standby node for high availability.

**Result** – The new system handled 120 k concurrent updates per minute, maintained <80 ms read latency during peak, and reduced outage incidents by 95%. I learned that partitioning combined with materialized views can give SQL the speed of NoSQL while preserving ACID guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
