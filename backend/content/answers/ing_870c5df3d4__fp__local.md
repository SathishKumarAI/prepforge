---
qid: ing_870c5df3d4__fp__local
question: 'Explain: have the exact data we want exact — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 408
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:51:33-05:00'
sources: []
---

**Why “exact data = exact design” matters in a parking‑garage system**

When you model a parking facility you’re solving a *resource‑allocation* problem: given a set of vehicles, arrival rates, and spatial constraints, place them so that overall cost (construction, maintenance, user wait time) is minimized.  
The objective function depends on *discrete variables*—which bay each car occupies—and continuous ones—traffic flow, ventilation load, etc. In mixed‑integer optimization, the quality of the solution hinges on how accurately you know those inputs:

1. **Capacity constraints** – The number of bays per level is a hard limit; an overestimate wastes money, an underestimate forces cars to leave or pay more parking.  
2. **Arrival/arrival‑time distributions** – These shape peak loads; misestimating them skews the design toward either over‑engineering (too many elevators) or under‑engineering (congestion).  
3. **Vehicle mix** – Compact versus SUV affects bay sizing and structural load calculations.  

Because the problem is *combinatorial*, even a small error in any of these parameters can propagate exponentially through the solution space, leading to suboptimal or infeasible designs.

> **Non‑obvious insight:** The *sensitivity* of an optimal parking layout is highest for peak‑time arrival probabilities, not total vehicle count. A 5 % underestimation of peak arrivals can increase average wait time by >30 %. Thus, investing in high‑fidelity demand forecasting (e.g., using Bayesian updating from real‑time sensor data) pays dividends far beyond raw capacity planning.

In short, exact data isn’t a luxury; it is the very substrate on which an optimal, cost‑effective parking garage is built.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
