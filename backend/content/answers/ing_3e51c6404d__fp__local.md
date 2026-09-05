---
qid: ing_3e51c6404d__fp__local
question: 'Explain: this garage id and i think we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 542
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:09-05:00'
sources: []
---

### Designing a Parking‑Garage Service (Amazon System‑Design)

**Fundamental problem**  
We must let millions of drivers reserve, enter, exit and pay for spots while guaranteeing that no two cars occupy the same spot at once. The system’s core invariant is *spatial consistency*: each physical slot can be in only one state (`free`, `reserved`, `occupied`, `maintenance`).  

**Why it must look this way**

1. **State machine** – A slot is a finite‑state machine with deterministic transitions triggered by events (reserve, arrive, leave).  
   *Reserve → occupied* if the spot is free; otherwise reject.  
   *Leave → free* after payment.  
   This guarantees safety without locking every request.

2. **Optimisation of resources** – We want to minimise idle space. The reservation policy must be *greedy* yet fair: always hand out the nearest available slot (distance minimised). That is a classic *matching problem*: assign each arriving driver to an unassigned spot that minimises total travel distance → solved locally by scanning neighbouring levels first.

3. **Scalability** – Spot‑level state can be stored in a sharded key‑value store (`spot_id → state`). Sharding by level+row keeps lookups O(1).  
   The *reservation queue* (drivers waiting for a spot) is a priority queue ordered by arrival time to preserve FIFO fairness.

4. **Fault tolerance** – Use an event log (Kafka) so every transition is immutable; replay recovers the current state if a node dies.

**Non‑obvious insight**  
Treating each spot as a *deterministic finite automaton* allows us to prove that, under concurrent reservations, no deadlock can arise: the only cycle would be two spots swapping states, but transitions are atomic. Hence we need no distributed lock protocol; simple CAS (compare‑and‑swap) on the key/value store suffices, drastically reducing latency.

**Key components**

| Layer | Responsibility |
|-------|----------------|
| API Gateway | Auth & rate‑limit |
| Reservation Service | Reads current spot state, writes new state atomically |
| Spot Manager | Maintains in‑memory cache of nearest free spots per level |
| Payment Service | Handles exit billing and updates spot to `free` |

With this architecture we satisfy the constraints: **consistency**, **low latency**, **high throughput**, and **ease of scaling**—exactly what Amazon expects in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
