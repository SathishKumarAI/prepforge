---
qid: ing_3597d7ff7c__star__local
question: 'Explain: this again with alpha beta pruning enabled'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 313
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:27-05:00'
sources: []
---

**Situation:** In a university capstone, I was tasked with building an AI opponent for a custom two‑player board game (10×10 grid). The initial minimax implementation evaluated every leaf node and ran in over 30 seconds per move—unacceptable for real‑time play.  

**Task:** Reduce the decision time to under 1 second while maintaining competitive performance against human players.  

**Action:** I added alpha‑beta pruning to the minimax routine, carefully ordering moves by a heuristic that prioritized captures and center control. Implemented iterative deepening so the engine could always return the best move found within the time limit. I also switched from Python lists to NumPy arrays for board representation, cutting evaluation overhead. During profiling, I identified a bottleneck in the static evaluation function and replaced it with a lightweight feature vector passed to a pre‑trained logistic regression model, reducing computation by 40 %.  

**Result:** Alpha‑beta pruning cut search depth from 4 to 7 within the same time budget, improving win rate against baseline opponents from 48% to 73%. Execution time dropped from 30 s to 0.8 s per move. I learned that combining algorithmic pruning with smart move ordering and lightweight ML evaluation can turn an impractical AI into a competitive player.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
