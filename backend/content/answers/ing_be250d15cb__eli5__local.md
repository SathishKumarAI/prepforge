---
qid: ing_be250d15cb__eli5__local
question: When would you choose Q-learning over policy gradients, and vice versa?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 212
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:24-05:00'
sources: []
---

Think of learning how to play a board game.

**Q‑learning** is like having a giant cheat sheet that tells you the best move for every possible board position. You learn by trying moves, seeing the result, and updating the sheet. It works well when the board has a limited number of positions (small state space) and the rules are clear. If your game can be fully described in a table, Q‑learning is fast and simple.

**Policy gradients** are like teaching someone to play by showing examples and letting them practice, learning a “policy” that maps board positions to moves directly. This works best when the board is huge or continuous (e.g., controlling a robot arm), so you can’t store every possible position in a table. The policy learns a smooth strategy instead of memorizing each spot.

So: use Q‑learning for small, discrete games; use policy gradients for large, complex, or continuous action spaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
