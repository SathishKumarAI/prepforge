---
qid: vq_72cb9b6ac7__fp__local
question: WHAT IS A FILTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 393
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:42-05:00'
sources: []
---

### Filtered Index – a principled shortcut

When a database engine builds an **index**, it stores key–value pairs for *every* row in the table.  
That guarantees fast look‑ups but also incurs storage and maintenance overhead proportional to the whole table size.  

A **filtered index** addresses the *fundamental problem*: many queries target only a small, predictable subset of rows (e.g., `WHERE IsActive = 1`).  
Instead of indexing all rows, the engine builds the same data structure *only for those that satisfy a user‑supplied predicate*.  

Why it must work this way:

| Principle | How filtering applies |
|-----------|-----------------------|
| **Space–time tradeoff** | By discarding irrelevant entries, we reduce disk pages and cache misses, speeding up both reads (fewer index nodes) and writes (smaller update cost). |
| **Selective cardinality** | The predicate typically has low selectivity; the index becomes highly focused, making binary‑search paths shorter. |
| **Maintenance locality** | Updates to non‑filtered rows never touch the index, so transaction log overhead shrinks dramatically. |

**Non‑obvious insight:**  
A filtered index is *not* a “partial” view of the data; it’s an *optimization of the search space*. The predicate itself becomes part of the index key’s hash space—rows that don’t match simply never exist in that key domain. Consequently, the optimizer can treat the index as if it were a full index on a virtual table containing only the filtered rows, allowing cost models to remain accurate without extra metadata.

In short, a filtered index is a *compact, selective* indexing strategy grounded in space‑time optimization, letting queries touch only what they need while keeping maintenance costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
