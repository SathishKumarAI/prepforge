---
qid: ing_e600ff55c0__fp__local
question: 'Explain: Types of Pagination'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 440
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:07:41-05:00'
sources: []
---

## Pagination in Machine Learning Pipelines

When training or evaluating models on large corpora, we rarely load the entire dataset into memory. Instead we **page** data—fetch a chunk, process it, then move to the next. The choice of pagination strategy hinges on two fundamental constraints: *memory footprint* and *latency guarantees*.  

| Type | Mechanism | Why It Works | Trade‑off |
|------|-----------|--------------|-----------|
| **Offset‑based (index)** | `SELECT … LIMIT N OFFSET M` | Simple arithmetic; works with any index. | Skips already‑seen rows, but can “rewind” to the same offset if data changes → inconsistency. |
| **Keyset (cursor) pagination** | `WHERE key > last_key ORDER BY key LIMIT N` | Uses a monotonic key; stable even when inserts/deletes occur between pages. | Requires an indexed key and cannot jump arbitrarily to page *k*. |
| **Infinite scroll / stream** | Continuous fetch of next N rows as previous batch completes | Eliminates “page” boundaries; ideal for real‑time inference or streaming training. | No easy random access; risk of duplicate/omitted rows if backpressure fails. |

### Non‑obvious Insight  
Most practitioners think *keyset* is always superior because it’s stable, but it **breaks down when the key distribution is highly skewed**: a single hot key can cause one page to be tiny while others are huge, leading to load imbalance in distributed training. A hybrid approach—using offset for coarse sharding and keyset within each shard—often yields the best throughput.

In short, pagination is not just an I/O trick; it’s an optimization problem balancing **determinism** (stable ordering) against **efficiency** (minimal seeks). Choosing wisely turns a bottleneck into a scalable pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
