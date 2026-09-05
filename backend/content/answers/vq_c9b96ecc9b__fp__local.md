---
qid: vq_c9b96ecc9b__fp__local
question: What is a Rollback ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 391
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:56:08-05:00'
sources: []
---

**Rollback – the principled “undo” of a state transition**

In any algorithm that manipulates mutable data (e.g., in‑place sorting, backtracking search, or transactional memory), we often need to *reverse* a change without recomputing from scratch.  
Formally, if a state \(S\) transitions to \(S' = f(S)\) by applying an operation \(f\), a rollback is a function \(g\) such that \(g(f(S)) = S\).  

Why must it exist?  
1. **Determinism & reversibility**: Many search algorithms (DFS, branch‑and‑bound) rely on exploring a tree of states; after exploring a child, we must restore the parent’s state to continue with another child.  
2. **Space efficiency**: Rather than copying the entire structure before each move (which would be \(O(n)\)), we record only the *delta* that produced \(f(S)\) and reverse it in constant or logarithmic time.  

Typical rollback strategies:
- **Stack of changes**: Push a “reverse operation” onto a stack when mutating; pop to undo.
- **Persistent data structures**: Keep immutable snapshots, so “rollback” is simply discarding the latest version.

*Non‑obvious insight*: A rollback can be viewed as a *dual optimization problem*. While \(f\) may minimize some cost (e.g., sorting), \(g\) maximizes information retention—preserving all intermediate states for future use. This duality underpins reversible computing and quantum algorithms, where every operation must be invertible to avoid entropy loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
