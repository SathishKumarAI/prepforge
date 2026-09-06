---
qid: ing_a47341135f__fp__local
question: 'Explain: Summary — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 543
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:04-05:00'
sources: []
---

**Caching: a principled shortcut for latency‑optimal data access**

At its core, a machine‑learning service faces a *sequential decision problem*: each request must be answered quickly while the underlying model or dataset is expensive to fetch (disk I/O, GPU memory, network hop). Formally, let \(f(x)\) denote the time‑cost of producing an answer for input \(x\). The system’s goal is to minimize the *expected latency*  
\[
E[T] = \sum_{x} p(x) \, f_{\text{sys}}(x)
\]
where \(p(x)\) is the distribution of incoming queries and \(f_{\text{sys}}\) is the actual cost after system optimisations.

A **cache** introduces a *two‑stage* evaluation:  
1. **Fast lookup** in an in‑memory table (cost \(c_{\text{hit}}\)).  
2. If absent, compute or fetch the full answer (cost \(c_{\text{miss}}\)) and store it for future hits.

The expected cost becomes
\[
E[T] = \sum_{x} p(x)\bigl[ h_x\,c_{\text{hit}} + (1-h_x)\,(c_{\text{miss}}+c_{\text{store}}) \bigr]
\]
where \(h_x\) is the hit probability. Optimising \(E[T]\) reduces to a *knapsack* problem: pick the most frequent items subject to memory constraints.

**Why it must work this way**

- **Law of diminishing returns**: The first few cached entries yield large latency drops; later ones offer marginal gains.  
- **Temporal locality**: ML inference workloads often repeat similar feature vectors or model outputs, making simple LRU or LFU policies effective.  

**Non‑obvious insight**

Most designs treat cache size as the only knob. In reality, *cache coherence* between multiple ML nodes (e.g., parameter servers) is a deeper constraint: stale parameters can hurt convergence rates more than raw latency. Thus, an optimal system balances **hit rate** against **staleness penalty**, often by tagging cached entries with version vectors or timestamps and invalidating them when model updates arrive.

In summary, caching in ML systems is the optimization of expected latency under resource constraints, grounded in probability theory and information‑theoretic limits on what can be stored versus recomputed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
