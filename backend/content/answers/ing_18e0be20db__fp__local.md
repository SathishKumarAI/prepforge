---
qid: ing_18e0be20db__fp__local
question: 'Explain: DB auto-increment — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 601
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:56-05:00'
sources: []
---

## Five ways a database can hand out “unique IDs”

| # | Method | Why it works | Deep principle | Non‑obvious insight |
|---|--------|--------------|-----------------|----------------------|
| 1 | **Serial / Auto‑Increment** | Keeps a single counter per table; each new row reads the last value, adds one. | *Sequential optimisation*: minimal I/O and contention – the next number is always known without scanning. | The counter lives outside the data pages; if you ever need to “rewind” (e.g., for sharding), you must copy that counter too. |
| 2 | **GUID / UUID** | Generates a 128‑bit value using time, MAC, random bits. | *Entropy guarantees uniqueness*: high probability of no collision without coordination. | A UUID’s first bits encode the node and timestamp; if you sort them as strings you get a roughly chronological order—useful for sharding even though they’re not strictly sequential. |
| 3 | **Snowflake / Twitter ID** | Timestamp (41 bits) + datacenter+worker (10 bits) + sequence (12 bits). | *Deterministic partitioning*: the ID contains its origin, so you can route writes to the right node without a lookup. | The “sequence” part allows >4096 IDs per millisecond on a single machine—avoids bottleneck while keeping IDs sortable by time. |
| 4 | **Composite Key** | Combine an external unique field (e.g., user‑id) with a local counter. | *Local uniqueness within a namespace*: you can reset the counter per owner, saving space. | If the external key is itself a UUID, you effectively get a “deterministic” UUID that’s shorter than a full 128‑bit value but still unique across users. |
| 5 | **Hash‑based** (e.g., MurmurHash of payload + salt) | Derive an ID deterministically from the row’s content. | *Functional identity*: same input → same key, eliminating duplicates at insertion time. | The hash can be used as a primary key and also as a quick deduplication index; you need only one read to know if the row already exists. |

**Bottom line:**  
Each scheme trades off **speed**, **space**, **scalability**, and **predictability**. Understanding the underlying optimisation—whether it’s keeping counters external, embedding timestamps, or hashing data—lets you pick the right generator for your workload. The subtlety most miss is that *the placement of the counter (in‑page vs out‑of‑page) determines how resilient the system is to node failures and sharding.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
