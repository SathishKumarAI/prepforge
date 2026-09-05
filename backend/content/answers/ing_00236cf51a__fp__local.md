---
qid: ing_00236cf51a__fp__local
question: 'Explain: all of those spots are full and — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 384
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:46-05:00'
sources: []
---

**Why “All of those spots are full” is a key signal in a parking‑garage design**

When an interviewer asks you to model a parking garage, they’re testing your ability to turn *resource constraints* into *algorithmic decisions*.  
The statement “all of those spots are full” encodes the following **fundamental problem**:

1. **Finite capacity with dynamic occupancy** – every spot is a resource that can be either free or taken.
2. **Real‑time allocation** – incoming cars must be assigned to an available slot immediately, or rejected.
3. **Optimality criterion** – we usually minimize the average distance a driver walks to their car, or maximize throughput.

From this, you derive that the system must support two core operations:

* `allocate(car_id) → spot` – find a free spot and mark it occupied.
* `release(spot)` – free a spot when the car leaves.

These are *online decision problems*: each allocation must be optimal given current knowledge, yet future arrivals are unknown. The classic approach is to treat spots as **items in a weighted bipartite graph** (cars ↔ spots) and use greedy or priority queues based on distance or time‑to‑leave. The deeper principle here is *online convex optimization*: you choose the best action under uncertainty while maintaining feasibility.

A non‑obvious insight: **the “full” status can be leveraged to pre‑compute a hierarchy of spot groups** (e.g., by floor, proximity). When a group is full, all its sub‑groups are implicitly full; this pruning drastically reduces search space and improves latency—critical in an interview scenario where you must demonstrate both correctness and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
