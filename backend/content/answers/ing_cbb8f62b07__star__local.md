---
qid: ing_cbb8f62b07__star__local
question: 'Explain: Meta Sorting and Searching — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 381
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:09-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an internal fraud‑detection pipeline that processed over 10 million transaction records per day. The data lake stored raw events in Parquet files on S3, but our ML model needed sorted batches to compute rolling window features efficiently.

**Task**  
I had to design a scalable “meta sorting and searching” layer that could ingest new data streams, maintain sorted indexes across multiple dimensions (timestamp, account ID, transaction amount), and expose fast lookup APIs for downstream models—all while keeping latency below 200 ms per query.

**Action**  
I built an incremental merge‑sort system using Apache Flink to stream incoming Parquet chunks into a distributed RocksDB table. For each dimension I maintained a B+Tree index stored in HBase, with a custom comparator that handled compound keys (e.g., `[timestamp, account_id]`). To accelerate range queries I added a probabilistic skip‑list overlay on top of the B+Trees, which reduced search depth from O(log n) to O(1.5 log n). I also implemented a two‑stage caching strategy: an LRU cache for hot keys in Redis and a write‑through policy that refreshed HBase only when the cached TTL expired.

**Result**  
The new system cut query latency from 750 ms to 140 ms on average, enabling real‑time feature generation for our fraud model. The sorted index also reduced disk I/O by 35 % compared to a naive scan approach. From this project I learned how combining classic data structures with distributed stream processing can bridge the gap between raw data lakes and low‑latency ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
