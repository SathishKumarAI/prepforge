---
qid: ing_fdc96e1954__aws__local
question: 'Explain: Non-Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 431
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:55-05:00'
sources: []
---

**Situation / Task**

At my previous role I was asked to build a *distributed job scheduler* for nightly ML pipelines that ran on thousands of EC2 workers. The SLA required <5 % downtime and the system had to scale from 500 to 50,000 jobs per hour without manual intervention.

**Action (Design)**  

1. **Architecture** – Use an event‑driven microservice model:  
   * **Amazon EventBridge** for job ingestion → triggers a Lambda that writes metadata to **DynamoDB**.  
   * A **Kinesis Data Stream** feeds a worker pool; each consumer is an ECS task on Fargate that pulls the next available job from DynamoDB using a conditional `UpdateItem` (optimistic locking).  
2. **Scalability & Availability** – Auto‑scaling on CPU/queue depth ensures workers grow/shrink in <30 s. Multi‑AZ deployment of EventBridge + Kinesis guarantees 99.999% availability.  
3. **Cost** – Fargate spot instances reduce compute cost by ~60 %. DynamoDB autoscaling keeps write throughput within provisioned limits, preventing throttles.  

**Result**

- Reduced job start latency from 12 min to <30 s (average).  
- Achieved 99.995 % uptime over 6 months.  
- Cut infrastructure spend by 48 % versus the legacy on‑prem solution.

**Leadership Principles Highlighted**

* **Customer Obsession** – Designed for minimal downtime and fast job turnaround, directly improving ML model freshness.  
* **Ownership & Dive Deep** – Took end‑to‑end responsibility; iterated on DynamoDB conditional writes after a first‑time race condition failure, learning to use optimistic locking to eliminate stale reads.

Bar‑raisers focus on my ownership of the full lifecycle, deep dive into race conditions, and quantifiable impact on latency and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
