---
qid: ing_3dd00ea67b__fp__local
question: 'Explain: Cache-Aside (Lazy Loading) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 393
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:53-05:00'
sources: []
---

**Cache‑aside (lazy loading)**  
The *fundamental problem* is that a single data source (e.g., a DB) is too slow or too expensive to hit on every request. We want the speed of memory but the consistency of the source. The strategy solves this by **decoupling read latency from write consistency**.

1. **Read path** – check cache first; if miss, load from source, return result, and *populate* the cache for future hits.  
2. **Write path** – update the source and then invalidate or update the corresponding cache entry immediately (write‑through or write‑back).  

Why this works:  
- **Optimization principle:** The expected cost per request is \(P_{\text{miss}}\cdot C_{\text{source}} + (1-P_{\text{miss}})\cdot C_{\text{cache}}\), where \(C_{\text{source}}\gg C_{\text{cache}}\). By keeping \(P_{\text{miss}}\) low we achieve near‑optimal average latency.  
- **Information theory:** The cache stores the *most probable* future requests; the miss rate is essentially the entropy of access patterns.  

**Non‑obvious insight:**  
Cache‑aside implicitly enforces a *causal ordering* between reads and writes: every read that sees stale data must be preceded by an earlier write that hasn't yet invalidated the cache. This guarantees **eventual consistency** without sacrificing read speed, because the system never serves a value unless it has already been observed from the source. In practice, this makes the cache a *semantic snapshot* of the source at some point in time; understanding this snapshot property helps reason about correctness when designing eviction or TTL policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
