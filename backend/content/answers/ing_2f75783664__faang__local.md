---
qid: ing_2f75783664__faang__local
question: 'Explain: Reference-based Eviction — CachesExplained \u00b7 google/guava
  Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 371
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:05-05:00'
sources: []
---

**Reference‑based eviction in Guava caches**

| Section | Explanation |
|---------|-------------|
| **Clarify** | We’re asked how Guava’s `CacheBuilder` uses *reference* types (soft/weak) for evicting entries, and why this is useful compared to size or time policies. |
| **Approach** | 1. Define soft & weak references.<br>2. Show how a cache stores keys/values as those references.<br>3. Explain the eviction trigger (GC).<br>4. Contrast with size‑based eviction. |
| **Depth** | *SoftReference* keeps an object alive until memory is needed; GC clears it only when space is scarce. *WeakReference* is cleared on the next GC cycle if no strong refs exist. Guava wraps keys/values in these references and registers a `ReferenceQueue`. When a reference is enqueued, the cache thread removes the mapping. Thus eviction occurs automatically under pressure without explicit size limits. |
| **Edge Cases** | • If you store *weak* keys but still hold a strong value elsewhere, the entry stays.<br>• Soft refs may linger longer than expected on systems with low memory pressure.<br>• Eviction is asynchronous; iteration might see stale entries until cleanup runs. |
| **Optimize & Communicate** | Use soft for values that can be recomputed and weak for keys to avoid accidental retention of cache objects. Communicate the trade‑off: memory‑safety vs determinism; note that time‑based eviction guarantees removal after a set period, whereas reference eviction depends on GC heuristics. This clarity demonstrates structured reasoning and depth—key signals in FAANG interviews. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
