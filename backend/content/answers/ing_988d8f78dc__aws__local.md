---
qid: ing_988d8f78dc__aws__local
question: 'Explain: System API Design — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 448
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:25-05:00'
sources: []
---

**Situation (S)** – While leading the ML Ops team at my previous company, we had a monolithic job scheduler that throttled training pipelines during peak hours. The queue latency grew to **4 min**, causing model rollout delays of up to **48 hrs**.

**Task (T)** – Design a *distributed* job scheduler that scales horizontally, guarantees fair resource allocation, and reduces average enqueue‑to‑run time by at least 80%.

**Action (A)**  
1. **Architecture** – A stateless API gateway (`API Gateway + Lambda`) receives job metadata and pushes it to an SQS FIFO queue.  
2. **Worker pool** – EC2 Spot instances behind an Auto Scaling Group run a containerized scheduler daemon that polls the queue, assigns jobs to EMR/ECS clusters via AWS Batch, and writes status to DynamoDB (partition key: `jobId`).  
3. **Fair‑share & back‑pressure** – A Kinesis stream aggregates metrics; Lambda functions update a Redis cache (`ElastiCache`) with per‑team quotas, enforcing weighted round‑robin dispatch.  
4. **Observability** – CloudWatch Alarms trigger SNS alerts when latency > 30 s; the dashboard shows real‑time SLA compliance.

**Result (R)** – After deployment, enqueue‑to‑run latency dropped from **240 s to 36 s** (84% reduction). Throughput increased by **3×**, and we saved ~20% on compute costs by leveraging Spot instances.  

> *Leadership Principles:*  
> • **Customer Obsession** – Delivered faster model rollouts for internal ML teams.  
> • **Ownership & Dive Deep** – Built end‑to‑end pipeline, tuned back‑pressure heuristics, and iterated based on real metrics.

**Bar‑raiser cues:** Ownership of the full lifecycle, deep dive into queue semantics, quantifying latency savings, and learning from a failed monolith that led to this redesign.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
