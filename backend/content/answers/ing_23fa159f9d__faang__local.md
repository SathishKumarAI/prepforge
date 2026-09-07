---
qid: ing_23fa159f9d__faang__local
question: 'Explain: The Core Trade-offs — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 526
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:54-05:00'
sources: []
---

**Clarify**  
The interview asks you to summarize the *core trade‑offs* involved in designing caching strategies for a large‑scale ML system (e.g., feature store, model inference cache). Confirm assumptions:  

- What is cached? Raw data, pre‑computed features, or model predictions?  
- What are latency, consistency, and cost constraints?  
- Is the workload read‑heavy, write‑heavy, or balanced?  

**Approach**  
1. Identify the three primary dimensions: *latency vs. freshness*, *storage cost vs. compute cost*, and *scalability vs. complexity*.  
2. For each dimension, list typical cache policies (LRU, LFU, TTL, write‑through, write‑back).  
3. Map trade‑offs to system goals (e.g., low inference latency vs. up‑to‑date predictions).

**Depth**  

| Dimension | Trade‑off | Typical Policy | Impact |
|-----------|-----------|----------------|--------|
| Latency ↔ Freshness | Faster reads → stale data | **TTL / write‑back** | Reduces read hops but may serve out‑of‑date features. |
| Storage vs Compute | Larger cache → less recomputation | **LRU + pre‑warm** | Higher storage cost, lower CPU usage. |
| Consistency vs Scale | Strong consistency → serialization bottlenecks | **Eventual consistency with pub/sub** | Allows horizontal scaling but may delay updates. |

Explain that caching ML artifacts often uses *read‑through* for feature stores and *write‑back* for inference caches; each choice shifts the balance among these axes.

**Edge Cases**  

- Hotspot features: LRU may evict too aggressively—consider frequency‑based eviction (LFU).  
- Rapid model updates: TTL must be short, else stale predictions cause drift.  
- Mixed workloads: a tiered cache (in‑memory + SSD) mitigates both latency and cost.

**Optimize & Communicate**  

Highlight that an optimal design often blends strategies—e.g., an in‑memory LRU for the most frequently used features, backed by an SSD‑based TTL cache for less hot data. Stress that you would instrument hit/miss ratios and model accuracy to iterate. Conclude by noting that choosing a policy is a *system‑level decision* tied to business KPIs rather than a one‑size‑fits‑all solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
