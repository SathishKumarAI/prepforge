---
qid: ing_71361cd1bb__fp__local
question: 'Explain: System Design: Content Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 510
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:05:20-05:00'
sources: []
---

**From first principles**

A client’s request is a *latency‑constrained query* for data that lives somewhere in a distributed storage system.  
Latency \(L\) consists of two parts:

1. **Propagation delay** – proportional to the physical distance and number of network hops between client and origin.
2. **Processing delay** – time spent retrieving, serialising, encrypting the object.

The optimal strategy minimises \(E[L]\) under a cost budget (storage + bandwidth).  
By moving copies of the *same* object closer to many clients we reduce the propagation term almost entirely; only the processing part remains.  

**Why edge caches work**

Let \(p_i\) be the probability that client \(i\) requests object \(O\).  
If a cache at node \(C\) stores \(O\), the expected latency for all requests to \(O\) becomes

\[
E[L_C] = \sum_{i} p_i\,(\text{local processing}) + (1 - \rho)\,\bigl(\text{origin cost}\bigr),
\]

where \(\rho\) is the cache hit ratio.  
Maximising \(\rho\) under storage constraints leads to a *knapsack* problem: pick the most popular objects for each edge node.  

**Deeper insight**

The **TTL (time‑to‑live)** of cached items should not be fixed; it must adapt to the *arrival process* of requests.  
For Poisson arrivals, optimal TTL \(t^*\) satisfies

\[
\lambda t^* e^{-\lambda t^*} = \frac{C_{\text{miss}}}{C_{\text{hit}}},
\]

balancing freshness (small \(t^*\)) against bandwidth savings (large \(t^*\)).  
Most designs ignore this dynamic, leading to stale content or unnecessary fetches.  

**Summary**

A CDN is an *edge‑caching* system that reduces expected latency by relocating data closer to clients, guided by probabilistic request models and adaptive TTLs—an optimisation of network geometry, information theory, and stochastic processes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
