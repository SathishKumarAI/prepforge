---
qid: ing_dd4199d8b4__faang__local
question: 'Explain: Data Structures Runtime Table: Ordered as (Average Runtime / Worst
  Runtime) - inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 767
total_tokens: 1018
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:04-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise “runtime table” that lists common data‑structures ordered by their **average‑case** and **worst‑case** time complexities (e.g., `O(1)`, `O(log n)`, `O(n)` etc.). I’ll assume we’re talking about the *canonical* operations: insert, delete, search, and access by index.  

**Approach**  
1. Pick a representative set of structures (`Array/Vector`, `LinkedList`, `HashTable`, `Binary Search Tree`, `AVL/Red‑Black Tree`, `Heap`, `Trie`).  
2. For each operation list the average and worst complexities.  
3. Sort rows first by average complexity, then by worst if averages tie.  

**Depth**  
| Structure | Avg. Insert | Avg. Delete | Avg. Search | Avg. Index | Worst‑case Insert | Worst‑case Delete | Worst‑case Search | Worst‑case Index |
|-----------|-------------|-------------|--------------|------------|-------------------|-------------------|--------------------|------------------|
| Array / Vector | `O(1)` (amortized) | `O(n)` | `O(n)` | `O(1)` | `O(n)` | `O(n)` | `O(n)` | `O(1)` |
| LinkedList | `O(1)` (head) | `O(1)` (given node) | `O(n)` | `O(n)` | `O(1)` | `O(1)` | `O(n)` | `O(n)` |
| HashTable | `O(1)` | `O(1)` | `O(1)` | — | `O(n)` (rehash) | `O(n)` (rehash) | `O(n)` | — |
| BST (unbalanced) | `O(log n)` | `O(log n)` | `O(log n)` | `O(n)` | `O(n)` | `O(n)` | `O(n)` | `O(n)` |
| AVL / Red‑Black Tree | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` | `O(log n)` |
| Binary Heap | `O(log n)` | `O(log n)` | `O(n)` | — | `O(log n)` | `O(log n)` | `O(n)` | — |
| Trie (alphabet size *σ*) | `O(k)` | `O(k)` | `O(k)` | `O(k)` | `O(k)` | `O(k)` | `O(k)` | `O(k)` |

*`k` = key length, independent of total elements.*

**Edge Cases**  
- Hash collisions can degrade to linear time; mitigated by resizing.  
- Unbalanced BSTs become degenerate (`n`‑length chain).  
- Tries consume more memory for sparse alphabets.

**Optimize & Communicate**  
Explain that the table helps trade‑off between *speed* and *space*: e.g., a `HashTable` gives constant lookups but no order, whereas an AVL tree preserves sorted order at `O(log n)` cost. Highlight that real‑world performance also depends on cache locality (arrays) vs pointer chasing (linked lists). Conclude by noting that choosing the right structure hinges on the dominant operation in your workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
