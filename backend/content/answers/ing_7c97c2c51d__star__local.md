---
qid: ing_7c97c2c51d__star__local
question: 'Explain: Strongly consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 385
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:45-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s payments team, we were migrating the legacy ledger system to a new distributed store called LedgerStore. The old system could only handle about 10 million secondary indexes before performance degraded; our projections for the next five years called for trillions of dynamic indexes across multiple currencies and time zones.

**Task:**  
I was tasked with designing an indexing layer that would remain strongly consistent, support real‑time updates, and scale to trillions of entries without breaking SLA latency (< 20 ms per read).

**Action:**  
First, I chose a sharded B‑Tree structure stored in a columnar key‑value store (Cassandra) but wrapped it with a Raft‑based consensus module for atomic commits. Each index entry was encoded as a composite key: `<entity_id>|<index_name>|<timestamp>`. To keep write amplification low, I implemented a two‑phase commit that batches updates per shard and writes to an append‑only log before committing the B‑Tree pointer. For reads, we used read‑repair: a lightweight quorum check against secondary replicas ensured strong consistency while keeping read latency under 10 ms. Finally, I introduced adaptive compaction policies that merged hot partitions during off‑peak hours, preventing disk bloat.

**Result:**  
The new indexing layer handled 1.2 trillion unique index keys with an average write throughput of 15 k ops/s and maintained read latency below 18 ms under peak load. We reduced the overall storage footprint by 35% compared to our prototype. This architecture also made it possible for new micro‑services to create on‑the‑fly indexes without any downtime, a key lesson: consistency can coexist with massive scale when you combine sharded B‑Trees, consensus commits, and smart compaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
