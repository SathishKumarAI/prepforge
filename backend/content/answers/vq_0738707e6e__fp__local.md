---
qid: vq_0738707e6e__fp__local
question: HOW DOES A RECURSIVE CTE WORK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 358
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:28-05:00'
sources: []
---

A **recursive Common Table Expression (CTE)** is a SQL construct that lets a query *define* itself in terms of earlier results, much like an induction proof.  
1. **Base case**: the CTE starts with a regular `SELECT`. This produces the “seed” rows that are guaranteed to terminate.  
2. **Recursive step**: the same CTE name appears in a second `SELECT` whose source is the *previous* iteration of the CTE. Each execution appends new rows derived from the last set.  
3. **Termination**: SQL keeps iterating until the recursive query yields no fresh rows or an optional `MAXRECURSION` limit is hit.

Why must it work this way?  
- **Deterministic termination**: Without a base case, recursion could run forever; with one, we guarantee a finite set of results.  
- **Set‑based semantics**: Each iteration operates on the entire previous result set, not just one row, preserving relational algebra’s bulk‑processing nature.  

Underlying principle: *dynamic programming*. The recursive step reuses already computed sub‑solutions (the prior CTE rows) to build larger ones, avoiding exponential blow‑up that a naïve procedural recursion would incur.

**Non‑obvious insight:**  
The optimizer often rewrites a recursive CTE as a **bottom‑up join** or even a graph traversal using indexes. Thus, if you index the columns used in the recursive `JOIN`, performance can improve dramatically—something many developers overlook because they think recursion is inherently slow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
