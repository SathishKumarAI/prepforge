---
qid: q008
question: "Explain the minimax algorithm and alpha-beta pruning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain minimax as the decision rule for two-player zero-sum games: one player maximizes the score, the opponent minimizes it, and we recurse down the game tree assuming optimal play, propagating values back up so the root picks the move with the best guaranteed outcome. Its cost is O(b^d), which explodes with depth.

Alpha-beta pruning is the optimization: we track alpha, the best the maximizer can guarantee so far, and beta, the best for the minimizer. When a branch can't affect the outcome because it falls outside that window, we prune it unexplored. With good move ordering this cuts the effective branching factor, roughly halving the exponent so we can search about twice as deep for the same compute.

To show **Deliver Results** I'd cite a game-AI prototype where alpha-beta plus move ordering let me search 6 plies instead of 3 within a 100ms budget, which measurably raised the bot's win rate against baseline from 52% to 71%.

The trade-off I'd name: pruning gains depend entirely on move ordering, and depth still trades against latency, so I capped depth with iterative deepening to stay within budget. A bar-raiser wants to hear that I understand pruning yields the identical answer as full minimax, just faster, and that I tied search depth to a real latency constraint.
