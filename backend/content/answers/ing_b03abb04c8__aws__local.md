---
qid: ing_b03abb04c8__aws__local
question: 'Explain: Top 5 Most Used Architecture Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 537
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:48-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Scenario (S):** I led a cross‑functional team that had to deploy an end‑to‑end ML solution for a global e‑commerce recommendation engine, handling 10 M daily users.  
> **Task (T):** Identify and implement the most frequently used architecture patterns so we could iterate quickly while meeting latency and cost goals.  

**Result (R):** Adopted five core patterns—Data Ingestion + Feature Store, Batch Training + Model Registry, Real‑time Prediction via Lambda + SageMaker Endpoint, A/B Testing with CloudWatch, and Continuous Retraining Pipeline.  
- **Latency:** 90 % of predictions <10 ms, meeting SLAs.  
- **Cost:** Reduced monthly spend by 28 % versus legacy on‑prem stack.  
- **Throughput:** 1 M requests/second during peak traffic.  

**Action (A):**  
1. *Data Ingestion:* Kinesis + Glue to stream raw logs into an Athena‑backed feature store in S3.  
2. *Training:* SageMaker Pipelines orchestrated by Step Functions, storing models in ECR and tagging them in SageMaker Model Registry.  
3. *Serving:* Lambda edge functions trigger a low‑latency SageMaker RealTime endpoint; fallback to Batch Transform for heavy queries.  
4. *Experimentation:* CloudWatch metrics feed into an A/B testing framework that automatically rolls back underperforming models.  
5. *Retraining:* Triggered by scheduled Step Functions on model drift detection via CloudWatch alarms, ensuring freshness.  

**Key Learnings:**  
- **Ownership:** I took full accountability for end‑to‑end reliability, even when the feature store hit a 0.3 % consistency lag; I engineered compensating writes to maintain data integrity.  
- **Dive Deep:** Profiling Lambda cold starts revealed a hidden dependency on an external API—removing it cut latency by 35 %.  

This architecture is highly available (multi‑AZ SageMaker endpoints), horizontally scalable (Kinesis shards & Lambda concurrency), and cost‑efficient (spot instances for training, serverless inference). It exemplifies *Customer Obsession* by delivering lightning‑fast recommendations that directly increased conversion rates by 12 % in the first quarter after launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
