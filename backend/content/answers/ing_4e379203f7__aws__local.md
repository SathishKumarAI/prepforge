---
qid: ing_4e379203f7__aws__local
question: 'Explain: SMS Processor — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 493
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:14-05:00'
sources: []
---

**Situation / Task (S)**  
At my previous role I led a project to replace an on‑prem SMS gateway that was failing to deliver 4 M+ daily messages during peak traffic. The goal was to build a cloud‑native, fault‑tolerant notification service that guaranteed >99.9% delivery with cost ≤ $0.05 per message.

**Action (A)**  
I owned the end‑to‑end solution:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingestion & throttling | **Amazon Kinesis Data Streams** (shards × 10) | Handles burst > 200 k msg/s with replayability. |
| Processing & routing | **AWS Lambda + Step Functions** | Serverless, scales to 50 k concurrent invocations; stateful workflow for retries. |
| SMS provider integration | **Amazon SNS SMS** (with fallback to Twilio via API Gateway) | Native cost control and regional compliance. |
| Monitoring & alarms | **CloudWatch + X-Ray** | End‑to‑end latency < 250 ms, 99th percentile < 500 ms. |

I implemented exponential back‑off retry logic, per‑region dead‑letter queues, and a “blacklist” DynamoDB table to avoid spam loops. The system was tested with chaos engineering (fault injection) to validate resilience.

**Result (R)**  
After launch:  
- **Delivery rate:** 99.97% vs 93% pre‑migration.  
- **Cost:** $0.042/msg, a 16 % reduction over legacy.  
- **Latency:** Avg 180 ms, 25 % faster than SLA.

**Leadership Principles Anchored**  
*Customer Obsession* – ensured every user received timely alerts.  
*Ownership* – drove the project from concept to production, iterating on feedback loops.

**Bar‑raiser cues I heard**: clear ownership, deep dive into trade‑offs (Kinesis vs SQS), quantified impact, and lessons learned when initial retry logic caused message duplication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
