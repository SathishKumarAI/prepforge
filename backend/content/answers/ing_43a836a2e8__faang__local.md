---
qid: ing_43a836a2e8__faang__local
question: 'Explain: Slower Database Queries — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 595
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:43-05:00'
sources: []
---

**Clarify**  
You’re asking for the most frequent causes of sluggish DB queries and how a system designer would mitigate each one. I’ll assume we’re dealing with relational or document stores behind web services, not specialized OLAP engines.

---

### Approach
1. List 8 root‑causes (indexing, locking, schema design, network latency, data volume, query complexity, hardware limits, and mis‑tuned configuration).  
2. For each, give a concise solution.  
3. End with a quick “check‑list” for validation.

---

### Depth

| # | Problem | Typical Symptoms | Solution |
|---|---------|------------------|----------|
| 1 | **Missing/inefficient indexes** | Slow SELECTs, high CPU | Add composite or covering indexes; drop unused ones. |
| 2 | **Lock contention / deadlocks** | Queries hang, retries | Use row‑level locking, isolation level tuning, and retry logic. |
| 3 | **Poor schema design (normalization vs denormalization)** | JOIN storms, large rows | Balance normalization with denormalized aggregates; use sharding if needed. |
| 4 | **Network latency / distance** | End‑to‑end delays | Deploy DB replicas closer to app tiers; use connection pooling. |
| 5 | **Data volume (hot spots)** | Hot partitions overload a node | Partition by key, employ read/write splits, or use distributed engines like CockroachDB. |
| 6 | **Complex query logic** | Heavy CPU, sub‑optimal plans | Refactor to fewer joins, materialized views, or pre‑aggregated tables. |
| 7 | **Hardware limits (CPU/RAM/IO)** | Queue buildup, timeouts | Scale vertically (more RAM) or horizontally (sharding), use SSDs. |
| 8 | **Mis‑tuned DB config** | Suboptimal cache sizes, autovacuum delays | Profile with EXPLAIN, adjust buffer pools, connection limits, and vacuum frequency. |

---

### Edge Cases
- Highly concurrent writes may still starve reads even after locking changes; test with simulated workloads.
- Adding indexes can hurt write throughput; monitor insert latency post‑change.
- Replication lag might hide stale data; verify read‑your‑writes consistency.

---

### Optimize & Communicate  
Prioritize fixes that give the highest speedup per effort—typically indexing, query refactor, then hardware scaling. Explain trade‑offs: e.g., denormalization increases write cost but saves expensive joins. Conclude with a quick checklist for a performance audit: indexes → plan → locks → partitioning → network → config. This structured narrative demonstrates clear problem‑solving and depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
