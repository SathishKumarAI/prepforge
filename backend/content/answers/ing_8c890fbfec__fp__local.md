---
qid: ing_8c890fbfec__fp__local
question: 'Explain: Student Notes: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 450
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:51-05:00'
sources: []
---

### Why a “Data Structures & Sorting” cheat sheet matters in CS 61B  

The core problem is **efficiently organizing and retrieving data**.  
*Sorting* gives us an order; *data structures* give us a way to maintain that order while supporting updates.  The cheat sheet distills the most common trade‑offs:  

| Structure | Time (best/worst) | Typical use |
|-----------|-------------------|-------------|
| **Array** | `O(1)` random access, `O(n)` insert/delete | Dense data, cache‑friendly |
| **Linked list** | `O(1)` insert/delete at ends, `O(n)` search | Dynamic size, frequent splices |
| **Binary Search Tree (BST)** | `O(log n)` average, `O(n)` worst | Ordered maps; balanced variants (`AVL`, `Red‑Black`) keep `log n` guarantees |
| **Heap** | `O(1)` peek, `O(log n)` pop/insert | Priority queues, heap sort |
| **Hash table** | `O(1)` average lookup/insertion, `O(n)` worst | Unordered maps; relies on good hash functions |

Sorting algorithms (quick‑sort, merge‑sort, heap‑sort) are derived from the same divide‑and‑conquer or in‑place partition principles.  The cheat sheet shows their *in‑place* vs *stable* properties and typical pivot strategies.

**Non‑obvious insight:**  
A **balanced BST is essentially a self‑organizing “minimally‑connected graph”** whose height equals the logarithm of its size.  This geometric property guarantees that any sequence of `n` operations costs at most `O(n log n)`, regardless of input order—an optimal bound for comparison‑based sorting.  Recognizing this geometric link explains why we never need to store explicit parent pointers: the tree’s shape itself encodes all necessary ordering information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
