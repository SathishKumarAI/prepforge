---
qid: vq_d8cbdb2ba5__star__local
question: what are the different fileformats that can be used in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 319
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:22:24-05:00'
sources: []
---

**Situation** – In early 2023 I was leading a migration of our nightly ETL pipeline from an on‑premise Hive cluster to Amazon EMR for cost efficiency. The legacy jobs produced millions of rows daily in plain text and CSV files, but the new environment required us to optimize storage and query performance.

**Task** – My goal was to identify suitable Hadoop file formats that would reduce I/O, improve compression, and support schema evolution while keeping compatibility with our existing Spark jobs.

**Action** – I evaluated Avro, Parquet, ORC, SequenceFile, and Text. I ran benchmarks on a sample dataset (≈10 GB) using EMR’s Spark 3.1 cluster. Parquet offered the best compression (≈4:1 vs. Text) and columnar read speed, so I rewrote our ingestion jobs to write Parquet with snappy encoding. For legacy logs that needed exact row order, we kept SequenceFiles for a transitional period. We also added Avro schemas in the schema registry for downstream services that required strict typing.

**Result** – The new pipeline cut storage costs by 35 % and reduced query latency from 12 s to under 3 s on average. I learned how format choice directly impacts both performance and maintainability, and I now routinely document format trade‑offs in design reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
