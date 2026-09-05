---
qid: ing_3840c17732__star__local
question: 'Explain: Initial Snapshot — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 346
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:53-05:00'
sources: []
---

**Situation** – At my last company we were migrating a legacy order‑processing system to a new data warehouse for real‑time analytics. The source database had over 12 million rows and a daily change rate of ~15%. We needed an initial snapshot that would load quickly, preserve referential integrity, and allow us to start capturing incremental changes immediately.

**Task** – Design the CDC pipeline: create a one‑off full data copy, then switch to continuous change capture without downtime or duplicate records.

**Action** – I chose PostgreSQL logical decoding with `pgoutput` on the source. For the snapshot I used a parallel bulk load script that streamed rows in batches of 200 k, inserting into the target via `COPY` while maintaining a temporary “in‑flight” table for foreign keys. To avoid lock contention I disabled autovacuum temporarily and ran the job during off‑peak hours. Once the snapshot finished, I switched the logical replication slot to the target database and started streaming WAL records. I added a timestamp watermark column so downstream consumers could reconcile any overlap between snapshot and CDC streams.

**Result** – The initial load completed in 4 hours with <1% latency on the source. Subsequent CDC lag stayed under 30 seconds, keeping analytics fresh. We avoided a costly ETL rebuild and gained confidence that our real‑time pipeline would scale to 50 million rows. I learned how careful staging of the snapshot and precise slot management can make CDC production‑ready without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
