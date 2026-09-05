---
qid: vq_de1dffcb09__fp__local
question: Why are the DML operations are slower on Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 445
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:06-05:00'
sources: []
---

**Why DML is slower on indexed tables**

At its core, an index is a *secondary* B‑tree (or hash) that mirrors the primary key or column values.  
When you issue `INSERT`, the engine must

1. **Find the leaf page** where the new key belongs.  
2. **Write that leaf**, possibly splitting it if it’s full.  
3. **Propagate changes up** the tree: update parent pointers, split parents, and so on until the root.

Each of those steps involves a separate I/O (or at least a write‑back to buffer) and a lock on every page touched. The cost is therefore proportional to *log₍fan‑out₎(N)*, where *N* is the number of rows and the fan‑out is usually 100–200 pages per node.  

For `UPDATE` or `DELETE`, the same path must be traversed for both locating the row and removing or relocating the index entry; if the indexed column changes, two updates (delete old key, insert new key) are required.

**Deeper principle:**  
Indexes trade **write amplification** for read speed. The extra writes are inevitable because the database guarantees that the index remains a faithful, sorted replica of the data.  

**Non‑obvious insight:**  
Fragmentation and page splits amplify this cost: once a leaf is split, subsequent inserts must rewrite entire subtrees to rebalance, causing cascading I/O even when the logical workload seems small. Thus, DML on heavily indexed tables becomes a “write‑heavy” operation whose latency scales with index depth and fragmentation rather than merely row count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
