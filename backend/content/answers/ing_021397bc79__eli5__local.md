---
qid: ing_021397bc79__eli5__local
question: 'Explain: Binary Search (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 237
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:38:22-05:00'
sources: []
---

Imagine you’re a detective hunting for a missing book in a giant, alphabet‑sorted library. You don’t have to read every shelf; instead you flip straight to the middle floor, see if the book is there, and then decide whether to look only in the lower half or the upper half. Each time you halve the search space until the book’s found.

That’s **binary search**: a way to find a target value inside an *ordered* list by repeatedly cutting the problem size in half. The “7 Problems” from Neetcode 150 are just different twists on that same idea—sometimes the list is sorted, sometimes you’re looking for the first or last occurrence of a number, or you’re searching through a circular array. In every case you keep narrowing until you zero in on the answer. It’s fast (logarithmic time) because each step cuts the remaining candidates by about two, just like flipping to the middle shelf cuts the library’s size in half.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
