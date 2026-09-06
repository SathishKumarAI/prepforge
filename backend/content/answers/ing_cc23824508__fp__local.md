---
qid: ing_cc23824508__fp__local
question: 'Explain: Static Web Assets — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 429
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:24-05:00'
sources: []
---

### Why a CDN is the *only* viable solution for static web assets

The fundamental problem: **every user must download the same binary (HTML/CSS/JS/images) as fast and reliably as possible, regardless of geography or load**.  
If we let every request hit the origin server, latency grows linearly with distance; bandwidth becomes a bottleneck; failures cascade. The optimal design is to *replicate* the asset at the edge where the user sits.

1. **Replication ≠ redundancy** – it’s an *optimization* of the cost–latency trade‑off.  
   Let \(L_d\) be round‑trip latency, \(B\) bandwidth, and \(N\) users per region.  
   The total time to serve all users is \(\frac{N L_d}{B}\). By moving the asset to a nearby cache we reduce \(L_d\) dramatically (often from hundreds of ms to <10 ms), so the product shrinks by an order of magnitude.

2. **Cache consistency** is governed by *information theory*: the entropy of a static asset is zero, so any copy is identical. The only stochastic element is the freshness policy—probabilistic TTLs or versioned URLs give deterministic cache invalidation with minimal overhead.

3. **Geometric locality**: placing edge nodes at network “peaks” (major IXPs) minimizes hop count and maximizes throughput, aligning with graph‑theoretic shortest‑path principles.

#### Non‑obvious insight  
Most designers treat the CDN as a black box. The *real* lever is **URL immutability**: by embedding version hashes in filenames you turn cache invalidation from an expensive “push” operation into a trivial “pull” that never conflicts, allowing zero‑downtime deployments and perfect consistency even under massive global scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
