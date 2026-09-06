---
qid: ing_c8f75c109d__fp__local
question: 'Explain: to the server so total you guys — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 490
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:18-05:00'
sources: []
---

**Operational Transformation (OT) vs Differential Synchronization**

Both are algorithms that keep many copies of a document *consistent* while users edit concurrently.  
The *fundamental problem* is: how to apply edits made on different replicas so that every replica eventually converges, even if the same region was edited in divergent ways.

### Operational Transformation
1. **Transformation function** \(T(e_1,e_2)\) rewrites operation \(e_1\) in the context of a concurrent operation \(e_2\).  
2. Each site sends its local operations to a central server; the server broadcasts them back, transformed against all concurrent ops it has already seen.  
3. Because \(T\) satisfies *convergence*, *intention preservation* and *causality*, every replica ends up with the same state.

OT is rooted in **group‑theoretic** composition: operations form a partially ordered set, and \(T\) is an automorphism that preserves intent. The non‑obvious insight is that OT needs *contextual awareness* (the sequence number of ops), not just the diff; otherwise two inserts at the same index would collapse.

### Differential Synchronization
1. Clients keep a local copy plus a *state vector* (last known server state).  
2. When an edit occurs, the client computes a **diff** between its current state and the last synced state, sends that diff to the server.  
3. The server merges the incoming diff with any concurrent diffs using a simple merge algorithm (often conflict‑free replication).  

This relies on *information theory*: the diff is the minimal representation of change; merging is essentially computing the *union* of edits, assuming they are independent.

### Deep Connection
Both schemes are instances of **commutative replicated data types (CRDTs)** in disguise. OT ensures operations commute after transformation; differential sync guarantees that diffs can be merged without loss because each diff is a delta from a known baseline. The subtle point most overlook: *OT’s correctness hinges on the server being a single source of truth, whereas differential sync tolerates multiple concurrent servers—hence it scales better in geo‑distributed settings.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
