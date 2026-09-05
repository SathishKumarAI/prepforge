---
qid: ing_389080f7cc__fp__local
question: 'Explain: DoorDash Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 432
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:04:57-05:00'
sources: []
---

### Why DoorDash Needs a Sophisticated Matching Engine

At its core, DoorDash must solve **a large‑scale bipartite assignment problem**: match *n* couriers (drivers) to *m* orders so that total delivery time is minimized while respecting constraints (distance, driver capacity, surge demand). This is an instance of the **transportation problem**, a linear program whose dual encodes the *shadow price* of each location.  

#### From Constraints to Probabilities  
The algorithmic design hinges on *convex relaxation*. By relaxing integer assignment variables to continuous ones, we obtain a tractable LP that can be solved in near‑real time using **stochastic gradient descent** on the dual variables (the “price” signals). The solution yields a *probability distribution* over feasible matches. A subsequent sampling step respects integrality while preserving expected cost—an application of the **Birkhoff–von Neumann theorem**.

#### Why It Must Be Online  
Orders arrive in an event‑driven stream; any batch solution would incur unacceptable latency. The system therefore uses a *dynamic programming* approximation that updates only the affected subgraph when a new order or driver appears, leveraging **incremental LP solvers** (e.g., interior point with warm starts).

#### Non‑Obvious Insight  
Many think the key is “fast matching.” In fact, the *information bottleneck* between order features and optimal assignments drives performance. By learning a low‑dimensional embedding of location–time pairs via **contrastive loss**, DoorDash reduces variance in the dual prices, leading to tighter bounds on the LP relaxation and fewer samples needed for integral feasibility.

---

**Takeaway:** DoorDash’s algorithm is not just greedy matching; it’s an online convex optimization problem whose dual variables encode a probabilistic policy. The hidden lever is learning compact representations that sharpen the LP relaxation, a nuance often overlooked in interview questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
