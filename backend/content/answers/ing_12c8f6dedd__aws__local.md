---
qid: ing_12c8f6dedd__aws__local
question: 'Explain: Sharding & Partitioning — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 494
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:51-05:00'
sources: []
---

**S – Situation**  
At my last role I led the redesign of a notification engine that served >30 M users daily. The monolith was hitting throttling limits during peak (2 k req/s) and had 4‑hour latency spikes, so we needed horizontal scale without breaking ACID guarantees.

**T – Task**  
Architect a sharded, partitioned service that delivers push/email notifications with <200 ms latency, 99.9% availability, and cost ≤$0.02 per notification.

**A – Action**  
1. **Shard by user ID hash** → each shard owns its own DynamoDB table (partition key = `user_id_hash`) so reads/writes stay local.  
2. **Partition within shards** using `notification_type` as a secondary index; this keeps high‑traffic types (push) isolated from bulk email writes.  
3. Deploy **AWS Lambda + Step Functions** per shard to process queues in parallel, backed by SQS FIFO for ordering guarantees.  
4. Use **Amazon SNS** for push and **SES** for email, both auto‑scaling with the shard’s load.  
5. Implement a *global* DynamoDB “metadata” table (partition key = `shard_id`) to route requests; keep it small (<10 GB) so read latency stays <5 ms.

**R – Result**  
- Latency dropped from 2 s to **<200 ms** for 99.8% of requests.  
- Throughput scaled to **10× peak (20 k req/s)** without additional ops overhead.  
- Operational cost fell by **35 %** due to reduced EC2 footprint and efficient Lambda billing.  

**Leadership Principles** – *Ownership* (I drove the end‑to‑end redesign), *Dive Deep* (analyzed shard distribution, DynamoDB provisioned throughput, and SQS FIFO behavior).  

**Bar‑raiser cues** – I quantified latency & cost savings, justified AWS service choices, showed trade‑offs between consistency vs. speed, and reflected on a failed earlier attempt where we sharded by region instead of hash—leading to hot‑spoting and higher costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
