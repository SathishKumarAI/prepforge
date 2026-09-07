---
qid: ing_f190cfc536__aws__local
question: 'Explain: We wanted real-valued features. We wanted enough'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 361
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:25-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that needed to build a fraud‑detection pipeline for a payment gateway. The data scientist asked for *real‑valued* features (e.g., transaction amount, time‑to‑purchase) instead of binary flags so the model could learn subtle patterns. We also had to generate **≥ 1 M feature vectors per hour** to keep up with live traffic.

**Action**  
- **Ownership + Dive Deep:** I scoped the entire ETL chain and chose Amazon Kinesis Data Streams for ingestion, AWS Glue for incremental transformations, and Amazon DynamoDB (global secondary indexes) to store raw events.  
- **Bias for Action + Deliver Results:** Implemented a stateless Lambda that pulls batches from Kinesis, normalizes numeric fields using Min‑Max scaling learned offline in SageMaker, and writes the enriched vector to S3 in Parquet.  
- **Invent & Simplify:** Replaced ad‑hoc MapReduce jobs with Glue ETL scripts, cutting execution time from 15 min to < 2 min per batch.  

**Result**  
Processed 1.5 M feature vectors/hour with 99.9 % availability; cost dropped 40 % (from $4k to $2.4k/month). The fraud model’s precision improved from 78 % to 86 %.  
**Bar‑raiser takeaway:** I owned the pipeline, dove deep into AWS services, quantified impact, and iterated quickly after a failure in the first Lambda test that caused data loss—rewriting the idempotency logic resolved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
