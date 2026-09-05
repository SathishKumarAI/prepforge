---
qid: ing_d7d98fb876__star__local
question: 'Explain: Write Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 355
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:37-05:00'
sources: []
---

**Situation** – In my last role I was asked to build the “write path” for a real‑time recommendation engine that ingested user interaction events (clicks, views) and updated per‑user embeddings in our feature store. The existing pipeline stored raw logs but didn’t support low‑latency updates, so recommendation latency hit 200 ms.

**Task** – I had to design a scalable, fault‑tolerant write path that could ingest millions of events per second, update embeddings within 10 ms, and keep the store consistent across two replicas.

**Action** – I split the stream into two phases: (1) a Kafka consumer that batches 500 events, applies an incremental gradient update to each user’s embedding in memory, and writes a delta to a RocksDB instance; (2) a background worker that snapshots the updated embeddings to S3 every minute for durability. To guarantee consistency I used a transactional write‑ahead log with write‑back on failure. For scaling I added horizontal sharding by user ID hash and used gRPC for inter‑service communication.

**Result** – The new write path reduced update latency from 200 ms to <10 ms, handled 2 M events/sec, and increased recommendation accuracy (AUC) by 3%. I learned that a clear separation of real‑time processing and durable storage is key in ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
