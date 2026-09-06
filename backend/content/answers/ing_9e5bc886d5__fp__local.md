---
qid: ing_9e5bc886d5__fp__local
question: 'Explain: and the system like i guess what — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 438
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:42:03-05:00'
sources: []
---

**Designing an Amazon‑style Parking Garage**

*Problem*:  
Customers arrive at a mall and need a secure, cost‑effective place to park while shopping. The system must: (1) allocate space efficiently; (2) track vehicle entry/exit in real time; (3) support dynamic pricing; (4) guarantee safety and compliance.

**Why this architecture works**

1. **Event‑driven microservices** – each service (Parking, Billing, Security, Analytics) publishes to a Kafka topic. This decouples real‑time updates from downstream processes and scales independently.
2. **Stateful “Gate” service per level** – holds the current occupancy bitmap. A simple bitset lets us compute free spots in O(1), satisfying low latency for ticket issuance.
3. **Distributed lock via Redis** – ensures two gates don’t assign the same spot simultaneously, a classic *optimistic concurrency* pattern.
4. **Time‑window pricing model** – uses a linear regression on historical occupancy to predict demand spikes; prices are updated every 5 min, balancing revenue and fairness.

**Geometric insight**  
Treat each level as a 2‑D grid. Allocating the “nearest” spot is equivalent to solving an *online bipartite matching* problem with unit weights. By precomputing Voronoi cells around entrances and maintaining a priority queue of free spots per cell, we reduce allocation time from O(N) to O(log N).

**Non‑obvious insight**  
Instead of storing every vehicle record in the gate service, store only *hashes* of license plates and timestamps. The full vehicle profile is lazily loaded from a NoSQL store when needed (e.g., for loyalty rewards). This drastically cuts memory usage while preserving privacy compliance.

In sum: an event‑driven, lock‑free allocation engine backed by simple data structures and predictive pricing delivers the low‑latency, high‑throughput experience Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
