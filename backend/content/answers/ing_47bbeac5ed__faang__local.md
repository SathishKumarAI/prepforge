---
qid: ing_47bbeac5ed__faang__local
question: 'Explain: And these are how likely they all — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 563
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:49-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe *Google Wave*—its architecture, core ML‑style components, and why it was a “wave” (metaphorically) in 2009. Assume the audience knows basic distributed systems but not Wave’s internals.

**Approach**  
1. Outline the high‑level stack: client ↔ protocol ↔ servers ↔ data store.  
2. Highlight key ML‑like mechanisms: real‑time diff propagation, conflict resolution, and recommendation.  
3. Explain scaling tactics (sharding, replication).  
4. Conclude with why it mattered for future products.

**Depth**  

| Layer | Mechanism | Technical Detail |
|-------|-----------|------------------|
| **Client** | *OT (Operational Transformation)* | Each edit is a delta; OT guarantees convergence regardless of arrival order. Complexity O(log N) per operation. |
| **Protocol** | *WebSocket‑based JSON RPC* | Low‑latency, bidirectional channel for diffs and metadata. Uses “op‑id” timestamps to order ops. |
| **Server** | *Sharded “Wavelet” store* | Each Wave is split into wavelets (document fragments). Shards based on hash of waveId; replication factor 3 ensures availability. |
| **Conflict Resolution** | *Merge graph + priority rules* | When two users edit same field, the server builds a DAG of ops and applies deterministic tie‑breakers (e.g., user id). |
| **ML‑style Feature** | *Content‑aware recommendations* | The “Wave Engine” scanned wave content with n‑gram models to suggest tags/participants. Runs offline on MapReduce jobs. |

**Edge Cases**  
- Network partitions: OT guarantees eventual consistency but may delay convergence → test with simulated 2‑minute outages.  
- Cyclic edits (user A deletes, B inserts same spot): priority rules must be deterministic; else divergence.  
- Massive waves (> 10k ops/sec): shard‑level load balancers needed; test with synthetic traffic.

**Optimize & Communicate**  
Improvements: replace OT with *CRDTs* for simpler conflict handling; use vector clocks to reduce metadata size. Explain trade‑offs: OT is proven but requires complex server logic; CRDT simplifies client logic at the cost of larger messages.  

Conclude: Google Wave’s “under the hood” was a distributed, real‑time collaboration engine that pre‑figured many ML‑driven recommendation features we see in GSuite today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
