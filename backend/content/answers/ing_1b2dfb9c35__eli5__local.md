---
qid: ing_1b2dfb9c35__eli5__local
question: 'Explain: Heap / Priority Queue (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 247
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:19-05:00'
sources: []
---

Imagine a school cafeteria line that always hands out the hottest pizza first. The line is **ordered** so the next person to get a pizza is the one who has waited longest *and* has the most hungry appetite. That “most hungry” spot is decided by a simple rule: bigger appetite = higher priority.  

In computing, a **priority queue** works the same way. It stores items (numbers, words, etc.) and always lets you remove the item with the highest priority first. The underlying structure that keeps this order fast is called a **heap**—a nearly complete binary tree where every parent node is larger (or smaller) than its children. This shape guarantees that the top‑level element is always the one to pop next, and adding or removing takes only logarithmic time because we “bubble” items up or down just enough to keep the rule true.

So think of a heap as a perfectly balanced stack of plates: each plate sits on two smaller ones below it, and the biggest plate (highest priority) is always at the top, ready to be served.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
