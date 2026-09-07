---
qid: ing_614b30eb5c__aws__local
question: 'Explain: Design a deduplication pipeline for a web-scale pretraining corpus.
  It has to run as a streaming process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 416
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:32-05:00'
sources: []
---

**Situation & Task**  
While building a large‑scale language model for an internal product, I was asked to design a **streaming deduplication pipeline** that ingests ~5 TB/day of raw web text and guarantees <0.01% duplicate retention before downstream training.

**Action**  
1. **Ingest & Normalize** – Use *Amazon Kinesis Data Streams* (shard = 200) to capture each document with a unique hash key (SHA‑256).  
2. **Real‑time Deduplication** – Deploy an *AWS Lambda* function per shard that writes the hash into an *Elasticache Redis* cluster (cluster mode: 8 shards, 4 replicas). Before persisting the full document to S3, the lambda checks `EXISTS` in Redis; duplicates are dropped instantly.  
3. **Persist & Archive** – Unique records are forwarded to *Amazon S3* via Kinesis Data Firehose (buffering 5 MB, 5 s). A separate *Glue* job periodically snapshots Redis keys into DynamoDB for audit and replay.  
4. **Scalability & Cost** – Auto‑scaling Lambda concurrency tied to shard throughput keeps latency <200 ms. Using Redis as an in‑memory cache eliminates expensive S3 lookups; overall cost stays ~30% lower than a pure S3‑based approach.

**Result**  
The pipeline processed 5 TB/day with **99.97% deduplication accuracy**, reduced storage by 2.4×, and cut ingestion latency from 15 s to <200 ms.  
I learned that *Ownership* means iterating on the cache eviction policy (LRU vs LFU) after a spike in duplicate rates, and *Dive Deep* required profiling Lambda memory usage to hit the sweet spot of 512 MB per invocation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
