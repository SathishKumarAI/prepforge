---
qid: ing_7f0f18133d__fp__local
question: 'Explain: Supported on-heap cache types — Caching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 509
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:35:38-05:00'
sources: []
---

### Why an **on‑heap cache** matters in machine learning

When a model serves predictions, it repeatedly needs the same feature vectors or intermediate tensors. Fetching them from disk or recomputing them incurs latency and CPU cycles—both expensive in production. An on‑heap cache keeps these items in main memory (the Java/Scala “heap”), trading off space for speed.

### Deriving the optimal eviction policy

Let \(S\) be the set of cached objects, each with size \(s_i\) and access probability \(p_i\). The expected hit cost is  
\(C_{\text{hit}}=\sum_{i\in S} p_i c_{\text{mem}}\), while miss cost is  
\(C_{\text{miss}}=\sum_{i\notin S} p_i c_{\text{disk}}\).

Minimizing \(E[C]=C_{\text{hit}}+C_{\text{miss}}\) under the space constraint \(\sum_{i\in S}s_i\leq B\) yields a **knapsack** problem: pick items with the highest ratio \((c_{\text{disk}}-c_{\text{mem}})/s_i\). This theoretical optimum motivates practical policies:

| Cache type | Principle | When it shines |
|------------|-----------|----------------|
| LRU (Least‑Recently Used) | Approximate greedy on access recency | Temporal locality (online inference) |
| LFU (Least‑Frequently Used) | Frequency counts | Stable workloads with skewed access |
| ARC (Adaptive Replacement Cache) | Balances recency and frequency | Mixed patterns |

### A subtle insight

Most practitioners tune cache size, but **cache eviction should adapt to *content size*, not just count**. A single high‑resolution image can exhaust the budget while a small embedding does not. Algorithms that respect \(s_i\) (e.g., weighted LRU or size‑aware LFU) achieve higher hit rates for the same memory footprint, especially in heterogeneous ML workloads.

In short, an on‑heap cache is a lightweight, mathematically grounded way to turn latency into a controllable resource, and its design hinges on optimizing the trade‑off between access probability and object size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
