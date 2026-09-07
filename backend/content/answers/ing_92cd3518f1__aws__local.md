---
qid: ing_92cd3518f1__aws__local
question: 'Explain: Multiple delivery protocols — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:09-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a migration of our real‑time analytics pipeline from an on‑prem queue to a cloud‑native event bus. The goal was to cut latency by 70 % and increase throughput to support a 3× rise in user events.

**Action – Pub/Sub Messaging**  
I chose **Amazon SNS + Amazon SQS** as the pub/sub backbone. Publishers (mobile SDKs, IoT devices) publish JSON messages to an SNS topic; each subscriber—an SQS queue for downstream workers, a Lambda function for alerts, and an EventBridge rule for archival—receives a copy.  
*Design rationale:*  
- **Scalability:** SNS scales automatically to millions of messages per second; each SQS queue can handle 120 000 req‑s/second with long polling.  
- **Availability:** All services are multi‑AZ and fully managed, giving us >99.9 % uptime without ops overhead.  
- **Cost:** We paid only for the messages published (≈$0.50 M per month) versus a 24/7 Kafka cluster (~$2 M).  
- **Trade‑offs:** Loose coupling comes at a slight delivery delay (≤5 s), acceptable for analytics but not for financial transactions.

**Result**  
Post‑migration, end‑to‑end latency dropped from 350 ms to 90 ms (−74 %). Throughput increased from 10k to 35k events/sec (+250 %), and we reduced ops spend by 60 %. The solution also enabled automated scaling of consumer Lambdas, eliminating manual capacity planning.

**Learning & Ownership**  
I documented the failure modes (e.g., message duplication) and implemented DLQs with CloudWatch alarms. This iteration taught me that *ownership* means anticipating edge cases and *dive deep* into metrics to drive continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
