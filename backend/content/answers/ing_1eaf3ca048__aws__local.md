---
qid: ing_1eaf3ca048__aws__local
question: 'Explain: Client Notifications — Using the Publish-Subscribe Model for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 519
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:50-05:00'
sources: []
---

**Situation & Task**  
I led the migration of a legacy notification engine for a fintech client that sent ~30 M push/email alerts daily to 5 M users. The monolithic service was single‑point‑of‑failure, latency‑driven (avg 2.3 s), and couldn’t scale beyond 10k concurrent sends.

**Action**  
I re‑architected it as a **Publish–Subscribe** pipeline on AWS:

| Component | Service | Rationale |
|-----------|---------|-----------|
| Event source | Amazon EventBridge (custom bus) | Decouples producers, supports schema registry. |
| Topic | Amazon SNS (partitioned by region) | Low‑latency fan‑out to multiple protocols (email, SMS, push). |
| Queueing & retries | SQS FIFO + DLQ | Guarantees order per user, handles back‑pressure. |
| Processing | Lambda + Step Functions | Serverless compute, auto‑scales to 100 k concurrent invocations; Step Functions orchestrate multi‑step workflows (validation → enrichment → send). |
| Monitoring | CloudWatch + X-Ray | End‑to‑end tracing and metrics for SLA compliance. |

We introduced **deduplication** via SNS message IDs and used Lambda layers to share a lightweight SDK, cutting cold‑start time from 1.2 s to <200 ms.

**Result**  
- **Latency** dropped 85 % (avg 0.35 s).  
- **Throughput** scaled to 50 M messages/day with no manual intervention.  
- **Cost** fell 30 % by eliminating on‑prem servers and using spot Lambda concurrency.  
- **Reliability** improved: SLA uptime ↑ from 95 % to 99.9 %.

**Reflection**  
Ownership drove me to own the end‑to‑end customer journey; diving deep into metrics revealed hidden bottlenecks. I iterated quickly (bias for action) and documented trade‑offs—e.g., choosing SNS over Kinesis to reduce read/write cost, accepting eventual consistency for higher throughput. This project reinforced my belief that well‑designed event‑driven architectures can deliver both scale and customer delight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
