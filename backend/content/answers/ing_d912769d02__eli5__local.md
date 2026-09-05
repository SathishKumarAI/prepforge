---
qid: ing_d912769d02__eli5__local
question: 'Explain: Approach 2: Global Counter (Non-Deterministic)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 189
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:34-05:00'
sources: []
---

**Global Counter (Non‑Deterministic)**  
Imagine you’re teaching a class where every student raises their hand whenever they hear a new word. You keep a single tally on the board that adds one each time anyone speaks. The final number tells how many “hand‑raises” happened in total, but it doesn’t tell which student said what or when. In machine learning this is like using a *global counter* to record events (e.g., how often a particular class appears) while training. Because the data arrive in random order, the exact count can vary from run to run—hence “non‑deterministic.” The method is fast and simple but sacrifices detailed information about individual samples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
