---
qid: ing_0dc4a43868__fp__local
question: 'Explain: time and look it up if we — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 340
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:56-05:00'
sources: []
---

**Why “Time + Look‑Up” is the heart of a fast chess engine**

At its core, a chess program must evaluate millions of positions per second to play well.  
The *time* dimension comes from the search tree: each node expands into up to 35 legal moves, and depth d gives ≈ 35ᵈ nodes. Without pruning, even a single ply would overwhelm any CPU.  

Enter *look‑up*: a hash table (transposition table) stores already‑evaluated positions keyed by Zobrist hashing.  
When the search reaches a node that has appeared before, it can **retrieve** its evaluation in O(1), avoiding re‑exploration.  

Mathematically, this is an instance of *dynamic programming* on a graph: the game tree is a DAG once transpositions are merged. The Bellman equation
\[ V(s)=\max_{a}\bigl(r(s,a)+\gamma V(s')\bigr) \]
is solved efficiently because each state \(s\) is computed once and reused.

**Non‑obvious insight:**  
The hash table’s *collision* rate can actually improve performance. A “bad” collision forces the engine to re‑evaluate a position with a different move ordering, which may lead to deeper pruning (alpha–beta cuts). Thus, a carefully tuned collision policy can act as an implicit exploration bonus—something most developers overlook when focusing solely on minimizing collisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
