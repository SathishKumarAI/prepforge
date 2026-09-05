---
qid: ing_0de669c890__fp__local
question: 'Explain: Week 2 - Data structures ​ — Best practice questions by the author
  of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 454
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:15-05:00'
sources: []
---

### Why Week 2 Matters

When an interview problem asks you to *“find the kth smallest element”* or *“reverse a linked list,”* the hidden cost is not the algorithmic idea but the **data structure that backs it**. A well‑chosen container turns a linear scan into a logarithmic one, or converts a destructive mutation into a purely functional operation. In the Blind 75 set, many problems hinge on subtle choices—using a min‑heap for median maintenance, a hash map to deduplicate in O(1), or an adjacency list to keep space tight.

### The Principle: *Locality of Reference + Amortized Cost*

Data structures are designed so that each operation touches only a small, predictable part of memory (locality) and its cost averages out over many operations (amortization). This guarantees that even if a single call seems expensive, the overall time remains bounded. For example, an *array‑based* priority queue gives O(log n) insertion but constant‑time random access—exactly what the Blind 75 median problem requires.

### Non‑Obvious Insight

Most candidates treat arrays and linked lists as mutually exclusive. In fact, a **dynamic array** (vector) is essentially a *singly linked list of blocks*. By allocating blocks in powers of two you get O(1) amortized append while preserving cache friendliness—exactly the trade‑off the Blind 75 “Insert Interval” problem exploits.

### Best‑Practice Checklist

| Problem | Ideal Container | Why |
|---------|-----------------|-----|
| Median of stream | Two heaps (min & max) | Maintains order in O(log n) |
| LRU Cache | Hash map + doubly linked list | O(1) access + eviction |
| Graph traversal | Adjacency list | Space ≈ edges, not vertices² |

Mastering these “why”s turns every Blind 75 solution from a brute‑force attempt into an elegant, optimal design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
