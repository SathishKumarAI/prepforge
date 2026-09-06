---
qid: ing_9617cf51ab__fp__local
question: 'Explain: B-Tree Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 454
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:25-05:00'
sources: []
---

**Why a B‑tree is the default index**

At its core an index must answer: *“Given a key value, how fast can I locate all matching rows?”*  
A naive hash table gives \(O(1)\) look‑up but cannot support range queries or ordered scans.  
A binary search tree provides order but degenerates to linear time if unbalanced.

The B‑tree solves both:

| Requirement | Solution |
|-------------|----------|
| **Ordered traversal** | Each node stores keys in sorted order, so an inorder walk yields rows by key value. |
| **Balanced height** | Every leaf is at the same depth; rebalancing during inserts/deletes keeps height \(\log_{m} N\) (where \(m\) is fan‑out). |
| **Large fan‑out** | Nodes contain many keys, matching typical disk page sizes (4–8 KB), so the tree’s height is very small (often < 5 for billions of rows). |

Thus a B‑tree turns an *unstructured* table into a *sorted index* that can be traversed with only a handful of random I/O operations.

**Deeper principle: locality‑aware compression**

A B‑tree’s fan‑out matches the block size of the underlying storage. When a node is read, all its keys are fetched in one I/O; subsequent lookups for nearby values hit the same page. This exploits *spatial locality*—the probability that once you read a disk block you’ll soon need other data from it.  

**Non‑obvious insight**

Because every leaf is at the same depth, range queries can be answered by **scanning only the relevant leaf and its siblings**, without touching higher nodes after the first descent. In practice this means a *single* I/O per page in the result set, making B‑trees exceptionally efficient for both point and range lookups—an optimization that most people overlook when comparing to hash or sorted array indexes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
