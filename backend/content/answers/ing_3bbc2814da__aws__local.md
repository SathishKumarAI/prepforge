---
qid: ing_3bbc2814da__aws__local
question: 'Explain: The Problem with Modulo Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 540
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:26-05:00'
sources: []
---

**Situation (S)**  
I was leading a migration of our recommendation engine from an on‑premise cluster to Amazon ECS + Fargate. The old system used **modulo hashing** (`key % N`) to shard user profiles across 32 nodes. After the shift, we saw 27 % more cache misses and latency spiked by 3× during peak traffic.

**Task (T)**  
Identify why modulo hashing broke at scale, design a new sharding scheme that keeps data locality, and implement it on AWS with minimal downtime.

**Action (A)**  

| Step | What I did | Leadership Principle |
|------|------------|-----------------------|
| 1️⃣ **Dive Deep** | Logged per‑node traffic; discovered hotspots: certain user IDs landed in a handful of shards because `user_id % 32` was highly skewed. | Dive Deep |
| 2️⃣ **Ownership & Bias for Action** | Proposed *consistent hashing* with virtual nodes (100 per physical instance). Implemented via the open‑source `hashring` library, wrapped in a microservice. | Ownership, Bias for Action |
| 3️⃣ **Design** | • **Service:** DynamoDB for profile metadata (auto‑scaling, 99.999 % SLA).<br>• **Cache Layer:** ElastiCache Redis cluster with partitioning based on consistent hash buckets.<br>• **Routing Service:** Lambda@Edge to map request keys → cache shard. | Invent & Simplify |
| 4️⃣ **Scalability & Cost** | Virtual nodes spread writes evenly; each node can handle ~5 k requests/sec. Estimated cost: $0.12/hr for Redis + $0.03/hr for Lambda, a 30 % reduction vs the old 32‑node EC2 setup. | Deliver Results |
| 5️⃣ **Failover & Availability** | Configured Auto Scaling Groups for hash nodes; used CloudWatch alarms to trigger node replacement on high latency. | Customer Obsession |

**Result (R)**  
- Latency dropped from 320 ms to 95 ms (−70 %) during peak hours.<br>- Cache hit rate improved from 58 % to 92 %.<br>- Operational cost fell by 32 % in the first quarter.  

*Lesson Learned*: Modulo hashing is brittle under uneven key distributions; consistent hashing with virtual nodes provides graceful scaling and fault tolerance—critical for customer‑facing services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
