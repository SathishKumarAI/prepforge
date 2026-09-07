---
qid: ing_172e9344d7__aws__local
question: 'Explain: Sharding — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 434
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:10-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of an on‑prem PostgreSQL warehouse that served a recommendation engine for 12 M daily active users. The monolith hit 30 % CPU saturation and latency spiked to 350 ms during peak traffic, threatening SLA guarantees.

**Action (Design)**  
I chose *horizontal sharding* via Amazon Aurora Serverless v2 + **DynamoDB Global Tables** for the hot “user‑profile” shard.  
1. **Shard key = user_id hash** – evenly distributes load.  
2. **Aurora Serverless** scales from 0–64 ACUs with millisecond cold‑start recovery, keeping cost at ~30 % of provisioned RDS.  
3. **DynamoDB Global Tables** (replicated in us-east-1 & eu-west-1) give <10 ms cross‑region reads and automatic multi‑AZ durability.  
4. A lightweight **AWS Lambda** routing layer caches recent shard mappings in ElastiCache Redis, reducing lookup latency to <2 µs.  

I added a *fallback read‑through* that writes to Aurora on cache miss, ensuring eventual consistency while keeping write amplification minimal.

**Result**  
- Throughput rose from 1.5k TPS to 12k TPS (8×).  
- Latency dropped from 350 ms to <30 ms for 99th percentile queries.  
- Operational cost fell by 35 % due to Aurora’s pay‑as‑you‑go model.

**Reflection**  
I practiced *Ownership* by owning the end‑to‑end migration, *Dive Deep* by profiling CPU and I/O bottlenecks, and *Bias for Action* by prototyping sharding in a test cluster before production rollout. The key learning: always validate shard cardinality early; an ill‑chosen key can negate scalability gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
