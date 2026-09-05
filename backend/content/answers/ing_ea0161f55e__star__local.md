---
qid: ing_ea0161f55e__star__local
question: 'Explain: Shard key — What is Database Sharding? - Shard DB Explained -
  AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 365
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:28-05:00'
sources: []
---

**Situation:**  
In my last role as a backend engineer at a fintech startup, our payment‑processing service hit a traffic spike during the holiday season—transaction volume doubled from 200k to 400k requests per minute—and our single PostgreSQL instance started throttling with query latency creeping above 250 ms.

**Task:**  
I was tasked with designing a sharding strategy that could scale horizontally, reduce contention on hot tables, and keep data locality for fast joins—all while staying within the AWS RDS budget.

**Action:**  
I chose a range‑based shard key: the first two digits of each customer’s account number. Using Amazon Aurora Serverless v2, I created five read replicas, each hosting one shard partition. I leveraged PostgreSQL’s foreign data wrapper (postgres_fdw) to route queries automatically based on the shard key, and implemented an Elastic Load Balancer that hashed the key into the correct instance. To maintain ACID across shards for cross‑customer transfers, I added a lightweight two‑phase commit shim with SQS messages. We also added a caching layer in Redis to warm hot read paths.

**Result:**  
After deployment, query latency dropped from 250 ms to under 80 ms on average, and the system handled 1M requests per minute without any outages. The cost increased by only 12% due to Aurora scaling, but we gained a 4× throughput increase. I learned that choosing an intuitive, business‑aligned shard key simplifies routing logic and reduces operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
