---
qid: ing_c28568fc58__aws__local
question: 'Explain: Comparisons b/w Services — All Comparisons'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 432
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:53-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with migrating a legacy predictive churn model from an on‑prem Spark cluster to the cloud while keeping latency < 2 s for 10k concurrent users and cost ≤ $1,000/month.

**Action**  
I evaluated **Amazon SageMaker**, **AWS Glue + Amazon Athena**, and **Amazon SageMaker JumpStart**.  
* *SageMaker*: managed training (Pytorch), automated hyper‑parameter tuning, built a real‑time endpoint on an `ml.m5.large` instance with autoscaling.  
* *Glue/Athena*: ETL only; no model serving—would require a Lambda layer and API Gateway, adding 1 s latency and higher operational overhead.  
* *JumpStart*: pre‑built churn models reduced training time by 70 % but lacked custom feature engineering.

I chose SageMaker, built a CI/CD pipeline with CodePipeline + CloudWatch alerts, and added **SageMaker Model Monitor** for drift detection. I also leveraged **S3 Intelligent Tiering** for data storage to keep costs down.

**Result**  
Endpoint latency dropped from 5 s (Spark) to 1.8 s; monthly spend fell from $4,200 to $850 while accuracy improved by 3 % (AUC 0.87 → 0.90). The migration was completed 40 % faster than the original schedule.

**Leadership Principles**  
* **Customer Obsession** – delivering a low‑latency, cost‑effective solution that improves user experience.  
* **Ownership** – owning the end‑to‑end pipeline and monitoring drift to prevent model decay.

**Bar‑raiser notes** – I showcased deep technical knowledge of AWS services, quantified impact (latency, cost, accuracy), and learned from a prior failure where unmanaged scaling caused outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
