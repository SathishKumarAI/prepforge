---
qid: ing_12f0d277b9__fp__local
question: 'Explain: a parking garage type system so i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 552
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:04-05:00'
sources: []
---

**Why we need a “parking‑garage” system for Amazon**

At the core, Amazon must guarantee *low‑latency* location lookups and *high throughput* updates while scaling to millions of vehicles.  
The problem is a **dynamic spatial index**: each car is a point that moves in a 2‑D plane (the garage). We need to answer two queries efficiently:

1. **Nearest‑free slot for an arriving vehicle** – a *range search* over free slots.
2. **Current position of a vehicle** – a direct lookup.

A naive list scan is \(O(n)\); we require sub‑logarithmic time per operation, otherwise the system stalls under load.

---

### Design from first principles

| Layer | Rationale | Implementation |
|-------|-----------|----------------|
| **Spatial partitioning** | Geometry tells us that a quadtree or grid gives \(O(\log n)\) search by recursively narrowing the 2‑D space. | Use a fixed‑size *grid* (e.g., 10 m × 10 m cells). Each cell holds a bitmap of free/occupied slots. |
| **Hash‑based lookup** | Vehicle IDs must be retrieved in \(O(1)\). | Maintain a distributed hash table mapping VIN → slot coordinates, updated on every move. |
| **Event sourcing + CQRS** | Guarantees eventual consistency and auditability: writes are appended events; reads project the latest state. | Each movement is an event stored in Kafka; a read‑model service rebuilds the grid snapshot. |
| **Optimistic concurrency** | Avoid lock contention on high‑traffic slots by using version numbers (compare‑and‑swap). | Slot bitmap updates carry a Lamport timestamp; conflicts are retried. |

---

### Non‑obvious insight

Most designs treat *free* vs *occupied* as a simple flag, but the **entropy of slot occupancy** is the real bottleneck. If we cluster high‑traffic zones (e.g., near elevators) into separate shards and pre‑allocate “hot” slots, we reduce contention dramatically. This follows from *information theory*: concentrating probability mass in fewer cells lowers the expected search cost more than uniform hashing.

---

**Result:**  
A grid + hash + event‑sourced architecture delivers \(O(\log n)\) nearest‑free lookups and \(O(1)\) position queries, scales horizontally, and self‑heals from transient failures—exactly what Amazon needs for a massive parking garage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
