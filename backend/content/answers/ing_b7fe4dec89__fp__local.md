---
qid: ing_b7fe4dec89__fp__local
question: 'Explain: B-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 435
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:26-05:00'
sources: []
---

**Why a B‑tree feels like a “single‑pass” index**

When you want *random* access, the fundamental problem is that each key must be found by traversing a path of pointers.  
A B‑tree solves this by keeping keys sorted in internal nodes and storing child pointers so that every leaf can be reached in O(logₙN) I/Os (n≈fan‑out).  
The *optimization principle* is **minimise the number of seeks**: each node fits a page, so one seek per level.  
Because data are written once during insertion, the tree stays balanced and queries are deterministic.

---

### LSM‑tree: “write‑amplified” for bulk writes

LSM (Log‑Structured Merge) trees reverse the goal.  
They first append new records to an in‑memory buffer (a sorted array).  
When it overflows, a *flush* writes the whole buffer as one large sorted file on disk.  
Subsequent merges combine smaller files into larger ones.

The underlying principle is **amortised write efficiency**: by batching inserts you pay only one seek per megabyte instead of one per record.  
Random reads become expensive because a key may live in any of the many immutable files; they must be searched sequentially (or via a Bloom filter).

---

### Non‑obvious insight

The choice is not merely “seeks vs. appends”; it’s about **how entropy is injected into the data structure**.  
A B‑tree continually redistributes keys to keep the tree balanced—entropy is *spilled* across pages.  
An LSM‑tree keeps keys in sorted runs, letting entropy accumulate in large, contiguous blocks that can be merged lazily.  
Thus, an LSM‑tree trades **predictable latency** for **throughput**, and its performance hinges on the *merge schedule*, not just fan‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
