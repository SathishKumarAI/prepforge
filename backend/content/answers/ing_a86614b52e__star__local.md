---
qid: ing_a86614b52e__star__local
question: 'Explain: Products — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 374
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:56-05:00'
sources: []
---

**Situation:**  
When I joined the data platform team at a ride‑hailing company, our analytics stack was choking on real‑time trip logs: we had to index every event by user ID, vehicle ID, city, time stamp and many more attributes, quickly growing into trillions of keys. The existing key‑value store could not keep up with the ingestion rate or provide sub‑second query latency for dashboards.

**Task:**  
I was tasked with designing a scalable indexing layer that could ingest 10 M events per second, support millions of concurrent queries, and still fit within our cost budget.

**Action:**  
I led the implementation of **LedgerStore**, a custom log‑structured merge tree (LSM) built on top of Apache Cassandra and backed by RocksDB for local compaction. We partitioned data by time buckets and shard by city, then used Bloom filters to prune irrelevant partitions during reads. To handle the trillions of keys, we employed *prefix compression* and *dynamic key routing* so hot keys were stored in dedicated nodes with higher memory. For query acceleration, we pre‑materialized secondary indexes as lightweight materialized views that updated asynchronously, keeping write throughput high.

**Result:**  
LedgerStore ingested 12 M events/sec while keeping write latency under 5 ms and read latency below 20 ms for 99th‑percentile dashboard queries. We reduced storage costs by 35% through compression and eliminated query timeouts that previously plagued our analysts. The system scaled to support over 3 trillion indexed rows without any single point of failure, and I learned the importance of combining proven distributed primitives with custom tuning for extreme scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
