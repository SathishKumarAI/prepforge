---
qid: ing_5a061b149e__fp__local
question: 'Explain: Date-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 426
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:40-05:00'
sources: []
---

**Date‑Tiered Compaction (DTC)** is a strategy for merging SSTables in systems that use immutable sorted tables (SSTables) to store data on disk.  
The *fundamental problem* it solves is the **“write amplification vs read latency” trade‑off**: writes are cheap when they append new files, but reads become slow once many small files must be merged during a query.

### Why DTC works

1. **Immutable writes** → every write creates a fresh SSTable with a monotonically increasing timestamp (the *date*).  
2. **Tiered merging** → the system keeps at most *k* tables per “tier” (e.g., k = 3). When a tier overflows, its tables are merged into a new one that starts a higher tier.  
3. **Geometric growth of file size** → each merge roughly multiplies the size by *k*, so after logₖ(N) merges a record is in a single large table.  

This guarantees an **O(log N)** number of tables a read must inspect, while keeping write amplification bounded because merges are batched.

### Deeper principle

DTC is an instance of **incremental hierarchical merging**, which is optimal for *ordered* data under the constraint that each merge costs linearly in the total size of its inputs. The geometric tiering balances the cost of a single large merge against many small ones, minimizing expected I/O per operation.

### Non‑obvious insight

Most people overlook that **the “date” in DTC is not just a timestamp but an implicit priority key**. By ordering SSTables by write time, the system guarantees that newer data always appears in higher tiers. This means that *read paths are naturally biased toward recent writes*, which reduces read amplification for hot data without any extra metadata or caching—an elegant side effect of the compaction policy itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
