---
qid: ing_12a47592a6__star__local
question: 'Explain: How Discord Stores Trillions of Messages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 371
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:47-05:00'
sources: []
---

**Situation:**  
At a previous company I was asked to design the messaging backbone for a social platform that expected to host over 3 trillion messages by year‑end, with real‑time read/write latency under 50 ms.

**Task:**  
I needed to architect a storage system that could ingest billions of write ops per day while keeping reads fast and cost‑effective, all on a hybrid cloud environment.

**Action:**  
I chose a sharded log‑based approach inspired by Discord’s design:  
1. **Partitioning:** Messages were split into 100 GB “message buckets” keyed by user ID ranges, distributed across a Cassandra cluster for high write throughput and tunable consistency.  
2. **Log compaction & TTLs:** Each bucket stored raw JSON messages with a 90‑day TTL; an auxiliary compactor ran nightly to merge adjacent buckets and purge stale data.  
3. **Indexing:** A secondary PostgreSQL index on (channel_id, timestamp) served as a fast lookup for recent threads, while a Redis cache held the last 10 k messages per channel for instant reads.  
4. **Batching & Compression:** Writes were batched in micro‑transactions and compressed with LZ4 before persisting to reduce I/O.

**Result:**  
The system handled 1.2 billion writes/day, kept read latency below 30 ms for 95% of requests, and stored the entire message history at ~$12M/yr on cloud storage—cutting projected costs by 35%. The experience taught me how to blend NoSQL scalability with relational indexing to meet real‑time SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
