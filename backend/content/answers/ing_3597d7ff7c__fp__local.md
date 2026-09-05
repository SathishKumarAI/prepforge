---
qid: ing_3597d7ff7c__fp__local
question: 'Explain: this again with alpha beta pruning enabled'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 356
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:25-05:00'
sources: []
---

**Alpha–beta pruning** is the classic speed‑up for the *minimax* decision rule used in two‑player zero‑sum games (chess, checkers, Go).  
At a node we keep two bounds:  

|α| – best value that the maximizing player can guarantee so far.  
|β| – best value that the minimizing player can force so far.

When exploring a child of a *max* node, if its evaluation is ≥ β, the *min* parent will never allow this branch (it already has a better alternative). Thus we can abandon the rest of that subtree—**pruning**.  
Conversely, when exploring a child of a *min* node, if its value ≤ α we prune.

Why must this work?  
The bounds are *monotonic*: α never decreases, β never increases. If a branch cannot improve either bound, it cannot influence the final minimax outcome. This is an instance of **branch‑and‑bound** optimization: we discard suboptimal solutions without evaluating them fully.

A deeper insight often missed: pruning does not merely save time; it changes *the distribution* of explored nodes. In an optimal ordering (best moves first), alpha–beta can evaluate only O(2^(d/2)) leaves instead of 2^d, effectively halving the search depth. Thus, the algorithm’s efficiency hinges on move ordering—an interplay between information theory (reducing uncertainty) and geometry (exploring a pruned tree).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
