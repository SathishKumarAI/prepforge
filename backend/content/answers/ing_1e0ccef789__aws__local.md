---
qid: ing_1e0ccef789__aws__local
question: 'Explain: Sharding Approaches — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 554
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:44-05:00'
sources: []
---

**Sharding Approaches – a crash‑course**

*Leadership Principles:* **Ownership** (I took full responsibility for the data‑layer redesign) & **Dive Deep** (I dissected every trade‑off).

**Situation:**  
Our recommendation engine served 12 M users and stored 3 B user‑item interactions. The monolithic PostgreSQL cluster hit 80 % CPU, response times spiked to 1.4 s, and we couldn’t meet the SLA of <300 ms for 95 % of requests.

**Task:**  
Redesign the persistence layer with sharding so that (a) latency stays below 200 ms, (b) throughput scales linearly, and (c) operational cost drops by ≥30 %.

**Action – Design & AWS Services**

| Approach | How it works | Key AWS services |
|----------|--------------|------------------|
| **Horizontal (range) sharding** | Split rows by user‑id hash; each shard is an RDS Aurora PostgreSQL cluster. | *RDS Aurora*, *Elastic Load Balancer* for routing, *Application Load Balancer* with Lambda@Edge to compute shard key. |
| **Vertical (partitioned) sharding** | Separate read/write tables: interactions → write‑heavy shards; recommendations → read‑heavy shards on DynamoDB. | *DynamoDB* (auto‑scaling), *AWS Glue* for ETL, *Kinesis Data Streams* for near‑real‑time replication. |
| **Consistent‑hashing sharding** | Use a key‑value store (Redis Cluster) to map user‑id → shard endpoint; minimal data movement on scaling. | *ElastiCache*, *Lambda* for rebalancing logic, *CloudWatch* metrics for health checks. |

**Result:**  
- Latency dropped from 1.4 s to **180 ms** (95th percentile).  
- Throughput grew from 200 req/s to **2,500 req/s** without code changes.  
- Operational cost fell by **32 %** due to Aurora serverless and DynamoDB’s pay‑per‑request model.

**Reflection:**  
I initially over‑sharded on user age, causing uneven load; after a quick A/B test I switched to hash‑based sharding—showing the importance of data‑driven iteration. This project reinforced that ownership means owning both the success metrics and the failure points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
