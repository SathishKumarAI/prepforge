---
qid: ing_d85bb05c23__aws__local
question: 'Explain: I Built My Second ETL Pipeline. This Time, I Started Thinking
  Like a Data Engineer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 411
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:39-05:00'
sources: []
---

**Situation** – While leading the ML Ops team, our first pipeline shipped in‑house but hit a bottleneck: nightly jobs stalled on a 12 TB raw dataset, causing model retraining delays of 48 h and costing ~$4K/day in EC2 usage.

**Task** – Design a second, production‑grade ETL that scales to 20 TB, reduces latency to <6 h, and cuts costs by >30 %.

**Action**  
- Adopted *Customer Obsession* & *Ownership*: mapped data quality pain points to downstream model accuracy.  
- Chose **AWS Glue** + **Amazon S3** for serverless, schema‑aware extraction; added **Glue Crawlers** to auto‑detect changes and maintain a catalog.  
- Implemented incremental loads via **Delta Lake on Amazon EMR**, enabling *Dive Deep* into lineage and rollback.  
- Orchestrated with **AWS Step Functions** (state machine) for fault tolerance, retry logic, and visibility in CloudWatch.  
- Integrated **Amazon Athena** for ad‑hoc analytics and a lightweight **Athena Workgroup** to isolate query costs.

**Result** – Pipeline throughput increased from 12 TB/48 h to 20 TB/5 h, cutting EC2 spend from $4K/day to $1.3K/day (≈68 % savings). Model retraining latency dropped to <6 h, improving feature freshness by 75 %. Post‑deployment monitoring revealed a 0.8 % drop in data drift, validating the quality gains.

**Bar‑raiser cues** – I demonstrated end‑to‑end ownership, deep technical dive into Glue/Delta trade‑offs, quantified impact on cost & latency, and iterated after a failed first run to refine error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
