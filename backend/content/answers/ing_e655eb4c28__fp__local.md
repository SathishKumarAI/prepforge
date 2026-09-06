---
qid: ing_e655eb4c28__fp__local
question: 'Explain: High Scalability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 509
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:08:38-05:00'
sources: []
---

## High‑Scalability in Machine‑Learning Systems  
**Fundamental problem** – a model must process *N* data points and *M* features while keeping latency < T ms per inference, even as *N*, *M* → ∞.  

### 1. Why the scaling law looks like **O(N·M)**  
- Each prediction is a dot‑product: \(\sum_{i=1}^M w_i x_i\).  
- If we naïvely recompute this for every request, cost grows linearly in both *N* (number of concurrent requests) and *M* (model size).  
- To stay below T ms, we need to **parallelise** across *M* (vectorisation), *N* (batches), or both.

### 2. Core optimisation principles  

| Principle | How it applies |
|-----------|----------------|
| **Compute‑memory trade‑off** | Store pre‑computed activations (caching) for frequent inputs; compress weights (quantisation). |
| **Work‑sharing vs. Work‑splitting** | *Work‑sharing*: same computation reused across many requests (e.g., shared embeddings). *Work‑splitting*: split a single inference across GPUs or nodes. |
| **Load balancing as stochastic optimisation** | Treat each node’s queue length as an estimate of gradient variance; allocate more tasks to under‑utilised nodes, reducing overall latency variance. |

### 3. Non‑obvious insight  
> *Batching is not just throughput‑boosting; it is a form of **probabilistic regularisation***.  
When we batch \(B\) requests, the aggregated gradient \(\frac{1}{B}\sum g_i\) has variance \(\sigma^2/B\). Thus, even if each request’s inference is noisy (due to caching or quantisation), batching implicitly averages out noise, improving stability without extra compute. This explains why production ML pipelines often batch at the edge—an optimisation that simultaneously boosts throughput and reduces error.

**Take‑away:** Design for scalability by **parallelising across features, requests, and nodes; balancing load through stochastic reasoning; and leveraging batching as a natural variance reducer.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
