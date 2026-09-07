---
qid: ing_18e2963bb0__aws__local
question: 'Explain: Practical Rules of Thumb — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 473
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:15-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was tasked to redesign the recommendation engine for a global e‑commerce platform that served 12 M active users daily. The monolithic model store hit latency spikes during flash sales—response times jumped from 120 ms to >600 ms, hurting conversion rates.

**Action & Design (Dive Deep + Ownership)**  
I introduced **horizontal sharding** of the ML feature vectors by user segment and geography.  
* **Shard key:** `user_id % N` where *N* is the number of shards, tuned for even distribution.  
* **AWS services:**  
  - **Amazon DynamoDB** for low‑latency per‑shard storage (partitioned tables).  
  - **Amazon S3 + AWS Glue** for nightly model updates, with **SageMaker Pipelines** orchestrating re‑training per shard.  
  - **Elastic Load Balancer + Lambda@Edge** to route inference requests to the nearest shard, ensuring sub‑200 ms latency.

*Scalability*: Each shard scales independently; we added an extra shard every time traffic exceeded 1.5× its peak.  
*Availability*: DynamoDB’s multi‑AZ replication guarantees <0.01% downtime.  
*Cost*: Sharding reduced write amplification by 40%, cutting DynamoDB throughput costs from $12k/month to $7k/month.

**Result (Deliver Results)**  
Post‑deployment, average inference latency dropped to **95 ms**, and conversion rates during high‑traffic events improved by **17%**. The system handled a 3× traffic surge without performance degradation.

**Bar‑raiser takeaways**  
* I owned the full lifecycle—requirements, sharding strategy, cost analysis, monitoring.  
* Dive deep into data distribution patterns to set shard boundaries.  
* Quantified impact (latency, conversion, cost) and iterated based on real metrics.  
* Learned that over‑sharding can hurt consistency; we kept a global “hot‑key” cache for the top 1% of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
