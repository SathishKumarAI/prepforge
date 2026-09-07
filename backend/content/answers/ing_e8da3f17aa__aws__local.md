---
qid: ing_e8da3f17aa__aws__local
question: 'Explain: Scheduler Service — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 449
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:32-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked to replace a monolithic notification engine that sent millions of alerts per day. The goal: reduce latency by 40 % and cut operational cost by 30 %.  

**Action (A)**  
I proposed a **Scheduler Service + Notification Service** split, built on AWS:

1. **Event Scheduler** – Amazon EventBridge schedules jobs; each event contains a payload hash.  
2. **Orchestrator Lambda** – triggers an **Amazon SQS FIFO queue** (deduplication key = payload hash).  
3. **Worker Fleet** – EC2 Spot + Fargate containers pull from SQS, run the notification logic, and push results to Amazon SNS for delivery.

I used **AWS Step Functions** to orchestrate retries, dead‑letter queues, and metrics collection in CloudWatch. Auto‑scaling rules on Spot capacity ensured 99.9 % availability while keeping cost < $0.05 per 1,000 notifications.

**Result (R)**  
After deployment:

* Latency dropped from **350 ms → 210 ms** (≈ 40 % improvement).  
* Operational spend fell from **$12k/month → $8.4k/month** (30 % savings).  
* Throughput scaled to **5× traffic spikes** without SLA breaches.

**Leadership Principles & Bar‑raiser cues**  

- *Ownership*: I owned the full lifecycle, from architecture to cost analysis.  
- *Dive Deep*: Traced latency to SQS visibility timeout and tuned deduplication logic.  
- *Deliver Results*: Quantified 40 % latency cut and 30 % cost reduction.  
- *Bias for Action*: Rapid prototyping with Step Functions avoided a costly re‑architect.  

**Learning** – Initial tests revealed that FIFO queues caused occasional throttling under peak loads; switching to a sharded LRU cache in Redis mitigated this, showing iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
