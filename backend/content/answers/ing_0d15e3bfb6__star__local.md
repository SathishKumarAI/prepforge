---
qid: ing_0d15e3bfb6__star__local
question: 'Explain: Read Path — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 373
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:50-05:00'
sources: []
---

**Situation** – At Uber we had a real‑time analytics layer that needed to query user activity logs at scale. The raw event stream grew to over 3 TB per day and the downstream dashboards were lagging because every read hit a hot spot in the database.  

**Task** – I was tasked with designing a storage engine that could expose trillions of time‑based indexes (user ID, vehicle ID, region, device type) while keeping latency under 200 ms for ad‑hoc queries.

**Action** – I built LedgerStore on top of RocksDB using a log‑structured merge tree and added a *read path* layer. Instead of materializing every index, we stored a compacted “ledger” of delta logs keyed by composite keys (e.g., `user_id#timestamp`). For reads, the engine walks only the relevant ledger partitions, applying in‑memory bloom filters to skip missing shards, and then merges results from the latest 24 hours using a two‑pass scan: first a pre‑aggregation pass that emits partial sums per index, followed by a final merge on the query node. We also introduced adaptive compaction windows based on hot key detection, reducing write amplification.

**Result** – The read latency dropped from 1.2 s to 110 ms for typical dashboard queries, and we compressed over 4 trillion indexed entries into 350 GB of on‑disk storage. This approach also cut our CPU usage by 35% during peak hours, proving that a well‑tuned read path can unlock massive scale without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
