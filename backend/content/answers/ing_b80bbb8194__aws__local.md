---
qid: ing_b80bbb8194__aws__local
question: 'Explain: Step 1: Notification Request Creation — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 443
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:21-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our notification engine for a fintech app that sends millions of alerts daily. The goal was to reduce latency from 400 ms to under 100 ms while keeping costs <15% of current spend.

**Action**  
*Customer Obsession & Ownership* – I mapped user journeys, identified critical “do‑not‑miss” events (e.g., overdraft alerts) and set a SLA of 90 th percentile <100 ms.  
*Dive Deep* – Built a stateless **Notification Service** on **AWS Lambda** triggered by **Amazon EventBridge** events. Each event carries a payload with user ID, message type, and channel preferences.  
Lambda writes to a **DynamoDB Global Table** (replicated in us‑east‑1 & eu‑central‑1) for eventual consistency; DynamoDB Streams push to an **SQS FIFO** queue that feeds a **Kinesis Data Firehose** stream into **Amazon SNS** topics per channel (SMS, Push, Email).  
*Bias for Action* – Deployed the stack via CloudFormation with automated Canary releases. Added **AWS X-Ray** traces to surface bottlenecks; we saw 3× faster cold starts by enabling Lambda Provisioned Concurrency for hot paths.

**Result**  
Latency dropped from 400 ms to 78 ms (95th percentile). Daily notification throughput increased from 2M to 5M without a budget spike—cost rose only 12% due to the efficient use of DynamoDB On‑Demand and SQS Short‑Lived queues.  

**Learning & Trade‑offs**  
We traded eventual consistency for speed; users accepted a 1–2 s window for non‑critical updates. Future work: add **DAX** caching for high‑frequency “do‑not‑miss” messages to hit sub‑10 ms latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
