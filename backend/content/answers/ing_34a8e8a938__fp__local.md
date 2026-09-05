---
qid: ing_34a8e8a938__fp__local
question: 'Explain: Global Reservations as an assignment problem'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 487
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:40-05:00'
sources: []
---

**Global Reservations as an Assignment Problem**

At its core, a reservation system must match *requests* (passengers, rooms, seats) to *resources* (flights, hotels, seats) so that every request is served once and no resource is over‑booked.  
Formally we have two sets: \(R=\{r_1,\dots,r_n\}\) of requests and \(S=\{s_1,\dots,s_m\}\) of resources. For each pair \((r_i,s_j)\) we assign a cost \(c_{ij}\) (time delay, monetary loss, or any penalty for an infeasible pairing). The goal is to choose a binary matrix \(x_{ij}\in\{0,1\}\) that minimises  
\[
\sum_{i,j} c_{ij} x_{ij}
\]
subject to  
\(\sum_j x_{ij}=1\;\forall i\) (each request gets one resource) and  
\(\sum_i x_{ij}\le 1\;\forall j\) (no resource is double‑booked).  

This is exactly the **linear assignment problem**. Why must it be linear? Because the objective is additive: each decision contributes independently to total cost; constraints are cardinality limits, which preserve convexity and guarantee a *Birkhoff–von Neumann* optimal solution—an extreme point of the assignment polytope.

A deeper insight: the problem is equivalent to finding a maximum‑weight matching in a bipartite graph. The Hungarian algorithm exploits the **duality** between primal costs \(c_{ij}\) and dual potentials \(u_i, v_j\). By maintaining complementary slackness we can iteratively improve an initial feasible assignment until optimality is reached.

**Non‑obvious fact:**  
If the cost matrix has a *total unimodularity* property (which it does), the linear programming relaxation yields integer solutions automatically. Hence one can solve global reservations via LP solvers without enumerating all matchings, dramatically reducing complexity from \(O(n! )\) to polynomial time—critical for real‑time booking systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
