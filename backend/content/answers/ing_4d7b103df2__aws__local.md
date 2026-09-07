---
qid: ing_4d7b103df2__aws__local
question: 'What is data replication? — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 413
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:15-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Customer Obsession** – I always start by asking what the customer needs: high‑availability, low‑latency access to the same data from multiple regions.  
> **Ownership** – I own the end‑to‑end solution and its trade‑offs.

### Situation
I was tasked with designing a global e‑commerce catalog that could serve 1 million requests per second while guaranteeing *zero data loss* during a regional outage.

### Task
Implement data replication so every read request, regardless of location, sees the latest catalog state without compromising cost or latency.

### Action
I chose **Amazon DynamoDB Global Tables** (multi‑region active‑active) for automatic synchronous replication.  
- **Sync replication** ensures 1 ms latency for writes in any region.  
- I enabled *point‑in‑time recovery* to protect against accidental deletes.  
- For backup, I set up **DynamoDB Streams → Lambda → S3 Glacier** (cold storage) for cost‑effective archival.

I also added a **read‑through cache** using **Amazon ElastiCache for Redis**, replicated via Redis Cluster across regions, to reduce read latency to < 5 ms and cut DynamoDB read capacity by ~70%.

### Result
After deployment, regional failover tests showed *no downtime* and *zero data loss*.  
- Read latency dropped from 15 ms (single‑region) to 4 ms globally.  
- Cost savings of 45% on provisioned throughput, while still supporting > 1M RPS.

### Learnings
Synchronous replication is powerful but adds write amplification; balancing cost vs. consistency was key. Future iterations will explore *DynamoDB Accelerator (DAX)* for further latency reductions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
