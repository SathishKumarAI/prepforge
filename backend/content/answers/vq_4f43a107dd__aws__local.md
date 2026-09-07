---
qid: vq_4f43a107dd__aws__local
question: Q39- Where do you usually source datasets?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 433
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:01-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In my last role I was tasked with building a recommendation engine for a global e‑commerce platform that needed high‑quality user behavior data to improve conversion by 12 %. The challenge was sourcing diverse, GDPR‑compliant datasets while keeping latency low for real‑time inference.

**Action (Dive Deep + Ownership)**  
I built an end‑to‑end pipeline:

1. **Data Collection** – Use Amazon Kinesis Data Streams to ingest clickstream and transaction logs in real time.  
2. **Curation & Privacy** – Run Lambda functions that hash PII, apply differential privacy, and store the cleaned data in Amazon S3 (partitioned by country).  
3. **Feature Store** – Deploy SageMaker Feature Store for low‑latency feature retrieval; features are automatically refreshed every 15 min from the S3 lake.  
4. **Model Training** – Trigger SageMaker training jobs via Step Functions, pulling data directly from the feature store and using Spot instances to cut cost by ~35 %.  
5. **Monitoring & Feedback** – Use CloudWatch metrics and SageMaker Model Monitor to detect drift; trigger retraining when RMSE rises >0.02.

I also leveraged public datasets (e.g., MovieLens, Kaggle) for pre‑training, but all production data originates from the internal pipeline to maintain freshness and compliance.

**Result (Deliver Results)**  
The new recommendation model lifted click‑through rate by 18 % and conversion by 12 % within two weeks of deployment. The automated pipeline reduced data latency from 2 h to <30 s, and cost per training job dropped 35 %.  

**Bar‑raiser Insight** – I took full ownership, dug into every layer (streaming, privacy, feature engineering), quantified impact with clear KPIs, and iterated quickly based on monitoring signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
