---
qid: ing_0ebbd2afd5__faang__local
question: 'Explain: Binary Search Trees (BSTs): — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 503
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:58-05:00'
sources: []
---

**Binary Search Trees (BSTs)**  
*Structured FAANG‑style explanation – ~190 words*

---

### 1️⃣ Clarify
A BST is a binary tree where each node’s key satisfies  
`left.key < node.key ≤ right.key`.  
We’re asked to describe its core operations and why it matters in CS61B data‑structures & sorting contexts.  
Assumptions: keys are comparable, no duplicates (or handled via counts), and we ignore self‑balancing variants.

### 2️⃣ Approach
- **Insertion**: walk down from root, compare key, go left/right until a `null` child; place node there.  
- **Search**: similar traversal; stop when key matches or reach `null`.  
- **Deletion**: three cases (leaf, one child, two children); replace with inorder predecessor/successor for the last case.  
- **Traversal**: in‑order yields sorted order → why BSTs are useful for sorting and search.

### 3️⃣ Depth
- *Time*: average `O(log n)` for balanced trees; worst‑case `O(n)` (degenerate chain).  
- *Space*: recursion depth up to tree height.  
- *Sorting*: an in‑order traversal of a BST built from `n` elements gives the sorted sequence in `O(n)` time after `O(n log n)` insertions, matching comparison‑based sorts.

### 4️⃣ Edge Cases
- Inserting duplicate keys → need policy (ignore, replace, or count).  
- Deleting root with two children requires careful pointer updates.  
- Extremely unbalanced trees (sorted input) degrade performance; test with ascending/descending sequences.

### 5️⃣ Optimize & Communicate
- **Self‑balancing** (AVL, Red‑Black) guarantees `O(log n)` operations—critical for production systems.  
- For large data sets, consider *iterative* implementations to avoid stack overflow.  
- Communicate that while BSTs illustrate key concepts in CS61B, real‑world applications favor balanced variants or hash tables depending on use case.

> **Takeaway:** A BST’s structure directly supports efficient search and sorted traversal; understanding its trade‑offs is foundational for advanced data structures taught in CS61B.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
