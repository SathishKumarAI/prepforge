---
qid: ing_0dc4a43868__star__local
question: 'Explain: time and look it up if we — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:05-05:00'
sources: []
---

**Situation:**  
In my senior thesis I built a lightweight chess engine that could evaluate positions in under 0.2 seconds on a Raspberry Pi so it could play against human users over Bluetooth.

**Task:**  
I had to reduce the search depth of the minimax algorithm while keeping accuracy high, and decide whether to use a handcrafted evaluation function or a neural network trained from scratch.

**Action:**  
First I profiled the engine: the move generator took ~40 ms, but the recursive search dominated at ~350 ms per ply. I replaced the expensive full-board hash table with a Zobrist key that fit in 64‑bit registers and used a transposition table of 8 MB to prune repeats. Then I implemented a shallow CNN (3 conv layers) trained on 10M self‑play games; its inference cost was only ~5 ms per position, far cheaper than recomputing heuristics. I tuned the network’s width so that batch size remained 1 and latency stayed below 0.05 s.

**Result:**  
The final engine searched 6 plies in 0.18 seconds on the Pi, beating a baseline rule‑based engine by an average of 4 centipawns per game in 200 human vs machine matches. I learned that thoughtful use of lookup tables and lightweight neural nets can turn a high‑complexity algorithm into a real‑time system without sacrificing much strength.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
