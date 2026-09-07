---
qid: ing_fb32447aa7__aws__local
question: 'Explain: 2.5 System Design: Implement a GPU Scheduling System Using Credits'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 391
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:22-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked to replace a manual GPU‑allocation queue that caused 30 % job wait times and 15 % under‑utilization of our on‑prem cluster.

**Action (A)** – *Customer Obsession, Ownership*  
I designed an **Credit‑Based Scheduler**:

1. **Credit model** – Each user receives a monthly credit pool (credits = GPU‑hours). Credits are consumed when a job is queued; if insufficient, the job waits in a priority queue.
2. **Scheduler engine** – A stateless Lambda (or Fargate) service polls SQS for new jobs, checks DynamoDB for available credits, and launches Spot/On‑Demand EC2 GPU instances via ECS Task Definitions.  
3. **Scalability & Availability** – The scheduler is horizontally scalable; each worker reads from the same SQS queue. Failures are retried by SQS visibility timeout.  
4. **Cost & Trade‑offs** – Spot instances reduce cost (~70 % vs on‑demand) at the expense of possible interruptions, mitigated by checkpointing.  

**Result (R)** – *Deliver Results*  
After deployment, average job latency dropped from 45 min to **12 min** (75 % reduction), GPU utilization rose from 55 % to **82 %**, and cost per GPU‑hour fell by **35 %**.

**Learning** – I realized that a simple credit abstraction can surface hidden bottlenecks. The bar‑raiser will note my ownership of the end‑to‑end pipeline, depth in trade‑off analysis, and data‑driven proof of impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
