---
qid: ing_7d3814f442__faang__local
question: 'Explain: Users Table (Optional) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 465
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:36:18-05:00'
sources: []
---

**Clarify**  
We need a URL‑shortening service (e.g., bit.ly). Assume high traffic, millions of users, global availability, and that each short URL maps to one long URL. We’ll ignore persistence details like authentication unless the optional Users table is requested.

**Approach**  
1. **API layer**: `/create`, `/redirect`.  
2. **Short‑code generation**: base‑62 incremental counter → hash → 6–8 chars.  
3. **Storage**: key/value store (Redis) for hot lookups; fallback to a relational DB (PostgreSQL) for durability.  
4. **Caching**: LRU cache per shard, TTL on stale data.  
5. **Scaling**: sharded by hash prefix, load balancer, CDN for static assets.  
6. **Analytics**: event queue (Kafka) → analytics store.

**Depth**  
- *Create*: atomically increment counter → encode → store mapping (`code -> url`). Complexity O(1).  
- *Redirect*: lookup in cache → DB → return 301. Latency < 100 ms with caching.  
- Collision avoidance: use a unique constraint on code; retry on conflict.  
- Expiry: optional TTL column; background job to purge expired entries.  
- Optional Users table adds `user_id` FK, enabling per‑user stats.

**Edge Cases**  
- Counter overflow → switch to UUID or larger base‑62 string.  
- High collision rate if many concurrent writes → use distributed lock or atomic DB sequence.  
- DDoS on `/create`: rate‑limit per IP/user.  
- Missing mapping: return 404, log for analytics.

**Optimize & Communicate**  
We can compress the long URL (store a hash to detect duplicates) and use CDN caching for static redirection pages. Explain trade‑offs: faster reads with cache vs stale data; consistency guarantees with DB writes. Conclude by highlighting observability (metrics on hit/miss, latency) and how this design meets FAANG expectations for scalability, reliability, and maintainable complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
