---
qid: ing_4ee5197947__star__local
question: 'Explain: Which database to use? - SQL vs NoSQL — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 362
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:23-05:00'
sources: []
---

**Situation**  
When I was tasked with redesigning our in‑house URL shortening service (similar to TinyURL) for a media company, the traffic had grown from 5 k requests per day to over 250 k, and we needed to guarantee sub‑50 ms latency for lookups while keeping storage costs low.

**Task**  
Select a database that could handle high write throughput, provide fast key‑value retrieval, support eventual consistency across a global CDN, and still allow us to run analytics on click patterns without impacting performance.

**Action**  
I evaluated SQL (PostgreSQL) versus NoSQL options (Redis, DynamoDB). PostgreSQL offered ACID guarantees but would require sharding for our scale, adding operational overhead. Redis provided in‑memory speed but limited durability; however, with AOF persistence and a secondary RDS replica we could balance latency and reliability. I chose a hybrid: use Redis as the primary lookup store (key = short code, value = long URL) for instant resolution, and stream writes to a PostgreSQL archive for analytics and audit logs via Kafka. We also implemented a TTL policy in Redis to purge unused keys automatically.

**Result**  
Lookup latency dropped from 120 ms to 32 ms on average; write throughput increased by 4× without new servers. The system handled peak traffic of 500 k requests per hour with <0.1% error rate, and the analytics pipeline delivered click reports in under 5 minutes. I learned that a hybrid approach often yields the best trade‑off between speed, durability, and cost for services like URL shorteners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
