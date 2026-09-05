---
qid: ing_270455b30a__fp__local
question: 'Explain: Concurrency — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 431
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:28:29-05:00'
sources: []
---

### Why concurrency matters in a modern cache

A cache is a **low‑latency, shared state** that many threads read and occasionally update.  
If every operation acquires a global lock, throughput collapses to the lock’s critical‑section size:  

\[
T_{\text{throughput}} \le \frac{1}{t_{\text{lock}} + t_{\text{op}}}
\]

Thus we must **decouple read paths from write paths**.  
The fundamental principle is *optimistic concurrency*: assume conflicts are rare, and only pay the cost when they occur.

### Design principles

| Principle | Rationale |
|-----------|-----------|
| **Sharding / Partitioning** | Reduce lock contention by giving each shard its own fine‑grained lock or lock‑free structure. |
| **Immutable snapshots for readers** | Readers can safely traverse a snapshot without locks; writers create a new version and swap atomically (copy‑on‑write). |
| **Hazard pointers / epoch‑based reclamation** | Avoid ABA problems when freeing nodes concurrently. |
| **Batching updates** | Accumulate writes in a per‑shard queue, flush them periodically to amortize lock costs. |

### Non‑obvious insight

Most caches treat *eviction* as a global problem.  In practice, eviction can be made **local** by letting each shard maintain its own LRU counter or size budget.  The global policy then only needs to reconcile per‑shard quotas—an O(1) operation—while preserving overall fairness.  This eliminates the “global eviction bottleneck” that often limits scalability beyond ~1000 cores.

By combining sharding, immutable snapshots, and local eviction, a modern cache achieves **O(1)** read latency, writes that scale linearly with core count, and deterministic memory reclamation—all while staying mathematically grounded in concurrency theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
