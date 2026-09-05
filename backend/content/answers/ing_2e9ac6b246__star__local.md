---
qid: ing_2e9ac6b246__star__local
question: 'Explain: 4.1 Requirement 1: URL Shortening — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 300
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:01:36-05:00'
sources: []
---

**Situation:**  
I was tasked with building a scalable URL shortening service for a startup that expected to grow from a few thousand daily clicks to over ten million within a year.

**Task:**  
Design an architecture that guarantees 99.9 % uptime, supports custom aliases, and can quickly retrieve the original URL under high traffic while keeping storage costs low.

**Action:**  
I chose a two‑tier approach:  
1. **Short ID generation** – used a base‑62 encoder on a monotonically increasing Snowflake‑style counter to avoid collisions and keep IDs 6–7 characters long.  
2. **Storage & caching** – stored mappings in a sharded Redis cluster for hot keys, with a fallback to a DynamoDB table (eventual consistency) for persistence.  
I added an HTTP API gateway with rate limiting and implemented a Bloom filter at the edge to reject non‑existent short URLs before hitting the database. For custom aliases, I enforced uniqueness via a dedicated lock service using Redlock. Monitoring was set up with Prometheus alerts on cache miss rates.

**Result:**  
The system handled 12 M requests/day with <1 ms latency for 95% of hits and stayed within $2k/month in AWS spend. I learned that combining deterministic ID generation with a layered caching strategy dramatically reduces database load while keeping the service cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
