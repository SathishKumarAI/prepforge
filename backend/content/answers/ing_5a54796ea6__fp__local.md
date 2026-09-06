---
qid: ing_5a54796ea6__fp__local
question: 'Explain: Heap (3 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 614
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:21-05:00'
sources: []
---

### Why a *heap* is the natural data‑structure for priority‑driven tasks

A heap is a binary tree that satisfies the **heap property**: every node’s key is no larger (min‑heap) or no smaller (max‑heap) than its children.  
This local constraint guarantees a global optimum—if you want the smallest element, it must be at the root; if you need the largest, it sits there.  
The cost of maintaining this property after insertions or deletions is *O(log n)* because only a single path from the affected node to the root (or leaf) needs re‑ordering.  
Thus, heaps solve the classic **online selection problem**: repeatedly “pick the best” element while allowing efficient updates—exactly what many algorithms require.

### Three Blind 75 heap problems that illustrate this principle

| Problem | What it asks | How a heap solves it |
|---------|--------------|----------------------|
| **Merge k Sorted Lists** | Merge *k* ascending arrays into one sorted array. | Treat each list’s head as an element in a min‑heap; repeatedly extract the smallest, then insert the next item from that list. Complexity: *O(N log k)* where *N* is total elements. |
| **Top K Frequent Elements** | Return the *k* most frequent values in an array. | Build a frequency map (hash table). Then use a min‑heap of size *k*: for each entry, push it; if size exceeds *k*, pop the smallest frequency. Final heap contains the top *k*. Complexity: *O(n log k)*. |
| **Kth Smallest Element in BST** | Find the *k*‑th smallest key in a binary search tree (BST). | An inorder traversal of a BST yields sorted order. Using an explicit stack (or recursion) is equivalent to a heap‑like LIFO structure that keeps track of pending nodes; popping *k* times gives the answer in *O(h + k)*, where *h* is height. |

### Non‑obvious insight

A heap’s **local** ordering suffices for global optimality because the tree is *complete*: every level except possibly the last is fully filled and all nodes are as far left as possible. This guarantees that any path from root to leaf has length ⌈log₂ n⌉, so a single sift‑up or sift‑down operation touches at most log n nodes. If you drop completeness (e.g., a skewed binary tree), the same local rule no longer bounds the cost; the heap degenerates into a linked list with linear updates. Thus, *completeness* is the hidden pillar that turns a simple comparison property into an efficient priority queue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
