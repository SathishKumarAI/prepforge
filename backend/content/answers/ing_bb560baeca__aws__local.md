---
qid: ing_bb560baeca__aws__local
question: 'Explain: Dynamic targeting — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 435
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:20-05:00'
sources: []
---

**Dynamic Targeting – Pub/Sub Messaging on AWS**

*Situation:* While leading a campaign‑automation team at my previous company, we needed near‑real‑time audience segmentation for dynamic ad delivery. Existing batch jobs introduced 30‑minute latency, hurting conversion rates.

*Task:* Design a scalable, fault‑tolerant messaging layer that pushes user‑event data to downstream targeting services instantly.

*Action:* I architected an **Amazon SNS → Amazon SQS** pipeline:
- **SNS topics** publish granular events (clicks, page views) from edge servers.  
- **SQS standard queues** decouple producers and consumers, providing at‑least‑once delivery and built‑in retry.  
- Lambda functions poll SQS, enrich payloads with user profile data stored in DynamoDB, then forward to an **Amazon Kinesis Data Streams** shard for real‑time analytics.

Key decisions:
| Service | Why |
|---------|-----|
| SNS | Low‑latency fan‑out to many consumers (targeting engines). |
| SQS | Decoupling, back‑pressure handling, cost‑effective burst buffering. |
| Lambda | Zero‑ops scaling; pay per invocation. |
| Kinesis | Sub‑second analytics and real‑time dashboards. |

*Result:* We reduced targeting latency from 30 min to < 5 s, increased click‑through rate by **18%**, and cut infrastructure cost by **22%** compared with the legacy batch system.

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Delivered instant personalization that directly boosted revenue.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility for data flow, tuned CloudWatch metrics to preempt failures.  

*Bar‑raiser takeaway:* The answer demonstrates ownership (full pipeline design), deep technical dive (service trade‑offs), quantified impact (metrics), and continuous learning (iterative latency reduction).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
