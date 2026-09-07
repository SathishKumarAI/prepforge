---
qid: ing_31829e4e4c__aws__local
question: 'Explain: 5.3 Reliability — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 592
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:03-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that built the core notification engine for a global fintech app used by 12 M daily active users. The system had to push transactional emails, SMS and in‑app alerts with 99.999% availability while keeping latency under 200 ms per request. Failure meant loss of revenue and regulatory risk.

**Action – Design & AWS Stack**  
1. **API Gateway + Lambda** – Expose a REST endpoint that ingests events; Lambda parses the payload and writes to **DynamoDB** (partition key = user‑id, sort key = timestamp).  
2. **Event Deduplication** – DynamoDB’s conditional writes prevent duplicate notifications.  
3. **Fan‑out with SNS + SQS FIFO** – Each message triggers an SNS topic that pushes to two FIFO queues: `EmailQueue` and `SMSQueue`.  
4. **Worker Lambdas** (scale‐by‑event) poll the queues, call external provider APIs, and update status in DynamoDB.  
5. **Dead‑Letter Queue & Retry Policy** – Messages that fail >3 times go to a DLQ; we run a nightly batch Lambda to surface SLA breaches.  
6. **Observability** – CloudWatch metrics (`DeliverySuccessRate`, `QueueDepth`) feed an Alarms dashboard; Lambda logs go to X-Ray for trace latency.

**Result**  
- 99.9997% availability during the first year of production (downtime <0.5 min).  
- Average end‑to‑end latency dropped from 350 ms to 140 ms, improving conversion by **4 %** on transactional flows.  
- Cost saved: moving from EC2‑based workers to Lambda/SQS reduced infra spend by **$120K/yr**.

**Reflection & Learning**  
I owned the post‑mortem of a 48 h outage caused by an unhandled provider timeout; we added exponential back‑off and circuit breakers. This reinforced *Ownership* and *Dive Deep*: inspecting logs, tracing failures, and iterating on the retry logic.  

> **Leadership Principles Anchored**  
- **Customer Obsession** – Ensured users always received timely alerts.  
- **Ownership** – Took end‑to‑end responsibility for reliability and cost.  
- **Dive Deep** – Diagnosed root causes and tuned system parameters.  
- **Bias for Action** – Deployed the scalable design within 3 sprints, not months.  

This experience demonstrates how to architect a highly reliable notification service that balances performance, cost, and operational simplicity on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
