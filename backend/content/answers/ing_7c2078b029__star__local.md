---
qid: ing_7c2078b029__star__local
question: 'Explain: Database Buffer Pool — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 291
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:10-05:00'
sources: []
---

**Situation:** In a recent e‑commerce platform revamp, our recommendation engine’s latency spiked during peak traffic—average response time jumped from 120 ms to over 600 ms because every query hit the database directly.

**Task:** I was tasked with reducing the recommendation API latency below 200 ms while keeping cost and complexity manageable, ensuring the system could scale to 10k concurrent users.

**Action:** I first profiled the DB workload: most reads were repeated across user sessions. I introduced a PostgreSQL buffer pool (shared_buffers set to 8 GB) and enabled `pg_prewarm` to preload hot tables into memory. Then, on the application layer, I implemented an in‑memory LRU cache using Redis with a 5‑minute TTL for query results, keyed by user profile hash. I added logic to invalidate cached entries when underlying data changed (e.g., product catalog updates). Finally, I monitored cache hit ratios and adjusted eviction thresholds via `maxmemory-policy`.

**Result:** Latency dropped to an average of 140 ms; cache hit ratio reached 92%, cutting database reads by 70%. The system now comfortably handles 15k concurrent users with a single DB instance. I learned that proper buffer sizing coupled with application‑level caching can dramatically improve performance without costly infrastructure upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
