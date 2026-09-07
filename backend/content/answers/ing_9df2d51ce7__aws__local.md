---
qid: ing_9df2d51ce7__aws__local
question: 'Explain: Databricks Algorithms and Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 639
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:07-05:00'
sources: []
---

**Scenario (S)**  
I was asked in a FAANG‑style interview to explain how I’d design an end‑to‑end ML pipeline that could ingest terabytes of streaming logs, train several models in parallel, and serve predictions with < 10 ms latency.

**Task (T)**  
Deliver a scalable, cost‑efficient architecture on AWS that balances speed, accuracy, and operational simplicity while meeting SLAs for both training (≤ 4 h per model) and inference (≤ 10 ms).

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest & buffer | **Amazon Kinesis Data Streams + Firehose** | Real‑time ingestion; built‑in scaling to 5 M records/s. |
| Feature store | **AWS Glue + Lake Formation** | Clean, cataloged data in S3 (data lake). Glue jobs run on Spark (Databricks) for feature engineering. |
| Model training | **Amazon SageMaker Pipelines + SageMaker Processing Jobs** | Parallel training of XGBoost/Linear models; auto‑scaling notebook instances; Spot Instances cut cost 70 %. |
| Model registry & governance | **SageMaker Model Registry** | Versioning, audit trails, and automated rollback. |
| Inference | **Amazon SageMaker Edge Manager + Lambda@Edge** (for <10 ms) | Deploy models to CloudFront edge locations; cold‑start mitigated by warming strategy. |
| Monitoring & feedback | **Amazon CloudWatch + SageMaker Model Monitor** | Drift detection, latency metrics; auto‑trigger retraining when MAPE > 5%. |

I added a **cost‑optimization layer**: spot‑fleet for training, reserved instances for inference endpoints, and S3 lifecycle policies to archive older data. The design achieved 99.95 % availability, reduced model latency from 30 ms to 8 ms, and cut training cost by 60 %.

**Result (R)**  
In a pilot with 2 TB of log data, the pipeline processed data in < 5 min, trained 4 models in 3.5 h each, and served predictions at 7 ms average latency—meeting all SLAs while saving $18k/month versus the legacy on‑prem solution.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered ultra‑fast inference to meet user expectations.  
- **Ownership & Dive Deep** – Took full ownership of data pipeline, performed deep cost/latency analyses, and iterated until metrics met targets.  

### What a Bar‑Raiser Looks For  
1. **Quantified Impact** – Clear metrics (latency, cost savings).  
2. **Dive Deep** – Justification for each AWS choice and trade‑offs.  
3. **Learning from Failure** – Mentioned fallback plans (on‑prem fallback if CloudFront fails) and continuous monitoring to avoid regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
