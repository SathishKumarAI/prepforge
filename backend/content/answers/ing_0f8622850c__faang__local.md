---
qid: ing_0f8622850c__faang__local
question: 'Explain: What a CDN Does — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 503
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:19:33-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem*: Describe how a CDN works and why it matters for ML‑heavy web services (e.g., serving model artifacts or inference APIs).  
*Assumptions to confirm*: Are we talking about static assets (model binaries) or dynamic inference requests? Is latency the primary KPI, or throughput/availability?

**2️⃣ Approach**  
Outline a layered view: edge nodes → caching policy → routing & load balancing → consistency & security. Then explain the ML‑specific optimizations.

**3️⃣ Depth**  

| Layer | What it does | ML relevance |
|-------|--------------|--------------|
| **Edge cache** | Replicates content (model weights, inference results) close to users. Uses LRU/TTL based eviction. | Reduces round‑trip time for model downloads and cold‑start inference latency. |
| **Global load balancer** | Routes requests to nearest healthy edge; uses health checks & weighted routing. | Guarantees high availability of inference endpoints across regions, vital for global ML services. |
| **Consistency layer** | Handles cache invalidation (e.g., new model version) via signed URLs or push notifications. | Ensures all users get the latest model without stale predictions. |
| **Security** | TLS termination, DDoS protection, rate limiting. | Protects sensitive model data and inference traffic. |

*Complexity*: O(1) lookup per request; cache miss triggers a pull from origin (model store). Trade‑off: higher storage cost vs lower latency.

**4️⃣ Edge Cases**  
- *Model version drift*: stale caches → incorrect predictions. Test by pushing new weights and verifying edge invalidation.  
- *Burst traffic*: CDN must auto‑scale edges; test with sudden spikes.  
- *Geofencing constraints*: some regions may block certain content; validate routing logic.

**5️⃣ Optimize & Communicate**  
Explain how to use **immutable URLs** (hash‑based) to avoid eviction, **pre‑warm** popular models during low traffic periods, and monitor cache hit ratios with Grafana dashboards. Narrate the trade‑offs: larger edge storage vs reduced origin load, and highlight that for ML workloads, *latency* is often more critical than bandwidth savings. This structured walk‑through demonstrates clear reasoning, depth, and relevance to a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
