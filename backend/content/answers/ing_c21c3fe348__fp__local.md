---
qid: ing_c21c3fe348__fp__local
question: 'Explain: Index by retention period — How many shards should I have in my
  Elasticsearch cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 380
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:54:42-05:00'
sources: []
---

**Why the “retention‑period” pattern forces a specific shard count**

The core problem is *temporal locality*: queries (e.g., last 7 days) hit only recent shards, while older data can be archived or deleted.  
If you create one index per month (`logs-2024.09`) and keep it for 12 months, every query touches at most **12** indices. The cost of a search is roughly proportional to the number of shard‑searches: each shard must receive the query, compute partial results, and return them.

Assume you want the same throughput as a single large index that holds all data (`logs`). Let  
- `S` = shards per month,  
- `N` = total documents in 12 months.  

A single‑index search scans `S_total = S × 12` shards. To keep latency constant we need

```
S × 12 ≈ S_total
```

Thus **use the same shard count as you would for a single, long‑lived index**.  
If your production cluster runs 20 shards on a full index, each monthly index should also have 20 shards; otherwise you’ll either overload nodes (too few) or waste resources (too many).

**Non‑obvious insight:**  
The retention period does *not* affect the optimal shard size—only the number of indices. The “per‑month” split is purely a logical convenience for TTL and rollover, not an architectural requirement. By keeping shard counts identical across time slices you preserve the cluster’s balancing guarantees and avoid fragmenting the index into tiny shards that hurt query efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
