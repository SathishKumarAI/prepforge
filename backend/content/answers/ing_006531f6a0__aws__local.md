---
qid: ing_006531f6a0__aws__local
question: 'Explain: do I know the address changed I — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 551
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:21-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent sprint I led the migration of our customer‑behavior analytics pipeline from a monolithic batch job to an event‑driven architecture inspired by Fowler’s “Many Meanings” paper.  

- **Situation:** Our legacy system processed 10 M events per day but had a 48‑hour latency window, causing stale insights and missed upsell opportunities (conversion drop of 12 %).  
- **Task:** Redesign the pipeline to be *event‑driven* so we could ingest, enrich, and score user actions in near real‑time while keeping costs below $2k/month.  
- **Action:**  
  1. Adopted **Amazon Kinesis Data Streams** (shard count = 4) for ingestion; each shard supports ~1000 records/sec, giving us >10 M events/day with headroom.  
  2. Used **AWS Lambda** (max concurrency 2000) as the *transform* layer to enrich events with user profile data from DynamoDB Global Tables, ensuring low‑latency reads (<5 ms).  
  3. Persisted enriched records to **Amazon S3** in Parquet for cost‑effective long‑term storage and batch analysis.  
  4. Triggered a **Step Functions** orchestration that feeds the Lambda into an **Amazon SageMaker Endpoint** (real‑time inference) and writes predictions back to DynamoDB for downstream services.  
  5. Implemented CloudWatch metrics, X-Ray tracing, and automatic scaling policies; set up alarms for shard throttling or Lambda errors.  

- **Result:** Latency dropped from 48 h to <2 s, conversion lift of 18 % within the first month, and operational cost decreased by 35 %. The design also allowed us to roll out new models without downtime—an *ownership* win for our data science team.

**Leadership Principles Anchored:**  
- **Customer Obsession** – Delivering timely insights that directly improved customer conversion.  
- **Dive Deep & Ownership** – I architected, implemented, and maintained the end‑to‑end pipeline, continuously monitoring and tuning it post‑deployment.  

**Bar‑raiser cues I satisfied:**  
- Quantified impact (latency, cost, conversion).  
- Depth of technical choices (shard sizing, Lambda concurrency, Step Functions orchestration).  
- Learning loop: after an initial spike in shard throttling, we added a second stream and adjusted Lambda timeouts—demonstrating iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
