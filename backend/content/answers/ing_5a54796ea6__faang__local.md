---
qid: ing_5a54796ea6__faang__local
question: 'Explain: Heap (3 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 599
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:37-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to describe a binary **heap** and walk through three classic *Blind 75* problems that rely on it:  
- **Merge k sorted lists** (Leet‑Code 23)  
- **Find the kth largest element** (Leet‑Code 215)  
- **Top‑k frequent words** (Leet‑Code 692)  

Assumptions to confirm: we’re using a min‑heap for “smallest” priority, max‑heap for “largest,” and that the input sizes fit in memory.  

---

**2️⃣ Approach**  
1. Implement a binary heap (array‑based).  
2. For each problem, decide whether a min‑ or max‑heap fits:  
   - Merge lists → min‑heap of current heads.  
   - Kth largest → min‑heap of size k.  
   - Top‑k words → min‑heap of size k sorted by frequency.  

Push/pop operations are *O(log n)*; building a heap from `m` items is *O(m)* via Floyd’s algorithm.

---

**3️⃣ Depth**  
- **Merge k lists:** Insert the first element of each list into the heap. Repeatedly pop the smallest, output it, and push the next element from that list. Complexity: *O(N log k)* where `N` is total elements.  
- **Kth largest:** Keep a min‑heap of size k while scanning all numbers; when the heap grows beyond k, pop the root. After traversal, the root is the kth largest. Complexity: *O(n log k)*.  
- **Top‑k words:** Count frequencies (hash map). Then iterate key/value pairs, maintaining a min‑heap of size k ordered by frequency (and lexicographically for ties). Final heap gives top k in descending order. Complexity: *O(m log k)* where `m` is number of unique words.

---

**4️⃣ Edge Cases**  
- Empty input lists or k = 0 → return empty.  
- k > length of list → handle gracefully (return entire sorted array).  
- Duplicate frequencies → secondary sort by lexicographic order for deterministic output.

---

**5️⃣ Optimize & Communicate**  
We can replace the heap with a *bucket sort* when frequency ranges are small, reducing log factors. For merging lists, we could use a *pairwise merge* to balance tree depth, but the heap remains optimal in practice. I’d explain these trade‑offs aloud, showing how each choice impacts time/space and why the heap is the go‑to structure for these problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
