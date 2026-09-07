---
qid: ing_d3afd6678a__aws__local
question: 'Explain: Step 8: Sending the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 532
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:10-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup we needed to notify 1 M daily users when their credit‑score model flagged a risk event. The notification had to be real‑time, GDPR‑compliant, and cost‑effective.

**Action**  
I architected a **serverless Notification Service** using:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Event ingestion | Amazon Kinesis Data Streams (1 MB/s) | Low latency, auto‑scaling |
| Processing & enrichment | Lambda + DynamoDB Global Tables | Stateless compute; multi‑region for 99.99% availability |
| Queueing | Amazon SQS FIFO | Guarantees order and exactly‑once delivery |
| Delivery | SNS + Pinpoint (email/SMS/Push) | Multi‑channel, per‑user preference routing |
| Auditing & retries | CloudWatch Logs + DLQ | Full observability; exponential back‑off retry policy |

**Design Decisions**

* **Scalability** – Kinesis shards auto‑scale with traffic spikes; Lambda concurrency is throttled by SQS visibility timeout.  
* **Availability** – Global Tables keep user preferences in sync across us-east-1 and eu-west-1; SNS topics are region‑redundant.  
* **Cost** – Serverless eliminates idle servers; we paid <$5 k/month vs $120 k for a VM cluster.  
* **Trade‑offs** – We chose Lambda over EC2 to avoid maintenance, accepting cold‑start latency (~300 ms) which is acceptable for non‑critical alerts.

**Result**  
Within two weeks of launch:

- 99.97% on‑time delivery (vs the target 99.9%)  
- 30 % reduction in infrastructure spend compared to legacy batch jobs  
- User satisfaction score ↑ 15 points (NPS from 45 to 60)

**Reflection**  
I owned the post‑mortem, identified a misconfigured DLQ that caused a silent loss of ~2 k messages during peak traffic, and added automated alerts for DLQ size. This deep dive reinforced our **Ownership** and **Dive Deep** principles.

---

*Bar‑raiser cues*: clear ownership narrative, quantified impact, AWS service rationale, trade‑off discussion, learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
