---
qid: ing_120d2fa1b6__faang__local
question: 'Explain: OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 564
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:42-05:00'
sources: []
---

**Clarify**  
The interviewee wants a concise refresher on classic data‑structure & sorting concepts from CS 61B—things like arrays, linked lists, hash tables, BSTs, heaps, and the typical O(n log n) sorts (quick, merge, heap). I’ll confirm they need just high‑level overviews, not code.

**Approach**  
1. List each structure with its core operations & asymptotic costs.  
2. Pair each with a sorting algorithm that naturally uses it.  
3. Highlight trade‑offs (memory vs speed, stability, worst‑case guarantees).  

**Depth**  
| Structure | Key Ops | Typical Sort |
|-----------|---------|--------------|
| **Array** | O(1) access; O(n) insert/delete | In‑place *quick‑sort* (average O(n log n)) |
| **Linked List** | O(1) insert/delete at ends; O(n) random access | *Merge‑sort* on lists (stable, O(n log n), no extra space if bottom‑up) |
| **Hash Table** | O(1) avg. lookup/insert | *Radix / bucket sort* for integers or strings (O(n + k)) |
| **Binary Search Tree (BST)** | O(log n) search/insertion in balanced form | *Tree‑sort* (build BST, then inorder traversal) – O(n log n) unless self‑balancing |
| **Red‑Black / AVL** | O(log n) guaranteed ops | Same as BST but with worst‑case bound |
| **Heap** | O(1) peek; O(log n) pop/insert | *Heapsort* (in‑place, O(n log n), not stable) |

Mention stability: merge‑sort is stable; quick‑sort can be made stable by using a tuple key. Note space: in‑place vs auxiliary arrays.

**Edge Cases**  
- Already sorted or reverse‑sorted inputs break naive quick‑sort → random pivot or median‑of‑three.  
- Hash collisions degrade to O(n).  
- Unbalanced BST becomes O(n²).  
- Heapsort uses extra memory for heapify if not in place.

**Optimize & Communicate**  
I’d stress that the choice depends on data size, key type, and required guarantees. For interviewers: “If I need guaranteed log‑time lookups, use a red‑black tree; if I’m sorting millions of integers with limited range, radix sort wins.” This shows I understand both theoretical costs and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
