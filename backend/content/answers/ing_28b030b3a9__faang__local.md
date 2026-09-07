---
qid: ing_28b030b3a9__faang__local
question: 'Explain: override and delete one at position in — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 427
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:10-05:00'
sources: []
---

**Clarify**

We’re asked how a collaborative editor (Google Docs) can *override* or *delete* a character at a specific position while keeping the document consistent across many users.  
Key assumptions:  
1. Clients edit locally and send operations to a server.  
2. Operations are *optimistic*: they execute immediately on the client, then propagate.  
3. The system must converge to the same final text regardless of operation order.

**Approach**

Use **Operational Transformation (OT)**: each edit is an operation (`insert`, `delete`) tagged with a unique sequence number and site ID.  
When an operation arrives at the server it is transformed against concurrent operations that have already been applied, producing a *transformed* operation that can be safely executed on all replicas.

**Depth**

- **Delete**: `del(pos)` removes the character at `pos`.  
  If another client inserts before `pos`, OT shifts `pos` right; if it deletes the same char, the delete is dropped.  
- **Override (replace)**: implemented as a `delete` followed by an `insert` at the same position (`del(pos); ins(pos, newChar)`).  
  OT ensures both are applied in the correct relative order.  

Transformation rules preserve intent and guarantee convergence in O(log n) per operation if we index ops efficiently.

**Edge Cases**

- Simultaneous deletes of the same character → one delete becomes a no‑op.  
- Insert after delete at same position → OT shifts insert right.  
- Network latency → out‑of‑order arrival; transformation resolves conflicts.

**Optimize & Communicate**

We can batch small operations, compress logs, and use vector clocks to reduce metadata overhead. I would explain that OT’s elegance lies in its *intent preservation*: each user’s intention (delete/override) is honored regardless of timing. This guarantees a consistent document state while keeping latency low—exactly what Google Docs needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
