---
qid: ing_38942bf46c__aws__local
question: 'Explain: Trigger-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 729
total_tokens: 964
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:48-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the migration of our on‑prem Oracle warehouse to a fully managed analytics platform on AWS. The business required near real‑time insights into customer behavior, so we had to replace the legacy batch ETL with a trigger‑based CDC pipeline that could ingest changes within 2 s while keeping data integrity.

**Task (T)**  
Design a scalable, cost‑efficient system that captures every insert/update/delete from Oracle, streams it to downstream analytics services, and guarantees at‑least‑once delivery without manual intervention.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Capture | **AWS DMS (CDC task)** with *Change Table* option | Built‑in CDC handles binary logging, schema changes, and provides a source‑to‑target replication engine. |
| 2. Stream | **Amazon Kinesis Data Streams** (shard per table) | Low latency, auto‑scaling shards, built‑in retries, and dead‑letter queues for failed records. |
| 3. Transform | **AWS Lambda** + **Kinesis Data Analytics** | Stateless functions parse JSON CDC events; analytics job aggregates metrics in real time. |
| 4. Store | **Amazon S3 (partitioned by day)** + **Glue Catalog** | Durable, cheap storage for raw logs; catalog enables Athena queries. |
| 5. Consume | **Redshift Spectrum** or **Snowflake on AWS** | On‑demand querying of both raw and aggregated data with minimal latency. |

*Scalability*: Kinesis shards auto‑scale via Lambda metrics; DMS scales to the source DB load.  
*Availability*: All services are multi‑AZ; Kinesis has built‑in replication, Lambda retries on failure.  
*Cost*: We used **Spot Instances** for Glue ETL jobs and leveraged S3’s low storage costs, keeping monthly spend below $15k while processing 10 M CDC events/day.

**Result (R)**  
Within 4 weeks of deployment we achieved <2 s latency from commit to analytics view, reduced batch window cost by **35%**, and increased user engagement metrics by **12%** due to faster personalization. The system also logged zero data loss incidents over 6 months.

---

### Bar‑raiser Checklist

| Expectation | How I Met It |
|-------------|--------------|
| **Ownership** | Took full responsibility from design through deployment, including incident response and cost optimization. |
| **Dive Deep** | Investigated DMS replication lag sources, tuned Kinesis shard count, benchmarked Lambda memory/timeout settings. |
| **Quantified Impact** | Delivered concrete metrics: latency reduction, cost savings, engagement uplift. |
| **Learning from Failure** | After a first outage caused by mis‑configured IAM roles, implemented automated role validation and added a “canary” DMS task to catch such errors early. |

This answer demonstrates Amazon’s leadership principles—Customer Obsession (fast insights), Ownership (end‑to‑end delivery), Dive Deep (performance tuning), Bias for Action (rapid deployment), Invent & Simplify (leveraging managed services), and Deliver Results (measurable business impact).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
