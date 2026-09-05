---
qid: vq_063be31e3d__star__local
question: What are the different file formats in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 430
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:25-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating the company’s nightly sales ETL from a legacy Hadoop cluster to a new Hive‑based warehouse. The existing raw logs were being shipped as plain CSVs and the downstream analytics team complained that query times had ballooned by 70 % after the migration.

**Task** – My goal was to redesign the ingestion pipeline so that the data stayed in an optimal format for Hive, reducing scan time while keeping write throughput high. I needed to pick the right file types, partitioning scheme and compression strategy.

**Action** – I started by profiling a sample of 10 TB of raw logs: 60 % text columns, 30 % numeric, 10 % timestamps. Based on that I chose **ORC** for full‑table storage because it offers columnar compression (≈4× smaller than TextFile) and built‑in predicate pushdown. For the fact tables with heavy joins I used **Parquet**, which gives better read performance on wide schemas. For semi‑structured event streams I switched to **Avro** files so schema evolution was painless. I also set up Hive partitioning by `year, month` and enabled Snappy compression. The ingestion job was written in Spark (Scala) and writes directly to HDFS using the appropriate SerDe.

**Result** – After the switch, query latency dropped from 12 min to under 2 min for the most expensive report. Storage costs fell by ~35 % due to smaller file sizes, and the data lake now supports schema evolution without re‑ingesting older batches. I learned that choosing the right Hive format is a trade‑off between compression, read speed, and flexibility—there’s no one‑size‑fits‑all solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
