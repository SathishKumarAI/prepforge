---
qid: ing_1495148efd__faang__local
question: 'Explain: Heaps and Priority Queues: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 506
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:58-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how heaps implement priority queues, as covered in the CS 61B cheat sheet. I’ll assume the audience knows basic array‑based trees and that “priority” means “smallest element first” (min‑heap) or “largest first” (max‑heap).

**Approach**  
1. Define a binary heap as a complete binary tree stored in an array.  
2. Show parent/child index formulas.  
3. Explain the heap property and how it guarantees that `extractMin`/`extractMax` returns the root in O(1).  
4. Detail the two core operations—**insert** (bubble‑up) and **delete‑root** (heapify‑down)—and their O(log n) costs.  
5. Relate this to a priority queue interface (`push`, `pop`, `peek`).

**Depth**  
- *Array layout*: `i → parent = ⌊(i−1)/2⌋`, `left = 2i+1`, `right = 2i+2`.  
- *Insert*: append at end, then swap with parent while violating heap property (bubble‑up).  
- *Delete‑root*: replace root with last element, shrink size, then sift down: compare node to children and swap with the smaller (min‑heap) or larger (max‑heap) child until order restored.  
- Complexity: `push`/`pop` are Θ(log n); `peek` is Θ(1).  
- Space: O(n) for the array; no pointers needed, so cache‑friendly.

**Edge Cases**  
- Empty heap: `pop` should raise an error or return sentinel.  
- Duplicate priorities: stable ordering isn’t guaranteed unless you tie‑break with insertion time.  
- Resizing: dynamic arrays double capacity in amortized O(1) per push.

**Optimize & Communicate**  
Mention that a binary heap is the simplest priority queue; for tighter bounds on `pop` (e.g., O(log log n)) one could use Fibonacci heaps, but they incur higher constant factors. Emphasize that the array representation keeps operations fast and memory‑efficient—exactly what FAANG interviewers value in a well‑structured answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
