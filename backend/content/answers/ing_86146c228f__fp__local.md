---
qid: ing_86146c228f__fp__local
question: 'Explain: So what we will do is if — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 415
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:00-05:00'
sources: []
---

**Why the “if‑then” logic matters in a large‑scale map service**

The core problem is *efficiently answering millions of routing queries per second* while keeping latency below 100 ms and storage cost manageable.  
From an information–theoretic view, each query must be resolved by retrieving **only** the subgraph that can influence the answer; everything else is noise. The “if‑then” pattern (e.g., *if a node lies outside the current Voronoi cell, skip it*) is the operational form of this principle: it prunes the search space before any expensive computation occurs.

Formally, let \(G=(V,E)\) be the road network and \(q=(s,t)\) a query.  
Define a *reachability function* \(R(v)=\min_{u\in V} \{d(s,u)+w(u,v)\}\).  
If \(R(v)>D_{\max}\) (the maximum distance we care about), then any path through \(v\) cannot beat the current best. This is a *branch‑and‑bound* criterion derived from Dijkstra’s optimality condition: once a vertex’s tentative distance exceeds the best known, it can never be part of an optimal route.

**Non‑obvious insight:**  
Most engineers implement pruning heuristically (e.g., stop when a certain depth is reached). The principled approach uses *reach* values precomputed for each node—essentially a lower bound on its contribution to any shortest path. By caching these reach values, the system can guarantee that all discarded nodes are provably irrelevant, reducing query time by up to 70 % without sacrificing correctness.

Thus, the “if‑then” rule is not arbitrary pruning; it’s a rigorous application of optimality bounds that turns an intractable search into a scalable service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
