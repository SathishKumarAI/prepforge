---
qid: ing_4b84e4c374__faang__local
question: 'Explain: Cache Breakdown — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 549
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:00-05:00'
sources: []
---

**Cache Breakdown – When Caching Goes Wrong**

| Step | What to Cover |
|------|---------------|
| **Clarify** | “We’re talking about the phenomenon where a cache miss causes a surge of traffic to the origin—think of a hot key being evicted or a cache‑warmup failure. I’ll assume we’re dealing with in‑memory caches (Redis, Memcached) and a web‑service backend.” |
| **Approach** | 1️⃣ Identify the root cause: *cache stampede* (many concurrent misses), *cache avalanche* (mass expiration), or *write‑through inconsistency*. 2️⃣ Outline mitigation patterns: double‑checked locking, request coalescing, TTL staggering, and fallback to read‑through. |
| **Depth** | • **Cache Stampede** – multiple threads hit a missing key → all query DB → overload. Solution: *lock* the key (e.g., Redis `SETNX`), have one worker load data, others wait or serve stale. Complexity O(1) lock + O(n) waiting. <br>• **Cache Avalanche** – expiration of many keys at once leads to a spike. Mitigation: randomize TTLs, use *sliding expirations*, or implement *soft eviction* with background refresh. <br>• **Write‑Through Race** – concurrent updates can leave cache stale. Use versioning or optimistic locking; ensure atomic writes (e.g., `WATCH/MULTI` in Redis). |
| **Edge Cases** | • Single‑threaded workers: lock contention is irrelevant but DB hit still occurs.<br>• Extremely high cardinality keys: per‑key locks become expensive → consider *sharded* or *global* backoff.<br>• Cache miss on a key that never exists: avoid infinite loops by setting a “negative cache” with short TTL. |
| **Optimize & Communicate** | Emphasize trade‑offs: lock granularity vs latency, memory overhead of negative caching vs hit ratio improvement. In an interview I’d narrate: “If we see 500 ms latency spikes during peak traffic, that’s a classic stampede; adding a lightweight mutex per key will reduce DB load by ~80% while keeping cache hit rates high.” |

**TL;DR:** Cache breakdowns happen when misses cascade into overload. Use fine‑grained locks or request coalescing for stampedes, stagger TTLs to avoid avalanches, and versioned writes to keep consistency. Each pattern has O(1) lock cost but can dramatically lower backend load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
