---
qid: ing_72955afb65__star__local
question: 'Explain: Most Recently Used (MRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 330
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:33-05:00'
sources: []
---

**Situation:**  
During a sprint for our real‑time analytics platform, the in‑memory feature store was hitting 95 % capacity on the GPU‑accelerated inference node. Latency spikes were creeping past the SLA of 10 ms per request.

**Task:**  
I had to design and implement a cache eviction policy that kept the most frequently accessed model artifacts while freeing space without hurting throughput.

**Action:**  
I evaluated LRU, LFU, and MRU options. Because our workload had bursty “hot” features that were re‑used immediately after insertion (e.g., user session embeddings), an MRU policy actually made sense: evict the most recently added item when the cache exceeded 90 % usage. I coded a ring buffer in Rust with atomic counters, wrapped it around the existing `HashMap` store, and integrated it with the inference pipeline via a middleware layer. I also added a sliding window metric to monitor eviction frequency and tuned the threshold from 90 % to 85 % after observing stability.

**Result:**  
Cache hit rate improved from 78 % to 92 %, latency dropped to an average of 6.3 ms, and we avoided three SLA breaches in the next two weeks. I learned that choosing a counterintuitive policy like MRU can be justified when the access pattern exhibits immediate reuse, and that careful instrumentation is key to validating such decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
