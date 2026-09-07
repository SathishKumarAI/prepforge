---
qid: ing_9febcb0710__aws__local
question: 'Explain: Used Books — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:21-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a team that needed to ingest, store, and serve terabytes of customer interaction logs for an online recommendation engine. The existing batch‑only ETL was slow, leading to stale models and a 15 % drop in click‑through rate.

**Task (T)**  
I had to design a data‑intensive pipeline that could process the volume in near real‑time, support iterative model training, and provide a low‑latency serving layer—all while staying under our $200k yearly budget.

**Action (A)**  
* **Architecture** – I adopted an event‑driven microservice pattern using Amazon Kinesis Data Streams for ingestion, AWS Lambda for stateless transformations, and Amazon S3 + Glue for durable storage.  
* **Data lake & catalog** – Built a partitioned Parquet lake in S3, catalogued with Athena/Glue to enable fast SQL queries for feature engineering.  
* **Model training** – Leveraged SageMaker Pipelines that automatically pull new data from the lake and retrain models every 6 hours.  
* **Serving** – Deployed models on SageMaker endpoints behind an Application Load Balancer, auto‑scaling with CloudWatch alarms to keep <200 ms latency.

I followed *Customer Obsession* by focusing on model freshness that directly impacted user engagement, and *Dive Deep* by iterating the design after profiling Lambda cold starts and Glue job failures. The new pipeline cut data lag from 24 hrs to under 30 minutes, boosted recommendation CTR by **18 %**, and kept operating costs at **$180k**.

**Result (R)**  
The end‑to‑end solution delivered real‑time insights, improved revenue metrics, and established a reusable pattern for future ML workloads. I documented lessons—e.g., the importance of monitoring Lambda memory to avoid throttling—which are now part of our team’s playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
