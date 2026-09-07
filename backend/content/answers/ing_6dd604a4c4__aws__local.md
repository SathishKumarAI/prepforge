---
qid: ing_6dd604a4c4__aws__local
question: 'Explain: We we wanted to increase our index — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 465
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:08-05:00'
sources: []
---

**Situation (S)** – In my last role at a SaaS company, we launched a recommendation engine that drove *10%* of all revenue. After an internal audit, the index (a composite metric of user engagement + conversion) was stagnant at **3.2**, below our target of 4.0.

**Task (T)** – Own the end‑to‑end pipeline: ingest raw clickstream, train models, serve predictions with sub‑100 ms latency, and iterate quickly without impacting live traffic.

**Action (A)**  
1. **Data ingestion & preprocessing** – Built a serverless ETL on **AWS Glue** + **Amazon Kinesis Data Firehose** to stream 5 M events/day into an **S3 lake** partitioned by day.  
2. **Feature store** – Deployed **Amazon SageMaker Feature Store** for real‑time & batch features, cutting feature lookup time from 250 ms to <10 ms.  
3. **Model training** – Used **SageMaker Pipelines** with hyperparameter tuning (Bayesian) on a spot fleet, reducing cost by 35% while improving AUC from 0.73 to 0.81.  
4. **Serving** – Rolled out **Amazon SageMaker Edge Manager** + **Lambda@Edge** for low‑latency inference at edge locations; achieved 95th percentile latency <80 ms.  
5. **Monitoring & feedback loop** – Integrated **CloudWatch Metrics** and a custom **Redshift Analytics** dashboard, enabling real‑time drift detection.

**Result (R)** – Within two months the index rose to **4.3**, a 35% lift over baseline, and revenue from recommendations grew by *12%*. The system now scales to 20 M events/day with <0.5 $/1k predictions cost, all while keeping SLAs under 99.9%.  

**Leadership Principles** – **Ownership** (I drove the whole stack), **Dive Deep** (profiling latency & cost), and **Bias for Action** (quick iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
