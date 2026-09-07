---
qid: ing_6748ba1a26__aws__local
question: 'Explain: Cost Model — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 589
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:23-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to design an AI‑driven fraud detection pipeline that had to run 24/7, process 10 M transactions/day, and keep the cost below $1 M/year while staying within SLA of <5 ms per inference.

**Action (Architecture & Cost Model)**  
* **Data ingestion** – Kinesis Data Streams (shards ×2) → Lambda for schema validation.  
* **Feature store** – DynamoDB Global Tables with TTL, cached in ElastiCache Redis for sub‑ms lookup.  
* **Model serving** – SageMaker Endpoints behind an Application Load Balancer; autoscaling based on CloudWatch metrics (CPU > 70 % → add instance).  
* **Batch scoring** – Step Functions orchestrating Glue ETL + Batch Transform jobs, using spot instances to reduce compute cost by 60 %.  
* **Observability** – CloudWatch Alarms + X-Ray traces; every inference logged to Athena for audit and retraining.

The design uses *Serverless* patterns where possible (Lambda, Step Functions) and *Managed ML* services (SageMaker) to avoid over‑provisioning. Cost is split:  
- Kinesis & Lambda ≈ $120k/yr  
- DynamoDB + ElastiCache ≈ $80k/yr  
- SageMaker endpoints (on-demand + spot) ≈ $600k/yr  
- Glue + Athena ≈ $100k/yr  

Total ≈ **$900k**—within budget, with 15 % headroom for scaling.

**Result**  
Reduced fraud loss by 23 % in Q1 vs. the legacy rule‑based system; inference latency dropped from 12 ms to <4 ms. The cost model delivered a 30 % savings over projected spend and proved scalable when traffic doubled during peak season without SLA impact.

**Leadership Principles Anchored**  
- **Customer Obsession** – Prioritized low latency for end users while keeping costs down.  
- **Ownership & Dive Deep** – Built end‑to‑end observability, identified bottlenecks, and iterated the cost model quarterly.

**Bar‑raiser takeaways**  
- Demonstrated ownership by owning the full lifecycle from ingestion to retraining.  
- Showed depth through detailed cost breakdowns and scalability trade‑offs.  
- Quantified impact (23 % fraud reduction, 4 ms latency).  
- Learned from a failed initial over‑provisioning attempt that led to a 40 % overspend; pivoted to spot pricing and serverless, turning failure into a more efficient design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
