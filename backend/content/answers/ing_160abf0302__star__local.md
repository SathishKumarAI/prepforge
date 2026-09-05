---
qid: ing_160abf0302__star__local
question: 'Explain: A Structured Streaming job reads Kafka and writes to a Delta table.
  The cluster is killed mid-batch and restarts. Does the customer get duplicate rows?
  Explain at the level of the checkpoint and the transaction log.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 408
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:29-05:00'
sources: []
---

**Situation**  
I was running a Spark Structured Streaming pipeline for a retail analytics platform that ingested click‑stream data from Kafka every 5 seconds and wrote it to a Delta Lake table on an EMR cluster. One afternoon the cluster hit a spot‑on failure during a 30‑second micro‑batch, so we had to kill the driver and restart the job.

**Task**  
I needed to ensure that when the job resumed it wouldn’t re‑write the same Kafka offsets or create duplicate rows in Delta, while still guaranteeing at‑least‑once processing for downstream dashboards.

**Action**  
The Structured Streaming checkpoint directory stored two key pieces of state: the last committed Kafka offset and the current batch id. When the driver restarted, Spark read the checkpoint, saw that batch 42 had partially finished, and re‑executed only the missing portion of that micro‑batch. Meanwhile, Delta’s transaction log (the `_delta_log` folder) recorded each commit as a JSON file with the `operationMetrics` showing the number of rows written. Because we used idempotent Kafka offsets and wrote to Delta using `merge` semantics (partitioning by event timestamp), any re‑executed micro‑batch appended only new records; the transaction log prevented duplicate appends.

**Result**  
After the restart, the downstream BI dashboards reflected exactly 2 300 rows for that day—identical to what would have been written had the cluster never failed. The Delta transaction log showed a clean sequence of commits with no overlapping row counts, proving there were no duplicates. I learned that checkpointing Kafka offsets together with Delta’s ACID guarantees is enough to avoid double‑writes even in mid‑batch crashes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
