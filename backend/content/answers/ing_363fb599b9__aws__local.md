---
qid: ing_363fb599b9__aws__local
question: 'Explain: Caching — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 433
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:22-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning a real‑time notification service that delivered push emails/ SMS to 10 M users daily while keeping latency <200 ms and cost <$50k/month.

**Action (Design)**  
1. **Event ingestion** – Kinesis Data Streams → Lambda for idempotent processing.  
2. **Caching layer** – ElastiCache‑Redis (partitioned, read replicas) to hold the 5 M most active user preferences; TTL 30 min eliminates repeated DB lookups.  
3. **Queueing & delivery** – SNS topics per channel; Lambda polls SQS and invokes SES/SMS APIs.  
4. **Monitoring** – CloudWatch metrics + X-Ray for end‑to‑end latency, alarms on >200 ms.

*Scalability*: Redis shards scale horizontally; Kinesis shards auto‑scale with traffic spikes.  
*Availability*: Multi‑AZ ElastiCache, SNS’s built‑in redundancy.  
*Cost*: 5 GB of hot data in Redis (~$1k/month) vs 10 M DynamoDB reads (~$4k/month).

**Result**  
- Latency dropped from 650 ms to **180 ms** (30% improvement).  
- Cost reduced by **70%** ($50k → $15k).  
- Delivery success rate hit **99.9%**.

**Leadership Principles**  
- *Customer Obsession*: Delivered a faster, cheaper experience for millions of users.  
- *Ownership*: Built end‑to‑end pipeline, handled monitoring & cost tuning.

**Bar‑raiser focus** – I quantified impact (latency, cost), dove deep into caching trade‑offs, and iterated after a 3‑day failure window that exposed stale data—learning led to TTL adjustments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
