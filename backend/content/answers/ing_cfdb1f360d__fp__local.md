---
qid: ing_cfdb1f360d__fp__local
question: 'Explain: Matrix (4 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 427
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:17-05:00'
sources: []
---

**Matrix (4 Problems) – Blind 75**

Blind 75 is a curated set of LeetCode‑style interview questions that captures the *essential* algorithmic patterns.  
The “Matrix” bucket contains four problems whose common theme is **linear‑algebraic traversal under constraints**: you must decide how many times to visit or modify cells while respecting adjacency rules.  

Why these four?  
1. **Spiral Matrix** – a deterministic walk that visits every cell once; it forces you to reason about *boundaries* and *direction changes*.  
2. **Set Zeroes** – an in‑place mutation that propagates zeros through rows/columns, illustrating the trade‑off between auxiliary space and mutability.  
3. **Unique Paths II** – a dynamic‑programming recurrence on a grid with obstacles; it exemplifies how to reduce a *path counting* problem to additive contributions from neighbors.  
4. **Surrounded Regions** – a flood‑fill that must distinguish “border‑connected” cells from truly surrounded ones, highlighting the importance of *reverse traversal* (from borders inward) rather than naïve DFS.

The deeper principle is **state propagation on a 2‑D lattice**: each cell’s value depends only on a small local neighbourhood. By formalising this as a graph with edge weights zero or one, you see that all four reduce to either *single‑source shortest path* (spanning all cells) or *connected component labeling*.  

A non‑obvious insight: many of these problems can be solved in **O(1)** additional space by cleverly reusing the matrix as a marker set (e.g., using negative values or sentinel characters). This leverages the fact that the input is mutable and that you only need to remember *whether* a cell has been processed, not *how*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
