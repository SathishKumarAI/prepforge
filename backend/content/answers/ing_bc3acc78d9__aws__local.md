---
qid: ing_bc3acc78d9__aws__local
question: 'Explain: Common Use Cases — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:17-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign the data pipeline for a SaaS billing platform that needed near‑real‑time analytics on usage. The legacy batch jobs ran nightly and caused stale insights—customers complained, leading to a 12 % churn spike.

**Action**  
*Customer Obsession & Ownership.* I scoped the problem: capture every write (INSERT/UPDATE/DELETE) from the PostgreSQL billing DB and stream it to downstream services (real‑time dashboards, fraud detection, ML model retraining).  

1. **Change Data Capture** – use AWS DMS with *CDC* enabled to read the WAL and publish changes as JSON records to an Amazon Kinesis Data Streams shard pool.  
2. **Processing** – a Lambda function (or Fargate task for heavy transforms) consumes Kinesis, enriches data (joins with user profile from DynamoDB), and writes to two sinks:  
   * Amazon Redshift Spectrum for BI queries (cost‑effective analytics).  
   * Amazon S3 event log for ML training.  
3. **Reliability** – enable *Enhanced Fan-Out* on Kinesis for low latency; use Lambda retry/backoff and DLQs to guarantee at‑least‑once delivery.  
4. **Scalability & Cost** – Kinesis shards auto‑scale based on throughput (≈5 k records/s) and are priced per shard hour; Lambda scales automatically with concurrency, keeping compute cost below $0.05/hr.  

**Result**  
Within two weeks of deployment:  
* Real‑time dashboards updated within 3 s vs. 24 h.  
* Churn dropped from 12 % to 4 % in the next billing cycle.  
* Operational costs reduced by 30 % due to serverless consumption.

**Learnings** – I discovered that enabling CDC on DMS requires careful WAL retention tuning; we had an initial lag of ~10 min, fixed by increasing `wal_keep_segments`. This iterative improvement is a key bar‑raiser metric: ownership + dive deep leading to measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
