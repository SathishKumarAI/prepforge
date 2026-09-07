---
qid: ing_1862df3692__aws__local
question: 'Explain: Interviewer — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 528
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:44-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a real‑time presence service that powers live chat for an e‑commerce marketplace. The old monolith was hitting 1 M concurrent users, but latency spiked to 250 ms during flash sales and we lost ~5% of revenue due to dropped sessions.

**Action (Design)**  
* **Architecture** – Event‑driven microservices on **Amazon ECS/Fargate** with a global API Gateway.  
* **Presence state** stored in **DynamoDB Global Tables** (single‑write, multi‑region) for sub‑100 ms read latency and zero‑downtime failover.  
* **Pub/Sub** via **SNS + SQS FIFO** to guarantee ordering of status changes; a **Kinesis Data Stream** feeds analytics for churn prediction.  
* **Cache layer**: **ElastiCache Redis** (clustered) for quick “is online” checks, auto‑scaled by CloudWatch alarms.  
* **Scalability & cost** – Auto‑scaling on CPU/Memory + request burst; Spot Instances reduce compute costs by 30%.  
* **Availability** – Multi‑AZ deployment, health checks, and a fallback Lambda that writes to DynamoDB if the primary service fails.

**Result**  
Latency dropped from 250 ms to <80 ms under peak load. Concurrent user support grew from 1 M to 5 M with no outage. Revenue impact: +3% in high‑traffic periods, translating to ~$2 M incremental profit annually.

**Leadership Principles Reflected**  
* **Customer Obsession** – We measured the direct revenue loss of latency spikes and engineered a solution that directly improved user experience.  
* **Ownership & Dive Deep** – I drove the entire stack redesign, performed cost‑benefit analysis on each AWS service, and iterated until metrics met our SLA.

**What a bar‑raiser looks for**  
* Clear ownership (I led all stakeholder discussions).  
* Quantified impact (latency numbers, revenue lift).  
* Deep dive into trade‑offs: why DynamoDB over RDS, why Fargate over EC2.  
* Learning from failure – the initial monolith failed under load; we used that as a data point to justify the new architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
