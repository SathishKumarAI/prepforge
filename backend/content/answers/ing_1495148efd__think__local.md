---
qid: ing_1495148efd__think__local
question: 'Explain: Heaps and Priority Queues: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 459
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:04:53-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify what “Heaps” and “Priority Queues” mean in CS61B: binary heaps (min‑/max‑), array representation, O(log n) operations.  
   - Assume the reader knows basic array/list indexing but not heap internals.  

**2️⃣ Pick a mental model**  
   - Think of a *complete binary tree* stored level‑by‑level in an array: parent at `i`, children at `2i+1`/`2i+2`.  
   - Visualize the *heap property*: every node ≤ (min‑heap) or ≥ (max‑heap) its children.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Insertion** – append to array, “bubble up” while violating heap property.  
   2. **Deletion of min/max** – replace root with last element, shrink array, then “bubble down.”  
   3. **Peek** – constant time access to `array[0]`.  
   4. Show how these give O(log n) per operation and why they’re called *priority queues* (elements are processed by priority).  

**4️⃣ Common traps to avoid**  
   - Mixing up indices: remember children = `2i+1`/`2i+2`, parent = `(i-1)//2`.  
   - Forgetting that heaps are *not* sorted lists; only the root is guaranteed.  
   - Confusing “heap sort” (in‑place O(n log n)) with priority‑queue operations.

**5️⃣ Sanity‑check & verbalize**  
   - Test your explanation on a 7‑element example: show array before/after insert/delete, trace bubble steps.  
   - Conclude by summarizing the time complexity and practical use cases (e.g., Dijkstra’s algorithm).  

This structure lets you explain heaps cleanly while reinforcing key concepts for CS61B students.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
