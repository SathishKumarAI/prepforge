---
qid: ing_ac6f0fbda8__think__local
question: 'Explain: Sharded Counter — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 401
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:23:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm that “sharded counter” refers to a horizontally‑partitioned distributed counter (e.g., Facebook’s like counter).  
- Assume we need to scale to millions of updates per second, tolerate node failures, and provide eventual consistency.  

**2️⃣ Adopt a design framework**  
- *Requirements → Constraints → Architecture*  
  - Functional: increment, read current value, high throughput.  
  - Non‑functional: low latency, fault tolerance, minimal coordination.  

**3️⃣ Step‑by‑step reasoning**  
1. **Shard the counter space**: map each update to a shard (hash key → node).  
2. **Local increments**: each node keeps a local count; updates are written locally and optionally asynchronously replicated.  
3. **Aggregation strategy**: expose a read API that queries all shards in parallel, sums results, caches the total.  
4. **Consistency model**: eventual consistency is acceptable; use background jobs to reconcile diverging counts.  
5. **Failure handling**: detect failed shard nodes via heartbeats; redirect writes to replicas or temporarily increase replication factor.  

**4️⃣ Common pitfalls to avoid**  
- *Hot‑spotting*: poor hash function causing uneven load.  
- *Read amplification*: summing all shards on every read can be expensive; use cached totals with TTLs.  
- *Stale data*: ignoring replication lag may give wrong totals.  

**5️⃣ Sanity checks & verbal communication**  
- Verify that the design meets throughput by estimating per‑node write capacity.  
- Explain trade‑offs: lower latency vs. eventual consistency, extra read cost for correctness.  
- Use a diagram (shards ↔ nodes, client → hash → shard) to illustrate data flow and fault handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
