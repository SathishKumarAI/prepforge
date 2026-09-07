---
qid: ing_79d18c7296__aws__local
question: How does pub/sub messaging work? — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 526
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:23-05:00'
sources: []
---

**Answer – Amazon‑style**

**Situation (S)**  
At my previous company we had a real‑time analytics pipeline that ingested clickstream data from millions of users. The existing monolithic batch jobs caused stale reports and high latency.

**Task (T)**  
I was tasked to redesign the ingestion layer so that downstream services could subscribe to events in near real‑time, without tight coupling or manual scaling.

**Action (A)**  

1. **Define requirements** – 10 k events/sec, 99.999% durability, eventual consistency for analytics.  
2. **Design** – Use **Amazon SNS** as the publish hub; each microservice subscribes via **SQS** queues. SNS fan‑out guarantees at least once delivery; SQS provides durable buffering and visibility timeouts for retry logic.  
3. **Scalability & Availability** – SNS scales automatically to >1 M messages/sec, SQS is multi‑AZ and auto‑scales with the number of consumers.  
4. **Cost & Trade‑offs** – 10 k msg/s ≈ $0.50/month for SNS + $0.40/month for SQS (based on 30 GB payload). We accepted eventual consistency over strict ordering to keep costs low.  
5. **Monitoring** – CloudWatch metrics (`NumberOfMessagesPublished`, `ApproximateNumberOfMessagesVisible`) fed into an automated alert that triggered a Lambda auto‑scaling policy for consumer EC2 instances.

**Result (R)**  
Latency dropped from 15 min batch windows to <200 ms event propagation, and our real‑time dashboards saw a 35% reduction in data lag. Monthly costs were under $1,000—below the legacy pipeline’s $3,500/month.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered fresher insights for product managers.  
- **Ownership & Dive Deep** – Designed end‑to‑end solution, tuned metrics, and iterated on cost vs reliability trade‑offs.  

Bar‑raiser focus: I demonstrated ownership by taking full responsibility for the redesign, dove deep into AWS service limits to justify design choices, quantified impact with clear latency and cost savings, and learned from an earlier failure where we over‑provisioned SNS topics without monitoring visibility timeouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
