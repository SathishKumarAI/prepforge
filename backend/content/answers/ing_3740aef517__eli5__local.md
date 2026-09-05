---
qid: ing_3740aef517__eli5__local
question: 'Explain: Dynamic Programming (9 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 238
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:22-05:00'
sources: []
---

Think of a treasure‑hunt map that’s split into many small squares, each square holding a clue about how to get the next square.  
Dynamic programming (DP) is like walking through this map and **remembering** every square you’ve already solved so you never have to recompute it again.  

For the 9 classic Blind 75 DP puzzles—such as “Longest Increasing Subsequence,” “Coin Change,” “House Robber,” “Maximum Subarray,” “Edit Distance,” “Unique Paths,” “Word Break,” “Climbing Stairs,” and “House Robber III”—you start at one end of the map, move step by step, and store the best answer for each square in a table.  
When you later need that square’s value again, you simply look it up instead of re‑solving from scratch.  

In short: DP is a smart “memo‑book” that turns an exponential treasure hunt into a linear walk across the map, saving time and avoiding duplicate work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
