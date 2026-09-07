---
qid: ing_6ce5fbb189__faang__local
question: 'Explain: Production Practices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 476
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:50-05:00'
sources: []
---

**Clarify**  
The interview asks how a CDN can be engineered for ML‑model serving in production—i.e., cache pre‑computed predictions or model artefacts close to end users while ensuring freshness, security, and scalability. I’ll assume we need low latency (≤ 50 ms), high throughput (>10k QPS), multi‑region support, and the ability to roll out new models without downtime.

**Approach**  
1. **Edge caching layer** – Deploy CDN nodes globally; each node holds a read‑only snapshot of model weights/feature maps.  
2. **Cache‑key strategy** – Key by request payload hash + model version.  
3. **Invalidation & TTL** – Use short TTLs (e.g., 5 min) for hot models, longer for static embeddings; support push‑based invalidation via a control plane.  
4. **Fallback & consistency** – On cache miss or staleness, route to origin inference API; use versioned URLs to avoid stale reads.  
5. **Security** – Sign requests with HMAC and enforce TLS; restrict node access via IAM roles.

**Depth**  
- *Latency*: Edge nodes compute predictions locally if the model fits in memory (~10 MB), otherwise proxy to nearest origin.  
- *Throughput*: Horizontal scaling of edge nodes; use load balancers per region.  
- *Consistency*: Employ eventual consistency with versioned artifacts; clients can request a specific version.  
- *Cost*: Cache only frequently used models; purge infrequently accessed ones.

**Edge Cases**  
- Rapid model rollouts: ensure atomic cache swaps to avoid serving two versions simultaneously.  
- Cold starts for large models: pre‑warm nodes during low traffic periods.  
- Security breach at a node: revoke keys and invalidate all caches in that region.

**Optimize & Communicate**  
I’d iterate on TTLs based on observed hit rates, use CDN analytics to spot bottlenecks, and adopt canary deployments for new model versions. In the interview I’d emphasize the trade‑off between freshness (short TTL) vs. cost/latency, and explain how a hierarchical cache (edge → regional → origin) balances these factors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
