---
qid: ing_93cd5189fa__eli5__local
question: 'Explain: Week 5 - Dynamic programming ​ — Best practice questions by the
  author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 245
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:54-05:00'
sources: []
---

Imagine you’re a chef in a busy kitchen. Every dish you prepare is built from smaller ingredients—slices of bread, tomatoes, cheese. Instead of chopping each slice anew every time, you keep a notebook that records the best way to make a “mini‑sandwich” (bread + tomato) and a “cheese‑slice” (bread + cheese). When a new recipe asks for a big sandwich, you simply look up those mini‑sandwiches in your notebook instead of re‑making them from scratch.  

In dynamic programming, that notebook is called a **memoization table**: it stores the optimal solution to smaller subproblems so you can reuse them. The “best practice questions” for Week 5 ask you to solve classic problems (like Fibonacci numbers or the knapsack) using this idea—write code that remembers previous results and builds up to the final answer efficiently. By practicing these, you learn how to spot when a problem can be broken into overlapping subproblems and how to cache their solutions, just like our chef’s notebook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
