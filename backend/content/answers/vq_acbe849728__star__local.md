---
qid: vq_acbe849728__star__local
question: what is spark streaming?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 364
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:22-05:00'
sources: []
---

**Situation** – In my last role at a fintech firm we had to process real‑time transaction logs from our payment gateway. The volume was ~1 M events per hour, and the compliance team required an audit trail with sub‑second latency. Our batch ETL pipeline could not meet that SLA.

**Task** – I needed to build a streaming ingestion layer that would read Kafka topics, cleanse data, enrich it with static reference tables, and write back to HDFS for downstream analytics—all within 2 seconds per micro‑batch, while ensuring exactly‑once semantics.

**Action** – I chose Spark Structured Streaming because of its fault‑tolerant micro‑batch model and integration with our existing Spark cluster. I set up a streaming DataFrame reading from Kafka with `startingOffsets="latest"` and used watermarking (`withWatermark("timestamp", "1 minute")`) to handle late data. For enrichment, I broadcasted the reference tables (country codes, merchant categories) using `broadcast()` to avoid shuffling. To guarantee exactly‑once writes, I configured the sink to use HDFS with checkpointing enabled at `/spark-checkpoints/transactions`. I also tuned the executor memory and number of partitions to keep each micro‑batch under 1 second.

**Result** – The streaming job processed 95% of events within 1.8 seconds, meeting our SLA. We reduced compliance reporting latency from 30 minutes to real time and cut storage costs by 15% thanks to efficient partitioning. I learned how Spark’s micro‑batch engine balances speed and fault tolerance, and the importance of proper watermarking for late data handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
