---
qid: ing_e763d7bd47__fp__local
question: 'Explain: Tree & Graph Traversals (DFS/BFS) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 346
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:24-05:00'
sources: []
---

**Why tree/graph traversal matters in system design**

When a designer must decide *which* data to process next—say, crawling a social graph or expanding a decision tree—the problem reduces to ordering nodes so that the desired property (reachability, minimal cost, balanced load) is preserved. Traversal algorithms are the only ways that guarantee such orderings while respecting the graph’s topology.

**Depth‑First Search (DFS)**  
DFS follows edges as far as possible before backtracking. It uses a stack (explicit or recursion) and visits each node once: `O(V+E)` time, `O(H)` space where *H* is depth. In system design it translates to **lazy exploration**—good for deep hierarchies (e.g., file systems) because memory usage depends on depth, not breadth.

**Breadth‑First Search (BFS)**  
BFS uses a queue and explores level by level. It guarantees the shortest path in an unweighted graph: each node’s distance from the source is minimal when first popped. For distributed services this means *minimum hops* or *latency*, crucial for routing protocols.

**Non‑obvious insight:**  
Both DFS and BFS are instances of **queueing theory**—they implement a deterministic policy over a stochastic arrival process (edges). The choice between stack and queue changes the *mixing time* of the exploration: DFS can get stuck in deep subgraphs, while BFS may consume many more intermediate nodes. In large‑scale systems, tuning this trade‑off often decides whether a service stays responsive or overwhelms downstream caches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
