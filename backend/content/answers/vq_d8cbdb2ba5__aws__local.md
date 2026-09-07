---
qid: vq_d8cbdb2ba5__aws__local
question: what are the different fileformats that can be used in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 477
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:34-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession* – we choose formats that give customers fast, cost‑effective analytics; *Ownership* – I own the data pipeline from ingestion to query.  

**Situation / Task**  
In 2023 I led a migration of our 2 PB nightly logs from on‑prem Hadoop to EMR/S3 for an ad‑tech client who needed sub‑minute reporting. The goal was to reduce query cost by 30% while keeping latency under 5 s.

**Action**  
I evaluated the following Hadoop file formats:

| Format | Use case | AWS services |
|--------|----------|--------------|
| **TextFile / CSV** | Simple ingestion, high write throughput | EMR, S3, Athena |
| **SequenceFile** | Key/value pairs, binary, good for MapReduce shuffle | EMR, HDFS |
| **Avro** | Schema evolution, compact binary | Glue Catalog, EMR, Athena |
| **Parquet** | Columnar storage, predicate push‑down | EMR, S3, Athena, Redshift Spectrum |
| **ORC** | Compression + predicate push‑down, best for Hive | EMR, S3, Athena |
| **RCFile** | Row‑column hybrid (now legacy) | EMR, Hive |

I benchmarked read/write throughput and cost on a 1 TB sample. Parquet yielded 4× faster SELECTs vs TextFile and cut storage by ~60%. Combined with Glue’s schema registry, we avoided data duplication.

**Result**  
Post‑migration, query costs fell from $12k/month to $8k/month (≈33% savings) while average latency dropped from 12 s to 3.5 s. The client could now run real‑time dashboards in Athena without manual tuning.  

**Learning** – always prototype with a small subset; schema evolution is often the hidden cost driver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
