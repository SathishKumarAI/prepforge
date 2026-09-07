---
qid: ing_65827c7c51__aws__local
question: 'Explain: Requirements Gathering — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 468
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:37-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of an on‑prem batch processing pipeline that was stuck in a single‑node queue and could not meet a new quarterly analytics deadline (≈ 3 TB daily). My goal: build a *distributed job scheduler* that would run anywhere—on EC2, Fargate, or even spot instances—while guaranteeing SLA and cost control.  

**Action & Design**  
1. **Requirements** – high throughput (> 10k jobs/hr), fault tolerance (5‑second failover), elastic scaling, audit trail, and multi‑tenant isolation.  
2. **Architecture** – *Amazon EventBridge* to ingest job events → *AWS Step Functions* orchestrate stateful workflows; each task runs in a **Fargate** container with IAM roles for resource isolation.  
3. **Scheduler Core** – a **Redis‑cluster (ElastiCache)** holds a priority queue; Lambda workers poll, claim jobs atomically, and update status in **DynamoDB** (partitioned by tenant).  
4. **Scalability** – Auto Scaling Groups for Redis nodes; Step Functions concurrency capped per tenant to avoid “noisy neighbor” issues.  
5. **Cost & Availability** – Spot instances for non‑critical jobs, on‑demand for high‑priority tasks; DynamoDB with TTL removes stale records automatically.

**Result**  
- Reduced end‑to‑end latency from 45 min to 2 min (90% improvement).  
- Job success rate rose from 78% to 99.5%.  
- Cost savings of **$120K/year** by leveraging spot capacity and auto‑scaling.  

**Reflection & Learning**  
I owned the project end‑to‑end, diving deep into failure modes (e.g., Redis node churn) and iterating on the retry policy. The bar‑raiser would note my clear ownership, quantitative impact, and how I turned a single‑node bottleneck into an elastic, multi‑tenant scheduler—exactly what Amazon expects from a Solutions Architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
