---
qid: ing_33fe701946__aws__local
question: 'Explain: Benefits — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 589
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:36-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a recommendation engine that served 3 million daily users. The legacy monolith stored user‑item interactions in a single table; read latency hit 300 ms during peak hours, and we couldn’t scale without expensive horizontal sharding.

**Action**  
I proposed **vertical partitioning** (separating user profile data from interaction logs) and **horizontal partitioning** (sharding interactions by time window). Using Amazon DynamoDB tables for each shard and S3 for cold history, I built an ingestion pipeline on AWS Glue that batched hourly logs into Parquet files. For real‑time scoring I leveraged Amazon SageMaker endpoints behind API Gateway, with a Lambda layer to route requests based on the user hash.

**Result**  
Latency dropped from 300 ms to **45 ms** (90% reduction). The cost of DynamoDB read capacity units fell by **35 %**, while S3 storage saved us $12k/month. Because each shard could be replicated independently, we achieved **99.999% availability** with no single point of failure.

---

### Why Vertical vs Horizontal Partitioning Helps

| Aspect | Vertical (Schema) | Horizontal (Data) |
|--------|-------------------|--------------------|
| **Read/write isolation** | Separates hot writes from cold reads → lower contention | Distributes load across nodes → linear scaling |
| **Query flexibility** | Fewer columns per table → faster scans | Partition key drives locality, speeding range queries |
| **Cost control** | Smaller tables → cheaper storage & indexes | Shards can be on cheaper instance types or spot capacity |

---

### AWS Services & Trade‑offs

* **DynamoDB** – low‑latency key/value store; pay per request.  
* **S3 + Athena** – cost‑effective for analytics, but query latency is higher than DynamoDB.  
* **Glue / Lambda** – serverless ETL reduces ops overhead.  

I balanced *scalability* (sharding) with *availability* (DynamoDB auto‑replication) and *cost* (S3 cold storage). The design also left room for future “horizontal” scaling of the SageMaker inference cluster.

---

### Leadership Principles

* **Ownership** – I owned the end‑to‑end migration, from data modeling to deployment.  
* **Dive Deep** – Ran detailed latency profiling and cost analysis before deciding on partitioning strategy.  

The result was a measurable performance lift and cost savings that directly improved user experience—an embodiment of *Customer Obsession* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
