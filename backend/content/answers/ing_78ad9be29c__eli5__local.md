---
qid: ing_78ad9be29c__eli5__local
question: 'Explain: Dynamic Programming (11/11) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 239
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:53-05:00'
sources: []
---

Imagine you’re planning a road trip across a country that has many cities connected by highways of different lengths. You want the quickest route from your home city to a destination, but you’ll pass through several intermediate cities. Instead of re‑calculating the best path every time you revisit a city, you store the fastest known distance to each city as soon as you find it. Later, when another route reaches that same city, you can just look up its stored value instead of starting over.  

That’s dynamic programming in plain English: solve sub‑problems once, remember (“memoize”) their answers, and reuse them whenever the same sub‑problem appears again. In coding challenges—like those on LeetCode’s “Blind 75” list—DP turns a brute‑force search that would explode into an efficient algorithm that builds up solutions from simpler parts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
