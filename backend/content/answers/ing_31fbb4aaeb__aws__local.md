---
qid: ing_31fbb4aaeb__aws__local
question: 'Explain: Live Notifications — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:59-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of a real‑time notification service for a global e‑commerce platform that sends order status updates to millions of users in real time. The requirement was to push messages with < 200 ms latency while keeping operational costs below 15 % of our existing batch‑processing budget.

**Action – Technical Design**  
I chose **WebSockets** because they keep a single TCP connection open, eliminating the round‑trip overhead of HTTP polling and enabling true “push” semantics.  
- **AWS services**:  
  * **API Gateway WebSocket API** – handles connection management at scale (10 M concurrent connections).  
  * **Lambda** – processes incoming events from DynamoDB Streams and writes to an Amazon Kinesis Data Stream for downstream enrichment.  
  * **Amazon DynamoDB** – stores user subscription metadata with TTL to keep the table lean.  
  * **AWS AppConfig** – toggles feature flags without redeploying.  

I introduced a **dedicated “notification micro‑service”** that batches messages per topic, uses Amazon SQS FIFO for ordering guarantees, and leverages **Amazon CloudWatch metrics** (latency, error rate) to auto‑scale Lambda concurrency.

**Result**  
Latency dropped from 1.2 s (polling) to < 200 ms, and the new system handled a peak of 12 M messages per hour with a 20 % reduction in infrastructure spend. The feature increased user engagement by 9 % within two weeks of launch.

**Leadership Principles**  
- **Customer Obsession** – delivering instant updates improved customer trust.  
- **Ownership & Dive Deep** – I owned the end‑to‑end flow, debugged a subtle race condition that caused message duplication, and documented the fix for future teams.  

*Bar‑raiser takeaway*: Demonstrated ownership, deep technical reasoning, quantifiable impact, and learning from a failure (race condition).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
