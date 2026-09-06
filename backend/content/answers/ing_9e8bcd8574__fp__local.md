---
qid: ing_9e8bcd8574__fp__local
question: 'Explain: Uber Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 446
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:42:19-05:00'
sources: []
---

### Why Uber’s “Algorithm Stack” Works

At its core Uber must **match riders with drivers in real time** while maximizing revenue and minimizing wait‑time.  
This is a *constrained stochastic optimization* problem:  
\[
\min_{x}\; \mathbb{E}[T(x)]\quad\text{s.t.}\quad R(x)\geqslant B
\]
where \(x\) denotes the assignment, \(T\) the expected trip time, \(R\) revenue and \(B\) a business‑level target.

1. **Demand–supply estimation** – A *time‑series* model (e.g., LSTM or Kalman filter) predicts local rider influx and driver availability.  
2. **Matching** – The assignment is solved by an *auction‑style* linear program: each rider’s bid = expected fare, each driver’s cost = distance to pick‑up plus future opportunity cost.  This reduces to a weighted bipartite matching (Hungarian algorithm), guaranteeing optimality in polynomial time.  
3. **Dynamic pricing** – A *logistic regression* on congestion and imbalance feeds into a *multiplicative weight update* that adjusts the fare multiplier \(m\) so that expected supply meets demand:  
   \[
   m_{t+1}=m_t\cdot\exp\!\left(\eta\,(\hat{S}_t-\hat{D}_t)\right)
   \]
   ensuring stability (no oscillation) while converging to the equilibrium rate.  

**Non‑obvious insight:**  
The *matching* step is not purely greedy; it anticipates **future demand by weighting drivers with a “future opportunity cost” term** derived from the same demand model.  This foresight turns a myopic assignment into an *online dynamic programming* problem, dramatically reducing surge spikes and improving driver utilization—something most people overlook when they think of ride‑hailing as just “find nearest driver.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
