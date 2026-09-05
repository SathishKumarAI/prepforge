---
qid: ing_833d1afab1__eli5__local
question: 'Explain: Dynamic Programming — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 228
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:52-05:00'
sources: []
---

Think of a long road trip where you can stop at gas stations, rest stops, or hotels along the way. Each stop costs money and time, but you must choose the best mix so you reach your destination as cheaply and quickly as possible. **Dynamic programming (DP)** is like having a smart travel planner that remembers every stop you’ve already considered: it records the cheapest cost to get from the start to each station, then uses those stored results to decide the next best move.

In recent FAANG interview questions, DP shows up in problems such as “find the most profitable path through a grid,” “compute the minimum number of coins for change,” or “maximize points in a game with constraints.” The key idea is: break the problem into overlapping sub‑problems (the partial routes), solve each once, and combine their solutions. By reusing these pre‑computed answers, DP turns an otherwise exponential search into something fast enough to run on real‑world data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
