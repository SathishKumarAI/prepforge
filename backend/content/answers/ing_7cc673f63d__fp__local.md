---
qid: ing_7cc673f63d__fp__local
question: 'Explain: F3: Adapter cache thrash under traffic spike'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 440
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:30:40-05:00'
sources: []
---

**Adapter Cache Thrash Under Traffic Spike**

When an inference engine receives a burst of requests, each request often needs to load a *model adapter*—a lightweight wrapper that translates raw data into the format required by a specific neural‑network backend (e.g., TensorRT, ONNX Runtime).  
These adapters are cached in memory to avoid repeated construction overhead. The cache’s eviction policy is usually **Least‑Recently‑Used (LRU)** or **Least‑Frequently‑Used (LFU)**, assuming that recently used adapters will be reused soon.

**Why thrashing occurs**

1. **High churn rate** – A traffic spike introduces many *different* adapter types in a short window.
2. **Small cache footprint** – The cache can hold only a handful of adapters; once it’s full, each new request forces an eviction.
3. **Eviction‑construction cycle** – Evicted adapters are immediately needed again by subsequent requests, causing them to be reloaded.

This cyclical load/evict pattern is *thrashing*: the system spends most of its time rebuilding adapters rather than performing inference.

**Deeper principle**

Thrashing exposes a mismatch between the **temporal locality** exploited by LRU/LFU and the *burst‑driven* temporal pattern of traffic. The cache’s policy optimizes for steady workloads but fails under non‑stationary arrival rates.

**Non‑obvious insight**

The root cause is not just adapter size but *adapter affinity*: many adapters share a common underlying kernel (e.g., all TensorRT adapters). By grouping adapters into **dependency‑aware clusters** and caching the shared kernel once, you can reduce eviction frequency. In practice, this means designing a two‑level cache—one for kernels, one for adapters—that respects the hierarchical reuse structure, eliminating thrashing even under extreme spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
