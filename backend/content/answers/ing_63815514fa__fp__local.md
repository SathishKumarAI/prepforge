---
qid: ing_63815514fa__fp__local
question: 'Explain: Content Delivery Network (CDN) — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 508
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:36-05:00'
sources: []
---

**Why a CDN is essential for Spotify**

Spotify streams ~10 billion tracks per day. The *fundamental problem* is that every user request must fetch the same audio payload (≈30 MB) over a global network whose latency, jitter and packet loss are highly variable. If each client pulled directly from a single origin server, bandwidth would saturate, costs would explode, and quality of service would degrade.

**First‑principle design**

1. **Cache locality → geometric proximity**  
   The expected round‑trip time \(E[T]\) for a request is a convex function of the physical distance to the edge node (due to propagation delay and queuing). Placing caches at points that partition the Internet into Voronoi cells minimizes the average \(E[T]\) for all users.

2. **Cache consistency → probabilistic freshness**  
   Tracks are immutable once published; only metadata changes. Therefore a *write‑through* policy with TTL = ∞ is optimal: every edge node holds a perfect copy, eliminating write traffic entirely and guaranteeing zero staleness.

3. **Bandwidth cost → entropy minimization**  
   Each track’s popularity follows a Zipf distribution \(P(k)\propto k^{-\alpha}\). By caching the top‑\(N\) tracks locally, we reduce the expected request size to \(\sum_{k=1}^{N} P(k) \approx 1 - (N+1)^{1-\alpha}/(α-1)\), which is a dramatic compression of traffic. This follows directly from Shannon’s entropy minimization: more probable items are stored closer.

4. **Scalability → hierarchical replication**  
   Edge caches form a tree; parent nodes hold a subset of popular tracks that are *not* in the children, ensuring that any request can be served by the nearest node with a 1‑hop lookup. This yields logarithmic lookup time \(O(\log N)\) and linear storage overhead.

**Non‑obvious insight**

Because audio files are immutable, **every edge cache can act as a perfect source**; the CDN’s role reduces to *geometric placement* rather than consistency management. Thus, investing in optimal node distribution (e.g., using BGP routing hints) yields far more performance gain than sophisticated invalidation protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
