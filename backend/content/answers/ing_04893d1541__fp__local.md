---
qid: ing_04893d1541__fp__local
question: 'Explain: Now we can run a Dijkstra on — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 388
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:18-05:00'
sources: []
---

In a map‑service interview we are asked: *“Given a road network, how do you find the quickest route from A to B?”*  
The fundamental problem is **finding a minimum‑cost path** in a weighted graph whose vertices are intersections and edges are roads with travel times.  

A greedy strategy that always expands the currently cheapest frontier—Dijkstra’s algorithm—solves this optimally because each edge weight is non‑negative. The proof follows from the *optimal substructure* of shortest paths: once we know the exact cost to a vertex, any path extending from it cannot improve that cost. Thus when Dijkstra pops a vertex \(v\) with distance \(d(v)\), \(d(v)\) is final; all other routes to \(v\) are longer.  

From an **information‑theoretic** view, Dijkstra’s process is equivalent to repeatedly revealing the most informative edge (the one that reduces uncertainty about the destination fastest). This reveals a deeper principle: *greedy choices guided by local optimality yield global optimum when the cost function satisfies the Bellman–Ford relaxation property.*  

A non‑obvious insight: **Dijkstra can be adapted to dynamic, time‑dependent graphs** (e.g., traffic) by treating edge weights as functions of departure time and using a *time‑expanded graph*. In this representation, each vertex is duplicated for discrete time slices; the algorithm still applies because edge weights remain non‑negative. This shows that even with congestion variations, a single Dijkstra run can produce optimal routes if we pre‑process the network into such an expanded structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
