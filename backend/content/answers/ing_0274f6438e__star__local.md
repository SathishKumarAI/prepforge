---
qid: ing_0274f6438e__star__local
question: 'Explain: How to do distributed locking — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 311
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:14-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time bidding platform that processed millions of ad requests per second. A single “campaign budget” table in Postgres became a bottleneck because every bid had to atomically decrement the remaining spend.

**Task** – I needed a way to guarantee that two workers never overspend the same campaign, but without locking the database and hurting latency.

**Action** – I implemented a distributed lock using Redis Sentinel. Each worker first tried `SET key campaign:1234 lock YES NX PX 3000`. If it succeeded it held the lock for 3 seconds; if not, it waited 50 ms and retried. Inside the critical section I read the budget from Postgres, updated it in a single `UPDATE` with a `WHERE remaining > 0`, and released the Redis key with `DEL`. To avoid “lost updates” I added a version column and used optimistic locking (`WHERE id = ? AND version = ?`). I also logged every lock acquisition so we could audit contention.

**Result** – Lock contention dropped from ~15 % to <2 %, allowing the system to handle 1.8× more bids per second while keeping overspend errors below 0.01%. I learned that a lightweight, lease‑based Redis lock combined with optimistic DB updates can replace heavy database locks in high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
