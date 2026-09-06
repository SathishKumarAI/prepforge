---
qid: ing_67dd084df8__fp__local
question: 'Explain: Single Source Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 317
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:40-05:00'
sources: []
---

**Single‑Source Replication (SSR)** is a data‑replication pattern that addresses *read scalability* while preserving *write consistency*.  
In the fundamental problem of distributed databases, we want many readers to access fresh data without overwhelming a single node that must process all writes. SSR solves this by designating one **primary** replica for all updates and letting every other **secondary** replica serve read requests.

Why this works:  

1. **Atomicity & Serializability** – By funneling writes through a single source, we avoid the classic *write‑skew* anomalies that arise when two replicas try to update overlapping data concurrently.  
2. **Linearizable Reads** – Secondary replicas apply updates in the same order as the primary (often via a log), ensuring that any read sees either the old value or the fully applied new value, never a partial mix.  
3. **Performance Geometry** – The network topology can be viewed as a star; the primary is the hub, and all spokes are readers. This minimizes communication overhead for writes while maximizing parallelism for reads.

A non‑obvious insight: SSR’s *write bottleneck* is actually an advantage in high‑concurrency workloads with skewed read/write ratios because it guarantees that no two writers can interfere, simplifying transaction isolation without the heavy coordination of multi‑master systems. In essence, SSR trades a controlled point of contention for global consistency and predictable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
