---
qid: ing_6545d305de__fp__local
question: 'Explain: How Indexes Work — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 465
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:40:20-05:00'
sources: []
---

**Indexes as Optimal Search Structures**

In any ML‑pipeline that stores features or model metadata in a relational store, the fundamental problem is *retrieve‑by‑predicate*—given a key \(k\), find all rows satisfying \(f(k)\). A naïve scan costs \(\Theta(n)\); an index turns this into a search over a *hierarchical space partition*.  
The design derives from **information theory**: to locate one of \(n\) items we need \(\log_2 n\) bits. A B‑tree or hash map stores those bits in a structure that can be traversed with \(O(\log_B n)\) disk seeks (B‑tree) or \(O(1)\) expected probes (hash).  

- **B‑trees** keep keys sorted, enabling range queries and preserving locality; each node holds up to \(B\) children, so the height is \(\lceil\log_B n\rceil\).  
- **Hash indexes** offer constant‑time lookups but only for equality; collisions are resolved via chaining or open addressing.  

The deeper principle is *selectivity*: an index is worth it when the fraction of rows returned (\(s/n\)) is small, because the cost of traversing the index (disk I/O + CPU) is amortized over many fewer row fetches.  
**Non‑obvious insight:** **index cardinality matters more than size.** A high‑cardinality column (many distinct values) yields sparse leaf pages; each page contains few rows, so fetching a single key requires reading a tiny amount of data, drastically reducing I/O. Conversely, low‑cardinality columns may lead to large, densely packed pages that are effectively full scans in disguise. Thus, when designing indexes for ML workloads (e.g., feature tables), prioritize high‑selectivity, high‑cardinality attributes and monitor page utilization rather than just column width.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
