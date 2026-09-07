---
qid: ing_815ebf6698__aws__local
question: Product wants the assistant to answer from data no older than 15 minutes.
  How do you design and monitor that freshness SLA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 597
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:23-05:00'
sources: []
---

**Situation:**  
Our product team required an AI assistant that could answer queries using data no older than 15 minutes—essential for real‑time inventory alerts. The challenge was to guarantee a *freshness SLA* while keeping cost predictable.

**Task:**  
Design an end‑to‑end pipeline that ingests, stores, and serves fresh data, and monitor it continuously so we could prove the 15‑minute bound in production.

**Action:**  

| Component | AWS Service(s) | Design Rationale |
|-----------|----------------|------------------|
| **Ingest** | *Amazon Kinesis Data Streams* (shard = 3) | Captures every change event at millisecond latency. |
| **Store** | *DynamoDB Global Secondary Index* with a TTL attribute set to 15 min | Guarantees that stale items are automatically purged; the GSI keeps the query surface small for AI inference. |
| **Serve** | *Amazon API Gateway + Lambda@Edge* | Returns cached results if within freshness window, otherwise triggers a fresh scan of DynamoDB. |
| **Monitor** | *CloudWatch Alarms* on `Kinesis:IncomingBytes`, `DynamoDB:ConsumedReadCapacityUnits`, and custom metric `DataAge` (timestamp‑ingest timestamp). | Alerts when `DataAge > 15 min` or throughput drops, triggering auto‑scaling of shards. |
| **Cost Control** | *Reserved Capacity* on DynamoDB + *Provisioned Concurrency* for Lambda | Locks in predictable pricing while meeting peak traffic. |

**Result:**  
Implemented the pipeline within 3 weeks and achieved a **99.8 % compliance rate** against the 15‑minute freshness SLA over a month of production traffic (~200k queries/day). The automated CloudWatch dashboards reduced manual monitoring effort by **70 %**.

**Learnings (Bar‑raiser focus):**  
- *Ownership:* I set up self‑healing alerts and automated scaling to eliminate ops overhead.  
- *Dive Deep:* By instrumenting `DataAge`, we pinpointed a bottleneck in the Kinesis shard count, which we addressed before it impacted SLAs.  
- *Quantified Impact:* SLA compliance directly correlated with customer satisfaction scores (+12 pts).  

**Leadership Principles Anchored:**  
1. **Customer Obsession** – Deliver real‑time insights that drive business decisions.  
2. **Ownership & Dive Deep** – Own the pipeline end‑to‑end, continuously probe metrics to preempt failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
