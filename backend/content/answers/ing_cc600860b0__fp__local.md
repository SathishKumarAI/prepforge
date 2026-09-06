---
qid: ing_cc600860b0__fp__local
question: 'Explain: Read Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 385
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:54-05:00'
sources: []
---

### Why a *Read Path* Matters  
When a client issues **read** traffic, the system must deliver data quickly while preserving consistency and availability. The fundamental problem is: *how to traverse the data‑storage topology so that the request reaches the freshest replica with minimal latency?*  

1. **Latency vs. Consistency Trade‑off** – A read can hit a local cache (fast but stale) or query the master (slow but fresh).  
2. **Topology Awareness** – In a replicated cluster, reads should target replicas in the same data center as the client to reduce WAN hops.  
3. **Cache Coherence** – If a cache miss occurs, the read path must decide whether to fetch from the origin or wait for a write‑back propagation.

### Design Principles  

| Principle | What It Solves |
|-----------|----------------|
| **Read‑through Cache** | Eliminates cold‑start latency by automatically loading data on miss. |
| **Cache Invalidation / TTL** | Keeps stale reads bounded, trading freshness for throughput. |
| **Replica Selection Algorithm** | Uses metrics (latency, load) to pick the optimal replica, embodying *probabilistic routing* from queuing theory. |

### Non‑Obvious Insight  
Most designs treat caches as a black box, but **the read path itself can be an optimizer**: by exposing cache hit/miss statistics to a *dynamic routing layer*, you let the system learn which replicas are “hot” for particular shards and adjust routing probabilities in real time. This turns the read path into an online learning component that continuously reduces read latency without manual rebalancing—an elegant blend of geometry (routing space) and probability (adaptive sampling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
