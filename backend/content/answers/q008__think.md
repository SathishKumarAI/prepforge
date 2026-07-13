---
qid: q008
question: "Explain the minimax algorithm and alpha-beta pruning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Flag that this is two linked ideas: minimax (the decision rule) and alpha-beta (an optimization on top). Assume a two-player, zero-sum, perfect-information game and say so.
2. **Mental model.** Picture a game tree with alternating layers: **MAX** nodes grab the max of children, **MIN** nodes grab the min, both assumed to play optimally. Alpha-beta is a pair of running bounds that let you skip subtrees.
3. **Reason step by step.** Explain minimax recursively backing values up the tree. Then introduce **alpha** (best MAX can guarantee so far) and **beta** (best MIN can guarantee so far). When `alpha ≥ beta`, the remaining siblings can't change the outcome, so prune them. Emphasize: alpha-beta returns the **identical result** as plain minimax — it only skips provably irrelevant work.
4. **Traps to avoid.** Don't claim pruning changes the answer or randomly skips branches. Don't say minimax is single-player. Note the win is exploration, not correctness.
5. **Sanity-check + delivery.** Quantify the payoff: with good move ordering, complexity drops from `O(b^d)` toward `O(b^{d/2})`, roughly doubling searchable depth. If your version altered the final value, you pruned wrongly. Deliver: "minimax assumes optimal play; alpha-beta prunes branches that can't affect the decision — same result, fewer nodes."
