---
qid: ing_97649f519c__aws__local
question: 'Explain: Operational Considerations — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 394
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:10-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a real‑time recommendation engine that served > 200 M requests/day. The backend used a sharded cache for model artefacts; however, the key distribution was uneven, causing hot nodes and 4× higher latency on peak hours.

**Action**  
I proposed replacing the naïve round‑robin shard mapping with **consistent hashing** so that each node would own a contiguous range of hash buckets. I implemented this in a Lambda layer that ran inside our ECS Fargate containers, using AWS SDK to query DynamoDB for the current bucket–node map and S3 for model artefacts.  
*Key design choices:*  
- **DynamoDB** (partition key = bucket) as the single source of truth – ACID guarantees, auto‑scaling read capacity.  
- **S3** for immutable model objects – low cost, high durability.  
- **AWS CloudWatch** metrics to trigger an Auto Scaling policy when a node’s cache hit ratio fell below 95%.  

**Result**  
After rollout the cache hit ratio improved from 82 % to 96 %, reducing average latency from 350 ms to 120 ms (‑65 %) and cutting EC2 costs by **18 %** due to fewer overprovisioned nodes.  

**Reflection**  
This project taught me that *Ownership* means owning the full end‑to‑end flow: from design, through deployment, to monitoring and iteration. I “dive deep” into the metrics that mattered (hit ratio, latency) and used them to drive a measurable outcome—exactly what Amazon expects from a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
