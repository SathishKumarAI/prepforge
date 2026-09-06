---
qid: ing_b7b8027f79__fp__local
question: 'Explain: id as usual and then uh yeah — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 497
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:50-05:00'
sources: []
---

**Designing a Parking‑Garage Service (Amazon System‑Design Lens)**  

The *fundamental problem* is: **“Given an arbitrary set of cars arriving and leaving over time, how do we allocate parking spots so that customers can park quickly, space usage is maximised, and the system scales to millions of users?”**  
From this, several constraints surface:

| Constraint | Why it matters |
|------------|----------------|
| *Latency* (≤ 2 s for spot lookup) | Users expect instant confirmation. |
| *Throughput* (≥ 10⁵ concurrent reservations) | Amazon’s traffic is massive. |
| *Reliability* (no double‑booking, eventual consistency) | A mis‑allocation leads to customer loss. |
| *Cost optimisation* | Spot inventory is finite; over‑provisioning hurts margins. |

**Core Architecture**

1. **Partitioned Spot Store**  
   - Shard by *location* and *spot size*.  
   - Each shard holds a bitmap (or segment tree) of free/occupied spots.  
   - Bitmap updates are atomic via compare‑and‑swap or optimistic locking, guaranteeing no double booking.

2. **Reservation Service**  
   - Receives arrival requests → looks up the nearest free spot in the relevant shard.  
   - Uses *range queries* on the bitmap to find the first zero (free) bit; this is a classic *sparse array* problem solved in O(log n) with segment trees.

3. **Eviction & Rebalancing**  
   - Periodic background job scans for stale reservations (no‑show cars).  
   - Frees spots and re‑indexes the bitmap, ensuring long‑term utilisation stays > 85 %.

4. **Caching Layer**  
   - In‑memory LRU cache of “hot” spot IDs per shard to reduce DB reads during peak times.

**Non‑obvious Insight**

Treating each *spot* as a bit in a *bitmap* turns an apparently complex allocation problem into simple bitwise operations. This not only gives sub‑millisecond latency but also scales linearly with the number of spots, making it ideal for Amazon’s massive, geographically distributed parking network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
