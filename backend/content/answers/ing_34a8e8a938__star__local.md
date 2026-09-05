---
qid: ing_34a8e8a938__star__local
question: 'Explain: Global Reservations as an assignment problem'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:42-05:00'
sources: []
---

**Situation:**  
At a large airline I was part of the revenue‑management team that had to assign thousands of seats to over 10,000 reservation requests each day. The existing rule‑based system often left high‑yield seats empty or sold them too early, hurting profitability.

**Task:**  
I needed to build an assignment engine that maximized expected revenue while respecting constraints (seat class, fare rules, customer loyalty). The challenge was to solve this as a combinatorial optimization problem under tight latency requirements.

**Action:**  
I framed the problem as a weighted bipartite matching and used a mixed‑integer linear programming (MILP) solver with a custom feature vector for each reservation: fare class, time to departure, passenger profile, and historical conversion rates. To speed inference I trained a gradient‑boosted tree model (XGBoost) that predicted the optimal assignment probability, then used a greedy algorithm seeded by those probabilities as a warm start for the MILP. We deployed the solution in Python with Gurobi, limiting each solve to 50 ms using a time budget and early‑stopping on feasibility gaps.

**Result:**  
The new system increased seat fill rate from 82% to 94%, boosting revenue by ~12% per flight (≈$350k/month). It also cut assignment latency by 80%. I learned that blending predictive ML with exact optimization can deliver both speed and optimality in real‑time business problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
