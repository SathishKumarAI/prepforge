---
qid: ing_3eb4b4749f__fp__local
question: 'Explain: into this a little later um when — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 481
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:18:04-05:00'
sources: []
---

**Designing an Amazon‑scale Parking Garage**

*Problem*:  
Customers need a fast, reliable way to reserve, enter, and exit a multi‑level garage while the company wants minimal staffing, maximum throughput, and real‑time analytics.

1. **Fundamental constraint – capacity planning**  
   Each level is a 2‑D grid of spots. Treat each spot as an *item* in a bipartite matching between cars and free spots. The optimal assignment minimises travel distance; this is the classic *assignment problem*, solvable greedily because all edges have linear cost (distance). Thus, we can allocate the nearest available spot to every arriving car without global recomputation.

2. **Throughput – flow optimization**  
   Vehicles move along directed lanes forming a network graph. The *maximum‑flow* algorithm guarantees that lane capacities are never exceeded. By giving each level its own subgraph and allowing cross‑level tunnels only when necessary, we reduce congestion to a per‑level problem: a simple *queueing system* (M/M/1) with known arrival rates.

3. **State consistency – eventual vs strong**  
   Each spot’s status is stored in a distributed key‑value store (e.g., DynamoDB). To avoid race conditions on spot allocation, we use *optimistic concurrency*: each write carries a version tag; conflicts are resolved by “last writer wins” only for non‑critical fields. For critical operations (enter/exit), we lock the spot using a lightweight lease in Redis.

4. **Analytics – event sourcing**  
   Every entry/exit emits an event to Kafka. Downstream services replay these events to compute occupancy histograms, peak hour predictions, and revenue per level—leveraging *probabilistic counting* (HyperLogLog) for large cardinality users.

**Non‑obvious insight**:  
Treating the garage as a **flow network** rather than a static grid turns lane bottlenecks into an easily solvable optimization problem. It allows us to precompute optimal detours and dynamically reallocate lanes during peak periods, giving Amazon a scalable, low‑latency parking solution that can be extended to autonomous valet services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
