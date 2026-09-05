---
qid: ing_10fdfeb50b__eli5__local
question: 'Explain: 1-D Dynamic Programming (12 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 246
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:35-05:00'
sources: []
---

Imagine you’re walking down a long hallway that’s split into many small rooms. In each room you can either take a short step forward or jump over one room to skip ahead, but you can’t go back. The goal is to reach the last room in the fewest steps possible.

Dynamic programming solves this by remembering how many steps it took to get to every room you’ve already visited. Once you know the best way to reach room 3, you don’t have to recompute that again when you later try to reach room 5; you simply add one more step to the known best path for room 4 or two steps to the best path for room 3.

In 1‑D problems (like “Maximum Subarray” or “House Robber”), the hallway is a single array of numbers. Each position’s optimal value depends only on earlier positions, so you store that intermediate result in an array and build up the answer room by room. That’s the essence of 1‑D dynamic programming: use a simple table to avoid repeating the same calculations over and over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
