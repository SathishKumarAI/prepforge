---
qid: ing_c8f75c109d__faang__local
question: 'Explain: to the server so total you guys — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 431
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:21-05:00'
sources: []
---

**Clarify**  
You’re asking how a real‑time collaborative editor (like Google Docs) keeps multiple users’ copies in sync on the server, especially when edits overlap. The key challenge is *operational transformation* (OT): transforming operations so that they commute and preserve intent.

**Approach**  
1. **Represent state as a sequence of characters or blocks.**  
2. **Define atomic operations:** insert(pos, text), delete(pos, len).  
3. **When an operation arrives, transform it against all concurrent ops that the client hasn’t seen (using a transformation function T(op₁, op₂)).**  
4. **Apply the transformed op to the server’s authoritative document and broadcast it.**  
5. **Clients buffer out‑of‑order ops, apply transformations locally, then replay their own pending edits on top of the updated state.**

**Depth**  
- *Transformation rules* handle four cases (insert vs insert, insert vs delete, delete vs insert, delete vs delete) by adjusting positions and lengths.  
- Complexity is **O(n)** per operation where *n* is the number of concurrent ops; in practice this stays small because users edit at different places.  
- To avoid quadratic blow‑up, use a *version vector* so each op carries its causal context.

**Edge Cases**  
- Simultaneous deletes on overlapping ranges.  
- Network latency causing out‑of‑order delivery.  
- Large documents: split into shards or use operational transformation per block to keep *n* bounded.

**Optimize & Communicate**  
- Batch ops when bandwidth permits.  
- Persist a log of operations for crash recovery.  
- Explain that OT guarantees convergence and intention preservation, which is why Google Docs feels “real‑time” even under high contention.  

This design balances correctness (via OT) with scalability (by limiting concurrent op sets), matching the FAANG expectation of clear, depth‑rich answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
