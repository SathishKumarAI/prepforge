---
qid: ing_7f0f18133d__faang__local
question: 'Explain: Supported on-heap cache types — Caching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 572
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:40:24-05:00'
sources: []
---

**Supported On‑Heap Cache Types – “Caching”**

| Type | What it is | Typical use case | Key trade‑offs |
|------|------------|------------------|----------------|
| **LRU (Least‑Recently Used)** | Keeps the most recently accessed items in memory; evicts the oldest when full. | Session data, frequently accessed DB rows. | Simple O(1) ops with LinkedHashMap; may thrash if hot set is large. |
| **LFU (Least Frequently Used)** | Evicts items that are used least often. | Caching heavy‑weight objects where access frequency matters. | More complex to maintain counts; can be approximated with `CountedLRU`. |
| **Time‑to‑Live / Time‑to‑Idle** | Items expire after a fixed period or inactivity. | Token caches, temporary feature flags. | Requires background eviction thread; can cause bursty load if many expirations coincide. |
| **ConcurrentHashMap‑based Cache (Guava, Caffeine)** | Combines LRU/LFU with concurrency control and optional expiry. | General purpose caching in high‑throughput services. | Memory overhead for per‑entry metadata; tuning needed for eviction policy. |

### How to Choose
1. **Workload** – if access is bursty, use LRU; if steady hot items dominate, LFU or frequency‑based may win.
2. **Eviction Policy Needed?** – Time‑to‑Live is essential when stale data is harmful (e.g., auth tokens).
3. **Concurrency Level** – `ConcurrentHashMap`‑backed caches scale better than single‑threaded LinkedHashMap.

### Common Pitfalls
- **Memory overcommitment**: on‑heap caches can trigger GC pauses if not bounded.
- **Cache stampedes**: multiple threads evicting the same key; mitigated with *double‑checked locking* or *lazy loading*.
- **Eviction policy mismatch**: LRU may evict a hot item if accessed infrequently but still needed.

### Optimizations
- Use **soft references** for “best effort” caching when memory is tight.
- Combine **TTL** with **LRU** (Caffeine’s `expireAfterWrite` + `maximumSize`) to cap both time and size.
- Profile GC logs; adjust `maxHeapSize` or switch to *off‑heap* if on‑heap thrashing persists.

> **Takeaway:** On‑heap caches are powerful when bounded, properly tuned, and matched to the workload’s access pattern. Selecting the right eviction policy and handling concurrency correctly keeps latency low while preventing GC‑induced slowdowns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
