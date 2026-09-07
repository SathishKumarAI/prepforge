---
qid: vq_1385c9d033__aws__local
question: What format (JSON, Avro, Parquet)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 499
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:48-05:00'
sources: []
---

**Situation**  
In my last role I led a migration of our nightly data pipeline from on‑premise Hadoop to Amazon S3 and Glue for an e‑commerce analytics team that processed ~10 TB/day of clickstream logs. The goal was to reduce storage costs by 30% while keeping query latency under 2 s for BI dashboards.

**Task**  
Choose a columnar data format that would give us the best trade‑off between compression, schema evolution, and read performance on Athena/Redshift Spectrum.

**Action**  
I benchmarked **Parquet**, **Avro**, and **JSON** using Glue ETL jobs:

| Format | Avg. Compression Ratio | Read Latency (Athena) | Schema Evolution |
|--------|------------------------|-----------------------|------------------|
| JSON   | 1:1                    | 45 s                  | ✔️               |
| Avro   | 4:1                    | 18 s                  | ✔️               |
| Parquet| **7.5:1**                | **2 s**                 | ❌ (needs schema refresh) |

Parquet gave the lowest storage footprint and fastest query times, but required us to lock the schema during the migration window. We mitigated this by:

1. Using Glue’s *Schema Registry* to version Parquet schemas.
2. Running a “schema‑sync” job that auto‑generates new Parquet files when a new column appears.

**Result**  
Post‑migration we achieved:

- **30% reduction in S3 storage costs** (from $12k/month to $8.4k/month).
- **Query latency dropped from 45 s to 2 s**, enabling real‑time dashboards.
- No data loss or downtime; the team adopted a “schema‑as‑code” workflow that cut manual effort by 40%.

---

**Leadership Principles Highlighted**

- **Customer Obsession** – Delivered faster, cheaper insights for business users.  
- **Ownership & Dive Deep** – I owned the end‑to‑end migration and dug into format internals to make an evidence‑based decision.

*Bar‑raiser cues:* clear ownership of metrics, deep dive into trade‑offs, quantified impact, and a learning loop (schema registry to handle evolution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
