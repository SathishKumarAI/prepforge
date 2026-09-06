---
qid: ing_d95a9cfefa__fp__local
question: 'Explain: Choosing a Strategy — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 561
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:42:18-05:00'
sources: []
---

### Why a cache is needed

When a request arrives we want *latency* ≈ 0 ms and *throughput* high.  
A database or external service has **O(1) read latency** only when it fits in RAM; otherwise it spends time on disk/network, which scales as **O(log n)** or worse.  
Thus the fundamental problem is: *“How do we keep the most useful data in fast memory so that the expected cost per request is minimized?”*  

### The optimization view

Let \(p_i\) be the probability of accessing item \(i\), and let \(c_{\text{fast}}\) and \(c_{\text{slow}}\) be the costs to fetch it from cache or backend.  
The expected cost per request is  

\[
E[C] = \sum_i p_i\, c_{\text{fast}} + (1-p_i)\, c_{\text{slow}}
      = c_{\text{fast}} + \sum_i p_i(c_{\text{slow}}-c_{\text{fast}})
\]

Minimizing \(E[C]\) reduces to **maximizing** \(\sum_{i\in S}p_i\), where \(S\) is the set of items kept in cache.  
Hence, *the optimal cache contains the items with highest access probabilities*, subject to capacity constraints.

### From theory to practice

- **LRU (Least Recently Used)** approximates “high‑frequency” by assuming temporal locality: if an item was used recently it’s likely to be needed again soon.
- **LFU (Least Frequently Used)** directly estimates \(p_i\) via hit counts, better for workloads with long‑term popularity but requires counter maintenance.
- **ARC / CAR** blend LRU and LFU, dynamically tuning the balance as workload shifts.

### Non‑obvious insight

The *optimal* strategy is not a single algorithm; it’s a *policy space* parameterized by how aggressively we track recency vs. frequency.  
A subtle but powerful trick: **use a small “ghost” cache** (records of evicted items) to learn which policy would have kept them.  
This lets the system self‑adapt without manual tuning, a principle that underlies modern adaptive caching frameworks.

> In short, caching is an online optimization problem; the best strategy emerges from balancing observed access patterns against memory constraints, and the most elegant solutions are those that *learn* which balance to use on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
