---
qid: ing_09a13916b5__fp__local
question: 'Explain: And if it is then go and — System Design: Content Delivery Networks
  (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 459
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:07-05:00'
sources: []
---

**Why a CDN must exist**

The Internet is a *distributed* medium where every request travels over a mesh of routers, each adding latency and congestion. If a single origin server were the sole source for all users, bandwidth would saturate and round‑trip times (RTTs) would explode—especially for distant clients or during traffic spikes. The fundamental problem is *latency minimization under capacity constraints*.

**Principle: Spatial locality + replication**

Let \(d_{ij}\) be the RTT between user \(i\) and origin node \(j\). We want to choose a set of replica nodes \(R\subseteq J\) minimizing  
\[
\min_{R}\sum_i \min_{r\in R} d_{ir}
\]
subject to storage and bandwidth limits. This is a *facility location* problem: each CDN edge server acts as a facility, users are clients, and we pay for opening facilities (replicas). The optimal placement clusters users geographically—hence the “edge” servers.

**Simplified architecture**

1. **Global Load Balancer (GLB)** – DNS‑based round‑robin or GeoIP routing forwards a client’s first request to the nearest edge.
2. **Edge Cache** – Each edge stores popular objects in RAM/disk, serving subsequent requests instantly. Cache eviction follows LRU or adaptive policies; miss rates follow the *power‑law* of content popularity (Zipf).
3. **Origin Pull / Push** – On a miss, the edge pulls from the origin or receives proactive pushes during off‑peak times.
4. **Consistency & Purge** – Invalidation propagates via push messages; stale objects are served for a short grace period to avoid “cache stampedes.”

**Non‑obvious insight**

The *entropy* of request patterns is far lower than raw traffic volume: most requests target a tiny fraction of assets. By quantifying this entropy, we can predict the minimal cache size needed (Shannon’s bound) and thus design CDN capacity that guarantees a target hit‑rate with provable worst‑case latency.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
