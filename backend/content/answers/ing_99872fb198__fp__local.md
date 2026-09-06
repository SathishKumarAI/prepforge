---
qid: ing_99872fb198__fp__local
question: 'Explain: Content Delivery Network — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 506
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:28-05:00'
sources: []
---

**Why a CDN is a *necessary* architectural pattern**

The core problem: a user requests static or dynamic content from a single origin server.  
Latency ≈ distance × round‑trip + processing time, and the origin can only serve `C` requests per second.  

If we let all users hit the origin, the service suffers two failures:

1. **Propagation delay** – a 5 kms link over 10 000 km gives > 100 ms latency, unacceptable for interactive apps.
2. **Capacity bottleneck** – `C` is finite; once exceeded the queue grows exponentially (Bottleneck theorem).

A CDN solves this by *placing* copies of content in many edge nodes, each close to a cluster of users. The design follows three invariants:

| Invariant | Why it must hold |
|-----------|------------------|
| **Cache hit ratio ≥ 0.9** | Keeps most traffic local; otherwise the origin would still be saturated. |
| **Staleness ≤ Δt** | Guarantees freshness; if Δt is too large, users see stale data and trust erodes. |
| **Uniform load distribution** | Prevents “hot spots”; a single node becoming overloaded violates scalability (Paxos‑like consistency). |

These invariants map to deeper principles:

- **Optimization**: minimize *expected* latency `E[L] = Σ p_i · L_i` by placing nodes where request probability `p_i` is high.
- **Information theory**: the cache’s entropy must be lower than the origin’s; otherwise we waste bandwidth.
- **Geometry**: edge nodes approximate a Voronoi diagram over user locations, ensuring every user is within a bounded radius.

**Non‑obvious insight**

Many treat caching as “store everything you can”. The key is *which* items to cache. A CDN that aggressively caches rarely requested objects wastes storage and may evict popular content (the **cache pollution problem**). Optimal policies weight popularity by request *rate* and *cost*: `score = r / cost`. This ensures the cache stores items that yield the highest latency reduction per byte, not merely the most frequently accessed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
