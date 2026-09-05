---
qid: ing_1cadbf170d__star__local
question: 'Explain: Cache Layer (Redis) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 344
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:47-05:00'
sources: []
---

**Situation:**  
I was tasked to revamp a legacy URL‑shortening service that had been serving millions of clicks per day. The original design stored every shortened URL in a single relational table, causing query latency to climb past 300 ms during traffic spikes.

**Task:**  
Redesign the system so that lookup time for any short code stays under 10 ms while still guaranteeing eventual consistency with the primary datastore and preserving analytics (click counts).

**Action:**  
I introduced a Redis cache layer as a first‑hop lookup. Each new short URL is written to PostgreSQL, then an asynchronous worker publishes a “URL created” event to Kafka. A consumer updates Redis with `SET key:shortcode value:url` and increments a TTL of 24 h. For reads, the service first checks Redis; on miss it falls back to Postgres, caches the result, and serves the client. To handle cache invalidation after URL edits or deletions, I used Redis keyspace notifications to trigger immediate eviction. I also sharded Redis horizontally and enabled persistence (RDB + AOF) for durability.

**Result:**  
Cache hit rate jumped from 5 % to 98 %, reducing average lookup latency from 300 ms to 8 ms. Traffic spikes of 200× were handled without degrading user experience, and the analytics pipeline remained accurate within 1 % due to eventual consistency. I learned how event‑driven cache invalidation balances performance with correctness in a high‑scale system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
