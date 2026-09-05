---
qid: ing_5a54796ea6__eli5__local
question: 'Explain: Heap (3 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 272
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:34-05:00'
sources: []
---

Think of a **heap** as a *well‑organized bowling alley*.  
The pins are arranged so that the heaviest pin (the maximum) is always at the front, and every other pin sits above a lighter one—just like in a max‑heap. When you knock down the front pin (remove the largest element), the next heavy pin rises to the front automatically, keeping the alley tidy without re‑sorting everything.

**Three classic Blind 75 problems that use this idea**

1. **Top K Frequent Elements** – Keep a min‑heap of size *k* so only the k heaviest “frequent” items stay; the rest fall off automatically.
2. **Merge K Sorted Lists** – A min‑heap holds the smallest current element from each list, letting you pull the next item in order without scanning all lists.
3. **Maximum Width of Binary Tree** – Use a queue (a simple heap‑like structure) to visit nodes level by level and compute how many nodes sit side‑by‑side at each depth.

In each case the heap’s “front” gives you instant access to the most important value, making the algorithm fast and clean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
