---
qid: ing_c7e098f2fc__aws__local
question: 'Explain: Research & Development — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 561
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:14-05:00'
sources: []
---

**Situation – The problem:**  
When I joined Cognition as a senior ML engineer, the product team had a 2‑month sprint cycle but every release hit “data drift” and model accuracy dropped by ~15% within weeks. The business needed a sustainable R&D pipeline that could keep models fresh without manual retraining.

**Task – What I owned:**  
I led an end‑to‑end solution to automate data collection, validation, training, and deployment—ensuring each sprint delivered *zero* drift while keeping costs under $5k/month.

**Action – Design & AWS stack:**  

| Step | AWS Service | Why it matters |
|------|-------------|----------------|
| Data ingestion | **AWS Glue** + **S3 EventBridge** | Serverless ETL, auto‑trigger on new data |
| Validation & labeling | **Amazon SageMaker Ground Truth** | Human‑in‑the‑loop accuracy > 99% |
| Feature store | **Amazon SageMaker Feature Store** | Consistent feature versioning across training and inference |
| Training pipeline | **SageMaker Pipelines** + **ECR** | CI/CD for models, auto‑scaling on GPU instances (p3.2xlarge) |
| Model registry & rollback | **SageMaker Model Registry** | Track model lineage; quick rollback in 30 s |
| Inference | **Amazon SageMaker Endpoint** with **Lambda@Edge** | < 200 ms latency, 99.9% availability |

I introduced a *model health dashboard* (CloudWatch + QuickSight) that surfaced drift metrics in real time. Every sprint now triggers an automated retrain if drift > 5%.  

**Result – Impact:**  
- Accuracy maintained at 94% vs. previous 79%, a **15‑point lift**.  
- Deployment time cut from 2 weeks to 3 days (‑85%).  
- Monthly ML ops cost reduced by **40%** through spot instance usage and efficient data pipelines.

**Learnings & Bar‑raiser cues:**  
*Ownership*: I took full responsibility for the end‑to‑end flow, not just training.  
*Dive Deep*: Identified drift as root cause, not surface symptoms.  
*Quantified Impact*: Delivered measurable accuracy and cost savings.  
*Failure*: Early attempts with manual pipelines failed due to data inconsistencies; I pivoted to automated validation, turning a bottleneck into an asset.

**Leadership Principles:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
