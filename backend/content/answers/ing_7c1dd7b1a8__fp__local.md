---
qid: ing_7c1dd7b1a8__fp__local
question: 'Explain: From Zero to 50 Million Uploads per Day: Scaling Media at Canva'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 471
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:30-05:00'
sources: []
---

### From Zero to 50 Million Uploads per Day: What *must* happen for media at Canva

At the core, every upload is a **stream‑to‑storage** pipeline that must satisfy three invariants:

| Invariant | Why it matters |
|-----------|----------------|
| **Durability** | A user’s file must survive even if an edge node dies. |
| **Consistency** | All downstream services (search, preview, collaboration) see the same version. |
| **Availability** | The system should accept new uploads regardless of traffic spikes. |

The first principle that forces a specific architecture is *bandwidth‑boundedness*.  
An upload is I/O‑bound: the client’s network speed and the server’s write throughput dominate latency.  
To keep per‑request latency low, Canva shards the storage space across thousands of **edge nodes** so that each node handles only a fraction of traffic.  

The second principle is *asynchronous replication*.  
Rather than waiting for all replicas to acknowledge an upload (which would make latency proportional to the slowest link), Canva writes locally and propagates updates in the background using a gossip‑based protocol. This guarantees linear scalability: doubling the number of nodes halves the load per node, without increasing per‑request cost.

**Non‑obvious insight:**  
The bottleneck is *not* compute but **metadata consistency**. Every upload changes a catalog that must be searchable instantly. Canva solves this by maintaining an append‑only event log and materializing a read‑optimized index in a distributed cache. The cost of keeping the catalog fresh scales sublinearly with traffic because most uploads are unique; only the first write per file path incurs a full index update.

In short, scaling to 50 M/day is achieved by turning every upload into a lightweight, locally durable event that is asynchronously propagated and indexed, letting bandwidth be the limiting factor rather than coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
