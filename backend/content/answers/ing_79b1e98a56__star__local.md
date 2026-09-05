---
qid: ing_79b1e98a56__star__local
question: 'Explain: Cost Analysis — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 367
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:02-05:00'
sources: []
---

**Situation**  
At my previous company we launched a voice‑activated assistant that needed instant keyword matching against a 500 GB product catalog. The latency target was 120 ms per query, but our initial cost‑per‑query estimate from the cloud provider was $0.05—too high for a consumer app.

**Task**  
I had to reduce the real‑time search cost to below $0.01 while keeping the latency requirement and supporting 10k concurrent users during peak hours.

**Action**  
First, I profiled the query pipeline with *Perfetto* and discovered that 70 % of the time was spent on full‑text scans in Elasticsearch. I replaced those scans with a Bloom filter layer built in Redis, cutting disk reads by 60 %. Next, I switched from single‑node deployments to a serverless Lambda architecture for the ranking step, leveraging *AWS Fargate* spot instances. I also introduced a cost‑aware query planner that routed “common” queries to a precomputed cache in DynamoDB, reducing compute usage by 40 %. Finally, I added auto‑scaling rules based on CPU and memory thresholds to avoid overprovisioning during off‑peak hours.

**Result**  
The average query cost dropped from $0.05 to $0.008, a 84 % savings, while latency stayed under 110 ms. The system now scales to 20k concurrent users with only 30 % of the previous compute budget. I learned that marrying profiling data with targeted caching and serverless scaling can deliver both performance and cost efficiency in real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
