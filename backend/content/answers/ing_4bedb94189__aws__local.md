---
qid: ing_4bedb94189__aws__local
question: 'Explain: Making 15 Different Linear Regression Models'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 530
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:48-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with predicting monthly revenue for 15 distinct product lines in a fast‑moving consumer goods business. Each line had its own seasonality, promotion mix and supply chain constraints, so one generic model would have introduced bias.

**Task**  
I needed to build 15 separate linear regression pipelines that were **scalable**, **maintainable** and delivered sub‑5 % MAE on hold‑out data while keeping operational cost under $0.05 per inference.

**Action**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Feature extraction & feature store | **Amazon SageMaker Feature Store** + **Glue ETL** | Centralized, versioned features; avoids recomputation. |
| Model training (grid‑search on α, λ) | **SageMaker Training Jobs** (managed spot instances) | Parallel training per product line; spot saves ~60 %. |
| Hyper‑parameter tuning | **SageMaker HyperParameterTuner** | Automated Bayesian search; reduces manual trial‑and‑error. |
| Model packaging & registry | **SageMaker Model Registry** | Ensures lineage, rollback and auditability. |
| Deployment (real‑time scoring) | **SageMaker Endpoint with Lambda@Edge** | Low latency (<10 ms), auto‑scaling; costs $0.000025 per inference. |
| Batch scoring & monitoring | **Glue + Athena** for batch; **Amazon CloudWatch Alarms** on drift | Detects feature or concept shift early. |

I implemented a **pipeline in SageMaker Pipelines** that automated the entire flow, enabling each product line to update its model every 30 days with zero manual intervention.

**Result**  
- MAE dropped from 9.8 % (baseline) to 4.2 % across all lines.  
- Monthly inference cost fell from $1,200 to $420 thanks to spot and Lambda@Edge.  
- Deployment time per line reduced from ~3 days to <12 hours.

**Learning & Ownership**  
I documented the trade‑offs (spot vs on‑demand, endpoint vs batch) and created a rollback playbook that cut recovery time by 70 % when a drift alert triggered. This experience reinforced my belief in **Ownership**—owning end‑to‑end pipelines—and **Dive Deep**—understanding each service’s cost/latency knobs to deliver measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
