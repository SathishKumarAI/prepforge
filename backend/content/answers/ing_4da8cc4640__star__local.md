---
qid: ing_4da8cc4640__star__local
question: 'Explain: Amazon ElastiCache — What is Distributed Caching? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 327
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:56-05:00'
sources: []
---

**Situation:**  
When I was working on a high‑traffic e‑commerce platform, our product catalog API was hitting the database at over 10k requests per second during flash sales. The latency spike caused a 35 % drop in conversion rates.

**Task:**  
I had to reduce read latency by 70 % and scale the cache layer horizontally without rewriting the application logic.

**Action:**  
I introduced Amazon ElastiCache with Redis in a multi‑AZ, cluster mode configuration—essentially distributed caching. I partitioned keys using hash tags so that related items (e.g., all variants of a product) lived on the same node, reducing cross‑node lookups. I leveraged Redis Cluster’s automatic sharding and rebalancing to add nodes during peak traffic, and enabled persistence with RDB snapshots for recovery. To keep cache consistency, I implemented an “eventual‑update” pattern: after each write to DynamoDB, a Lambda function invalidated the relevant cache entries via Pub/Sub. I also set up CloudWatch alarms on cache hit ratios (target >95 %) and used Auto Scaling policies tied to CPU and memory metrics.

**Result:**  
Cache hit ratio jumped from 62 % to 97 %, cutting API latency from 350 ms to 45 ms during flash sales, and boosting conversion rates by 12 %. I learned that thoughtful key design and automated scaling are critical for a resilient distributed cache in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
