---
qid: ing_1495148efd__star__local
question: 'Explain: Heaps and Priority Queues: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 349
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:18-05:00'
sources: []
---

**Situation**  
During a capstone project in CS61B, my team built a recommendation engine that needed to rank items by predicted relevance for millions of users. The naive approach—sorting the entire list each time—would have taken O(n log n) per request, far too slow for our 10 k requests per second target.

**Task**  
I had to design an efficient way to retrieve the top‑K recommendations in real time while keeping memory usage low and ensuring the system could handle dynamic updates as new user interactions arrived.

**Action**  
I implemented a binary min‑heap as a priority queue using Python’s `heapq` module. Each heap node stored a tuple `(score, item_id)`. For every user request I pushed candidate items onto the heap and popped only when the heap exceeded size K, guaranteeing that at any time the heap contained the current top K scores. To handle updates, I used a lazy‑deletion scheme: when an item's score changed I inserted a new tuple and marked the old one as stale; during pop I skipped stale entries. This kept insertions O(log n) and retrieval of K items O(K log n), well below our latency budget.

**Result**  
The system now returns top 10 recommendations in under 2 ms on average, reducing overall query latency by 70% compared to the sorted list baseline. I learned that a heap‑based priority queue is ideal for streaming “top‑K” problems, and that careful handling of stale entries can preserve correctness without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
