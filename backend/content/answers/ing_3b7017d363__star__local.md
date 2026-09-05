---
qid: ing_3b7017d363__star__local
question: 'Explain: rules like if a rook moves then — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 326
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:30-05:00'
sources: []
---

**Situation**  
At my internship I was building a lightweight chess engine for a mobile app that needed to run on low‑end devices. The UI already had a basic move validator, but the AI component lagged because it relied on a brute‑force search over every legal move.

**Task**  
I had to reduce the branching factor so the engine could evaluate positions in under 300 ms per move while still playing competitively (aiming for an Elo >1400).

**Action**  
I implemented a rule‑based pruning system: whenever a rook moved, I flagged all squares it now controlled and removed any opponent pieces that were no longer defended. This leveraged the fact that rooks only affect lines of sight. In code I used bitboards to mark attack masks in O(1) time, then filtered the move list by intersecting with those masks. I also added a “rook‑move history” heuristic: if the same rook moved twice in succession, the engine deprioritized exploring its long‑range attacks because the opponent would likely block them.

**Result**  
The search depth increased from 3 to 5 plies on average, cutting evaluation time by 40 %. The engine’s win rate against a built‑in opponent rose from 52 % to 68 %, and I learned how domain knowledge can turn a generic algorithm into an efficient, device‑friendly solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
