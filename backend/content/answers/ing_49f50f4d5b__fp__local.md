---
qid: ing_49f50f4d5b__fp__local
question: 'Explain: to keep track of the best evaluation — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 391
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:30-05:00'
sources: []
---

### Why “best‑evaluation” matters

In a search tree each node receives an **evaluation score** (e.g., material balance, mobility). The algorithm must decide which branch to pursue next.  
If we only keep the *last* evaluation, we lose information: a child may be better than its parent but later become worse again due to pruning or transpositions. To guarantee optimality under minimax with alpha‑beta, the engine must remember **the best value seen so far** for each node.

### The principle at work

Let \(V(n)\) be the evaluation of node \(n\).  
During a depth‑first traversal we maintain two invariants:

1. **Upper bound**: \(\alpha = \max(\alpha, V(n))\) for maximizer nodes.
2. **Lower bound**: \(\beta  = \min(\beta , V(n))\) for minimizer nodes.

The *best* evaluation is simply the running maximum (or minimum).  
If \(V(n)\) exceeds the current bound, we update it; otherwise we prune.  
This follows directly from the **branch‑and‑bound** principle: any value worse than an already known best cannot improve the final minimax outcome.

### Non‑obvious insight

Many implementations store only a single evaluation per node, assuming transpositions yield identical scores.  
However, in *coding adventures* with imperfect hashing or when the same position is reached via different move orders, the **first‑seen** value may be suboptimal because later branches expose better lines.  
Thus, we must **persist the best score across all visits**, not just the most recent one.  
This subtlety ensures that transposition tables contribute to pruning rather than mislead it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
