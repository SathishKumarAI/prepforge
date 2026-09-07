---
qid: ing_b792d38f04__aws__local
question: 'Explain: Superior performance at scale — MongoDB Search: Scalable Full-Text
  Search | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 415
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:58-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑science squad at a media company, our recommendation engine was bottlenecked by an on‑prem MongoDB cluster that could’t handle > 5 M concurrent search queries during peak traffic. The goal: deliver sub‑200 ms full‑text responses at scale while keeping ops costs under 30 % of the legacy solution.

**Action – Design & Execution**  
1. **Architectural shift to Amazon Managed MongoDB Atlas on AWS** – leveraged Atlas’s *Search* feature (powered by Lucene) and auto‑scaling shards.  
2. Built a **search API layer** in Node.js, containerized with ECS Fargate, auto‑scaled via Application Load Balancer health checks.  
3. Implemented **index partitioning** by content type; each shard stored only relevant fields, cutting index size 4×.  
4. Added **query caching** in ElastiCache Redis (cluster mode), achieving a cache hit rate of 87 %.  
5. Monitored with CloudWatch and set up an automated rollback to the previous cluster if latency > 300 ms.

**Result**  
- Latency dropped from 1.2 s to **180 ms** for 95th percentile queries.  
- Peak throughput increased from 2 k QPS to **12 k QPS** (6×).  
- Operational cost fell by **35 %**, freeing $120K/yr for feature work.

**Reflection & Learning**  
I owned the failure of our initial naive scaling attempt and *dived deep* into MongoDB’s search internals. I learned that a hybrid architecture—combining managed services, caching, and fine‑grained indexing—delivers both performance and cost efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
