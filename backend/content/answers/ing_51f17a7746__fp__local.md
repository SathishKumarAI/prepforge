---
qid: ing_51f17a7746__fp__local
question: 'Explain: Types of Indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 549
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:25-05:00'
sources: []
---

**Why do we need so many indexes?**  
In a distributed ledger every event (e.g., “user A → user B” or “account balance change”) must be queried by *every* consumer that cares about it—payment processors, fraud detectors, analytics dashboards, etc. The fundamental problem is: *how can we answer millions of distinct predicates in real time without copying data for each use case?*  

**LedgerStore’s solution – a two‑layer index engine**

| Layer | What it does | Why it works |
|-------|--------------|--------------|
| **Primary hash‑based partitioning** | Each event is hashed to a deterministic shard. All writes go to that shard once, guaranteeing linear scalability. | Hashing eliminates contention; every node owns a disjoint keyspace, so the cost of appending new events is O(1) per node. |
| **Secondary inverted indexes (Bloom + Skip‑list)** | For every attribute (e.g., `payer_id`, `transaction_type`) LedgerStore builds an *inverted index* that maps attribute values to event offsets. Bloom filters prune non‑matches; skip‑lists provide ordered traversal. | The combination yields sub‑logarithmic lookup time while keeping space proportional to the number of distinct values, not events. |
| **Compaction & hot‑caching** | Periodic compaction merges index segments and removes tombstones. Frequently accessed keys are cached in memory. | Compaction keeps index size linear; caching hides I/O latency for hot queries. |

**Scaling to trillions**

1. **Horizontal partitioning** – Each shard’s indexes live on a separate node, so the total index space grows linearly with added machines.
2. **Shared‑nothing architecture** – No global lock or consensus is needed; writes only touch the owning shard.
3. **Columnar compression per value bucket** – Since many events share the same attribute values, LedgerStore stores event offsets in run‑length encoded blocks, saving > 90 % space for popular keys.
4. **Adaptive Bloom thresholds** – The filter size scales with the number of distinct values per attribute, keeping false‑positive rates < 0.1 % even when a single key maps to billions of events.

**Non‑obvious insight:**  
Because every event is *immutable*, LedgerStore can append indexes without rewriting existing ones. This “append‑only” property lets it maintain *exact* historical state while still providing real‑time query latency—something traditional OLTP systems cannot achieve at this scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
