---
qid: q008
question: "Explain the minimax algorithm and alpha-beta pruning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I built a Connect Four AI for a client's educational app, and my first minimax version could only search 5 moves ahead before the move took over a second, which felt sluggish to kids playing it.

**Task** I needed the AI to look deeper for stronger play without blowing the per-move time budget.

**Action** The core was minimax: I modeled the game as a tree where I maximize my score and assume the opponent minimizes it, recursively backing up values from leaf evaluations. To make it faster I added alpha-beta pruning, which tracks alpha (best guaranteed for the maximizer) and beta (best for the minimizer) and prunes any branch that can't affect the final decision. I also ordered moves center-first so strong moves came early, which makes pruning cut far more of the tree.

**Result** With pruning plus move ordering, I searched 9 plies deep in the same time budget, and the AI's win rate against testers jumped from 55% to 88%. The insight: alpha-beta returns the exact same move as minimax but skips branches that provably don't matter.
