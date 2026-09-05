---
qid: ing_273a1d4bc5__eli5__local
question: 'Explain: Rapid Fire Comparison Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 286
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:52-05:00'
sources: []
---

Think of a library that wants to arrange books by title but can only look at two titles at a time.  
**Rapid‑fire comparison sorts** are the fastest ways this “look‑at‑two” method can be used.

1. **Bubble sort** – each pass compares adjacent pairs, swapping if out of order, like shuffling a handful of cards until the biggest card bubbles to the top.  
2. **Insertion sort** – pick the next book and slide it leftward into its correct spot, similar to inserting a new name into an already‑ordered phone list.  
3. **Selection sort** – find the smallest title in the unsorted part and move it to the front, like picking the first alphabetically from a pile and placing it in line.  
4. **Merge sort** – split the collection in half, sort each half recursively, then merge them back together—like sorting two small piles separately before combining them into one big sorted stack.  

Each uses only comparisons (looking at two titles) to decide order, but they differ in how many passes and swaps they perform. The “rapid‑fire” label reminds you that these are the classic, quick‑to‑understand comparison sorts students often first learn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
