---
qid: ing_9071f87226__fp__local
question: 'Explain: All good so far but we have — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 612
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:15-05:00'
sources: []
---

## Why a “Google Maps” design matters

The core problem is **spatial‑time routing at scale**:  
*Given millions of users, each with dynamic locations and constraints, compute optimal routes in real time across a graph of tens of millions of edges.*  

Any solution must satisfy three orthogonal principles:

| Principle | Why it’s mandatory |
|-----------|--------------------|
| **Scalability (horizontal)** | Each user request is independent; the system can’t be bottlenecked by a single machine. |
| **Consistency & Freshness** | Traffic updates arrive every few seconds, yet users expect up‑to‑date routes. |
| **Low Latency** | A 200 ms response time feels “instant” to the user. |

These principles push us toward a *distributed graph store* with *incremental shortest‑path* algorithms (e.g., dynamic Dijkstra / A*) and *edge‑centric replication*.  

## Deeper insight: **Graph sparsity + locality = sharding**

A road network is sparse; most nodes have only 2–4 neighbors. This allows us to:

1. **Sharding by geographic region** – each shard contains a bounded number of edges, reducing inter‑shard communication.
2. **Local caching of “hot” subgraphs** – traffic spikes (e.g., rush hour) are confined to a few shards; we cache their updated edge weights in memory.

Most interviewees miss that *sparsity* is the lever that lets us keep shard sizes modest while still supporting global queries via multi‑hop routing through boundary nodes.  

## Sketch of the architecture

1. **Graph service**  
   * Sharded by region.  
   * Each shard stores vertices + outgoing edges with current weights (traffic, incidents).  
2. **Routing engine**  
   * Uses a pre‑computed contraction hierarchy per shard for sub‑shard routing.  
   * For cross‑region paths, stitches together boundary nodes and runs a lightweight Dijkstra on the skeleton graph.  
3. **Traffic updater**  
   * Ingests real‑time feeds (sensor, GPS).  
   * Publishes delta updates to affected shards via a message bus; shards apply changes in batches to maintain consistency.  
4. **Cache layer**  
   * LRU cache of recent routes per user/device pair, refreshed when traffic crosses a threshold.

## Non‑obvious takeaway

*The bottleneck is not the routing algorithm itself but the **propagation latency of traffic updates**.* If you can bound update propagation to < 1 s, you can keep the graph essentially “static” for most queries and avoid costly recomputation. This shifts effort from algorithmic complexity to a robust, low‑latency pub/sub system—a subtle yet decisive design choice that differentiates a good solution from an excellent one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
