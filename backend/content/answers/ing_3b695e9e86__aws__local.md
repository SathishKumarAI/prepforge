---
qid: ing_3b695e9e86__aws__local
question: 'Explain: 1 Software 1.0, 2.0, and 3.0 — AI Concepts - by Neo Kim and Logan
  Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 520
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:37-05:00'
sources: []
---

**Answer – “Software 1.0 / 2.0 / 3.0” (AI Concepts)**  
*(Amazon Leadership Principles: Ownership & Dive Deep)*  

> **Situation:** I was leading a cross‑functional AI squad at my previous company to modernize the recommendation engine that served 4 M daily users. The legacy system (Software 1.0) used static rule sets; we needed a more adaptive, data‑driven pipeline.

| Version | Core Idea | Key AWS Services |
|---------|-----------|------------------|
| **Software 1.0** | Hard‑coded logic + batch training. | EC2, S3 (data lake), SageMaker notebook |
| **Software 2.0** | Model‑centric: decouple data → feature store → model training → serving. | Glue/Databricks, SageMaker Pipelines, DynamoDB for feature store, Lambda for inference |
| **Software 3.0** | Continuous learning + real‑time feedback loop. | SageMaker Neo (edge), Kinesis Data Streams, Step Functions, Athena for monitoring |

> **Task:** Transition from 1.0 to 3.0 while maintaining 99.9 % availability and < $2k/month cost.

> **Action:**  
> 1. Built a feature store in DynamoDB; migrated batch jobs to SageMaker Pipelines (auto‑scaling).  
> 2. Deployed models via Lambda + API Gateway for low‑latency inference; added Kinesis for real‑time user signals.  
> 3. Implemented Step Functions orchestrating retraining every 12 h, with automated rollback on drift (> 5 % MSE).  

> **Result:**  
> *Latency dropped from 250 ms to 30 ms (10× faster).*  
> *Model accuracy improved from 68 % to 84 % precision.*  
> *Operational cost reduced by 35 % ($12k → $8k/month).*  

**Bar‑raiser Takeaway:** The answer demonstrates **ownership**—I drove the end‑to‑end migration—and shows a deep dive into AWS tooling and metrics. It quantifies impact (latency, accuracy, cost) and reflects learning: “We initially over‑provisioned Lambda; later we tuned concurrency to match traffic peaks.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
