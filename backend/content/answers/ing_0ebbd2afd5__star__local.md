---
qid: ing_0ebbd2afd5__star__local
question: 'Explain: Binary Search Trees (BSTs): — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 359
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:01-05:00'
sources: []
---

**Situation** – In my sophomore year’s CS61B final project I was tasked with building an in‑memory index for a lightweight key‑value store that could handle up to 50,000 keys and support O(log n) lookups. The professor had already covered the “OG CS61B Data Structures” cheat sheet, but we needed a concrete implementation.

**Task** – I had to design, implement, and benchmark a self‑balancing Binary Search Tree (AVL) in Java, ensuring that insertions, deletions, and searches stayed logarithmic even under adversarial input sequences.

**Action** – I started by coding the node structure with left/right pointers and height metadata. For balancing I implemented rotations (single LL/ RR and double LR/RL). To keep memory overhead low, I used an array‑based representation instead of object references, mapping indices to children via integer offsets. I also added a lazy deletion flag to avoid costly subtree rebalancing on deletes. After integrating the BST into the key‑value store, I ran micro‑benchmarks: inserting 50k random keys took ~12 ms, lookups averaged 0.3 µs, and deletions stayed below 0.5 µs.

**Result** – The final index reduced lookup latency by 40% compared to a plain hash map under sorted input, and memory usage dropped 25% thanks to the array layout. I learned how rotation logic directly translates into performance gains and that careful memory layout can make a big difference in real systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
