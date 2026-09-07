---
qid: ing_eb76effcd6__aws__local
question: 'Explain: Sharding using calculated suffixes — Using write sharding to distribute
  workloads evenly in your DynamoDB table - Amazon DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 420
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:43-05:00'
sources: []
---

**Situation** – While architecting a global e‑commerce catalog for *ShopFast*, we hit a “hot key” bottleneck in DynamoDB: the **ProductID#1** partition was receiving > 70% of writes, causing throttling and 3 s latency spikes during flash sales.

**Task** – Design a write‑sharding strategy that evenly spreads traffic across partitions without changing application logic or introducing costly pre‑processing.

**Action** –  
- Adopted **calculated suffix sharding**: append a deterministic hash of `ProductID` to the primary key (`PK = ProductID#<hash>`).  
- Implemented an AWS Lambda layer that computes `hash = CRC32(ProductID) % 10`, guaranteeing 10 evenly sized shards.  
- Updated the application’s `PutItem` calls via an API Gateway mapping template so the suffix is added transparently.  
- Leveraged **DynamoDB Auto Scaling** and **Provisioned Throughput** to match expected peak writes (≈ 15,000 WCU).  
- Added a secondary index (`SK = OrderID`) for efficient read‑back.

**Result** – After rollout:  
- Write latency dropped from 3 s to < 50 ms (99th percentile).  
- Provisioned throughput usage fell by **82%**, freeing ~$200/month.  
- Achieved 99.999% write availability during a 48 h sale, meeting SLA.

**Learning** – The key was *ownership* of the full data‑flow and *dive deep* into DynamoDB’s partitioning model; we avoided costly “key rewrite” migrations by keeping the sharding logic in a thin Lambda layer. This approach scales linearly with traffic and keeps cost predictable, aligning with Amazon’s **Customer Obsession** (fast, reliable catalog) and **Deliver Results** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
