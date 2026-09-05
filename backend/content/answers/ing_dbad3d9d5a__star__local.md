---
qid: ing_dbad3d9d5a__star__local
question: 'Explain: Beyond Prediction: Solving the Multiple Knapsack Problem at Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:06-05:00'
sources: []
---

**Situation:** In my last role at a logistics startup, we had to allocate thousands of parcels across dozens of delivery vans daily. The existing rule‑based system could only handle about 1,000 parcels per hour and frequently left capacity underutilized by up to 25 %.  

**Task:** I was tasked with building an end‑to‑end solution that could optimize parcel placement for the entire fleet in real time—essentially solving a multiple knapsack problem at scale—while keeping latency below 200 ms.  

**Action:** I framed it as a mixed‑integer linear program (MILP) and used Gurobi with a custom branch‑and‑bound heuristic that pruned infeasible branches early by caching partial solutions in Redis. To meet the latency requirement, I wrapped the solver in a microservice written in Rust, exposing a gRPC endpoint; the service was auto‑scaled via Kubernetes. I also added an online learning component: after each delivery cycle, we logged residual capacities and retrained a lightweight XGBoost model to predict which parcels are likely to fit best next, feeding that back into the solver as soft constraints.  

**Result:** The new system handled 15,000 parcels per hour with an average capacity utilization of 92 %, cutting waste by 18 % and improving on‑time delivery from 88 % to 97 %. I learned how combining exact optimization with machine‑learning heuristics can turn a hard combinatorial problem into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
