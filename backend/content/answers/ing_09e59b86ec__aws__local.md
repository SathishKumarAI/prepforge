---
qid: ing_09e59b86ec__aws__local
question: 'Explain: 5.6 Archiving Old Data — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 655
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:29-05:00'
sources: []
---

**Situation (S)**  
In a data‑lake project for a SaaS analytics platform, we had to archive raw event streams older than 90 days while keeping the ability to trigger downstream jobs (e.g., nightly aggregations). The system required *low latency*, *high durability*, and *cost efficiency* as the dataset grew to > 500 TB.

**Task (T)**  
Design a notification service that:
1. Detects when data becomes eligible for archiving.
2. Publishes a message to trigger archival pipelines.
3. Guarantees at‑least‑once delivery, idempotency, and auditability.

**Action (A)**  
*Requirements & Design*  
- **Event source:** S3 object lifecycle transitions fire a *PutObjectTagging* event.  
- **Notification hub:** AWS SQS FIFO queue (`archive-notifications.fifo`) to preserve ordering per bucket.  
- **Processing component:** Lambda function (`ArchiveTriggerLambda`) triggered by the queue, idempotently records each key in DynamoDB (`ArchivedKeys` table) and writes a manifest to S3 (one manifest per day).  
- **Archival pipeline:** A Step Functions state machine orchestrates moving objects from S3 Standard to Glacier Deep Archive using `CopyObject`.  
- **Monitoring & Auditing:** CloudWatch metrics on queue depth, Lambda errors; SNS topic for SLA breaches.

*Scalability & Availability*  
- SQS FIFO guarantees exactly‑once delivery with 300 TPS per partition; we provision 10 partitions → 3 000 TPS.  
- DynamoDB autoscaling keeps latency < 20 ms at 1 M writes/day.  
- Step Functions provides retry/backoff and built‑in checkpoints.

*Cost & Trade‑offs*  
- SQS FIFO: $0.40 per million messages; cost ≈ $15/month for 5 M messages.  
- Lambda: < $0.20/month for 1 M invocations.  
- DynamoDB on-demand: ~$50/month at peak throughput.  
- Trade‑off: Using SNS instead of SQS would reduce latency but sacrifice ordering; not critical here.

**Result (R)**  
Implemented in 3 weeks, the system processed 6 TB/day of archival triggers with < 2 % failure rate. Cost dropped by **35 %** versus a legacy polling script. The team adopted this pattern across all data lakes, earning an internal “Data‑Ops Excellence” award.

---

### Leadership Principles Highlighted  
- **Ownership** – Took full responsibility for the end‑to‑end archival flow and cost optimization.  
- **Dive Deep** – Analyzed S3 event patterns, queue metrics, and DynamoDB latency to identify bottlenecks.  

### What a Bar‑Raiser Listens For  
- Clear articulation of *why* each AWS service was chosen (scalability, durability).  
- Quantified impact (cost savings, failure rate).  
- Evidence of learning: the move from polling to event‑driven architecture after observing 20 % SLA drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
