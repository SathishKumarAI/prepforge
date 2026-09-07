---
qid: ing_5f4267628d__faang__local
question: 'Explain: No Caching — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 450
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:40-05:00'
sources: []
---

**No‑Caching – Anti‑Pattern in AI Systems**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* A model inference API returns the same result for identical inputs but the implementation skips any caching layer. <br>*Assumptions:* • Inputs are deterministic (same payload → same output). <br>• Latency and throughput matter (e.g., real‑time recommendation). <br>• Backend storage is cheap relative to compute cost. |
| **Approach** | 1. Identify repeatable requests (user ID + feature vector). <br>2. Store the inference result in a fast key‑value store keyed by a hash of the input. <br>3. On cache hit, return cached output; on miss, run the model and populate the cache. |
| **Depth** | • **Complexity:** O(1) lookup vs. O(N) compute per request. <br>• **Trade‑offs:** Cache size limits, eviction policy (LRU, LFU), consistency when model updates occur. <br>• **Implementation:** Redis or Memcached for low‑latency; use a version tag to invalidate stale results after retraining. |
| **Edge Cases** | • Non‑deterministic models (e.g., dropout during inference) → cache invalidation needed.<br>• Cold start: first request incurs full compute cost.<br>• Memory pressure: over‑caching can lead to thrashing; monitor hit ratio. |
| **Optimize & Communicate** | • Start with a small TTL for safety, then gradually increase as confidence grows. <br>• Measure cache hit rate and latency savings; present data to stakeholders. <br>• Discuss fallback strategy (e.g., compute on miss) to avoid service failure. |

*Bottom line:* Skipping caching in AI workloads forces the model to recompute identical outputs repeatedly, wasting GPU/CPU cycles and inflating response times—an anti‑pattern that can be remedied with a lightweight, versioned cache layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
