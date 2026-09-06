---
qid: ing_6f8040c5c2__fp__local
question: 'Explain: Non-Functional Requirements — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 514
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:15-05:00'
sources: []
---

**Why a distributed counter needs non‑functional guarantees**

A counter is *state* that must be consistent across many nodes while staying responsive under load.  
The fundamental problem is **maintaining a single logical value in the presence of concurrent updates, failures, and network partitions**. If we ignore latency, availability or fault‑tolerance, the system collapses: an update can be lost, duplicated or seen out of order.

---

### Deriving the NFRs

| NFR | Why it arises from the core problem |
|-----|------------------------------------|
| **Consistency (strong or eventual)** | Updates must converge to a single value; otherwise two replicas diverge and clients see contradictory results. |
| **Availability** | Clients should read/write even when some nodes are down; otherwise the counter becomes a bottleneck. |
| **Partition tolerance** | Networks split; design must keep functioning by reconciling divergent counters once connectivity returns. |
| **Latency** | A counter is often used for rate‑limiting or UI badges; sub‑100 ms reads/writes are required. |
| **Scalability** | The system should handle millions of increments per second without central bottlenecks. |
| **Durability** | Increments must survive crashes; otherwise data loss violates business SLAs. |

---

### Connecting to deeper principles

- **CAP theorem** forces a trade‑off: choose *AP* or *CP* depending on the application’s tolerance for stale reads.
- **Conflict‑free Replicated Data Types (CRDTs)** give us an algebraic guarantee that merging divergent counters yields the same result regardless of merge order, satisfying eventual consistency without coordination.
- **Probabilistic load balancing** (e.g., consistent hashing) distributes traffic evenly, keeping latency low.

---

### Non‑obvious insight

A counter need not be *exact* in a distributed setting; by using **vector clocks or epoch tags**, we can detect and merge only the *most recent* updates. This reduces metadata overhead compared to naïve per‑node counters, enabling sub‑microsecond merge times while still guaranteeing convergence. The key is that *staleness* can be bounded (e.g., “within 5 ms”) without sacrificing overall correctness—an insight many overlook when designing “exact” counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
