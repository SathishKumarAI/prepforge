---
qid: ing_42cec9d473__star__local
question: 'Explain: Toys — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 347
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:19-05:00'
sources: []
---

**Situation:**  
While leading a startup’s recommendation engine, we hit a bottleneck when our click‑through data exploded to 12 M rows per day. The existing ETL pipeline stalled and the model drifted.

**Task:**  
I needed to redesign the ingestion layer so it could handle millions of events in near real time, keep latency under 200 ms for downstream ML inference, and still allow batch analytics.

**Action:**  
Following “Toys” from *Designing Data‑Intensive Applications*, I treated our stream as a toy system first: built a lightweight Kafka topic to decouple producers, then introduced a schema registry to enforce data contracts. For storage, I swapped the monolithic MySQL table for a columnar ClickHouse cluster with time‑partitioned tables, enabling instant rollups. To keep consistency, I implemented idempotent event handling via sequence numbers and used a lightweight lock service (etcd) only for write‑conflict resolution. Finally, I added a simple backpressure mechanism that throttles producers when consumer lag exceeds 5 min.

**Result:**  
Throughput jumped from 1 k/s to 15 k/s, latency dropped to <150 ms, and model accuracy improved by 8 % due to fresher data. The exercise taught me the value of treating complex pipelines as toy systems first—simplify, iterate, then scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
