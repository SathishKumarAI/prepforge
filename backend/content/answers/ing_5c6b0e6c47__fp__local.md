---
qid: ing_5c6b0e6c47__fp__local
question: 'Explain: Eventually consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 414
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:30-05:00'
sources: []
---

**Why Uber needs “eventually consistent” indexes**

The problem is to let *every* service read a user’s balance in real‑time while the ledger writes millions of transactions per second.  
A naïve approach would update every index transactionally, but that forces each write to lock billions of rows—impossible at Uber scale.

**Derivation from first principles**

1. **Latency vs consistency trade‑off (CAP)** – We need *low latency* for reads; we can tolerate a brief window where an index is stale.
2. **Monotonicity of writes** – Ledger entries are append‑only and strictly ordered by timestamp.  
   This gives us a *causal chain*: later indexes depend only on earlier ones, never on future data.
3. **Eventual consistency as convergence** – If every index eventually receives the same updates (no deletion or reordering), all replicas converge to the same state regardless of update order.

Thus Uber’s LedgerStore implements:

* **Append‑only log** → guarantees ordering and crash‑recovery.
* **Incremental background workers** that replay the log on each index node, updating its local view asynchronously.
* **“Write‑once” semantics** – no deletions; once a record appears in an index it stays.

**Non‑obvious insight**

Because updates are monotonic, *readers can safely ignore the ordering of concurrent writes*.  
A reader sees the latest committed transaction for a user even if its local index is slightly behind. The only risk is that it may miss a very recent change, which Uber tolerates because downstream services re‑aggregate or retry. This subtle relaxation turns an otherwise intractable “write‑everywhere” problem into a scalable, mathematically guaranteed system that can support trillions of indexes with sub‑second read latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
