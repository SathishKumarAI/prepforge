---
qid: ing_48e605cb5d__aws__local
question: 'Explain: TL;DR — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 371
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:15-05:00'
sources: []
---

**TL;DR – AI Coding Workflow (Neo Kim & Louis‑François Bouchard)**  
*Leadership Principles:* **Customer Obsession**, **Ownership**

> **Situation:** Teams building ML models struggled with fragmented pipelines—data ingestion, feature engineering, training, and deployment were siloed.  
> **Task:** Create a unified, reusable workflow that cuts time to production from weeks to days while keeping reproducibility high.  
> **Action:** I led the design of an end‑to‑end pipeline using **AWS SageMaker Pipelines** (step functions + SageMaker Training & Inference).  
> * Data ingestion → **Glue** transforms, writes to S3;  
> * Feature store → **Amazon SageMaker Feature Store** for versioned, low‑latency access;  
> * Model training → SageMaker Estimator with hyperparameter tuning on Spot instances (cost ↓ 35%);  
> * Deployment → SageMaker Endpoint or Batch Transform, auto‑scaling via Application Auto Scaling.  
> * CI/CD through **CodePipeline** + **CloudWatch** alerts for drift.  
> **Result:** The workflow cut model turnaround from 3 weeks to 5 days (≈ 80% faster). Production latency dropped by 40 ms per inference, and cost per training job fell 35 %.  
> **Reflection:** I introduced a “model‑health” dashboard; early alerts prevented a data‑drift incident that could have cost $120K in mispredictions. This experience reinforced my belief that ownership means iterating until the system is both robust and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
