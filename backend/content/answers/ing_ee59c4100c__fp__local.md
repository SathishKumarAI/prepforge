---
qid: ing_ee59c4100c__fp__local
question: 'Explain: Data storage — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 399
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:25:53-05:00'
sources: []
---

**Why data‑storage choices matter in a system‑design interview**

At its core, a system must *store* facts and *retrieve* them fast enough that the user’s perception of latency remains constant.  
1. **Problem space:** A client sends a request → the server queries some state → a response is returned.  
   - If we can’t guarantee \(O(\log n)\) or better on the dominant data access, throughput collapses regardless of CPU power.
2. **Fundamental trade‑offs:**  
   *Latency* ↔ *Consistency* ↔ *Scalability*.  
   These are not independent knobs; they stem from **information theory**: a single copy can be read in \(O(1)\), but replicating it for fault‑tolerance adds network hops, which inflates latency.  
3. **Design principles:**  
   - **Store‑once, read‑many** → use immutable objects or append‑only logs; this gives linear scalability because writes never overwrite hot spots.  
   - **Cache locality** → keep hot data in memory (Redis, Memcached) to avoid disk I/O, but remember that the *cost of coherence* grows with partition count.  
4. **Non‑obvious insight:**  
   Most candidates treat “NoSQL = schemaless” as a benefit, overlooking that **schema evolution is still a consistency problem**. A well‑designed schema (e.g., using versioned columns in Bigtable or JSON with typed fields) lets you evolve data without breaking existing reads—essential for long‑lived services.

> *Bottom line:* pick the storage model that satisfies the three axes for the specific access pattern, and always justify it by pointing back to the underlying information‑theoretic limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
