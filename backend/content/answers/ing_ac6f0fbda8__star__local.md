---
qid: ing_ac6f0fbda8__star__local
question: 'Explain: Sharded Counter — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:23-05:00'
sources: []
---

**Situation:**  
At my previous role, we had a public API that tracked the number of active users per country in real time. The global user base was growing to over 50 million daily, and our single Redis instance started throttling under the write load—each increment hit the same key, causing hot‑spots and latency spikes.

**Task:**  
I needed to redesign the counter so that it could scale horizontally, keep read latency below 5 ms, and still deliver accurate totals within a ±1% margin for analytics dashboards.

**Action:**  
I implemented a sharded counter architecture. First, I partitioned each country’s counter into 256 shards stored as separate Redis keys (`country:US:shard-0 … shard-255`). Every write request randomly selects one shard to increment, reducing contention. Reads aggregate the shards via a Lua script that performs an `MGET` and sums the results atomically. To keep the total consistent during rebalancing, I added a secondary “global” counter updated asynchronously every 10 seconds with the sum of all shards. We also introduced a background job to detect shard drift: if any shard deviated by more than 5 % from the mean, we redistributed keys and performed a compaction step.

**Result:**  
Write latency dropped from 30 ms to under 3 ms, and read latency stayed below 4 ms even during traffic spikes. The system handled 200k increments per second across all countries without any single point of failure. I learned that careful shard sizing, atomic aggregation, and periodic drift correction are key to building a resilient distributed counter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
