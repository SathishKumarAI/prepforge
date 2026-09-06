---
qid: ing_731b14469b__fp__local
question: 'Explain: Common Use Cases — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 413
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:09:29-05:00'
sources: []
---

### Why a CDN is the *default* for ML‑powered content

**Problem:** A model that recommends videos, images or translated text must serve millions of requests per second with sub‑millisecond latency and minimal bandwidth waste. The raw inference engine (GPU cluster) can’t be on every edge location; it would explode costs and introduce unacceptable round‑trip delays.

**Solution principle – locality + caching:**  
1. **Geographic proximity** reduces propagation delay, which is bounded by the speed of light (~3 µs per km). A CDN places edge nodes near users, turning a 100 ms latency into ~5–10 ms.  
2. **Cache‑first inference**: The first request to an unseen item triggers model inference at a central server; the result (e.g., rendered thumbnail or translated text) is stored in the edge cache. Subsequent requests hit the cache, eliminating repeated expensive computations.

**Optimization viewpoint:**  
The CDN turns *online* inference into an **offline pre‑computation problem** for the majority of traffic. By solving a caching optimization—minimizing \( \sum_{u} L(u) \times P(u) \), where \(L(u)\) is latency and \(P(u)\) request probability—we achieve near‑optimal performance with simple LRU/ARC policies.

**Non‑obvious insight:**  
Most engineers treat CDN as a pure “delivery” layer, ignoring that it can be an *inference accelerator*. By integrating the model’s output into the cache invalidation logic (e.g., refresh on retrain or data drift), the CDN becomes a **distributed inference scheduler**, automatically balancing freshness and latency without extra orchestration.

Thus, CDNs solve ML delivery by marrying physics‑bound latency reduction with cache‑based computational amortization—an elegant embodiment of the trade‑off between *cost* and *performance*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
