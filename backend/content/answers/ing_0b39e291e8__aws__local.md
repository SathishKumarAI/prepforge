---
qid: ing_0b39e291e8__aws__local
question: 'Explain: Ten Million Users — AWS Scale - by Neo Kim - The System Design
  Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 523
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:24-05:00'
sources: []
---

**Situation & Task**  
In my previous role I was asked to design a recommendation engine that could serve personalized product suggestions to **10 million daily active users** on an e‑commerce platform, with latency < 200 ms and 99.9% uptime. The requirement was to build the solution on AWS while keeping operational cost under $500K/month.

**Action – Design & AWS Services**  
1. **Data ingestion** – Real‑time clickstream → Amazon Kinesis Data Streams (shards = 8, scaling by auto‑scaling).  
2. **Feature store** – Persist per‑user features in DynamoDB (global tables for multi‑AZ) and cache hot data in ElastiCache‑Redis (read‑heavy, 100 k RPS).  
3. **Model training** – Use SageMaker Processing jobs on Spot instances (p4d.24xlarge) to train a matrix‑factorization model nightly; deploy with SageMaker Endpoint behind an Application Load Balancer, using *Multi‑Model* endpoints for zero‑downtime updates.  
4. **Inference scaling** – Auto‑scale endpoint based on CPU utilization; employ Lambda@Edge for edge‑caching of top 1 % recommendations to reduce load.  
5. **Observability & cost** – CloudWatch Alarms + X-Ray tracing; use Cost Explorer and Savings Plans to lock in 75% discount.

**Result**  
- Latency dropped from 350 ms to **180 ms** (30% improvement).  
- Daily recommendation throughput increased from 3M to **10.5M** requests with no SLA breaches.  
- Monthly spend reduced by **22%** ($500K → $390K) through Spot and Savings Plans.

**Leadership Principles Reflected**  
- *Customer Obsession* – Delivered faster, more relevant recommendations that boosted conversion by 12%.  
- *Ownership & Dive Deep* – Handled all layers (streaming, storage, ML, ops) end‑to‑end; debugged a shard failure that cost $15K/day before it was automated.  

**What the Bar‑raiser Looks For**  
- **Quantified impact**: concrete latency and cost metrics.  
- **Depth**: detailed trade‑offs (e.g., Spot vs On‑Demand, DynamoDB global tables).  
- **Learning from failure**: proactive shard auto‑scaling after a 3‑hour outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
