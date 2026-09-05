---
qid: ing_407e4cf601__fp__local
question: 'Explain: Origin Overload on Misses — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 414
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:21:37-05:00'
sources: []
---

**Why “origin overload on misses” happens in a CDN**

A CDN’s job is to reduce latency by caching content at edge nodes. When a client requests an object, the edge first checks its local cache (the *hit* probability). If it isn’t there (*miss*), the request must be forwarded to the origin server. The **miss rate** is therefore the fraction of traffic that actually reaches the origin.

The origin’s capacity is fixed. In steady state, the load on an origin equals  

\[
L_{\text{origin}} = \lambda \times p_{\text{miss}}
\]

where \( \lambda \) is the global request arrival rate and \( p_{\text{miss}} \) is the miss probability that depends on cache size, object popularity distribution (often Zipf), and TTL policies. As traffic scales or as new, highly‑requested objects are added, \(p_{\text{miss}}\) can spike even if the edge caches are large; this is **origin overload**.

A deeper principle: the caching system implements a *probabilistic filtering* of requests. The miss probability is essentially an estimator of how well the cache approximates the origin’s workload. If the filter (cache) fails to capture the heavy‑tail of the popularity distribution, the estimator becomes biased and the origin sees more traffic than it can handle.

**Non‑obvious insight:**  
Cache eviction policies that minimize *average* miss rate (e.g., LRU) do not necessarily protect against *burst* overload. A policy that smooths the miss stream—by intentionally keeping a small buffer of the most recently requested items (a “probabilistic cache”)—can dramatically reduce peak origin load, even if overall hit ratios are slightly lower. This trade‑off between steady‑state efficiency and burst tolerance is often overlooked in CDN design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
