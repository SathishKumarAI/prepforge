---
qid: ing_34a8e8a938__faang__local
question: 'Explain: Global Reservations as an assignment problem'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 470
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:41-05:00'
sources: []
---

**Clarify**  
We’re asked to model *Global Reservations* (e.g., booking seats across multiple airlines or hotels) as an **assignment problem**.  
Assumptions I’d confirm:  
1. Each reservation request must be assigned to exactly one resource (seat, room).  
2. Resources are finite and each can handle at most one request per time slot.  
3. We have a cost matrix where entry \(c_{ij}\) is the penalty or negative utility of assigning request \(i\) to resource \(j\).

**Approach**  
1. Formulate a bipartite graph: left nodes = requests, right nodes = resources.  
2. Build weight matrix \(W\) (or cost matrix if using minimization).  
3. Apply the Hungarian algorithm (O(\(n^3\))) to find the optimal one‑to‑one mapping that maximizes total utility or minimizes total cost.

**Depth**  
- **Complexity:** For \(n\) requests and \(m\) resources, we need a square matrix; pad with dummy nodes if \(n \neq m\). Hungarian runs in \(O(\max(n,m)^3)\).  
- **Scalability:** For very large scales (millions of bookings), use approximate methods like linear programming relaxations or stochastic gradient descent on a relaxed assignment objective.  
- **Integration:** The cost can encode price, distance, time‑zone compatibility, and even machine‑learning predictions for cancellation risk.

**Edge Cases**  
- **Unassignable requests**: If no feasible resource exists, the algorithm will assign to a dummy with high penalty; we flag these for manual review.  
- **Tie costs**: Multiple optimal assignments—pick one that balances load or follows business rules.  
- **Dynamic arrivals**: Re‑run periodically or use online assignment variants.

**Optimize & Communicate**  
Explain that the Hungarian algorithm guarantees global optimum but may be heavy; propose a hybrid: pre‑filter with ML to reduce candidate set, then run Hungarian on the reduced problem. Communicate trade‑offs clearly—exactness vs latency—and how we monitor solution quality via A/B testing against existing heuristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
