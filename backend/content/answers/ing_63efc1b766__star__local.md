---
qid: ing_63efc1b766__star__local
question: 'Explain: 6.1 Unique URL Generation — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 344
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:38-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a marketing platform that needed to share campaign links with partners. The existing short‑URL service was unreliable—collision rates hit 0.5% after just 100k requests and the API latency shot up to 250 ms when scaling beyond 10k concurrent users.

**Task:**  
Design a new URL shortener that guarantees uniqueness, scales horizontally, keeps lookup time under 50 µs, and can handle millions of creations per day without downtime.

**Action:**  
I chose a hybrid approach: use a distributed key‑value store (Cassandra) for persistence and a sharded in‑memory cache (Redis cluster) for hot lookups. For the ID generator I implemented a time‑based snowflake algorithm, appending a 12‑bit worker ID and 10‑bit sequence to a 41‑bit timestamp—this yields ~2 billion unique IDs per second with no central bottleneck. The short code is base62 encoded of the snowflake ID. To avoid accidental collisions I added a CRC‑16 checksum that’s verified on lookup. For resilience, each shard replicates writes to a secondary node and runs a background job that scans for duplicate codes using HyperLogLog summaries.

**Result:**  
The new service handled 5 million creates per day with <30 µs average latency, zero collisions in production, and 99.999% uptime during a 6‑month traffic spike. I learned the value of combining deterministic ID generation with probabilistic dedup checks to balance speed and safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
