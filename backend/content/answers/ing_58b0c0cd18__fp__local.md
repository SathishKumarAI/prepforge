---
qid: ing_58b0c0cd18__fp__local
question: 'Explain: Choosing the Right Index — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 471
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:12:45-05:00'
sources: []
---

### Choosing the Right Index – Why It Matters

When a machine‑learning service must retrieve or update thousands of records per second, the *index* is the first line of optimization. Fundamentally an index is a data structure that reduces **information entropy**: it tells the storage engine which part of the dataset to examine, thereby lowering the expected search cost from \(O(n)\) to \(O(\log n)\) or even constant time.

1. **Query pattern → Index shape**  
   *Equality on a single field* → hash index (constant‑time lookup).  
   *Range queries* → B‑tree or R‑tree (sorted order preserves locality).  
   *Multi‑attribute joins* → composite index sorted by the most selective key first.

2. **Data distribution → Cardinality & selectivity**  
   High cardinality columns (e.g., user IDs) provide high information gain; indexing them yields the largest reduction in entropy. Low‑cardinality columns should be avoided unless they’re part of a composite key, because the index would add maintenance overhead without much benefit.

3. **Write‑heavy workloads → Index cost**  
   Every write must update all relevant indexes. Thus, for training pipelines that batch‑update embeddings, you might choose *no* secondary index and rely on in‑memory caches or approximate nearest‑neighbour structures instead.

4. **Non‑obvious insight: “Index as a probabilistic filter”**  
   Think of an index not just as a lookup table but as a **probabilistic data structure** (e.g., Bloom filter) that can quickly rule out impossible candidates before touching the disk. This is why modern ML serving stacks often layer a lightweight in‑memory filter on top of a persistent B‑tree: you get the speed of a hash and the correctness guarantees of an ordered index.

By aligning the index choice with query patterns, cardinality, write load, and probabilistic filtering, you turn the data store from a bottleneck into a scalable backbone for your ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
