---
qid: ing_c5dd7fdbbb__aws__local
question: 'Explain: Database Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 387
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:24-05:00'
sources: []
---

**Customer Obsession & Ownership**

**Situation:**  
While leading a fraud‑detection ML team, I had to redesign our user‑behavior database so that model training could ingest > 1 M events/sec without latency spikes.

**Task:**  
Architect a schema and data pipeline that guarantees *real‑time* feature availability for the nightly retraining job while supporting ad‑hoc queries by analysts.

**Action:**  
- **Schema dive deep:** Split raw logs into an *Event* table (partitioned by hour, key = user_id) and a denormalized *UserProfile* view built via incremental Kinesis Data Firehose → DynamoDB Streams.  
- **AWS services:**  
  - *Amazon S3* + *Glue* for raw ingestion.  
  - *Amazon Redshift Spectrum* for ad‑hoc analytics (low cost, high concurrency).  
  - *Kinesis Data Analytics* to materialize rolling features into an Aurora PostgreSQL cluster (auto‑scaling).  
- **Scalability/Availability:** Auto‑scaling groups + Multi‑AZ deployments; use IAM policies for least privilege.  
- **Cost trade‑off:** Chose DynamoDB for hot keys, Redshift Spectrum for cold analytics to keep < $4k/month vs $12k if all data stayed in RDS.

**Result:**  
Training latency dropped from 30 min to 3 min (10× faster). Model accuracy improved by 8 % due to fresher features. Monthly spend reduced by 65 %.  

*Bar‑raiser takeaway:* Showed ownership, deep schema reasoning, and quantified impact—exact numbers let leadership see tangible ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
