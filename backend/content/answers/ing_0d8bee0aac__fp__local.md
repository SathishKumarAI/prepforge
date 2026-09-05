---
qid: ing_0d8bee0aac__fp__local
question: 'Explain: Distributed Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 452
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:35-05:00'
sources: []
---

### Why a cache exists  
At its core, a **cache** solves the *latency‑throughput* trade‑off: we want data quickly but must fetch it from a slower source (disk, network, computation). The problem is that every request incurs an expensive read; if we could keep a recent copy in fast memory, we reduce average response time and server load.  

### How it works mathematically  
Let \(D\) be the dataset, \(S(d)\) the cost of accessing element \(d\in D\), and \(P(d)\) its access probability (often Zipfian). The expected cost without a cache is \(\sum_{d} P(d) S(d)\). A cache stores a subset \(C\subseteq D\); the new cost becomes  
\[
\sum_{d\in C} P(d)S_{\text{fast}} + \sum_{d\notin C} P(d)S_{\text{slow}},
\]
where \(S_{\text{fast}}\ll S_{\text{slow}}\). Maximizing \(\sum_{d\in C}P(d)\) (i.e., keeping the most‑popular items) minimizes expected latency—a classic *knapsack* optimization.  

### Deeper principle  
Caching is a **memory hierarchy** exploiting *temporal locality*: recent requests are likely to repeat soon. The design of eviction policies (LRU, LFU, ARC) encodes assumptions about how probabilities change over time—essentially Bayesian updating on demand patterns.

### Non‑obvious insight  
Most people treat the cache as a “store‑and‑recall” device, but its real power comes from **reducing contention**. By keeping hot items in memory, we prevent many clients from hammering the same slow backend simultaneously—a phenomenon called *cache‑thundering herd*. A well‑designed distributed cache turns a single bottleneck into a shared pool of fast replicas, dramatically improving both latency and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
