---
qid: ing_19e1d39b05__aws__local
question: 'Explain: Example Use Cases — Dataarchiving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 490
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:56-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **S**ituation – In 2023 our e‑commerce platform stored ~200 PB of order and customer logs that were rarely accessed but required compliance retention for 7 years.  
> **T**ask – Build a cost‑efficient, highly available data‑archiving pipeline that lets analysts query historical data in under 5 seconds while keeping the storage budget below $1M/year.  
> **A**ction – I designed an event‑driven architecture using **Amazon Kinesis Data Streams** to capture live logs, then a **Glue** job nightly to partition and transform them into **Parquet** on **S3 Glacier Deep Archive**. For analytics we provisioned a **Lake Formation** catalog and created Athena federated queries that automatically materialize the most recent 30 days in an **S3 Standard‑IA** tier, while older partitions stay in Glacier. I added a **Cost Explorer rule** to auto‑delete snapshots older than 10 years.  
> **R**esult – After launch we reduced storage spend by 68% (from $2.4M to $0.8M/year), query latency for historical reports dropped from 3 min to <5 s, and compliance audits passed with zero data loss incidents.

**Dive Deep & Deliver Results**

- **Scalability:** Kinesis shards auto‑scale based on ingestion rate; Glue jobs run in parallel across partitions.  
- **Availability:** S3 provides 99.999999999% durability; Glacier Deep Archive is backed by cross‑region replication for disaster recovery.  
- **Cost Trade‑offs:** Parquet compression saves ~70 % storage, Athena on-demand pricing keeps analytics costs predictable.  
- **Learning from Failure:** Initial prototype used S3 Standard which blew the budget; shifting to tiered storage after a cost‑analysis audit was the key pivot.

**Bar‑raiser Takeaway**

Candidates should show *ownership* of the end‑to‑end pipeline, *dive deep* into AWS service trade‑offs, quantify savings and performance gains, and reflect on how an early misstep (cost blow‑up) led to a smarter solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
