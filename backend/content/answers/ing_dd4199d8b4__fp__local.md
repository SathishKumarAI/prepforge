---
qid: ing_dd4199d8b4__fp__local
question: 'Explain: Data Structures Runtime Table: Ordered as (Average Runtime / Worst
  Runtime) - inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 465
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:55-05:00'
sources: []
---

### Why a “Runtime Table” Matters

In supervised learning we repeatedly **access**, **insert**, and **delete** examples while training.  
Each operation’s cost dictates the overall time to fit a model.  
A runtime table is simply the *worst‑case* and *average* asymptotic cost of those operations for each data structure, expressed in Big‑O terms.

#### Deriving the Numbers

| Structure | **Insert** | **Search** | **Delete** |
|-----------|------------|------------|------------|
| **Array** | \(O(1)\) (append) / \(O(n)\) (insert at front) | \(O(n)\) (linear scan) | \(O(n)\) |
| **Linked List** | \(O(1)\) (head insert) | \(O(n)\) | \(O(n)\) |
| **Binary Search Tree (BST)** | \(O(\log n)\) *average*, \(O(n)\) *worst* | same | same |
| **Hash Table** | \(O(1)\) *expected*, \(O(n)\) *collision‑heavy* | \(O(1)\) expected, \(O(n)\) worst | \(O(1)\) expected |

The table emerges from the combinatorial cost of pointer updates or key comparisons.  
For example, in a BST every comparison halves the search space—hence \(\log_2 n\).  
In a hash table, a perfect hash function gives constant look‑ups; collisions collapse to linear scans.

#### Deep Insight

Most people treat *average* and *worst* as separate curiosities.  
In practice, **probabilistic load balancing** (e.g., rehashing in hash tables) turns the worst case into an *amortized* guarantee: over a sequence of operations the average cost remains \(O(1)\).  
Thus, the table is not just static; it encodes *how data structure design leverages probability to tame worst‑case spikes*, a principle that underlies scalable ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
