---
qid: ing_aa3cd043d4__fp__local
question: 'Explain: Read-optimized permanent index table — How LedgerStore Supports
  Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 401
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:58-05:00'
sources: []
---

**From first principles:**

A database that must answer billions of *read‑only* queries on a static data set is fundamentally an **information retrieval** problem rather than a transactional one.  
The cost to serve a query is the entropy of the index structure: we want *log₂ N* lookups per key, where *N* is the number of distinct keys.  
LedgerStore turns this into a *read‑optimized permanent table* by:

1. **Flattening** each index into a contiguous byte stream that contains only the sorted key–value pairs and a small auxiliary bitmap for nulls.
2. **Encoding** the stream with a lossless, monotonic compression (e.g., delta‑encoding + run‑length) so that *N* keys fit in far fewer bytes than a conventional B‑tree node.
3. **Partitioning by hash prefix** to allow parallel scans: each 64‑bit partition can be loaded independently and cached in memory, eliminating random I/O.

The deeper principle is *statistical multiplexing*: because the index is immutable, we can treat all partitions as independent streams and compress them jointly using a global dictionary that captures cross‑partition redundancy.  
This yields a *per‑key lookup cost* of O(1) with only a single binary search per partition—far below the O(log N) of B‑trees.

**Non‑obvious insight:**  
By storing indexes as *immutable, compressed streams*, LedgerStore turns what would normally be an I/O bottleneck into a CPU‑bound problem. The cost of decompressing a small block is far cheaper than seeking to multiple disk sectors, allowing trillions of keys to reside in RAM‑friendly structures without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
