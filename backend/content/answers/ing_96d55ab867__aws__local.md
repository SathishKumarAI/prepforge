---
qid: ing_96d55ab867__aws__local
question: 'Explain: REST Service — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 403
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:06-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked to expose the *Graphiti* real‑time knowledge‑graph API to external developers so they could embed AI agents in their products. The goal: 10 k concurrent requests with <200 ms latency while keeping cost under $5k/month.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Design** – Stateless REST endpoints wrapped around a Kafka‑driven ingestion pipeline.  
2. **AWS Services** – API Gateway → Lambda (Python 3.10) → DynamoDB (global secondary index on entity ID). For streaming, Kinesis Data Streams feeds a Glue ETL job that updates the graph in Neptune.  
3. **Scalability & Availability** – Enable *auto‑scaling* on Lambda with provisioned concurrency of 200 for burst traffic; set API Gateway throttling to 5k rps per stage. Use Multi‑AZ DynamoDB and Neptune clusters (read replicas) for HA.  
4. **Cost Optimization** – Spot Instances for Glue jobs, reserved capacity for Neptune (1‑yr), and Lambda *provisioned concurrency* only during peak hours.

**Result (Deliver Results + Data‑Driven)**  
- Achieved 95 % of requests <150 ms, with 99.9 % SLA.  
- Supported 12 k concurrent users in the first month, 3× the target.  
- Reduced monthly spend to $4.2k by leveraging spot and reserved capacity.

**Bar‑raiser Takeaway** – Demonstrated ownership of end‑to‑end latency, deep dive into AWS trade‑offs, quantified impact on performance & cost, and iterated after a failed first attempt that underestimated Lambda concurrency, learning to benchmark under realistic traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
