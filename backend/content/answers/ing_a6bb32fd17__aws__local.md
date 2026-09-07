---
qid: ing_a6bb32fd17__aws__local
question: 'Explain: Our partners — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 580
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:59-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing fintech, our data science team needed to run predictive churn models on *petabyte‑scale* time‑series stored in PostgreSQL. The legacy ingestion pipeline stalled at 10 TB/day and the model training lagged behind real‑time alerts by >48 h.

**Action**  
I architected a serverless, event‑driven workflow:

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Ingest | **Amazon Kinesis Data Streams** → **AWS Glue** crawlers | Handles 10 TB/day with auto‑scaling and zero ops. |
| Persist | **Amazon S3 (Partitioned, Parquet)** | Cost‑effective, columnar storage for time‑series. |
| Query | **Amazon Athena / Redshift Spectrum** | On‑demand SQL over S3; low cost for ad‑hoc analytics. |
| ML Training | **AWS SageMaker Studio** + **SageMaker Processing** | Built a pipeline that trains on 1 TB of data in <4 h, using spot instances to cut training costs by 60%. |
| Serving | **Amazon Forecast** (time‑series model) | Low‑latency predictions; auto‑scales with traffic. |

I added a **Lambda** layer for schema validation and a **CloudWatch** alarm that triggers re‑training when drift exceeds 2 % MAPE.

**Result**  
- Reduced ingestion time from *48 h* to *under 1 h*.  
- Cut training cost from $12k/month to $4.8k/month (60 % savings).  
- Prediction latency dropped from *10 s* to *200 ms*, enabling real‑time churn alerts that increased retention by **18 %** in Q3.

**Reflection**  
I practiced *Ownership*: I owned the entire pipeline, from data capture to model serving. Through *Dive Deep*, I profiled query plans and spot instance pricing to optimize cost. The biggest learning was balancing cost vs. speed—initially we over‑provisioned Kinesis shards; after profiling, we reduced shards by 35 % without compromising throughput.

**Bar‑raiser cues**  
- Demonstrated clear ownership of cross‑team objectives.  
- Quantified impact with real metrics (latency, cost, retention).  
- Showed depth in trade‑off analysis and continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
