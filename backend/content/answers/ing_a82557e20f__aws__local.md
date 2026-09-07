---
qid: ing_a82557e20f__aws__local
question: 'Explain: Lambda Architecture — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 524
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:05-05:00'
sources: []
---

**Situation / Task**  
In a prior role I was asked to design a real‑time distributed counter for an ad‑tech platform that served 3 M page views per second. The requirement was sub‑second latency, 99.9% availability, and cost containment while still allowing historical analytics.

**Action – Design & AWS Services**  
I chose a **Lambda Architecture** with three layers:

| Layer | Purpose | Key AWS Services | Rationale |
|-------|---------|------------------|-----------|
| Batch (Batch‑Layer) | Persist all raw events for replay and deep analytics. | *Amazon S3* + *AWS Glue* ETL + *Redshift* | Durable, cheap storage; fast query via Redshift Spectrum. |
| Speed (Speed‑Layer) | Real‑time counter updates. | *Kinesis Data Streams* → *Lambda* → *DynamoDB Global Tables* | Kinesis guarantees ordering per partition; Lambda scales automatically; DynamoDB gives single‑digit ms reads/writes and multi‑region replication for availability. |
| Serving (Serving‑Layer) | Expose counters to downstream services/APIs. | *Elasticache Redis* + *API Gateway* | Redis holds hot counters with 1 ms TTL, API Gateway provides throttling and caching. |

**Dive Deep – Data‑driven Impact**  
- **Latency:** 50 ms average for counter read/write (measured via CloudWatch metrics).  
- **Throughput:** Handled 3.2 M events/s on Kinesis with a single shard per 1 M events, scaling to 4 shards during peak.  
- **Cost:** $0.18 per GB stored in S3; DynamoDB write capacity 10 WCU/second (≈$0.25/month); overall monthly cost ~$5K versus a monolithic solution at ~$12K.  

**Result & Learning**  
The system reduced counter‑query latency from 1 s to 50 ms, increased throughput by 200%, and cut costs by 60%. I documented failure scenarios (e.g., Kinesis shard overflow) and implemented automated scaling via CloudWatch alarms—showing *Ownership* and *Bias for Action*.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster insights to the ad‑tech team.  
- **Dive Deep & Ownership:** Designed end‑to‑end, monitored every layer, and iterated on failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
