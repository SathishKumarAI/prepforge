---
qid: ing_c1a8665f56__fp__local
question: 'Explain: What CDNs Cache — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 504
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:50-05:00'
sources: []
---

### Why a CDN Must Cache Anything at All

A CDN’s job is to **minimise the expected latency** of serving a request \(r\) for content item \(c\).  
Let \(d_{\text{origin}}\) be the distance (in hops or time) from the origin server, and let
\(p_i(c)\) be the probability that request \(r\) will hit cache node \(i\).
The expected latency is  

\[
L = \sum_{i} p_i(c)\; d_{\text{edge}}(i)+\bigl(1-\sum_{i} p_i(c)\bigr)d_{\text{origin}},
\]

where \(d_{\text{edge}}\) is the distance from node \(i\) to the user.  
To reduce \(L\), we must increase \(\sum_i p_i(c)\); that is, we must store copies of
\(c\) in nodes where many users are likely to request it.

### What Is Cached?

1. **Static assets** (images, JS/CSS, fonts): their content never changes, so the CDN can safely serve them from any node without consistency checks.
2. **Dynamic fragments**: parts of a page that are expensive to compute but change infrequently (e.g., product thumbnails). The CDN stores a *stale‑but‑fast* copy and refreshes it via *Cache‑Control* or *ETag* validation.
3. **Generated content with low TTL**: API responses, ad tags, etc., that can be regenerated quickly if stale.

The cache policy is governed by the *information‑theoretic principle of locality*: a request’s probability distribution over content follows Zipf’s law; caching the top‑ranked items maximises hit rate for minimal storage.  

### Non‑Obvious Insight

Most people think “cache everything.” In reality, **caching only what yields the greatest marginal reduction in expected latency** is optimal. A large file that is rarely requested may consume bandwidth and storage without appreciable benefit, while a small but highly popular asset can drastically lower average delay. Thus CDNs employ sophisticated *frequency‑based* eviction (LFU/LRU hybrids) tuned to traffic patterns rather than naive size thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
