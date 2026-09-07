---
qid: ing_368205907a__aws__local
question: 'Explain: Improve response time — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 501
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:48-05:00'
sources: []
---

**Situation** – I was leading a team that built a global e‑commerce catalog service. Our read latency hit **400 ms** during peak traffic (3 k QPS per region) because all product rows lived in one RDS instance, causing CPU saturation and lock contention.

**Task** – Reduce average response time below **200 ms** while keeping cost predictable and ensuring zero data loss.

**Action** –  
1. Adopted *database sharding* (horizontal partitioning) based on `category_id`.  
2. Migrated each shard to an independent Aurora Serverless cluster, managed by **AWS Auto Scaling** and **Aurora Global Database** for cross‑region reads.  
3. Added a lightweight **ElastiCache Redis** layer as a read cache for hot items (≈ 70 % hit rate).  
4. Implemented a *shard router* in the API gateway that resolves `category_id` → shard endpoint using a simple hash table stored in DynamoDB.

**Result** – Latency dropped from **400 ms** to **115 ms** (71 % improvement) under 10× traffic, and CPU utilization fell below 20 %. Operational cost grew only 12 % because each shard ran at the right size. The design scales horizontally: adding a new category simply spins up a new Aurora instance.  

---

### Why sharding works  
* **Scalability** – distributes load across many nodes; no single point of contention.  
* **Availability** – if one shard fails, others remain online (no single‑point outage).  
* **Cost** – pay per shard; idle shards can be shut down during low demand.

### Bar‑raiser signals  
* Ownership: I owned the migration and post‑deployment monitoring.  
* Dive deep: I profiled lock contention, CPU spikes, and cache hit ratios to pinpoint bottlenecks.  
* Quantified impact: 71 % latency reduction, 12 % cost increase, 0 data loss.  
* Learning from failure: Early attempts with a shared RDS cluster caused deadlocks; moving to independent shards eliminated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
