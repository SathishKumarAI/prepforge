---
qid: ing_b8ea4506a1__star__local
question: What is an SSD? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 316
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:04-05:00'
sources: []
---

**Situation:** In my last role as a data engineer for a fintech startup, we were migrating our nightly batch jobs from on‑premise servers to AWS. The old infrastructure used spinning disks; each ETL run would take over 90 minutes because the database was constantly seeking data across large tables.

**Task:** I had to reduce job runtime by at least 50% while staying within a $3,000 monthly budget for storage and compute.

**Action:** I evaluated SSD options—S3 Standard‑IA, EBS gp3, and Amazon FSx for Lustre. After benchmarking read/write throughput (using `fio`), I chose **EBS gp3** with 1 TB capacity and enabled the “provisioned IOPS” feature at 4,000 IOPS, which matched our peak load. I also partitioned data into columnar Parquet files on the SSD-backed volumes, allowing Spark to skip irrelevant partitions during queries. Finally, I automated snapshotting and lifecycle policies to keep costs low.

**Result:** The nightly ETL cut from 90 minutes to 35 minutes—an **61% reduction**—and we saved roughly $400/month by avoiding more expensive provisioned IOPS tiers. I learned that choosing the right SSD type and tuning I/O settings can dramatically improve data‑intensive workflows without breaking the bank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
