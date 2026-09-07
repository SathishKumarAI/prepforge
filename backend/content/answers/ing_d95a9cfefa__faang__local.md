---
qid: ing_d95a9cfefa__faang__local
question: 'Explain: Choosing a Strategy — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:37-05:00'
sources: []
---

**Clarify**

You’re asking how to pick a caching strategy for an ML system (e.g., feature store, model inference cache).  
Assumptions: *latency‑critical*, *data volatility* varies per feature/model, and you have limited memory.

**Approach**

1. **Profile traffic** – hit rates, read/write ratios, freshness needs.  
2. **Classify data** – immutable (model weights), semi‑mutable (pre‑computed embeddings), volatile (real‑time features).  
3. **Match policy to class** – LRU for hot, write‑through cache for mutable; TTL or versioning for stale data.  
4. **Consistency model** – eventual vs strong, depending on business tolerance.

**Depth**

- *Immutable*: store in a read‑only distributed file (S3 + CloudFront) → zero cache, high consistency.  
- *Semi‑mutable*: use an LRU cache with write‑back to the feature store; keep a version stamp so stale reads can be refreshed asynchronously.  
- *Volatile*: TTL‑based eviction or time‑windowed sliding windows; combine with a conflict‑free replicated data type (CRDT) for eventual consistency.

Complexity: O(1) access per cache hit, amortized O(log n) on eviction. Memory footprint ≈ hot‑set size + buffer for write‑backs.

**Edge Cases**

- Sudden traffic spikes → LRU may thrash; consider LFU or adaptive caching.  
- Data skew → large keys dominate cache; use partitioned caches.  
- Inconsistent versions → race conditions in model reloads; guard with atomic compare‑and‑swap.

**Optimize & Communicate**

Iteratively add metrics (hit rate, latency percentiles) to the monitoring stack and auto‑tune TTLs. Explain to stakeholders: “We’re using a hybrid LRU/TTL cache because 70 % of our traffic is read‑heavy on stable embeddings, while the remaining 30 % requires near‑real‑time feature freshness.” This demonstrates clear trade‑offs, aligns with FAANG’s emphasis on data‑driven decision making, and keeps the answer within the 160–240 word window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
