---
qid: ing_e0fdad30a6__fp__local
question: 'Explain: Browser Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 466
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:58:10-05:00'
sources: []
---

**Why a browser caches?**

At its core, the web is a *latency‑sensitive* system: every request incurs network round‑trip time (RTT) and server load. If we treat each page fetch as an expensive operation \(C_{\text{net}}\), the expected cost for a user browsing \(n\) pages becomes  
\(E[\text{Cost}] = n \cdot C_{\text{net}}\).  

Caching replaces that cost with a cheaper local read \(C_{\text{local}} \ll C_{\text{net}}\). The trade‑off is freshness: stale data may be served. Thus caching must satisfy the **staleness–latency** Pareto frontier—minimize latency while keeping staleness below an application‑defined threshold.

**Mechanics**

1. **Key derivation** – URL + query parameters → cache key.  
2. **Storage policy** – LRU, LFU, or size‑based eviction; a cost function \(f(\text{size}, \text{recency})\).  
3. **Validation** – `ETag`/`Last-Modified` headers trigger conditional GETs (`If-None-Match`). If the server returns 304, the local copy is still valid; otherwise it updates.

The system behaves like a *probabilistic oracle*: with hit probability \(p\), expected latency drops to  
\(E[T] = p \cdot C_{\text{local}} + (1-p) \cdot C_{\text{net}}\).  
Optimizing \(p\) is an information‑theoretic problem: we want the cache to contain the most *informative* subset of responses, i.e., those with highest request frequency and lowest update rate.

**Non‑obvious insight**

Most people think caching only saves bandwidth. In reality, **it shifts computational load from server to client**, turning a global resource bottleneck into a distributed one. This decentralization is why modern CDNs and service workers can scale to billions of requests without proportionally increasing origin capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
