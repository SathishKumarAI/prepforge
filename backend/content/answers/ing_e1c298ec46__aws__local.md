---
qid: ing_e1c298ec46__aws__local
question: 'Explain: Anduril System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 419
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:56-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** While leading a cross‑functional team at my previous startup, we were asked to build an end‑to‑end ML pipeline for real‑time fraud detection that could scale from 5 M daily transactions to 50 M within six months.  
> **Task:** Deliver a system with < 1 s latency per transaction, >99.9% availability, and cost ≤ $0.05/transaction.  
> **Action:**  
> * **Design** – Adopted an event‑driven microservice architecture: Kafka → Lambda (feature extraction) → SageMaker endpoint (inference) → DynamoDB (flagging).  
> * **AWS services** – Kinesis for ingestion, Step Functions to orchestrate retries, SageMaker Batch Transform for offline re‑training, Auto Scaling Groups for inference nodes.  
> * **Scalability & Availability** – Multi‑AZ deployment with Route 53 latency routing; used DynamoDB Global Tables for failover and 99.999% durability.  
> * **Cost control** – Spot Instances for batch training, Lambda provisioned concurrency tuned to peak load; achieved $0.035/transaction after 3 months.  
> * **Bias for Action & Ownership** – Ran a live A/B test on production traffic; when false‑positive rate spiked by 12%, I rolled back the model and added a rule‑based fallback, reducing FP to < 1%.  
> **Result:** Real‑time fraud detection latency dropped from 2.3 s to 0.8 s (30% improvement), handled 10× traffic growth while keeping cost below target, and earned the “Customer Obsession” badge for proactively protecting merchants’ revenue.

*Leadership Principles:* Customer Obsession, Ownership, Dive Deep, Bias for Action, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
