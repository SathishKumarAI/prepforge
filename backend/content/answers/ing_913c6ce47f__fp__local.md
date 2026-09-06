---
qid: ing_913c6ce47f__fp__local
question: 'Explain: Now there will be a map update — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 423
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:01-05:00'
sources: []
---

**Why a map‑update system must exist**

Every user’s navigation depends on *current* road geometry, traffic rules and points of interest (POIs).  
When an accident closes a lane or a new bridge opens, the cost function that drives routing changes instantly.  
Thus the system has to ingest raw sensor feeds, reconcile them into a consistent graph, and push the change to millions of clients with minimal latency.

**Core optimisation principle**

We model the road network as a directed weighted graph \(G=(V,E,w)\).  
Updating a segment is equivalent to changing the weight on an edge (or adding/removing edges).  
The *critical* objective is to minimise **Δ‑inference cost**: the number of routing queries that must recompute paths.  
A naïve broadcast would force every node to re‑run Dijkstra; instead we propagate only the *delta* and use incremental shortest‑path algorithms (e.g., dynamic RAPTOR) that update affected routes in \(O(|E_{\text{affected}}|\log|V|)\).

**Architectural insight**

1. **Event‑driven ingestion** – a Kafka stream of sensor events → microservice that validates, de‑duplicates and timestamps.  
2. **Versioned graph store** – each commit is an immutable snapshot; clients read the latest *semantic version* they are subscribed to.  
3. **Delta‑push API** – instead of sending full maps, the service publishes a compact delta (edge ID + new weight) which routing engines merge locally.

**Non‑obvious trick**

Because most updates affect only a tiny subgraph, we can use **spatio‑temporal locality**: cache recent deltas per geographic tile and let clients request *only* tiles that intersect their current route.  
This reduces bandwidth by an order of magnitude and allows the system to scale to billions of concurrent users without centralised recomputation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
