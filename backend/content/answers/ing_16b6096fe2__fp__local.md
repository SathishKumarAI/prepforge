---
qid: ing_16b6096fe2__fp__local
question: 'Explain: Summary — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 414
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:59-05:00'
sources: []
---

**Caching in Machine‑Learning Systems: A First‑Principles View**

The core problem is *latency vs. cost*: a model inference request must be answered quickly while keeping compute and storage budgets reasonable.  
At first principles, any cache implements **information locality**—the idea that data requested now will likely be requested again soon or in a predictable pattern.  

1. **Temporal locality (LRU)**: the probability of re‑access decays with time; thus we evict the least recently used items.  
2. **Spatial locality (LFU, ARC)**: popular items tend to stay popular longer; LFU keeps the most frequently hit entries.  
3. **Predictive locality (ProbCache, Bloom filters)**: statistical models estimate future hit probability and pre‑populate accordingly.

Why must a cache obey these? Because every eviction incurs a *retrieval cost* \(C_{\text{miss}}\) (e.g., GPU inference time). The expected cost per request is  
\[
E[C] = P_{\text{hit}} \cdot C_{\text{hit}} + (1-P_{\text{hit}})\cdot C_{\text{miss}},
\]
and maximizing \(P_{\text{hit}}\) under a size constraint is an instance of the **knapsack problem**—an NP‑hard optimization that greedy heuristics approximate.

**Non‑obvious insight:**  
*Cache eviction should consider *future* request variance, not just current hit rate.* A high‑variance workload (e.g., seasonal recommendations) benefits from *adaptive* policies that temporarily lower cache size to avoid stale model weights, then ramp up when patterns stabilize. This subtle trade‑off between freshness and reuse is often overlooked but can reduce inference costs by 10–15 % in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
