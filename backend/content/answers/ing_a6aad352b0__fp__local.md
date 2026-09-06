---
qid: ing_a6aad352b0__fp__local
question: 'Explain: Cache Hit and Miss — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 436
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:00:08-05:00'
sources: []
---

**Why a system needs a cache**

In any distributed or even single‑machine application, data are accessed repeatedly while the underlying storage (disk, remote DB, network) is orders of magnitude slower. The *fundamental problem* is that latency grows linearly with distance from CPU: a 10 µs memory read vs. a 5 ms disk seek. To keep throughput high we need to *localise* recent data. A cache stores a small, fast copy of recently used items so that the next request can be answered in place.

**How it works**

- **Cache hit:** The key is present in the local store; the system returns it immediately (O(1) or log‑time).  
- **Cache miss:** The key isn’t there. The system fetches from the slower backend, then writes the item into the cache for future hits.

The *replacement policy* (LRU, LFU, ARC…) decides which entry to evict when space runs out, trading off recency vs. frequency.

**Deeper principle**

Caching is an instance of *information‑theoretic compression*: we keep only the most predictive subset of data. The cache’s hit rate reflects how well the policy approximates the optimal “future‑use” function (Belady’s algorithm). In practice, locality of reference (temporal & spatial) provides the signal.

**Non‑obvious insight**

A miss is not always a penalty; it can be an *opportunity* to prefetch or recompute. For read‑heavy workloads, a “write‑back” cache that updates on misses can amortise cost over many future hits. Conversely, for write‑intensive systems, a “write‑through” policy may reduce coherence traffic even if miss latency rises.

Thus, caching is not just speed‑up; it’s an adaptive compression of *future demand* based on observed access patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
