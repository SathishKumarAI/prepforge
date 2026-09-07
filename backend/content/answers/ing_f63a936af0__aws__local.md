---
qid: ing_f63a936af0__aws__local
question: What Is Pub/Sub? — Pub/Sub | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:49-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** I was tasked to design a real‑time recommendation pipeline for an e‑commerce platform that handled 4 M page views per day and required sub‑second latency.  
> **Task:** Build a decoupled, fault‑tolerant event stream so that new user actions immediately trigger model inference without blocking the web service.  
> **Action:** I chose **Amazon SNS + SQS** as the core Pub/Sub pattern.  
> * **Publisher (Web tier):** Publishes JSON events (`user_id`, `action_type`) to an SNS topic in < 1 ms.  
> * **Subscriber (ML micro‑service):** An SQS queue pulls messages with a visibility timeout of 30 s, ensuring at‑least‑once delivery. The worker pool scales via ECS Fargate, auto‑scaling on the queue depth.  
> * **Reliability:** SNS supports fan‑out to multiple queues; dead‑letter queues capture malformed events for debugging.  
> * **Cost & Scale:** At 4 M messages/day, SNS charges ~$0.20/million publishes and SQS $0.40/million receives—well below the budgeted $50/month.  
> * **Result:** Latency dropped from 350 ms to < 70 ms (80% reduction), throughput increased by 120%, and ops incidents fell by 90%.  

**Leadership Principles Highlighted**

- **Ownership & Deliver Results:** Took full responsibility for end‑to‑end latency and cost control.  
- **Dive Deep & Bias for Action:** Analyzed metrics, iterated on queue depth thresholds, and deployed the solution in under 48 h.

**What a Bar‑raiser Looks For**

- Concrete numbers (latency, cost).  
- Clear trade‑offs (SNS fan‑out vs. direct SQS, Fargate vs. EC2).  
- Evidence of learning: I noted that initial visibility timeout caused duplicate inference; after tuning it to 45 s we eliminated reprocessing overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
