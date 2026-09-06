---
qid: ing_5b568244f6__fp__local
question: 'Explain: Now even though if it''s a directed — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 327
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:18:09-05:00'
sources: []
---

**Why a *directed* graph is indispensable in a map‑routing service**

The core problem of a navigation engine is: **“Given two locations, find the fastest (or cheapest) path.”**  
A road network can be modeled as a weighted graph where vertices are intersections and edges are road segments.  
If we allowed every edge to be traversable both ways, we would implicitly assume all roads are bidirectional. In reality:

1. **Physical constraints** – one‑way streets, turn restrictions, speed limits, or even temporary closures change the set of admissible moves.
2. **Optimization objective** – shortest‑time paths depend on directionally varying weights (e.g., uphill vs downhill, traffic signals).
3. **Information theory** – a directed graph captures *asymmetry* in travel cost; treating it as undirected would blur that asymmetry and inflate search space.

Thus the system must store edges with explicit source → target orientation and a weight function \(w(u,v)\).  
When querying, algorithms such as Dijkstra or A* operate on this directed structure.  
A subtle insight: **pre‑computing contraction hierarchies (or reachability labels) on a directed graph dramatically reduces query time, but only if the hierarchy respects directionality; otherwise shortcuts become invalid**.

In short, directionality is not an implementation detail—it encodes real‑world constraints that make the optimization tractable and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
