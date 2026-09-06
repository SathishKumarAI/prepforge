---
qid: ing_da805ba588__fp__local
question: 'Explain: we have a i don''t know web — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 488
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:07-05:00'
sources: []
---

**Designing an Amazon‑style parking garage**

*Fundamental problem*:  
We must map a *finite set of spots* to a *stream of arriving vehicles*, guaranteeing that each vehicle gets the *closest available spot* while keeping lookup, allocation, and deallocation in **O(log n)** time. This is a classic *resource scheduling* problem: resources (spots) are spatially arranged; requests arrive online.

*Why it must be structured this way*:  
If we naïvely scan all spots on every request, the system becomes linear‑time and scales poorly. A balanced search structure preserves the invariant that “the nearest free spot is always retrievable in logarithmic time.” It also supports *concurrent* allocations without deadlocks because each spot can be locked independently.

*Core data structures*

| Structure | Purpose |
|-----------|---------|
| **Interval tree (augmented AVL/Red‑Black)** | Represents contiguous free ranges. Each node stores the length of its interval and the minimum distance to a boundary. This lets us find the nearest available slot in *O(log n)*. |
| **Min‑heap keyed by distance** | Keeps all *boundary spots* (first free spot in each free interval). Extracting the global minimum gives the closest spot overall. |
| **Hash map `spot→vehicle`** | Allows constant‑time deallocation once we know the spot number. |

*Workflow*

1. **Arrival**: pop the heap to get the nearest boundary; allocate that spot, update the interval tree (split or shrink the free range), and push any new boundaries back into the heap.
2. **Departure**: look up the vehicle’s spot via the hash map, release it, merge adjacent free intervals in the tree, and adjust the heap.

*Non‑obvious insight*:  
The *interval tree* is not just a spatial index; its augmentation with “free length” lets us perform *range splits* in logarithmic time, which is essential for handling back‑to‑back arrivals and departures. Without this augmentation, merging free spaces would degrade to linear scans.

This architecture satisfies Amazon’s scale requirements (millions of spots, thousands of concurrent cars) while keeping latency low and the system robust to contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
