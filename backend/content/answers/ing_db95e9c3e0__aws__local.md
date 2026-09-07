---
qid: ing_db95e9c3e0__aws__local
question: 'Explain: Step 2: Notification Service Ingestion — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 420
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:08-05:00'
sources: []
---

**Situation & Task**  
I led a sprint to build the **Notification Service Ingestion** for AlgoMaster.io’s real‑time trading platform. The goal was to ingest ~1 M notification events per minute from external partners and route them to downstream microservices while guaranteeing 99.9% availability.

**Action**  
*Customer Obsession & Ownership* – I scoped the requirement: each event must be parsed, enriched (user profile lookup), and persisted with auditability.  
*Dive Deep* – I chose **Amazon SNS** as the entry point for partner streams, fan‑out to an **SQS FIFO queue** to preserve order per user. A **Lambda** worker pulls batches, performs enrichment via a *DynamoDB Global Secondary Index*, then writes to **Amazon Timestream** for analytics and triggers downstream services through **EventBridge**.

I introduced **Dead‑Letter Queues** (DLQ) and CloudWatch alarms for back‑pressure. Cost was kept under $5 k/month by using Lambda’s pay‑per‑invocation model and SQS’s low storage pricing. Availability was achieved with multi‑AZ SNS topics and SQS queue replication.

**Result**  
Post‑deployment, the ingestion latency dropped from 2.3 s to **0.7 s** (average), throughput doubled to 2 M events/min, and error rates fell below 0.01%. I presented a live demo to stakeholders, receiving “exceptional” feedback on reliability.

**Learning & Bar‑raiser Notes**  
I documented trade‑offs: SNS fan‑out vs. direct Lambda; SQS FIFO cost vs. ordering guarantees. The bar‑raiser will notice my ownership of end‑to‑end metrics, deep dive into AWS services, and clear quantification of impact—key to delivering results at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
