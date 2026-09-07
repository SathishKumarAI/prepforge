---
qid: ing_7318e6fc5e__faang__local
question: 'Explain: Lower Latency — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 489
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:40-05:00'
sources: []
---

**Lower Latency – CDN Design for ML‑Driven Content**

| # | Stage | Key Points |
|---|-------|------------|
| **1. Clarify** | *Goal*: Deliver model‑generated content (e.g., personalized video captions) to millions of users with < 100 ms latency. <br>*Assumptions to confirm*: 1️⃣ Geographic distribution of traffic, 2️⃣ Size & type of ML payload, 3️⃣ Real‑time vs batch inference, 4️⃣ Cache invalidation policy. |
| **2. Approach** | 1️⃣ Edge cache nodes store pre‑computed predictions.<br>2️⃣ Use *predict‑then‑cache* pipeline: request → nearest edge → if miss → origin compute → push back to cache.<br>3️⃣ Employ content hashing (e.g., SHA‑256 of user+content) as key. |
| **3. Depth** | • **Cache Layer**: In‑memory store (Redis, Memcached) with LRU + TTL based on model drift.<br>• **Edge Orchestration**: Geo‑DNS + Anycast routing to nearest node; HTTP/2 multiplexing for parallel requests.<br>• **Compute Offload**: Serverless ML inference at origin; use GPU instances only for cache misses. <br>• **Complexity**: O(1) lookup, O(log n) eviction. |
| **4. Edge Cases** | • Rapid model updates → stale cache → implement *versioned keys* and *cache‑warm on rollout*.<br>*Burst traffic* → auto‑scale edge nodes via Kubernetes HPA.<br>*Zero latency for 99th percentile* → use TCP Fast Open + keep‑alive. |
| **5. Optimize & Communicate** | • Reduce payload size with model quantization (e.g., INT8).<br>• Use HTTP/3 QUIC to cut RTT on mobile. <br>Explain trade‑offs: higher cache hit rate ↔ larger memory footprint; tighter TTL ↔ fresher predictions but more compute. |

*Result*: By combining edge caching, geo‑routing, and selective compute offload, we achieve sub‑100 ms latency for ML content while keeping infrastructure cost proportional to traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
