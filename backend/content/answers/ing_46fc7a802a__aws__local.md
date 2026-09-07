---
qid: ing_46fc7a802a__aws__local
question: 'Explain: Stripe — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 530
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:14-05:00'
sources: []
---

**Customer Obsession + Ownership**

> **Situation:** In my last role I was tasked to redesign the fraud‑detection pipeline that powered a payment processor similar to Stripe. The existing model lagged behind new attack vectors, dropping our fraud detection accuracy from 92 % to 84 % in real time.

> **Task:** Deliver a scalable, low‑latency ML service that could ingest millions of transactions per day while maintaining an SLA of <10 ms inference latency.

> **Action:**  
> *Built a data lake on **Amazon S3** and cataloged features with **AWS Glue**. Trained ensembles (XGBoost + LightGBM) in **SageMaker**, using **PCA** to reduce dimensionality by 60 % without hurting recall. Deployed the model as an **Endpoint** behind a **Lambda@Edge** layer for instant scoring, and used **Kinesis Data Streams** to feed real‑time feedback into a nightly retraining job.  
> *Implemented **AWS Step Functions** to orchestrate data ingestion, inference, and alerting, ensuring idempotent retries.  
> *Cost‑optimized by leveraging **Spot Instances** for training (≈ 70 % savings) and reserving **ECS Fargate** capacity for inference.

> **Result:** Achieved a 97 % fraud detection accuracy with <8 ms latency, cutting chargebacks by 35 % in the first quarter post‑deployment. The solution processed 5 M transactions/day at an annual cost of $1.2 M versus $3.4 M previously.

**Dive Deep + Bias for Action**

I iteratively profiled every component—SageMaker training times, Lambda cold starts, Kinesis throughput—to identify bottlenecks. When latency spiked, I immediately switched from Lambda to **App Runner**, reducing 30 ms on average. This quick pivot saved us a projected $200K in SLA penalties.

**Learning & Bar‑Raiser Signals**

* Took full ownership of the end‑to‑end pipeline and documented failure modes.  
* Quantified impact (chargebacks, latency, cost).  
* Demonstrated depth: from data ingestion to model retraining to deployment orchestration.  
* Showed continuous learning—after a 12 % drop in accuracy post‑upgrade, I instituted automated drift detection and rollback, preventing downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
