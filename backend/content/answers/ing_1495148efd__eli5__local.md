---
qid: ing_1495148efd__eli5__local
question: 'Explain: Heaps and Priority Queues: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 207
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:53-05:00'
sources: []
---

Think of a **priority queue** like a school lunch line where each student has a “fast‑pass” ticket that says how early they should get served. The ticket number is the *priority*: lower numbers mean you’re next in line, higher numbers wait longer. A **heap** is the invisible organizer that keeps those tickets sorted so we can always grab the smallest (or largest) one quickly.

In a heap, every child’s priority is always worse than its parent’s. That means the very top of the heap holds the ticket with the best priority—exactly what you need when you call “serve next.” When someone leaves or a new ticket arrives, the heap rearranges itself in just a few swaps, keeping that rule true.

So, heaps give us a fast way (log‑time) to get the highest‑priority item, and priority queues are just the everyday interface that uses the heap behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
