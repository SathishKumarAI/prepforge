---
qid: ing_35f1b747e4__star__local
question: 'Explain: 5.1 SQL vs NoSQL — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 372
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:11-05:00'
sources: []
---

**Situation:**  
I was tasked with designing a URL shortener for an internal startup that expected to grow from 10k active links per day to 1M within two years. The team needed a scalable, low‑latency solution that could handle high write throughput and provide quick lookups.

**Task:**  
Choose the appropriate database technology (SQL vs NoSQL) and design the data model so that shortening and redirecting URLs remained fast, while still supporting analytics and expiration logic.

**Action:**  
I mapped out the access patterns: writes were bursty but reads were read‑heavy with a 99.9% hit ratio on shortcodes. I compared relational tables (unique constraint on shortcode, foreign keys to long URL, timestamp) against a key–value store (Redis or DynamoDB). Because the schema was simple and we needed strong consistency for deduplication, I chose a hybrid approach:  
- **Primary storage:** PostgreSQL with a unique index on `shortcode` for atomic inserts.  
- **Cache layer:** Redis to serve redirects in <5 ms, using `GET shortcode → long_url`.  
- **Background worker:** Periodic sync from Redis to Postgres and cleanup of expired entries.  
I also added a counter table for analytics, partitioned by day, and used TTL on the cache to automatically evict stale keys.

**Result:**  
The system handled 200k writes per second during peak launches and delivered <2 ms latency for redirects at 99.9% availability. We kept storage costs low (under $300/month) and avoided schema migrations. I learned that a hybrid SQL/NoSQL stack often yields the best balance of consistency, scalability, and developer productivity in micro‑service architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
