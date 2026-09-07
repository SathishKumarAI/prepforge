---
qid: ing_83bba2287d__aws__local
question: 'Explain: Evaluate every interaction in production'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 496
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:55-05:00'
sources: []
---

**Situation & Task**  
I was leading the ML Ops team at a fintech startup that ran a real‑time fraud detection model. After an uptick in false positives, we needed *every* production inference to be logged and evaluated for quality—essentially turning “inference” into a data pipeline.

**Action**  
1. **Design & Architecture** – I introduced a two‑tier approach:  
   - **Lambda + Kinesis Data Streams** captured each model request/response pair in milliseconds, guaranteeing low latency (≤5 ms).  
   - The stream fed into an **AWS Glue ETL job** that enriched records with contextual metadata and persisted them to **Amazon S3** (partitioned by hour) for cost‑effective storage.  
2. **Evaluation Layer** – A scheduled **Glue crawler** generated Athena tables; a nightly **Athena query** computed precision/recall per user segment, feeding results into an **AWS QuickSight dashboard**.  
3. **Automation & Alerting** – I used **Amazon CloudWatch Events** to trigger an SNS topic when metrics fell below thresholds (e.g., recall < 0.92). The alert routed to the ML Ops Slack channel and automatically triggered a **SageMaker batch transform job** to re‑train on recent data.

**Result**  
- Reduced false positives by 28 % in two weeks, lifting transaction approval rates from 82 % to 94 %.  
- Cut model latency overhead to < 4 ms (≤ 0.5 % of total request time).  
- Saved $12k/month by storing raw logs in S3 instead of DynamoDB.

**Reflection & Learning**  
Ownership drove me to build a self‑service dashboard that let data scientists spot drift instantly. The deep dive into Lambda cold‑start behavior taught me the importance of provisioning warm containers for latency‑critical workloads. I iterated on the architecture after a “cold start” failure, moving to **AWS Fargate Spot** for the Glue jobs to balance cost and reliability.

*Leadership Principles:*  
- **Customer Obsession** – Delivering accurate fraud scores directly improves user experience.  
- **Dive Deep & Ownership** – From stream ingestion to alert‑driven retraining, I owned every layer and relentlessly optimized it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
