---
qid: ing_1f5ecabeed__aws__local
question: 'Explain: The Core Difference — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 416
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:06-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* and *Dive Deep*.  
> 
> **Situation / Task:** I led a migration of a legacy analytics platform from an on‑prem SQL cluster to a cloud‑native data lake for a fintech client that needed real‑time fraud detection.  
> 
> **Action:**  
> 1. **Requirement dive** – We mapped three core workloads: (a) structured reporting, (b) semi‑structured log ingestion, and (c) high‑velocity sensor streams.  
> 2. **Design choice** – Adopted a hybrid data stack: **Amazon Aurora PostgreSQL** for ACID‑required OLTP/OLAP tables; **Amazon DynamoDB** for key‑value lookups on user sessions; and **Amazon S3 + Glue + Athena** for semi‑structured JSON logs.  
> 3. **Scalability & Availability** – Aurora Multi‑AZ with read replicas (99.999 % SLA), DynamoDB auto‑scaling (10 k rps → 1 M rps) and S3’s global durability.  
> 4. **Cost control** – Spot‑and‑reserved instances for Aurora, on‑demand for DynamoDB during peak fraud spikes; leveraged Athena cost‑per‑query pruning.  
> 
> **Result:** The new stack cut query latency from 12 s to <200 ms for critical fraud alerts and reduced infrastructure spend by 35 % YoY while maintaining a 99.95 % uptime SLA.  
> 
> **Learning & Bar‑raiser cues:** I owned the end‑to‑end migration, dived deep into data access patterns, quantified performance gains, and iterated on failure cases (e.g., DynamoDB hot keys) to refine our capacity model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
