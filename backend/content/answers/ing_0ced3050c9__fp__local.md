---
qid: ing_0ced3050c9__fp__local
question: 'Explain: Uh, when you want to append a — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 405
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:07-05:00'
sources: []
---

**Why “Append” is the only way to extend a Wave**

A *Wave* is a mutable, distributed data structure whose state is defined by a sequence of **operations** (ops).  
Each op is an atomic change that can be applied locally and later merged with ops from other participants.  
The core problem is: *how do we guarantee that all replicas converge to the same final document without imposing a global order?*

1. **CRDT foundation** – Google Wave uses a *Conflict‑Free Replicated Data Type* (CRDT) for text, which guarantees eventual consistency regardless of operation interleaving.  
2. **Append as an atomic op** – An append is a “create‐then‑insert” operation: it creates a new element (character or block) and inserts it at the end of a list. The identifier assigned to that element is totally ordered by its *clock* (a Lamport timestamp plus replica id).  
3. **Commutativity** – Two appends commute because their identifiers are distinct and later in the total order; inserting one after another yields the same result whether you apply op A then B or B then A. Thus, no conflict resolution is needed.  
4. **Efficient merging** – Since every append produces a unique identifier that never changes, merging reduces to “add all unseen identifiers,” which is linear in the number of new elements.

*Non‑obvious insight:* an append does more than just add text—it embeds *causal history*. The identifier itself encodes where the element belongs relative to all others. This means you can later delete or move that element by referencing its id, preserving consistency without a global lock. In short, appending is the primitive that lets Google Wave offer real‑time collaboration with linear‑time convergence and no coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
